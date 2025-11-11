import type { ReactNode } from 'react'

interface IContainer {
	children: ReactNode
	className?: string
}

export const Container = ({ children, className }: IContainer) => {
	return <div className={`${className} max-w-7xl mx-auto px-6`}>{children}</div>
}
