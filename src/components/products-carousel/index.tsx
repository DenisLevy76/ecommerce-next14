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
      className="w-full"
      opts={{
        align: 'start',
      }}
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product.slug}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4"
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
      <CarouselPrevious variant="ghost" />
      <CarouselNext variant="ghost" />
    </Carousel>
  )
}
