import { HighlightedProductCard } from '@/components/highlighted-product-card'
import { ProductCardProps } from '@/components/product-card/types'
import { ProductsCarousel } from '@/components/products-carousel'
import Image from 'next/image'
import Link from 'next/link'

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
    <div className="flex flex-col gap-8">
      <section>
        <Link href="/">
          <Image
            src="https://source.unsplash.com/random/1231312351"
            alt="banner"
            width={1440}
            height={400}
            quality={100}
            className="w-full h-[20rem] object-cover rounded-md"
          />
        </Link>
      </section>
      <section id="highlighted-products" className="flex flex-col">
        <h2 className="font-semibold text-2xl mb-4">Produtos em destaque</h2>
        <div className="flex flex-col md:grid md:grid-cols-6 md:grid-rows-4 md:max-h-[750px] gap-4">
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
    </div>
  )
}
