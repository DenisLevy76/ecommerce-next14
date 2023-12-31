import { ProductCard } from '@/components/product-card'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const Products: React.FC = () => {
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-4">Todos os produtos</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map(() => (
          <li key="moletom-carnical-cellbit">
            <ProductCard
              coverImage="https://cdn.vnda.com.br/780x/lolja/2023/12/22/09_10_19_380_9_12_2_202_03.png?v=1703247050"
              price={87.99}
              slug="moletom-carnical-cellbit"
              title="Moletom Carniçal OP"
            />
          </li>
        ))}
      </ul>
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationPrevious href="#" />
          <PaginationLink href="#">1</PaginationLink>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
          <PaginationLink href="#">3</PaginationLink>
          <PaginationEllipsis />
          <PaginationNext href="#" />
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default Products
