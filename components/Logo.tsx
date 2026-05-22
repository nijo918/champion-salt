'use client'

import Image from 'next/image'

export default function Logo() {
  return (
    <div className="relative h-16 w-16 overflow-hidden rounded-3xl bg-white/5 ring-1 ring-slate-200 shadow-lg shadow-slate-900/10">
      <Image
        src="/assets/logo.jpeg"
        alt="Champion Salt logo"
        fill
        priority
        sizes="64px"
        className="object-cover"
      />
    </div>
  )
}

