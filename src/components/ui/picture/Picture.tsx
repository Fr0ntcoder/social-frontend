import type { HTMLAttributes } from 'react'

import { AspectRatio } from '@/components/ui/aspect-ratio'

interface Props extends HTMLAttributes<HTMLDivElement> {
	src?: string
	alt: string
}

export const Picture = ({ src, alt, className }: Props) => {
	return (
		<AspectRatio ratio={1} className={className}>
			<img
				src={src}
				alt={alt}
				className='w-full h-full rounded-md object-cover'
			/>
		</AspectRatio>
	)
}
