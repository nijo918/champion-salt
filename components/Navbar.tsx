'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Bulk Supply', href: '/services' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed left-0 right-0 top-0 z-[1000] bg-white shadow-sm">
      <div className="bg-[#151a20] text-white">
        <div className="container-premium flex h-8 items-center justify-end gap-6 text-xs font-bold">
          <span className="hidden items-center gap-1 sm:flex">
            <Phone size={14} /> +44 7572 396710
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={14} /> Harare Zimbabwe
          </span>
          <a
            href="https://wa.me/447572396710"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp support"
            className="rounded-sm bg-slate-700 p-1 text-white"
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>

      <div className="container-premium flex h-[104px] items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Logo />
          <span>
            <span className="block text-2xl font-extrabold text-slate-900">Champion Salt</span>
            <span className="block text-sm italic text-slate-500">Quality in Every Crystal</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href || (item.href === '/#about' && pathname === '/')
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-3 text-sm font-bold uppercase transition ${
                  isActive ? 'rounded-sm bg-red-600 text-white' : 'text-slate-700 hover:text-red-600'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-slate-300 text-slate-800 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-premium flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-slate-100 py-4 text-left text-sm font-bold uppercase text-slate-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
