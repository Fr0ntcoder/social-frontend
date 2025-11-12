import { Mail, User } from 'lucide-react'
import type { HTMLAttributes } from 'react'
import { useSelector } from 'react-redux'

import { Picture } from '@/components/ui/picture'

import { selectCurrent } from '@/store/auth/authSlice'

import { BASE_URL } from '@/utils/constants'
import { cn } from '@/utils/helpers/cn'

interface ProfileProps extends HTMLAttributes<HTMLDivElement> {}
export const Profile = ({ className }: ProfileProps) => {
	const current = useSelector(selectCurrent)

	if (!current) return null

	const { name, email, avatarUrl } = current
	return (
		<div
			className={cn(
				className,
				'flex flex-col text-xs bg-muted p-4 rounded-2xl'
			)}
		>
			<Picture src={`${BASE_URL}${avatarUrl}`} className='mb-3' alt='аватар' />
			<p className='flex items-center gap-2 mb-3'>
				<User size={20} className='flex-none' /> {name}
			</p>
			<p className='flex items-center gap-2'>
				<Mail size={20} className='flex-none' /> {email}
			</p>
		</div>
	)
}
