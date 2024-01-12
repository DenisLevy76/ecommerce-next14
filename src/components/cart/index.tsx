import { ProductCart } from './product-cart'
import { Product } from '@/@types/product'
import { Button } from '../ui/button'

const CART: Product[] = [
  {
    id: '1',
    coverImage: 'https://source.unsplash.com/random/3',
    title: 'Camisa Gamer 1',
    price: 85.99,
    imageAlt: '',
    slug: 'camisa-gamer-1',
    images: [],
  },
  {
    id: '2',
    coverImage: 'https://source.unsplash.com/random/123',
    title: 'Camisa Gamer 2',
    price: 109.99,
    imageAlt: '',
    slug: 'camisa-gamer-2',
    images: [],
  },
]

export const Cart: React.FC = () => (
  <div>
    <section className="grid gap-4">
      <h4 className="font-semibold text-lg">Carrinho {`(${CART.length})`}</h4>
      <ul className="flex flex-col gap-3 max-h-[240px] overflow-auto">
        {CART.map(({ coverImage, imageAlt, price, title, id }) => (
          <ProductCart
            key={id}
            coverImage={coverImage}
            title={title}
            value={price}
            imageAlt={imageAlt}
          />
        ))}
      </ul>
    </section>
    <section className="pt-4 mt-4 border-t flex flex-col gap-4">
      <h4 className="sr-only">Informações gerais</h4>
      <span className="text-end">
        <p className=" text-sm">Frete: R$ 110.32</p>
        <p className="text-green-300 text-sm">Desconto: -R$ 15.57</p>
        <p className="font-bold">Total: R$ {110.32 - 15.57}</p>
      </span>
      <Button className="w-full text-black font-bold text-lg" size={'lg'}>
        Finalizar compras
      </Button>
    </section>
  </div>
)
