import Image from 'next/image'
import Link from 'next/link'

import { HighlightedProductCardProps } from './types'
import { cn, formatCurrency } from '@/lib/utils'

export const HighlightedProductCard: React.FC<HighlightedProductCardProps> = ({
  coverImage,
  title,
  value,
  alt,
  slug,
  className,
}) => {
  return (
    <Link
      href={`/product/${slug}`}
      className={cn(
        'relative group overflow-hidden rounded-md w-full h-full',
        className,
      )}
    >
      <Image
        src={coverImage}
        alt={alt || ''}
        className="w-full h-full aspect-square md:aspect-auto object-cover group-hover:scale-110 duration-500 transition-transform"
        quality={100}
        width={800}
        height={800}
      />
      <div
        title={title}
        className="flex gap-4 text-sm md:text-base md:gap-8 items-center absolute max-w-[65%] bottom-9 left-1/2 md:left-9 -translate-x-1/2 md:translate-x-0 bg-foreground/50 px-2 py-1 rounded-md"
      >
        <p className="md:text-base font-medium truncate">{title}</p>
        <span className="md:text-base">{formatCurrency(value)}</span>
      </div>
    </Link>
  )
}
