import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { formatCurrency } from '@/lib/utils'
import { ProductCardProps } from './types'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

export const ProductCard: React.FC<ProductCardProps> = ({
  coverImage,
  price,
  title,
  imageAlt,
  slug,
}) => {
  return (
    <Link href={`/product/${slug}`}>
      <Card className="flex flex-col gap-3 p-0 overflow-hidden scale-95 hover:scale-100 transition-transform">
        <CardHeader className="p-0 overflow-hidden w-full">
          <Image
            src={coverImage}
            alt={imageAlt || ''}
            className="w-full  object-cover aspect-square"
            width={300}
            height={200}
            quality={100}
          />
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <CardTitle
            className="leading-normal card-title h-[72px] text-base"
            title={title}
          >
            <Balancer>{title}</Balancer>
          </CardTitle>

          <strong className="text-lg">{formatCurrency(price)}</strong>
          <p className="text-sm text-muted-foreground">
            em até 12x de <strong>{formatCurrency(price / 12)}</strong> sem
            juros no cartão
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
