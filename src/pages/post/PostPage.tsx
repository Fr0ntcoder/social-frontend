import { useNavigate, useParams } from 'react-router-dom'

import { Back } from '@/components/ui/back'

import { useGetPostByIdQuery } from '@/store/post/postApi'

import { CommentItem } from '@/components/common/comments/comment-item'
import { CreateComment } from '@/components/common/comments/create-comment/CreateComment'
import { PostItem } from '@/components/common/posts/post-item'

export const PostPage = () => {
	const params = useParams<{ id: string }>()
	const { data } = useGetPostByIdQuery(params?.id ?? '')
	const navigate = useNavigate()

	if (!data) {
		return <h2>Пост не найден</h2>
	}

	return (
		<div className='flex flex-col gap-5'>
			<Back />
			<PostItem {...data} single />
			<div className='flex flex-col gap-5 pl-10'>
				{data.comments.map(comment => (
					<CommentItem {...comment} key={comment.id} />
				))}
			</div>
			<CreateComment />
		</div>
	)
}
