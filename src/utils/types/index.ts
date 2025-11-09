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
export interface IFollow {
	id: string
	follower: IUser
	followerId: string
	following: IUser
	followingId: string
}

export interface IFollowRequest {
	followingId: string
}

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

export interface ILoginRequest {
	email: string
	password: string
}

export interface IRegisterRequest {
	name: string
	email: string
	password: string
}

export interface IRegisterResponse {
	name: string
	email: string
	password: string
}

export type Token = string
