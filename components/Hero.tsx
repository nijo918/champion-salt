'use client'

import { useEffect, useState } from 'react'

const slides = [
  {
    src: '/champion-salt/assets/hero-salt-production.jpeg',
    title: 'Welcome to Champion Salt!',
    eyebrow: "We've got you covered!",
    body: 'Reliable salt production and bulk supply for retail, industrial, agricultural and export customers.',
  },
  {
    src: '/champion-salt/assets/hero-salt-bulk.jpeg',
    title: 'Quality salt. Supplied at scale.',
    eyebrow: 'Bulk and industrial supply',
    body: 'From factory floors to distribution networks, we help businesses secure consistent salt volumes.',
  },
  {
    src: '/champion-salt/assets/hero-salt-truck.jpeg',
    title: 'Delivered where your business needs it.',
    eyebrow: 'Regional distribution',
    body: 'Champion Salt supports dependable movement of packaged and bulk salt across Zimbabwe and beyond.',
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative min-h-[550px] overflow-hidden bg-slate-200 pt-[136px] text-slate-800">
      <div className="absolute inset-0">
        <div
          key={slides[activeSlide].src}
          className="hero-slide hero-slide-active"
          style={{ backgroundImage: `url(${slides[activeSlide].src})` }}
        />
      </div>

      <div className="container-premium relative z-10 flex min-h-[414px] items-center py-12">
        <div className="hero-copy-panel w-full max-w-[615px] p-8 md:p-10">
          <p className="mb-4 text-xl font-bold text-slate-700">{slides[activeSlide].eyebrow}</p>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-slate-700 md:text-[34px]">
            {slides[activeSlide].title}
          </h1>
          <div className="mb-4 h-[2px] w-28 bg-red-600" />
          <p className="mb-6 max-w-xl text-base leading-7 text-slate-600">
            {slides[activeSlide].body}
          </p>
          <a href="#about" className="inline-flex rounded-sm bg-red-600 px-5 py-3 text-sm font-extrabold uppercase tracking-normal text-white hover:bg-red-700">
            Read More
          </a>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={`h-3 w-3 rounded-full border border-white shadow transition ${
              index === activeSlide ? 'bg-red-600' : 'bg-white/80'
            }`}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
