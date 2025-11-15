import { Trash2 } from 'lucide-react'
import { type HTMLAttributes, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import { selectCurrent } from '@/store/auth/authSlice'
import { useLikeMutation, useUnlikeMutation } from '@/store/like/likeApi'
import {
	useDeletePostMutation,
	useLazyGetAllPostsQuery,
	useLazyGetPostByIdQuery
} from '@/store/post/postApi'

import { API_URL, BASE_URL } from '@/utils/constants'
import { errorCheck } from '@/utils/helpers/errorCheck'
import { formatDate } from '@/utils/helpers/format-date'

import { MetaInfo } from '@/components/common/meta-info'

interface Props extends HTMLAttributes<HTMLDivElement> {
	id: string
	name: string
	avatarUrl: string
	authorId: string
	content: string
	likesCount: number
	createdAt?: Date
	likedByUser?: boolean
	single: boolean
}

export const PostItem = ({
	id,
	name,
	avatarUrl,
	authorId,
	content,
	likesCount,
	createdAt,
	likedByUser,
	single
}: Props) => {
	const [likePost] = useLikeMutation()
	const [unlikePost] = useUnlikeMutation()
	const [deletePost] = useDeletePostMutation()
	const [triggerGetAllPost] = useLazyGetAllPostsQuery()
	const [triggerGetByIdPost] = useLazyGetPostByIdQuery()
	const navigate = useNavigate()

	const handleDelete = useCallback(async () => {
		try {
			await deletePost(id).unwrap()
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

	const handleClick = useCallback(async () => {
		console.log(likedByUser)
		try {
			likedByUser
				? await unlikePost(id).unwrap()
				: await likePost({ postId: id }).unwrap()
			single
				? await triggerGetByIdPost(id).unwrap()
				: await triggerGetAllPost().unwrap()
		} catch (error) {
			if (errorCheck(error)) {
				toast('Вы не смогли поставить лайк', {
					description: error.data.error,
					action: {
						label: 'Закрыть',
						onClick: () => console.log('Закрыто')
					}
				})
			}
		}
	}, [id, likedByUser, likePost, unlikePost, triggerGetAllPost])

	const currentUser = useSelector(selectCurrent)

	return (
		<div className='flex justify-between items-start bg-muted rounded-lg py-3 px-4'>
			<div className='flex flex-col gap-3'>
				<div className='flex items-center gap-2'>
					<Link to={`${API_URL.USER.ID(authorId)}`}>
						<Avatar className='w-10 h-10'>
							<AvatarImage src={`${BASE_URL}${avatarUrl}`} />
						</Avatar>
					</Link>
					<div className='flex flex-col text-xs'>
						<span className='mb-1'>{name}</span>
						{formatDate(createdAt)}
					</div>
				</div>
				<p className='text-base'>{content}</p>
				<MetaInfo id={id} likesCount={likesCount} handleClick={handleClick} />
			</div>
			{authorId === currentUser?.id && (
				<Button variant='empty' onClick={handleDelete}>
					<Trash2 size={18} />
				</Button>
			)}
		</div>
	)
}
