import { type Control, useController } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface FieldInputProps {
	name: string
	label: string
	type?: string
	placeholder?: string
	required?: string
	control: Control<any>
}
export const FieldInput = ({
	name,
	label,
	type,
	placeholder,
	control
}: FieldInputProps) => {
	const {
		field,
		fieldState: { invalid },
		formState: { errors }
	} = useController({
		name,
		control
	})

	const error = errors[name]

	return (
		<div className='flex flex-col'>
			<Label htmlFor={name} className='mb-2.5'>
				{label}
			</Label>
			<Input
				type={type}
				name={field.name}
				id={name}
				placeholder={placeholder}
				value={field.value}
				onChange={field.onChange}
				onBlur={field.onBlur}
				className='mb-1.5'
			/>
			{error && (
				<span className='text-xs text-red-600'>{error.message as string}</span>
			)}
		</div>
	)
}
