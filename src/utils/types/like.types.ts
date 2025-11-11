import type { IPost } from './post.types'
import type { IUser } from './user.types'

export interface ILike {
	id: string
	user: IUser
	userId: string
	post: IPost
	postId: string
}

export interface ILikeRequest {
	postId: string
}
