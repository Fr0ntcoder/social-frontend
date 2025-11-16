import z from 'zod'

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

export const commentScheme = z.object({
	content: z
		.string({ error: 'Введите текст' })
		.min(3, 'Минимальная длина текста 3 символа')
		.trim(),
	postId: z.string().optional()
})

export type TCommentRequest = z.infer<typeof commentScheme>
