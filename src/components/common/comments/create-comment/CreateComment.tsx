import { zodResolver } from '@hookform/resolvers/zod'
import { Pencil } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { FieldTextarea } from '@/components/ui/form/field-textarea'

import { useCreateCommentMutation } from '@/store/comment/commentApi'
import { useLazyGetPostByIdQuery } from '@/store/post/postApi'

import { type TCommentRequest, commentScheme } from '@/utils/types'

export const CreateComment = () => {
	const { id } = useParams<{ id: string }>()
	const [createComment] = useCreateCommentMutation()
	const [getPostById] = useLazyGetPostByIdQuery()

	const {
		handleSubmit,
		control,
		formState: { errors },
		setValue
	} = useForm<TCommentRequest>({
		resolver: zodResolver(commentScheme),
		mode: 'onChange'
	})

	const onSubmit = async (data: TCommentRequest) => {
		try {
			if (id) {
				await createComment({ content: data.content, postId: id }).unwrap()
				setValue('content', '')
				await getPostById(id).unwrap()
			}
		} catch (error) {
			toast.error('Ошибка при создании комментария')
		}
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FieldTextarea
				name='content'
				placeholder='Оставьте свой комментарий'
				control={control}
			/>
			<Button
				type='submit'
				className='flex items-center bg-green-500 mt-5 hover:bg-green-400 transition duration-300 ease-in-out'
			>
				Оставить комментарий
				<Pencil size={16} />
			</Button>
		</form>
	)
}
