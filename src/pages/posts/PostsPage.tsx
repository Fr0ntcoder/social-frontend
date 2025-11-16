import { useGetAllPostsQuery } from '@/store/post/postApi'

import { CreatePost } from '@/components/common/posts/create-post'
import { PostItem } from '@/components/common/posts/post-item'

export const PostsPage = () => {
	const { data } = useGetAllPostsQuery()

	return (
		<div className='flex flex-col gap-5 mb-4'>
			<h2 className='text-xl mb-3'>Посты</h2>
			{data && data.length > 0 ? (
				data.map(post => <PostItem {...post} key={post.id} />)
			) : (
				<p className=''>Нет постов</p>
			)}
			<CreatePost />
		</div>
	)
}
