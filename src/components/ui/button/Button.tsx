import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import { cn } from '@/utils/helpers/cn'

export const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none  shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer',
	{
		variants: {
			variant: {
				default:
					'bg-primary  text-primary-foreground hover:bg-primary/90 text-base px-4 py-1.5 has-[>svg]:px-3',
				success: 'bg-red-500',
				empty: '',
				outline:
					'border border-primary bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	}
)

export const Button = ({
	className,
	defaultValue = 'default',
	variant,
	asChild = false,
	...props
}: ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) => {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp
			data-slot='button'
			defaultValue={defaultValue}
			className={cn(buttonVariants({ variant, className }))}
			{...props}
		/>
	)
}
