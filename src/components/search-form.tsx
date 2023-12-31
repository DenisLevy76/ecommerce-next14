'use client'
import { Search } from 'lucide-react'
import { IconButton } from './ui/button-icon'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export const SearchForm: React.FC = () => {
  const router = useRouter()

  const handleSearch = (event: FormEvent) => {
    event.preventDefault()
    router.push('/products')
  }

  return (
    <form
      className="hidden md:flex gap-2 bg-zinc-900 rounded-md px-4 py-2"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Pesquisar..."
        className="bg-transparent text-base outline-none"
      />
      <IconButton
        type="submit"
        variant="ghost"
        title="Realizar pesquisa"
        ariaLabel="Realizar pesquisa"
      >
        <Search size={18} />
      </IconButton>
    </form>
  )
}
