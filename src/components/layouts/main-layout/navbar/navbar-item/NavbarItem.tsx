import type { LucideIcon } from 'lucide-react'
import type { HTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props extends HTMLAttributes<HTMLAnchorElement> {
	children: ReactNode
	icon: LucideIcon
	href: string
}

export type INavbarItem = Pick<Props, 'children' | 'icon' | 'href'>

export const NavbarItem = ({ children, icon: Icon, href }: Props) => {
	return (
		<Link className='flex justify-start items-center text-lg gap-2' to={href}>
			<Icon size={20} />
			{children}
		</Link>
	)
}
