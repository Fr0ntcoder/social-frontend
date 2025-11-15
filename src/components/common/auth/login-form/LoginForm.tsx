import { zodResolver } from '@hookform/resolvers/zod'
import type { HTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { FieldInput } from '@/components/ui/form/field-input'

import { useLoginMutation } from '@/store/auth/authApi'
import { useLazyCurrentUserQuery } from '@/store/user/userApi'

import { errorCheck } from '@/utils/helpers/errorCheck'
import { type TAuthLoginRequest, authLoginScheme } from '@/utils/types'

interface Props extends HTMLAttributes<HTMLFormElement> {
	setSelected: (value: 'login' | 'register') => void
}

export const LoginForm = ({ setSelected }: Props) => {
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<TAuthLoginRequest>({
		resolver: zodResolver(authLoginScheme),
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const [login, { isLoading }] = useLoginMutation()
	const [trigger] = useLazyCurrentUserQuery()
	const navigate = useNavigate()

	const onSubmit = async (data: TAuthLoginRequest) => {
		try {
			await login(data).unwrap()
			await trigger().unwrap()
			toast.success('Успешный вход!')
			navigate('/')
		} catch (error) {
			console.log(error)
			if (errorCheck(error)) {
				toast('Ошибка авторизации', {
					description: error.data.error,
					action: {
						label: 'Закрыть',
						onClick: () => console.log('Закрыто')
					}
				})
			}
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
			<FieldInput
				type='email'
				name='email'
				label='Email'
				placeholder='Введите email'
				control={control}
			/>
			<FieldInput
				type='password'
				name='password'
				label='Пароль'
				placeholder='Введите пароль'
				control={control}
			/>
			<Button type='submit'>Отправить</Button>
			<p className='text-center'>
				Нет аккаунта?{' '}
				<span
					onClick={() => setSelected('register')}
					className='text-destructive ml-1 cursor-pointer hover:underline'
				>
					Зарегистрируйся
				</span>
			</p>
		</form>
	)
}
