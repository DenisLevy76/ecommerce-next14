import Image from 'next/image'
import { ProductCartProps } from './types'
import { formatCurrency } from '@/lib/utils'
import { IconButton } from '@/components/ui/button-icon'
import { Trash } from 'lucide-react'

export const ProductCart: React.FC<ProductCartProps> = ({
  coverImage,
  title,
  value,
  imageAlt,
}) => {
  return (
    <li className="flex items-center gap-3">
      <Image
        src={coverImage}
        alt={imageAlt || ''}
        width={64}
        height={64}
        className="aspect-square object-cover w-16 h-16 overflow-hidden rounded-md"
      />
      <div className="flex w-full items-start justify-between">
        <div className="flex flex-col">
          <strong>{title}</strong>
          <span>{formatCurrency(value)}</span>
        </div>
        <IconButton
          ariaLabel={`Remover ${title} do carrinho`}
          title={`Remover ${title} do carrinho`}
          className="hover:bg-transparent hover:text-red-500 py-0"
          size={'icon'}
        >
          <Trash size={18} />
        </IconButton>
      </div>
    </li>
  )
}
