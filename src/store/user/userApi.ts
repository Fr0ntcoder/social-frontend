import { api } from '@/store/api/api'

import { API_URL } from '@/utils/constants'
import type { IUser } from '@/utils/types'

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
		updateUser: builder.mutation<IUser, { id: string; data: FormData }>({
			query: ({ data, id }) => ({
				url: API_URL.USER.UPDATE(id),
				method: 'PUT',
				body: data
			})
		})
	})
})

export const {
  useLazyCurrentUserQuery,
	useCurrentUserQuery,
	useGetByIdQuery,
	useUpdateUserMutation
} = userApi

export const {
	endpoints: { currentUser, getById, updateUser }
} = userApi
