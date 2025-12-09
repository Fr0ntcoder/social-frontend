import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

import { Container } from '@/components/ui/container'

import { selectCurrent, selectIsAuth } from '@/store/auth/authSlice'

import { Header } from '@/components/common/header'
import { Navbar } from '@/components/common/navbar'

export const ProfileLayout = () => {
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
			</Container>
		</>
	)
}
