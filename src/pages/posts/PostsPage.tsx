import { Posts } from '@/components/common/posts'
import { CreatePost } from '@/components/common/posts/create-post'

export const PostsPage = () => {
	return (
		<div className='flex flex-col gap-5 mb-4'>
			<h2 className='text-xl mb-3'>Посты</h2>
			<Posts />
			<CreatePost />
		</div>
	)
}
