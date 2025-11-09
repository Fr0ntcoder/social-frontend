import { useState } from 'react'

export const AuthButton = () => {
	const [isAuth, setIsAuth] = useState<boolean>(true)

	return <button>Войти</button>
}
