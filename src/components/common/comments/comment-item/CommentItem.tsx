import { Trash2 } from 'lucide-react'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import { selectCurrent } from '@/store/auth/authSlice'
import { useDeleteCommentMutation } from '@/store/comment/commentApi'
import { deletePost, useLazyGetAllPostsQuery } from '@/store/post/postApi'

import { API_URL, BASE_URL } from '@/utils/constants'
import { errorCheck } from '@/utils/helpers/errorCheck'
import type { IComment } from '@/utils/types'

type Props = {
	single?: boolean
} & IComment

export const CommentItem = ({ id, user, userId, content }: Props) => {
	const [deleteComment] = useDeleteCommentMutation()
	const [triggerGetAllPost] = useLazyGetAllPostsQuery()
	const navigate = useNavigate()

	const handleDelete = useCallback(async () => {
		try {
			await deleteComment(id).unwrap()
			await triggerGetAllPost().unwrap()
			navigate('/')
		} catch (error) {
			if (errorCheck(error)) {
				toast('Ошибка удаления', {
					description: error.data.error,
					action: {
						label: 'Закрыть',
						onClick: () => console.log('Закрыто')
					}
				})
			}
		}
	}, [id, deletePost, triggerGetAllPost])

	const currentUser = useSelector(selectCurrent)

	return (
		<div className='flex justify-between items-start bg-muted rounded-lg py-3 px-4'>
			<div className='flex flex-col gap-3'>
				<div className='flex items-center gap-2'>
					<Link to={`${API_URL.USER.ID(userId)}`}>
						<Avatar className='w-10 h-10'>
							<AvatarImage src={`${BASE_URL}${user.avatarUrl}`} />
						</Avatar>
					</Link>
					<div className='flex flex-col text-xs'>
						<span className='mb-1'>{user.name}</span>
						{/* {formatDate(createdAt)} */}
					</div>
				</div>
				<p className='text-base'>{content}</p>
			</div>
			{user.id === currentUser?.id && (
				<Button variant='empty' onClick={handleDelete}>
					<Trash2 size={18} />
				</Button>
			)}
		</div>
	)
}
