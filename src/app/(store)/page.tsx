import { HighlightedProductCard } from '@/components/highlighted-product-card'

const PRODUCTS = [
  {
    coverImage: 'https://via.placeholder.com/1000/24f355',
    id: '24f355',
    title: 'Camisa Gamer',
    value: 85.99,
  },
  {
    coverImage: 'https://via.placeholder.com/1000/24f355',
    id: '24f355',
    title: 'Camisa Gamer',
    value: 85.99,
  },
  {
    coverImage: 'https://via.placeholder.com/1000/24f355',
    id: '24f355',
    title: 'Camisa Gamer',
    value: 85.99,
  },
]

export default function Home() {
  return (
    <main>
      <section
        id="highlighted-products"
        className="grid grid-cols-6 grid-rows-4 max-h-[750px] gap-4 "
      >
        {PRODUCTS.map((product, index) => (
          <HighlightedProductCard
            key={product.id}
            product={product}
            className={
              index === 0 ? 'col-span-3 row-span-4' : 'col-span-3 row-span-2'
            }
          />
        ))}
      </section>
    </main>
  )
}
