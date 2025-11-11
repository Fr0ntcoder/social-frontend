import { BotMessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Logo = () => {
	return (
		<Link to='/'>
			<BotMessageSquare className='w-14 h-14 text-primary' />
		</Link>
	)
}
