import { Outlet } from 'react-router-dom'

import { Container } from '@/components/ui/elements/container'

import { Header } from './header'
import { Sidebar } from './sidebar'

export const MainLayout = () => {
	return (
		<>
			<Header />
			<Container className='flex flex-2'>
				<Sidebar />
				<main className='w-full'>
					<Outlet />
				</main>
			</Container>
		</>
	)
}
