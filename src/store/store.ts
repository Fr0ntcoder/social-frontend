import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import { listenerMiddleware } from '@/middleware/auth'

import { api } from './api/api'
import auth from './auth/authSlice'
import user from './user/userSlice'

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		auth,
		user
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(api.middleware)
			.prepend(listenerMiddleware.middleware)
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
