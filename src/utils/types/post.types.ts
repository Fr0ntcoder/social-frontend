import type { IComment } from './comment.types'
import type { ILike } from './like.types'
import type { IUser } from './user.types'

export interface IPost {
	id: string
	content: string
	author: IUser
	authorId: string
	likes: ILike[]
	comments: IComment[]
	likedByUser: boolean
	createdAt: Date
	updatedAt: Date
}

export interface IPostRequest {
	content: string
}
