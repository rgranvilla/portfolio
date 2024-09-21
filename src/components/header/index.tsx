import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

import Logo from '@/assets/logo.svg'

import { Button } from '../ui/button'

export function Header() {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between pb-8 pt-16">
        <div>
          <Image src={Logo} alt="" />
        </div>

        <div className="flex w-24 justify-between">
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
