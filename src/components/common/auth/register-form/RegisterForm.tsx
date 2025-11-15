import { zodResolver } from '@hookform/resolvers/zod'
import type { HTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { FieldInput } from '@/components/ui/form/field-input'

import { useRegisterMutation } from '@/store/auth/authApi'
import { useLazyCurrentUserQuery } from '@/store/user/userApi'

import { cn } from '@/utils/helpers/cn'
import { errorCheck } from '@/utils/helpers/errorCheck'
import { type TAuthRegisterRequest, authRegisterScheme } from '@/utils/types'

interface Props extends HTMLAttributes<HTMLFormElement> {
	setSelected: (value: 'login' | 'register') => void
}

export const RegisterForm = ({ className, setSelected }: Props) => {
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<TAuthRegisterRequest>({
		resolver: zodResolver(authRegisterScheme),
		mode: 'onChange',
		defaultValues: {
			name: '',
			email: '',
			password: ''
		}
	})

	const [register, { isLoading }] = useRegisterMutation()
	const navigate = useNavigate()
	const [trigger] = useLazyCurrentUserQuery()

	const onSubmit = async (data: TAuthRegisterRequest) => {
		try {
			await register(data).unwrap()
			toast.success('Вы успешно зарегистрировались!')
			navigate('/')
		} catch (error) {
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
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn(className, 'flex flex-col gap-4')}
		>
			<FieldInput
				name='name'
				label='Имя'
				placeholder='Введите имя'
				control={control}
			/>
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
				Есть аккаунт?
				<span
					onClick={() => setSelected('login')}
					className='text-destructive ml-1 cursor-pointer hover:underline'
				>
					Войти
				</span>
			</p>
		</form>
	)
}
