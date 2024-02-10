import { getProducts } from '@/app/products'
import { HighlightedProductCard } from '@/components/highlighted-product-card'
import { ProductsCarousel } from '@/components/products-carousel'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const products = await getProducts()

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
          {[...products].splice(0, 3).map((product, index) => (
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
        <ProductsCarousel products={products} />
      </section>
    </div>
  )
}
