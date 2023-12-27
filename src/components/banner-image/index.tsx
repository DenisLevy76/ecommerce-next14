import Link from 'next/link'
import { BannerImageProps } from './types'
import Image from 'next/image'

export const BannerImage: React.FC<BannerImageProps> = ({
  href,
  imageSrc,
  imageAlt,
}) => {
  return (
    <Link href={href}>
      <Image
        src={imageSrc}
        alt={imageAlt || ''}
        width={1440}
        height={320}
        quality={100}
        className="w-full h-[20rem] object-cover rounded-md"
      />
    </Link>
  )
}
