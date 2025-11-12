import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

import { Container } from '@/components/ui/container'

import { selectCurrent, selectIsAuth } from '@/store/auth/authSlice'

import { Profile } from '@/components/common/profile'

import { Header } from './header'
import { Navbar } from './navbar'

export const MainLayout = () => {
	const isAuth = useSelector(selectIsAuth)
	const user = useSelector(selectCurrent)
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) {
			navigate('/auth', { replace: true })
		}
	}, [])

	return (
		<>
			<Header />
			<Container className='flex flex-2'>
				<Navbar className='flex-1' />
				<main className='w-full flex-2'>
					<Outlet />
				</main>
				<Profile className='w-52' />
			</Container>
		</>
	)
}
