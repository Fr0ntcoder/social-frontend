import { useState } from 'react'

import { Button } from '@/components/ui/button'

export const AuthButton = () => {
	const [isAuth, setIsAuth] = useState<boolean>(true)

	return <Button>Войти</Button>
}
