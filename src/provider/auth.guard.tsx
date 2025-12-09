import type { JSX } from 'react'

import { Spinner } from '@/components/ui/spinner'

import { useCurrentUserQuery } from '@/store/user/userApi'

interface AuthGuardProps {
	children: JSX.Element
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
	const { isLoading } = useCurrentUserQuery()

	if (isLoading)
		return (
			<div className='flex items-center justify-center w-full h-full'>
				<Spinner className='size-16' />
			</div>
		)
	return children
}
