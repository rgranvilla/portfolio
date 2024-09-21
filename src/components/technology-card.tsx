import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface TechnologyCardProps extends ComponentProps<'div'> {
  IconComponent: React.ElementType
  title: string
}

const TechnologyCard = ({
  IconComponent,
  title,
  className,
  ...props
}: TechnologyCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-2 rounded-lg bg-gradient-to-tl from-purple-600/30 to-purple-800/30 p-8',
        className,
      )}
      {...props}
    >
      <div className="h-14 min-w-16 rounded-md">
        <IconComponent className="h-full w-full" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  )
}

export default TechnologyCard
