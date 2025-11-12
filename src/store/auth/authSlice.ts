import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/store/store'
import { userApi } from '@/store/user/userApi'

import type { IUser } from '@/utils/types'

import { authApi } from '../auth/authApi'

interface InitialState {
	current: IUser | null
	isAuth: boolean
	token?: string
}

const initialState: InitialState = {
	isAuth: false,
	current: null
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: () => initialState
	},
	extraReducers: builder => {
		builder
			.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
				state.token = action.payload.token
				state.isAuth = true
			})
			.addMatcher(
				userApi.endpoints.currentUser.matchFulfilled,
				(state, action) => {
					state.current = action.payload
					state.isAuth = true
				}
			)
	}
})

export const { logout } = authSlice.actions
export default authSlice.reducer

export const selectIsAuth = (state: RootState) => state.auth.isAuth
export const selectCurrent = (state: RootState) => state.auth.current
