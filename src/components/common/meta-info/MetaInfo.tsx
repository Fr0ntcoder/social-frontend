import { Heart, HeartOff, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { API_URL } from '@/utils/constants'

type Props = {
	id: string
	likesCount: number
	commentsCount: number
	handleClick: () => void
}
export const MetaInfo = ({
	id,
	likesCount,
	commentsCount,
	handleClick
}: Props) => {
	return (
		<div className='relative flex items-center gap-2'>
			{likesCount > 0 && (
				<p className='absolute top-1/2 -translate-y-1/2 left-0'>{likesCount}</p>
			)}
			<Button variant='empty' onClick={handleClick} className='relative'>
				{likesCount > 0 && likesCount}
				{likesCount > 0 ? (
					<HeartOff size={18} className='text-red-500' />
				) : (
					<Heart size={18} />
				)}
			</Button>
			<Link to={API_URL.POST.ID(id)} className='flex items-center gap-2'>
				{commentsCount > 0 && commentsCount}
				<MessageCircle size={18} />
			</Link>
		</div>
	)
}
