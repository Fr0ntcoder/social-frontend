import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { logout, selectIsAuth } from '@/store/auth/authSlice'

export const AuthButton = () => {
	const isAuth = useSelector(selectIsAuth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onHandler = () => {
		dispatch(logout())
		localStorage.removeItem('token')
		navigate('/auth')
	}
	return <Button onClick={onHandler}>{isAuth ? 'Выйти' : 'Войти'}</Button>
}
