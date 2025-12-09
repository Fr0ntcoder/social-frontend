import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

import { Container } from '@/components/ui/container'

import { selectCurrent, selectIsAuth } from '@/store/auth/authSlice'

import { Navbar } from '@/components/common/navbar'
import { Profile } from '@/components/common/profile'

import { Header } from '../../common/header'

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
			<Container className='flex gap-5 items-start'>
				<Navbar className='max-w-[200px]' />
				<main className='w-full'>
					<Outlet />
				</main>
				<Profile className='max-w-[300px]' />
			</Container>
		</>
	)
}
