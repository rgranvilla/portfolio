'use client'
import Link from 'next/link'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface SpanCallProps extends ComponentProps<'span'> {
  label: string
  message: string
  phoneNumber: string
}

export function SpanCall({
  label,
  message,
  phoneNumber,
  ...props
}: SpanCallProps) {
  return (
    <span className={cn('font-semibold', props.className)} {...props}>
      <Link href={`https://wa.me/${phoneNumber}?text=${message}`}>{label}</Link>
    </span>
  )
}
