import { api } from '@/store/api/api'

import { API_URL } from '@/utils/constants'
import type { IPost, TPostRequest } from '@/utils/types/post.types'

export const postApi = api.injectEndpoints({
	endpoints: builder => ({
		createPost: builder.mutation<IPost, TPostRequest>({
			query: data => ({
				url: API_URL.POST.CREATE,
				method: 'POST',
				body: data
			})
		}),
		getAllPosts: builder.query<IPost[], void>({
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
				method: 'DELETE'
			})
		})
	})
})

export const {
	useCreatePostMutation,
	useGetAllPostsQuery,
	useLazyGetAllPostsQuery,
	useLazyGetPostByIdQuery,
	useGetPostByIdQuery,
	useDeletePostMutation
} = postApi

export const {
	endpoints: { createPost, getAllPosts, getPostById, deletePost }
} = postApi
