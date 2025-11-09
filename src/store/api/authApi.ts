import { API_URL } from '@/utils/constants'
import type {
	ILoginRequest,
	IRegisterRequest,
	IRegisterResponse,
	Token
} from '@/utils/types'

import { api } from './api'

export const authApi = api.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<Token, ILoginRequest>({
			query: data => ({
				url: API_URL.AUTH.LOGIN,
				method: 'POST',
				body: data
			})
		}),
		register: builder.mutation<IRegisterResponse, IRegisterRequest>({
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
