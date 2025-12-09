import { api } from '@/store/api/api'

import { API_URL } from '@/utils/constants'
import type { IComment, TCommentRequest } from '@/utils/types/comment.types'

export const commentApi = api.injectEndpoints({
	endpoints: builder => ({
		createComment: builder.mutation<IComment, TCommentRequest>({
			query: data => ({
				url: API_URL.COMMENT.CREATE,
				method: 'POST',
				body: data
			})
		}),
		deleteComment: builder.mutation<void, string>({
			query: id => ({
				url: API_URL.COMMENT.DELETE(id),
				method: 'DELETE'
			})
		})
	})
})

export const { useCreateCommentMutation, useDeleteCommentMutation } = commentApi

export const {
	endpoints: { createComment, deleteComment }
} = commentApi
