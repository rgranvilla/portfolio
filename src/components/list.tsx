import { type ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface ListProps extends ComponentProps<'ul'> {}

export const List: React.FC<ListProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ul
      className={cn('list-inside list-disc px-4 text-slate-400', className)}
      {...props}
    >
      {children}
    </ul>
  )
}

interface ListItemProps extends ComponentProps<'li'> {}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <li className={cn('mb-2', className)} {...props}>
      {children}
    </li>
  )
}
