import z from 'zod'

export const authLoginScheme = z.object({
	email: z.email({ message: 'Введите email' }),
	password: z.string().min(1, 'Пароль обязателен')
})

export type TAuthLoginRequest = z.infer<typeof authLoginScheme>

export const authRegisterScheme = z.object({
	name: z.string().optional(),
	email: z.email({ message: 'Введите email' }),
	password: z.string().min(1, 'Пароль обязателен')
})
export type TAuthRegisterRequest = z.infer<typeof authRegisterScheme>
