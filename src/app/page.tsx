import { About } from '@/components/about'
import { BannerCTA } from '@/components/ctas/banner-cta'
import { WhatsappCTA } from '@/components/ctas/whatsapp-cta'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import Projects from '@/components/projects'
import { Stats } from '@/components/stats'
import { Technologies } from '@/components/technologies'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Header />
      <main className="container mx-auto flex min-h-[calc(100vh-9rem)] flex-col pt-48">
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
