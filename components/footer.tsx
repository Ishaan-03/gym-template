// eslint-disable-next-line react-hooks/rules-of-hooks

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-green-500/20 bg-black">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="text-sm text-gray-400">
              FitLife is dedicated to helping you achieve your fitness goals with top-notch facilities and expert guidance.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link className="hover:text-green-500" href="/programs">Programs</Link>
              </li>
              <li>
                <Link className="hover:text-green-500" href="/trainers">Trainers</Link>
              </li>
              <li>
                <Link className="hover:text-green-500" href="/membership">Membership</Link>
              </li>
              <li>
                <Link className="hover:text-green-500" href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Fitness Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@fitlife.com</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-gray-400">Subscribe to get updates on new programs and special offers.</p>
            <div className="flex gap-2">
              <Input className="bg-black border-green-500/20" placeholder="Enter your email" type="email" />
              <Button className="bg-green-500 hover:bg-green-600">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-500/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2024 FitLife. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-green-500">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

