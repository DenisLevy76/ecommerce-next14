import { IconButton } from '@/components/ui/button-icon'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ShoppingBasket } from 'lucide-react'
import { Cart } from '..'

export const CartWeb: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton
          ariaLabel="Abrir carrinho de compras"
          title="Abrir carrinho de compras"
          className="hidden sm:block"
        >
          <ShoppingBasket />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Cart />
      </PopoverContent>
    </Popover>
  )
}
