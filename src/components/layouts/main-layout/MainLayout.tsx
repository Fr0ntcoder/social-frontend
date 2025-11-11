import { Outlet } from 'react-router-dom'

import { Container } from '@/components/ui/container'

import { Header } from './header'
import { Navbar } from './navbar'

export const MainLayout = () => {
	return (
		<>
			<Header />
			<Container className='flex flex-2'>
				<Navbar />
				<main className='w-full'>
					<Outlet />
				</main>
			</Container>
		</>
	)
}
