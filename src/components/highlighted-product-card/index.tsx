import Image from 'next/image'
import Link from 'next/link'

import { HighlightedProductCardProps } from './types'
import { cn, formatCurrency } from '@/lib/utils'

export const HighlightedProductCard: React.FC<HighlightedProductCardProps> = ({
  product: { coverImage, id, title, value, alt },
  className,
}) => {
  return (
    <Link
      href={`/product/${id}`}
      className={cn('relative group overflow-hidden', className)}
    >
      <Image
        src={coverImage}
        alt={alt || ''}
        className="w-full h-full object-cover rounded-sm group-hover:scale-110 duration-500 transition-transform"
        quality={100}
        width={800}
        height={800}
      />
      <div className="flex gap-8 items-center absolute bottom-9 left-9 bg-foreground/50 px-2 py-1 rounded-md">
        <p className="text-base font-medium">{title}</p>
        <span className="text-base">{formatCurrency(value)}</span>
      </div>
    </Link>
  )
}
