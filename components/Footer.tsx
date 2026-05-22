'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone, X } from 'lucide-react'
import Logo from './Logo'

const WHATSAPP_URL = 'https://wa.me/447572396710'

const social = [
  {
    label: 'Facebook',
    href: WHATSAPP_URL,
    Icon: Facebook,
  },
  {
    label: 'LinkedIn',
    href: WHATSAPP_URL,
    Icon: Linkedin,
  },
  {
    label: 'Instagram',
    href: WHATSAPP_URL,
    Icon: Instagram,
  },
  {
    label: 'X',
    href: WHATSAPP_URL,
    Icon: X,
  },
] as const

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.04 3.2c-7.1 0-12.84 5.7-12.84 12.74 0 2.23.6 4.3 1.65 6.12L2 28.8l6.93-2c1.74.95 3.73 1.49 5.86 1.49 7.1 0 12.84-5.7 12.84-12.74 0-7.04-5.74-12.35-12.59-12.35Zm7.4 18.18c-.39 1.07-2.24 2.07-3.04 2.22-.81.14-1.77.2-2.85-.17-1.04-.37-2.25-.9-3.66-2.2-1.73-1.56-2.85-3.47-3.09-3.85-.24-.39-.71-1.7-.08-2.79.62-1.07 1.39-1.62 1.9-1.62.47 0 .78.02 1.06.61.28.59.95 2.01 1.02 2.15.07.14.12.31.02.48-.1.17-.16.31-.31.48-.14.17-.3.31-.42.45-.14.14-.29.3-.13.58.15.28.69 1.13 1.48 1.83 1.01.89 1.85 1.14 2.12 1.27.27.13.43.11.6-.07.17-.17.69-.81.88-1.09.2-.28.39-.23.66-.14.28.1 1.77.82 2.08.97.31.15.51.23.58.35.07.12.07.7-.31 1.77Z"
        fill="#25D366"
      />
    </svg>
  )
}

export default function Footer() {
  const whatsappText = 'Chat with Stanley on WhatsApp'

  return (
    <footer className="bg-[#1a1a1a] text-slate-200">
      {/* Pre-footer newsletter */}
      <section className="border-b border-white/10 bg-[#151a20] py-10">
        <div className="container-premium">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Stay Updated</p>
              <h2 className="mt-2 text-2xl font-extrabold text-white md:text-3xl">
                Stay Updated on Export Availability & New Products
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Join our trade partners mailing list</p>
            </div>

            <form
              className="w-full md:max-w-md"
              onSubmit={(e) => {
                e.preventDefault()
              }}
              aria-label="Newsletter subscription"
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  className="premium-input"
                  placeholder="you@example.com"
                  required
                />
                <button type="submit" className="btn-primary flex-1">
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-xs text-slate-400">By subscribing, you agree to receive emails from Champion Salt.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <div className="container-premium py-14">
        {/* WhatsApp CTA */}
        <div className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#25D366]" />
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Fast WhatsApp Support</p>
          </div>

          <a
            href={WHATSAPP_URL}
            className="whatsapp-btn inline-flex items-center gap-3 rounded-sm px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition duration-300 hover:opacity-95"
            aria-label={whatsappText}
          >
            <WhatsAppIcon className="h-5 w-5" />
            {whatsappText}
          </a>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14">
                <Logo />
              </div>
              <div>
                <p className="text-lg font-extrabold text-white">Champion Salt</p>
                <p className="text-xs italic text-slate-400">Quality in Every Crystal.</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400">
              Zimbabwe's premium sea salt producer for homes, industries, hospitality and export markets.
            </p>

            <p className="text-sm font-bold text-white">
              <span aria-hidden="true">🇿🇼</span> Proudly Zimbabwean
            </p>

            <div className="flex items-center gap-3 pt-2">
              {social.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white hover:text-[#1a1a1a]"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white">Quick Links</h3>
            <div className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/#about' },
                { label: 'Products', href: '/products' },
                { label: 'Process', href: '/services' },
                { label: 'Industries', href: '/services' },
                { label: 'Careers', href: '/#careers' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white">Products</h3>
            <div className="space-y-3">
              {[
                'Table Salt',
                'Industrial Salt',
                'Bulk Supply',
                'Export Packs',
                'Custom Orders',
                'Request Quote',
              ].map((label) => (
                <Link
                  key={label}
                  href={label === 'Request Quote' ? '/contact' : '/products'}
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white">Contact</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div>
                <p className="text-slate-400">Address</p>
                <p className="text-white/90">Harare, Zimbabwe</p>
              </div>
              <div>
                <p>Phone</p>
                <a href="tel:+447572396710" className="hover:text-white">
                  +44 7572 396710
                </a>
              </div>
              <div>
                <p>Email</p>
                <a
                  href="mailto:hello@championsalt.co.zw"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Mail size={14} /> hello@championsalt.co.zw
                </a>
              </div>
              <div className="pt-2">
                <p className="mb-1">Stanley WhatsApp</p>
                <a
                  href={WHATSAPP_URL}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white/90 transition hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Stanley on WhatsApp"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>

              <div className="pt-2">
                <p className="mb-1">Business Hours</p>
                <p>Mon–Fri: 8:00–17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {['ISO Certified', 'ZABS Approved', 'Export Ready', '100% Natural', 'Halal Friendly'].map((b) => (
              <div
                key={b}
                className="rounded-sm border border-white/10 bg-white/5 px-3 py-3 text-center text-xs font-bold uppercase tracking-[0.08em] text-white/90"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom legal bar */}
      <div className="border-t border-white/10 bg-[#121212] py-5">
        <div className="container-premium flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2025 Champion Salt (Pvt) Ltd | Registered in Zimbabwe</div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map((label) => (
              <a key={label} href="#" className="hover:text-white">
                {label}
              </a>
            ))}
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">
              Right: Designed with <span aria-hidden="true">♦</span> in Zimbabwe
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

