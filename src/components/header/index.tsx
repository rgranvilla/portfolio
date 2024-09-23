import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

import Logo from '@/assets/logo.svg'
import { cn } from '@/lib/utils'

import DownloadButton from '../downloadButton'
import { Button } from '../ui/button'

export function Header() {
  return (
    <header>
      <div
        className={cn(
          'container mx-auto flex items-center justify-between px-8 pt-4',
          'md:px-0 md:pt-16',
        )}
      >
        <div>
          <Image src={Logo} alt="" />
        </div>

        <div className="flex w-fit justify-between gap-4">
          <DownloadButton
            className="hidden md:flex"
            path="cv.pdf"
            title="Donwload CV"
            suggestedFileName="CV-Ricardo Granvilla.pdf"
          />
          <Button variant="secondary" size="icon" asChild>
            <Link
              href="https://www.linkedin.com/in/rgranvilla/"
              target="_blank"
            >
              <FaLinkedinIn className="size-7" />
            </Link>
          </Button>
          <Button variant="secondary" size="icon" asChild>
            <Link href="https://github.com/rgranvilla" target="_blank">
              <FaGithub className="size-7" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
