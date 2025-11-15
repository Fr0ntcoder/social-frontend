import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Container = ({ children, className }: Props) => {
	return <div className={`${className} max-w-7xl mx-auto px-6`}>{children}</div>
}
