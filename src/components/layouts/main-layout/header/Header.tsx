import { AuthButton } from '@/components/ui/common/auth/auth-button'
import { Container } from '@/components/ui/elements/container'
import { Logo } from '@/components/ui/elements/logo'

export const Header = () => {
	return (
		<header className='py-4'>
			<Container className='w-full flex justify-between items-center'>
				<Logo />
				<div
					className='flex gap-3 items-center text-secondary cursor-pointer'
					/* onClick={toogleTheme} */
				>
					{/* {theme === 'light' ? (
						<Moon className='w-8 h-8' />
					) : (
						<Sun className='w-8 h-8' />
					)} */}
					<AuthButton />
				</div>
			</Container>
		</header>
	)
}
