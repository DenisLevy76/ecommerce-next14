import { Product } from '@/@types/product'

export const PRODUCTS: Product[] = [
  {
    id: 'a11be79e-1721-42d1-84da-78924b5d02f7',
    title: 'Bed',
    price: 150,
    discount: 7,
    slug: 'bed',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: '85a32a04-0ae0-40ea-b868-798f3fe3a015',
    title: 'Shirt',
    price: 120,
    discount: 10,
    slug: 'shirt',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: 'e4c10611-8d8d-4974-a4d2-cf49e503e02c',
    title: 'Brush',
    price: 200,
    discount: 4,
    slug: 'brush',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: 'f4da62f7-21dd-48b2-b4c6-c3e002371bb7',
    title: 'Table',
    price: 180,
    discount: 5,
    slug: 'table',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: 'b7b61a42-6875-45c5-b498-7b2e933ef8c7',
    title: 'Blouse',
    price: 130,
    discount: 8,
    slug: 'blouse',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: '84fc7b06-4c54-43ef-bd5e-bc1205de7d94',
    title: 'Notebook',
    price: 200,
    discount: 6,
    slug: 'notebook',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: 'a1635750-bfd9-4f25-9d5a-96707693f878',
    title: 'Bag',
    price: 170,
    discount: 9,
    slug: 'bag',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: '22b3a4fd-2db0-4f64-8a32-8a5a7d9fbbf5',
    title: 'Chair',
    price: 80,
    discount: 15,
    slug: 'chair',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: 'b3e0ce61-d8b4-4f15-a2c2-50775f1207f1',
    title: 'Glasses',
    price: 110,
    discount: 10,
    slug: 'glasses',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: '69733fd7-e9f0-434c-9479-8c573b2e3701',
    title: 'Jeans',
    price: 160,
    discount: 8,
    slug: 'jeans',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: '8b8ddcc5-05cf-43fc-a344-ef70ec32ec88',
    title: 'Mirror',
    price: 130,
    discount: 12,
    slug: 'mirror',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: 'db098662-15fc-4f11-967d-bc8f767ef6de',
    title: 'Backpack',
    price: 90,
    discount: 5,
    slug: 'backpack',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: '9b64e9ac-4d80-419b-8c78-3b597a1aeb0d',
    title: 'Hat',
    price: 75,
    discount: 10,
    slug: 'hat',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: 'f17d9b5e-5b94-48fb-8a4c-09c7c7b6c2a4',
    title: 'Watch',
    price: 220,
    discount: 3,
    slug: 'watch',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: '24f634e4-56c1-4f0a-8e92-c578dc5b4a78',
    title: 'Plate',
    price: 40,
    discount: 10,
    slug: 'plate',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: 'd0d1e165-b144-43eb-b37d-53c37c6858f2',
    title: 'Sunglasses',
    price: 130,
    discount: 8,
    slug: 'sunglasses',
    coverImage: 'https://source.unsplash.com/random',
  },
  {
    id: '2b0a146e-7cfc-4b0c-b63a-0fb872eb7690',
    title: 'T-shirt',
    price: 100,
    discount: 6,
    slug: 't-shirt',
    coverImage: 'https://source.unsplash.com/random',
  },
]

export const getProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2500))

  return [...PRODUCTS]
}