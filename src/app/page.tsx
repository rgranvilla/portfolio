import { About } from '@/components/about'
import { BannerCTA } from '@/components/ctas/banner-cta'
import { WhatsappCTA } from '@/components/ctas/whatsapp-cta'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import Projects from '@/components/projects'
import { Stats } from '@/components/stats'
import { Technologies } from '@/components/technologies'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Header />
      <main
        className={cn(
          'container mx-auto my-8 flex min-h-[calc(100vh-9rem)] flex-col px-8',
          'md:mt-48 md:px-0',
        )}
      >
        <h1 className="sr-only">DevTrails - Portfólio Ricardo Granvilla</h1>
        <p className="sr-only">
          Interessado em criar soluções digitais escaláveis e de alta
          performance? Vamos conversar sobre como posso ajudar no seu próximo
          projeto!
        </p>
        <Hero />
        <About />
        <Stats />
        <Projects />
        <WhatsappCTA />
        <Technologies />
        <BannerCTA />
      </main>
    </div>
  )
}

// Todo: Add works
// https://responsive-with-animations.vercel.app/
// https://next-saas.devtrails.com.br/org/devtrails
