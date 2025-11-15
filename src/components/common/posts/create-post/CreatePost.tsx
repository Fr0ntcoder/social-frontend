import { zodResolver } from '@hookform/resolvers/zod'
import { Pencil } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { FieldTextarea } from '@/components/ui/form/field-textarea'

import {
	useCreatePostMutation,
	useLazyGetAllPostsQuery
} from '@/store/post/postApi'

import { type TPostRequest, postScheme } from '@/utils/types'

export const CreatePost = () => {
	const [createPost] = useCreatePostMutation()
	const [trigger] = useLazyGetAllPostsQuery()

	const {
		handleSubmit,
		control,
		formState: { errors },
		setValue,
		getValues
	} = useForm<TPostRequest>({
		resolver: zodResolver(postScheme),
		mode: 'onChange'
	})

	const error = errors.content?.message

	const onSubmit = async (data: TPostRequest) => {
		try {
			await createPost(data).unwrap()
			setValue('content', '')
			await trigger().unwrap()
		} catch (error) {}
	}
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FieldTextarea
					name='content'
					placeholder='Введите текст'
					control={control}
				/>
				<Button
					type='submit'
					className='flex items-center bg-green-500 mt-5 hover:bg-green-400 transition duration-300 ease-in-out'
				>
					Добавить пост
					<Pencil size={16} />
				</Button>
			</form>
		</>
	)
}
