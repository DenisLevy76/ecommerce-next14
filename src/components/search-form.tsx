'use client'
import { Search } from 'lucide-react'
import { IconButton } from './ui/button-icon'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  search: z.coerce.string().min(3),
})

type SearchSchema = z.infer<typeof searchFormSchema>

export const SearchForm: React.FC = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm<SearchSchema>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearch: SubmitHandler<SearchSchema> = (data) => {
    router.push(`/products?q=${data.search}`)
  }

  return (
    <form
      className="hidden md:flex gap-2 bg-zinc-900 rounded-md px-4 py-2"
      onSubmit={handleSubmit(handleSearch)}
    >
      <input
        type="text"
        placeholder="Pesquisar..."
        className="bg-transparent text-base outline-none"
        {...register('search')}
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
