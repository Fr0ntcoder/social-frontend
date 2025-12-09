import { CircleArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export const Back = () => {
	const navigate = useNavigate()
	const handlerBack = () => {
		navigate('/', {
			replace: true
		})
	}
	return (
		<Button
			variant='empty'
			className='flex items-center self-start'
			onClick={handlerBack}
		>
			<CircleArrowLeft /> Назад
		</Button>
	)
}
