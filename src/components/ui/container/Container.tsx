import type { ReactNode } from 'react'

type Props = {
	children: ReactNode
	className?: string
}

export const Container = ({ children, className }: Props) => {
	return <div className={`${className} max-w-7xl mx-auto px-6`}>{children}</div>
}
