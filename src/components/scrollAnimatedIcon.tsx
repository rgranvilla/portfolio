import type { ComponentProps } from 'react'
import { BiChevronDown } from 'react-icons/bi'

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
      <div className="group flex h-12 w-8 justify-center rounded-2xl border-slate-600 py-3 hover:border-slate-400 md:border-2">
        <BiChevronDown className="animate-scrollDown text-slate-500 group-hover:animate-scrollDown group-hover:text-slate-400 md:size-8" />
      </div>
    </div>
  )
}
