import { useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { LoginForm } from '@/components/common/auth/login-form'
import { RegisterForm } from '@/components/common/auth/register-form/RegisterForm'

export const AuthPage = () => {
	const [selected, setSelected] = useState<'login' | 'register'>('login')
	return (
		<div className='flex items-center justify-center w-full h-screen'>
			<div className='max-w-80 w-full py-5 px-2.5 bg-accent rounded-md'>
				<Tabs
					defaultValue={selected}
					value={selected}
					onValueChange={value => setSelected(value as 'login' | 'register')}
				>
					<TabsList className='mb-5'>
						<TabsTrigger value='login'>Вход</TabsTrigger>
						<TabsTrigger value='register'>Регистрация</TabsTrigger>
					</TabsList>
					<TabsContent value='login'>
						<LoginForm setSelected={setSelected} />
					</TabsContent>
					<TabsContent value='register'>
						<RegisterForm setSelected={setSelected} />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}
