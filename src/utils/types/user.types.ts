import type { IFollow } from './follow.types'
import type { ILike } from './like.types'
import type { IPost } from './post.types'

export interface IUser {
	id: string
	email: string
	password: string
	name?: string
	avatarUrl?: string
	dateOfBirth?: Date
	createdAt: Date
	updatedAt: Date
	bio?: string
	location?: string
	posts: IPost[]
	following: IFollow[]
	followers: IFollow[]
	likes: ILike[]
	comments: Comment[]
	isFollowing?: boolean
}

export interface IUserUpdate {
	id: string
	data: FormData
}
