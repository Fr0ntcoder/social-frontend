import type { ILike } from './like.types'
import type { IUser } from './user.types'

export interface IPost {
	id: string
	content: string
	author: IUser
	authorId: string
	likes: ILike[]
	comments: Comment[]
	likedByUser: boolean
	createdAt: Date
	updatedAt: Date
}

export interface IPostRequest {
	content: string
}
