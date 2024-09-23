import { type ComponentProps, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
}

export const Section: React.FC<SectionProps> = ({ children }) => {
  return <div className="mb-8 w-full">{children}</div>
}

interface SectionTitleProps extends ComponentProps<'h1'> {}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1
      className={cn('mb-4 text-lg font-semibold md:text-2xl', className)}
      {...props}
    >
      {children}
    </h1>
  )
}

interface SectionContentProps extends ComponentProps<'div'> {}

export const SectionContent: React.FC<SectionContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('mt-2', className)} {...props}>
      {children}
    </div>
  )
}
