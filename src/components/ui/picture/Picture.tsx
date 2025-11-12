import { AspectRatio } from '@/components/ui/aspect-ratio'

interface PictureProps {
	src?: string
	alt: string
	className?: string
}
export const Picture = ({ src, alt, className }: PictureProps) => {
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
