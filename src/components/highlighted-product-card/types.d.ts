export interface HighlightedProductCardProps {
  product: {
    id: string
    coverImage: string
    title: string
    value: number
    alt?: string
  }
  className?: string
}
