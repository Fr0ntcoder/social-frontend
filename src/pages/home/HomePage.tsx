import { Button } from '@/components/ui/elements/button'

import { useTheme } from '@/provider/theme-provider'

export const HomePage = () => {
	const { theme, setTheme } = useTheme()
	const onToggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	return (
		<Button variant='default' size='default' onClick={onToggleTheme}>
			Привет
		</Button>
	)
}
