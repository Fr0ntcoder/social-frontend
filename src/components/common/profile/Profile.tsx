import { Mail, User } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Picture } from '@/components/ui/picture'

import { selectCurrent } from '@/store/auth/authSlice'

import { API_URL, BASE_URL } from '@/utils/constants'
import { cn } from '@/utils/helpers/cn'

type Props = {
	className?: string
}

export const Profile = ({ className }: Props) => {
	const current = useSelector(selectCurrent)

	if (!current) return null

	const { name, email, avatarUrl } = current
	return (
		<div
			className={cn(
				className,
				'w-full flex flex-col text-lg bg-muted p-4 rounded-2xl'
			)}
		>
			<Picture src={`${BASE_URL}${avatarUrl}`} className='mb-3' alt='аватар' />
			<Link
				to={API_URL.USER.ID(current.id)}
				className='flex items-center gap-2 mb-3'
			>
				<User size={20} className='flex-none' /> {name}
			</Link>
			<p className='flex items-center gap-2'>
				<Mail size={20} className='flex-none' /> {email}
			</p>
		</div>
	)
}
