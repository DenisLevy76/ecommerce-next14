import { ProductCard } from '../product-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { ProductsCarouselProps } from './types'

export const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
  products,
}) => {
  return (
    <Carousel
      className="w-full flex items-center gap-2"
      opts={{
        align: 'start',
      }}
    >
      <CarouselPrevious variant="ghost" />
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product.slug}
            className="md:basis-1/3 lg:basis-1/4"
          >
            <ProductCard
              coverImage={product.coverImage}
              price={product.price}
              title={product.title}
              imageAlt={product.imageAlt}
              slug={product.slug}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext variant="ghost" />
    </Carousel>
  )
}
