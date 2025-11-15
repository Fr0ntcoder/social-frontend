import { useGetAllPostsQuery } from '@/store/post/postApi'

import { PostItem } from './post-item'

export const Posts = () => {
	const { data } = useGetAllPostsQuery()
	return (
		<>
			{data && data.length > 0 ? (
				data.map(({ likes, author, content, authorId, id, likedByUser }) => (
					<PostItem
						id={id}
						name={author.name ?? ''}
						avatarUrl={author.avatarUrl ?? ''}
						authorId={authorId}
						content={content}
						likedByUser={likedByUser}
						likesCount={likes.length}
						key={id}
					/>
				))
			) : (
				<p className=''>Нет постов</p>
			)}
		</>
	)
}
