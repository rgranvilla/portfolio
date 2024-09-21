'use client'
import { Button } from './ui/button'

// Faz o componente ser um Client Component

interface DownloadButtonProps {
  path: string
  title: string
  suggestedFileName?: string
}

export default function DownloadButton({
  path,
  title,
  suggestedFileName,
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
      size="lg"
      className="text-md border-purple-500"
      onClick={handleDownload}
    >
      {title}
    </Button>
  )
}
