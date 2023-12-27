import { HighlightedProductCard } from '@/components/highlighted-product-card'
import { ProductCardProps } from '@/components/product-card/types'
import { ProductsCarousel } from '@/components/products-carousel'

const PRODUCTS: ProductCardProps[] = [
  {
    coverImage: 'https://source.unsplash.com/random/3',
    title: 'Camisa Gamer 1',
    price: 85.99,
    imageAlt: '',
    slug: 'camisa-gamer-1',
  },
  {
    coverImage: 'https://source.unsplash.com/random/123',
    title: 'Camisa Gamer 2',
    price: 109.99,
    imageAlt: '',
    slug: 'camisa-gamer-2',
  },
  {
    coverImage: 'https://source.unsplash.com/random/41241',
    title:
      'Camisa Gamer Camisa Gamer Camisaawdadadawa Gamer Camisa Gamer Camisa Gamer Camisa Gamer Camisa Gamer',
    price: 75.5,
    imageAlt: '',
    slug: 'camisa-gamer-3',
  },
  {
    coverImage: 'https://source.unsplash.com/random/3',
    title: 'Camisa Gamer 1',
    price: 85.99,
    imageAlt: '',
    slug: 'camisa-gamer-1',
  },
  {
    coverImage: 'https://source.unsplash.com/random/123',
    title: 'Camisa Gamer 2',
    price: 109.99,
    imageAlt: '',
    slug: 'camisa-gamer-2',
  },
  {
    coverImage: 'https://source.unsplash.com/random/41241',
    title:
      'Camisa Gamer Camisa Gamer Camisaawdadadawa Gamer Camisa Gamer Camisa Gamer Camisa Gamer Camisa Gamer',
    price: 75.5,
    imageAlt: '',
    slug: 'camisa-gamer-3',
  },
  {
    coverImage: 'https://source.unsplash.com/random/3',
    title: 'Camisa Gamer 1',
    price: 85.99,
    imageAlt: '',
    slug: 'camisa-gamer-1',
  },
  {
    coverImage: 'https://source.unsplash.com/random/123',
    title: 'Camisa Gamer 2',
    price: 109.99,
    imageAlt: '',
    slug: 'camisa-gamer-2',
  },
  {
    coverImage: 'https://source.unsplash.com/random/41241',
    title:
      'Camisa Gamer Camisa Gamer Camisaawdadadawa Gamer Camisa Gamer Camisa Gamer Camisa Gamer Camisa Gamer',
    price: 75.5,
    imageAlt: '',
    slug: 'camisa-gamer-3',
  },
]

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <section id="highlighted-products" className="flex flex-col">
        <h2 className="font-semibold text-2xl mb-4">Produtos em destaque</h2>
        <div className="grid grid-cols-6 grid-rows-4 max-h-[750px] gap-4">
          {[...PRODUCTS].splice(0, 3).map((product, index) => (
            <HighlightedProductCard
              key={product.slug}
              coverImage={product.coverImage}
              slug={product.slug}
              title={product.title}
              value={product.price}
              className={
                index === 0 ? 'col-span-3 row-span-4' : 'col-span-3 row-span-2'
              }
            />
          ))}
        </div>
      </section>
      <section id="news">
        <h2 className="font-semibold text-2xl mb-4">Novidades</h2>
        <ProductsCarousel products={PRODUCTS} />
      </section>
    </main>
  )
}
