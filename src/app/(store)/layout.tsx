import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col gap-12 mx-auto min-h-screen max-w-[1440px] px-4 md:px-14 pb-8">
      <Header />
      <div className="flex-1">{children}</div>
      <footer className="border-t border-muted-foreground/30 pt-8">
        Feito com ❤️ por{' '}
        <a
          href="https://github.com/denislevy76"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500"
        >
          Denis Levy
        </a>
        .
      </footer>
    </main>
  )
}
