import { API_URL } from '@/utils/constants'
import type { IPost, IPostRequest } from '@/utils/types'

import { api } from './api'

export const postApi = api.injectEndpoints({
	endpoints: builder => ({
		createPost: builder.mutation<IPost, IPostRequest>({
			query: data => ({
				url: API_URL.POST.CREATE,
				method: 'POST',
				body: data
			})
		}),
		getAllPost: builder.query<IPost[], void>({
			query: () => ({
				url: API_URL.POST.ALL,
				method: 'GET'
			})
		}),
		getPostById: builder.query<IPost, string>({
			query: id => ({
				url: API_URL.POST.ID(id),
				method: 'GET'
			})
		}),
		deletePost: builder.mutation<void, string>({
			query: id => ({
				url: API_URL.POST.DELETE(id),
				method: 'DELETE '
			})
		})
	})
})

export const {
	useCreatePostMutation,
	useGetAllPostQuery,
	useGetPostByIdQuery,
	useDeletePostMutation
} = postApi

export const {
	endpoints: { createPost, getAllPost, getPostById, deletePost }
} = postApi
