import { AspectRatio } from '@/components/ui/aspect-ratio'

type Props = {
	src?: string
	alt: string
	className?: string
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
