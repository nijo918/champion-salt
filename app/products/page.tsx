'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

const products = [
  {
    title: 'Fine Table Salt',
    description:
      'Premium quality table salt for household use. Pure, mineral-rich and perfect for everyday cooking.',
    image: '/assets/saltproducts.jpeg',
    specs: ['Fine grain', 'Iodized option available', '500g & 1kg packs'],
  },
  {
    title: 'Coarse Salt',
    description: 'Larger crystals ideal for preserving, pickling, and industrial applications.',
    image: '/assets/hero-salt-production.jpeg',
    specs: ['Larger crystals', 'Food-grade', 'Bulk packaging available'],
  },
  {
    title: 'Hospitality Packs',
    description: 'Custom packaged salt solution for restaurants, hotels, and food service businesses.',
    image: '/assets/hospitalitypacks.jpeg',
    specs: ['Customizable branding', 'Restaurant-ready', 'Competitive pricing'],
  },
  {
    title: 'Specialty Salt Blends',
    description:
      'Curated salt blends with herbs and minerals for gourmet cooking and health-conscious consumers.',
    image: '/assets/specialtyblends.jpeg',
    specs: ['Himalayan blend', 'Mineral fortified', 'Premium packaging'],
  },
]

type Product = (typeof products)[number]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg dark:bg-salt-crystal/10">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="p-8">
        <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-salt-white">{product.title}</h3>
        <p className="mb-6 text-slate-600 dark:text-slate-300">{product.description}</p>
        <div className="mb-8 space-y-2">
          {product.specs.map((spec) => (
            <p key={spec} className="flex items-center text-sm text-slate-700 dark:text-slate-200">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-red-500/90 dark:bg-red-400/70" />
              {spec}
            </p>
          ))}
        </div>
        <a
          href="/contact"
          className="inline-flex rounded-sm bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-normal text-white hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-300 dark:focus-visible:ring-red-500/60"
        >
          Request quote
        </a>
      </div>
    </div>
  )
}

function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-salt-crystal/10">
      <div className="relative h-64 overflow-hidden">
        <div className="h-full w-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
      </div>
      <div className="p-8">
        <div className="mb-4 h-6 w-2/3 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
        <div className="mb-6 space-y-2">
          <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
        </div>
        <div className="mb-8 space-y-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-red-400/50 dark:bg-red-300/40 animate-pulse" />
              <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            </div>
          ))}
        </div>
        <div className="h-11 w-40 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
      </div>
    </div>
  )
}

export default function ProductsPage() {
  // Note: Skeleton + search are purely client-side for smoother UX.

  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setIsLoading(false), 650)
    return () => window.clearTimeout(t)
  }, [])

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return products
    return products.filter((p) => {
      const haystack = [p.title, p.description, ...p.specs].join(' ').toLowerCase()
      return haystack.includes(q)
    })
  }, [query])

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-slate-50 py-20 pt-[200px] dark:bg-ocean-deep">
          <div className="container-premium">
            <div className="mb-16 text-center">
              <p className="mb-3 text-lg font-semibold text-red-600 dark:text-red-300/90">Our Products</p>
              <h1 className="mb-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl dark:text-salt-white">
                Premium Salt for Every Need
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                Find the right grade fast—focused on <span className="text-red-600 dark:text-red-300/90 font-semibold">quality</span>,
                reliable supply, and practical packaging for real-world use.
              </p>
            </div>

            {/* Search + scrollable results */}
            <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <label className="sr-only" htmlFor="products-search">
                Search products
              </label>
              <div className="relative">
                <input
                  id="products-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type to search (e.g., fine, iodized, bulk)…"
                  className="w-full rounded-sm border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-red-300 focus:ring-2 focus:ring-red-200 dark:border-white/10 dark:bg-salt-crystal/10 dark:text-salt-white dark:placeholder:text-slate-500"
                />
              </div>

              <button
                type="button"
                className="btn-secondary rounded-sm bg-red-600 px-6 py-3"
                onClick={() => setQuery('')}
                aria-label="Clear search"
              >
                Clear
              </button>
            </div>

            <div className="rounded-lg">
              <div className="max-h-[720px] overflow-y-auto pr-1">
                {isLoading ? (
                  <div className="grid gap-8 md:grid-cols-2">
                    {[0, 1, 2, 3].map((i) => (
                      <ProductCardSkeleton key={i} />
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-8 md:grid-cols-2">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.title} product={product} />
                    ))}

                    {filteredProducts.length === 0 && (
                      <div className="md:col-span-2 rounded-lg bg-white p-10 text-center shadow-sm dark:bg-salt-crystal/10">
                        <p className="text-lg font-bold text-slate-900 dark:text-salt-white">No matches found</p>
                        <p className="mt-2 text-slate-600 dark:text-slate-300">
                          Try a different keyword like <span className="text-red-600 dark:text-red-300/90 font-semibold">bulk</span>,{' '}
                          <span className="text-red-600 dark:text-red-300/90 font-semibold">iodized</span>, or <span className="text-red-600 dark:text-red-300/90 font-semibold">fine</span>.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-16 rounded-lg bg-slate-100 p-12 text-center dark:bg-slate-800">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-salt-white">
                Interested in a custom blend?
              </h2>
              <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
                We can create tailored salt products for your specific requirements—tell us what you need and we’ll respond fast.
              </p>
              <a
                href="/contact"
                className="inline-flex rounded-sm bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-normal text-white hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-300 dark:focus-visible:ring-red-500/60"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

