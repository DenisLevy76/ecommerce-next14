import Image from 'next/image'
import Link from 'next/link'

import { Bell, Heart } from 'lucide-react'
import { IconButton } from '../ui/button-icon'
import { Button } from '../ui/button'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { SearchForm } from '../search-form'
import { CartMobile } from '../cart/cart-mobile'
import { CartWeb } from '../cart/cart-web'

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 left-0 right-0 bg-background z-50 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Link href="/">
          <h3 className="font-extrabold text-3xl hidden md:block">Store</h3>
          <Image
            src="/brand.svg"
            width={32}
            height={32}
            alt="Logo marca da loja"
            className="md:hidden"
          />
        </Link>
        <Button variant="ghost" className="md:hidden">
          <HamburgerMenuIcon className="w-8 h-8" />
        </Button>
      </div>
      <SearchForm />
      <div className="flex gap-4 md:items-center">
        <div className="flex gap-4 pr-4 border-r-[1px] border-zinc-800">
          <IconButton
            type="button"
            title="Abrir notificações"
            ariaLabel="Abrir notificações"
            className="hidden md:block"
          >
            <Bell />
          </IconButton>
          <IconButton
            type="button"
            title="Abrir lista de desejo"
            ariaLabel="Abrir lista de desejo"
            className="hidden md:block"
          >
            <Heart />
          </IconButton>
          <CartWeb />
          <CartMobile />
        </div>
        <div>
          <Image
            alt=""
            src="https://github.com/denisLevy76.png"
            width={42}
            height={42}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  )
}
