import { Bell, Heart, Search, ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import { IconButton } from '../ui/button-icon'
import Link from 'next/link'
import { Button } from '../ui/button'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center">
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
      <form className="hidden md:flex gap-2 bg-zinc-900 rounded-md px-4 py-2">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="bg-transparent text-base outline-none"
        />
        <IconButton
          type="button"
          variant="ghost"
          title="Realizar pesquisa"
          ariaLabel="Realizar pesquisa"
        >
          <Search size={18} />
        </IconButton>
      </form>
      <div className="flex gap-4 md:items-center">
        <div className="flex gap-4 pr-4 border-r-[1px] border-zinc-800">
          <IconButton
            type="button"
            variant="ghost"
            title="Abrir notificações"
            ariaLabel="Abrir notificações"
            className="hidden md:block"
          >
            <Bell />
          </IconButton>
          <IconButton
            type="button"
            variant="ghost"
            title="Abrir lista de desejo"
            ariaLabel="Abrir lista de desejo"
            className="hidden md:block"
          >
            <Heart />
          </IconButton>
          <IconButton
            type="button"
            variant="ghost"
            title="Abrir carrinho de compras"
            ariaLabel="Abrir carrinho de compras"
          >
            <ShoppingBasket />
          </IconButton>
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
