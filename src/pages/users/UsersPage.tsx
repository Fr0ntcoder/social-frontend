import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Picture } from '@/components/ui/picture'

import { selectCurrent } from '@/store/auth/authSlice'
import { useGetByIdQuery } from '@/store/user/userApi'

import { BASE_URL } from '@/utils/constants'

export const UsersPage = () => {
	const { id } = useParams<{ id: string }>()
	const current = useSelector(selectCurrent)
	const { data } = useGetByIdQuery('9152d79f-9876-4d9a-86a7-ca9629edc3ab')

	if (!data) {
		return null
	}

	return (
		<div className='flex items-stretch py-3 gap-5'>
			<div className='flex-1 bg-muted rounded-lg p-5'>
				<Picture
					src={`${BASE_URL}${current?.avatarUrl}`}
					className='mb-3 border-4 border-solid border-white rounded-xl'
					alt='аватар'
				/>
				<h3>{data?.name}</h3>
			</div>
			<div className='flex-2 bg-muted rounded-lg p-5'>dfdfdf</div>
		</div>
	)
}
