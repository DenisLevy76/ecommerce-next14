import { IconButton } from '@/components/ui/button-icon'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { ShoppingBasket } from 'lucide-react'
import { Cart } from '..'

export const CartMobile: React.FC = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <IconButton
          ariaLabel="Abrir carrinho de compras"
          title="Abrir carrinho de compras"
          className="sm:hidden"
        >
          <ShoppingBasket />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-3">
          <Cart />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
