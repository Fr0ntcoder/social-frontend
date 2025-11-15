import { Heart, HeartOff, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { API_URL } from '@/utils/constants'
import { cn } from '@/utils/helpers/cn'

interface Props {
	id: string
	likesCount: number
	handleClick: () => void
}
export const MetaInfo = ({ id, likesCount, handleClick }: Props) => {
	return (
		<div
			className={cn(
				likesCount > 0 && 'pl-3',
				'relative flex items-center gap-2'
			)}
		>
			{likesCount > 0 && (
				<p className='absolute top-1/2 -translate-y-1/2 left-0'>{likesCount}</p>
			)}
			<Button variant='empty' onClick={handleClick}>
				{likesCount > 0 ? (
					<HeartOff size={18} className='text-red-500' />
				) : (
					<Heart size={18} />
				)}
			</Button>
			<Link to={API_URL.POST.ID(id)}>
				<MessageCircle size={18} />
			</Link>
		</div>
	)
}
