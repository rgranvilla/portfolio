import type { ComponentProps, ElementType } from 'react'

import { cn } from '@/lib/utils'

interface FeatureCardProps extends ComponentProps<'div'> {
  icon: ElementType
  title: string
  description: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-lg bg-gradient-to-tl from-purple-600/30 to-purple-800/30 p-4',
        'md:p-8',
      )}
    >
      <div className="flex items-center gap-6 text-purple-400">
        <div className={cn('h-auto w-8 p-0', 'md:h-auto md:w-16')}>
          <Icon className="size-full" />
        </div>
        <h3 className={cn('text-lg', 'md:text-2xl md:font-semibold')}>
          {title}
        </h3>
      </div>
      <div className="flex w-full flex-1 items-center justify-center">
        <p
          className={cn(
            'mt-2 text-start text-sm italic text-slate-200',
            'md:mt-4 md:text-center md:text-lg',
          )}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
