import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface INavbarItem {
	children: ReactNode
	icon: LucideIcon
	href: string
}

const NavbarItem = ({ children, icon: Icon, href }: INavbarItem) => {
	return (
		<Link className='flex justify-start items-center text-lg gap-2' to={href}>
			<Icon size={20} />
			{children}
		</Link>
	)
}

export { NavbarItem, type INavbarItem }
