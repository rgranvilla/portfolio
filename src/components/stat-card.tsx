import { type ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface StatCardProps extends ComponentProps<'div'> {
  value: string | number
  label: string
}

export function StatCard({ value, label, ...props }: StatCardProps) {
  return (
    <div
      className={cn(
        'palce-content-center grid grid-cols-2 items-center',
        'md:flex md:flex-col md:items-center md:gap-4',
        props.className,
      )}
      {...props}
    >
      <h3
        className={cn(
          'order-2 text-end text-4xl text-purple-500',
          'md:text-6xl',
        )}
      >
        {value}
      </h3>
      <p className={cn('order-1 text-xl text-slate-400', 'md:text-2xl')}>
        {label}
      </p>
    </div>
  )
}
