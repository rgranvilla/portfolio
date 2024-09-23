'use client'
import type { ComponentProps } from 'react'

import { Button } from './ui/button'

// Faz o componente ser um Client Component

interface DownloadButtonProps extends ComponentProps<'button'> {
  path: string
  title: string
  suggestedFileName?: string
}

export default function DownloadButton({
  path,
  title,
  suggestedFileName,
  ...props
}: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = path
    link.download = suggestedFileName ?? 'download.pdf'
    link.click()
  }

  return (
    <Button
      variant="gradient"
      className="text-md text-secondary-foreground transition-colors duration-300 ease-in-out hover:brightness-150"
      onClick={handleDownload}
      {...props}
    >
      {title}
    </Button>
  )
}
