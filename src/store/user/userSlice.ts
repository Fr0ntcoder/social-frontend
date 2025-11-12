import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/store/store'

import type { IUser } from '@/utils/types'

import { userApi } from '../user/userApi'

interface InitialState {
	user: IUser | null
	users: IUser[] | null
}

const initialState: InitialState = {
	user: null,
	users: null
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		resetUser: state => {
			state.user = null
		}
	},
	extraReducers: builder => {
		builder.addMatcher(
			userApi.endpoints.getById.matchFulfilled,
			(state, action) => {
				state.user = action.payload
			}
		)
	}
})

export const { resetUser } = userSlice.actions
export default userSlice.reducer

export const selectUsers = (state: RootState) => state.user.users

export const selectUser = (state: RootState) => state.user.user
