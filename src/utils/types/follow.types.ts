import type { IUser } from './user.types'

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
