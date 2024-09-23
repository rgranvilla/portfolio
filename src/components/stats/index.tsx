import { cn } from '@/lib/utils'

import { StatCard } from '../stat-card'

export function Stats() {
  return (
    <div
      className={cn(
        'mt-12 grid grid-cols-1 place-content-center gap-4 border-y border-slate-600 py-4 hover:border-slate-400',
        'md:mt-24 md:grid-cols-3 md:gap-16 md:py-8',
      )}
    >
      <StatCard value="4+" label="Anos de experiência" />
      <div className="h-px bg-slate-700 md:hidden" />
      <StatCard value="48+" label="Projetos concluídos" />
      <div className="h-px bg-slate-700 md:hidden" />
      <StatCard value="5324+" label="Horas de desenvolvimento" />
    </div>
  )
}
