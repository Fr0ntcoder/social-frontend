import type { HTMLAttributes } from 'react'
import { type Control, useController } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { cn } from '@/utils/helpers/cn'

interface Props extends HTMLAttributes<HTMLDivElement> {
	name: string
	label?: string
	placeholder?: string
	required?: string
	control: Control<any>
}

export const FieldTextarea = ({
	className,
	name,
	label,
	placeholder,
	control
}: Props) => {
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
		<div className={cn(className, 'flex flex-col')}>
			{label && (
				<Label htmlFor={name} className='mb-2.5'>
					{label}
				</Label>
			)}
			<Textarea
				name={field.name}
				id={name}
				placeholder={placeholder}
				value={field.value}
				onChange={field.onChange}
				onBlur={field.onBlur}
			/>
			{error && (
				<span className='text-sm text-red-600 mt-1.5'>
					{error.message as string}
				</span>
			)}
		</div>
	)
}
