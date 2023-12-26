import { HighlightedProductCard } from '@/components/highlighted-product-card'
import { ProductCard } from '@/components/product-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const PRODUCTS = [
  {
    coverImage: 'https://source.unsplash.com/random/3',
    id: '24f355',
    title: 'Camisa Gamer 1',
    value: 85.99,
    alt: '',
    slug: 'camisa-gamer-1',
  },
  {
    coverImage: 'https://source.unsplash.com/random/123',
    id: '24f355',
    title: 'Camisa Gamer 2',
    value: 109.99,
    alt: '',
    slug: 'camisa-gamer-2',
  },
  {
    coverImage: 'https://source.unsplash.com/random/41241',
    id: '24f355',
    title:
      'Camisa Gamer Camisa Gamer Camisaawdadadawa Gamer Camisa Gamer Camisa Gamer Camisa Gamer Camisa Gamer',
    value: 75.5,
    alt: '',
    slug: 'camisa-gamer-3',
  },
]

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <section id="highlighted-products" className="flex flex-col">
        <h2 className="font-semibold text-2xl mb-6">Produtos em destaque</h2>
        <div className="grid grid-cols-6 grid-rows-4 max-h-[750px] gap-4">
          {PRODUCTS.map((product, index) => (
            <HighlightedProductCard
              key={product.id}
              coverImage={product.coverImage}
              slug={product.slug}
              title={product.title}
              value={product.value}
              className={
                index === 0 ? 'col-span-3 row-span-4' : 'col-span-3 row-span-2'
              }
            />
          ))}
        </div>
      </section>
      <section id="news">
        <h2 className="font-semibold text-2xl mb-6">Novidades</h2>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {PRODUCTS.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 md:basis-1/4 lg:basis-1/4"
              >
                <ProductCard
                  coverImage={product.coverImage}
                  price={product.value}
                  title={product.title}
                  imageAlt={product.alt}
                  slug={product.slug}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="ghost" />
          <CarouselNext variant="ghost" />
        </Carousel>
      </section>
    </main>
  )
}
