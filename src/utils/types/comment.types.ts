import type { IPost } from './post.types'
import type { IUser } from './user.types'

export interface IComment {
	id: string
	content: string
	user: IUser
	userId: string
	post: IPost
	postId: string
}

export interface ICommentRequest {
	postId: string
	content: string
}
