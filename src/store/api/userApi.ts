import { API_URL } from '@/utils/constants'
import type { IUser, IUserUpdate } from '@/utils/types'

import { api } from './api'

export const userApi = api.injectEndpoints({
	endpoints: builder => ({
		currentUser: builder.query<IUser, void>({
			query: () => ({
				url: API_URL.USER.CURRENT,
				method: 'GET'
			})
		}),
		getById: builder.query<IUser, string>({
			query: id => ({
				url: API_URL.USER.ID(id),
				method: 'GET'
			})
		}),
		updateUser: builder.mutation<IUser, IUserUpdate>({
			query: ({ data, id }) => ({
				url: API_URL.USER.UPDATE(id),
				method: 'PUT',
				body: data
			})
		})
	})
})

export const { useLazyCurrentUserQuery, useGetByIdQuery, useUpdateUserMutation } =
	userApi

export const {
	endpoints: { currentUser, getById, updateUser }
} = userApi
