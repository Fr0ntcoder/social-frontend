import z from 'zod'

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

export const postScheme = z.object({
	content: z
		.string({ error: 'Введите текст' })
		.min(3, 'Минимальная длина текста 3 символа')
		.trim()
})

export type TPostRequest = z.infer<typeof postScheme>
