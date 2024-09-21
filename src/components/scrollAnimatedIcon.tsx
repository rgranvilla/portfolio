import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface ScrollAnimatedIconProps extends ComponentProps<'div'> {}

export function ScrollAnimatedIcon({
  className,
  ...props
}: ScrollAnimatedIconProps) {
  return (
    <div
      className={cn('flex w-full flex-1 justify-center', className)}
      {...props}
    >
      <div className="group flex h-12 w-8 justify-center rounded-2xl border-2 border-slate-600 py-3 hover:border-slate-400">
        <div className="relative flex h-full w-full flex-col items-center justify-center space-y-1">
          <div className="group-hover:animate-scrollDown h-2 w-1 rounded-full bg-slate-500 group-hover:bg-slate-400" />
          <div className="group-hover:animate-scrollDown h-2 w-1 rounded-full bg-slate-500 group-hover:bg-slate-400" />
          <div className="group-hover:animate-scrollDown h-2 w-1 rounded-full bg-slate-500 group-hover:bg-slate-400" />
        </div>
      </div>
    </div>
  )
}
