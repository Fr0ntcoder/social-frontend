import { CircleArrowLeft } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { useGetPostByIdQuery } from '@/store/post/postApi'

import { PostItem } from '@/components/common/posts/post-item'

export const PostPage = () => {
	const params = useParams<{ id: string }>()
	const { data } = useGetPostByIdQuery(params?.id ?? '')
	const navigate = useNavigate()
	if (!data) {
		return <h2>Пост не найден</h2>
	}
	const handlerBack = () => {
		navigate('/', {
			replace: true
		})
	}
	const { id, content, author, authorId, likes, likedByUser } = data
	return (
		<div className='flex flex-col gap-5'>
			<Button variant='empty' className='self-start' onClick={handlerBack}>
				<CircleArrowLeft /> Назад
			</Button>
			<PostItem
				id={id}
				single
				name={author.name ?? ''}
				avatarUrl={author.avatarUrl ?? ''}
				authorId={authorId}
				content={content}
				likedByUser={likedByUser}
				likesCount={likes.length}
				key={id}
			/>
		</div>
	)
}
