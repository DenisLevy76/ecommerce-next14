export interface Product {
  id: string
  coverImage: string
  title: string
  price: number
  discount: number
  slug: string
  imageAlt?: string
  images?: string[]
}
