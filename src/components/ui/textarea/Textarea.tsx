import type { ComponentProps } from 'react'

import { cn } from '@/utils/helpers/cn'

function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
	return (
		<textarea
			data-slot='textarea'
			className={cn(
				'border-input placeholder:text-accent  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-24 w-full rounded-md border bg-transparent px-3 py-2 shadow-xs transition-[color,box-shadow] outline-none  disabled:cursor-not-allowed disabled:opacity-50 resize-none',
				className
			)}
			{...props}
		/>
	)
}

export { Textarea }
