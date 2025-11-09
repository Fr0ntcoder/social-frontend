import { api } from '@/store/api/api'

import { API_URL } from '@/utils/constants'
import type { ILike, ILikeRequest } from '@/utils/types'

export const likeApi = api.injectEndpoints({
	endpoints: builder => ({
		like: builder.mutation<ILike, ILikeRequest>({
			query: body => ({
				url: API_URL.LIKE.CREATE,
				method: 'POST',
				body
			})
		}),
		unlike: builder.mutation<void, string>({
			query: id => ({
				url: API_URL.LIKE.DELETE(id),
				method: 'DELETE '
			})
		})
	})
})

export const { useLikeMutation, useUnlikeMutation } = likeApi

export const {
	endpoints: { like, unlike }
} = likeApi
