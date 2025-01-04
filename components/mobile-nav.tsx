// eslint-disable-next-line react-hooks/rules-of-hooks

"use client"

import { useState } from "react"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-white hover:text-yellow-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-[80px] bg-black/95 backdrop-blur-sm border-b border-yellow-400/20 p-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              className="text-gray-400 hover:text-yellow-400 transition-colors px-4 py-2 rounded-lg hover:bg-yellow-400/10" 
              href="/"
              onClick={() => setIsOpen(false)}
            >
              HOME <span className="text-yellow-400 ml-1">01</span>
            </Link>
            <Link 
              className="text-gray-400 hover:text-yellow-400 transition-colors px-4 py-2 rounded-lg hover:bg-yellow-400/10" 
              href="/about"
              onClick={() => setIsOpen(false)}
            >
              ABOUT <span className="text-yellow-400 ml-1">02</span>
            </Link>
            <Link 
              className="text-gray-400 hover:text-yellow-400 transition-colors px-4 py-2 rounded-lg hover:bg-yellow-400/10" 
              href="/work"
              onClick={() => setIsOpen(false)}
            >
              WORK <span className="text-yellow-400 ml-1">03</span>
            </Link>
            <Link 
              className="text-gray-400 hover:text-yellow-400 transition-colors px-4 py-2 rounded-lg hover:bg-yellow-400/10" 
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              CONTACT <span className="text-yellow-400 ml-1">04</span>
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

