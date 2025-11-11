import { IdCard, List, Users } from 'lucide-react'

import { APP_URL } from '@/utils/constants'

import { type INavbarItem, NavbarItem } from './navbar-item/NavbarItem'

const data: INavbarItem[] = [
	{
		children: 'Посты',
		icon: IdCard ,
		href: APP_URL.POSTS
	},
	{
		children: 'Подписки',
		icon: List,
		href: APP_URL.FOLLOWING
	},
	{
		children: 'Подписчики',
		icon: Users,
		href: APP_URL.FOLLOWERS
	}
]

export const Navbar = () => {
	return (
		<nav className='max-w-2xs w-full'>
			<div className='flex flex-col gap-2'>
				{data.map(item => {
					return (
						<NavbarItem icon={item.icon} href={item.href} key={item.href}>
							{item.children}
						</NavbarItem>
					)
				})}
			</div>
		</nav>
	)
}
