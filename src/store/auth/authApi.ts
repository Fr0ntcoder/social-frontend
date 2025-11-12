import { api } from '@/store/api/api'

import { API_URL } from '@/utils/constants'
import type { TAuthLoginRequest, TAuthRegisterRequest } from '@/utils/types'
import type { Token } from '@/utils/types/token.types'

export const authApi = api.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<Token, TAuthLoginRequest>({
			query: data => ({
				url: API_URL.AUTH.LOGIN,
				method: 'POST',
				body: data
			})
		}),
		register: builder.mutation<void, TAuthRegisterRequest>({
			query: data => ({
				url: API_URL.AUTH.REGISTER,
				method: 'POST',
				body: data
			})
		})
	})
})

export const { useLoginMutation, useRegisterMutation } = authApi

export const {
	endpoints: { login, register }
} = authApi
