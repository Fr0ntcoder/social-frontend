import { api } from '@/store/api/api'

import { API_URL } from '@/utils/constants'
import type { IFollowRequest } from '@/utils/types'

export const followApi = api.injectEndpoints({
	endpoints: builder => ({
		follow: builder.mutation<void, IFollowRequest>({
			query: body => ({
				url: API_URL.FOLLOW.CREATE,
				method: 'POST',
				body: body
			})
		}),
		unfollow: builder.mutation<void, string>({
			query: id => ({
				url: API_URL.FOLLOW.DELETE(id),
				method: 'DELETE '
			})
		})
	})
})

export const { useFollowMutation, useUnfollowMutation } = followApi

export const {
	endpoints: { follow, unfollow }
} = followApi
