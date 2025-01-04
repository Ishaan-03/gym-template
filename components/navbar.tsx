// eslint-disable-next-line react-hooks/rules-of-hooks

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-bold text-white">
          PAVILION
        </Link>
        <nav className="hidden md:flex items-center space-x-12">
          <Link className="text-sm text-gray-400 hover:text-yellow-400 transition-colors" href="/">
            HOME <span className="text-yellow-400 ml-1">01</span>
          </Link>
          <Link className="text-sm text-gray-400 hover:text-yellow-400 transition-colors" href="/about">
            ABOUT <span className="text-yellow-400 ml-1">02</span>
          </Link>
          <Link className="text-sm text-gray-400 hover:text-yellow-400 transition-colors" href="/work">
            WORK <span className="text-yellow-400 ml-1">03</span>
          </Link>
          <Link className="text-sm text-gray-400 hover:text-yellow-400 transition-colors" href="/contact">
            CONTACT <span className="text-yellow-400 ml-1">04</span>
          </Link>
        </nav>
        <MobileNav />
        <Link href="/packages">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-6">
            PACKAGES
          </Button>
        </Link>
      </div>
    </header>
  )
}

