import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto min-h-screen max-w-[1440px] px-8 py-8">
      <Header />
      {children}
    </main>
  )
}
