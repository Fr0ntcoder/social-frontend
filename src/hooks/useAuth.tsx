import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { selectIsAuth } from '@/store/user/userSlice'

export const useAuth = () => {
	const isAuth = useSelector(selectIsAuth)
	const location = useLocation()

	useEffect(() => {
		if (!isAuth) {
			;<Navigate to='/auth' state={{ from: location }} replace />
		}
	}, [isAuth, location])

	return isAuth
}
