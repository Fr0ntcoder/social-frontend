import { Moon, Sun } from 'lucide-react'

import { Container } from '@/components/ui/container'
import { Logo } from '@/components/ui/logo'

import { useTheme } from '@/provider/theme-provider'

import { AuthButton } from '@/components/common/auth/auth-button'

export const Header = () => {
	const { theme, setTheme } = useTheme()
	const onToggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	return (
		<header className='py-4'>
			<Container className='w-full flex justify-between items-center'>
				<Logo />
				<div className='flex gap-3  items-center text-secondary cursor-pointer'>
					<div className='text-primary' onClick={onToggleTheme}>
						{theme === 'light' ? (
							<Moon className='w-8 h-8' />
						) : (
							<Sun className='w-8 h-8' />
						)}
					</div>
					<AuthButton />
				</div>
			</Container>
		</header>
	)
}
