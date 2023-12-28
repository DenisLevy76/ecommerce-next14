import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col gap-12 mx-auto min-h-screen max-w-[1440px] px-4 py-8">
      <Header />
      {children}
      <footer></footer>
    </main>
  )
}
