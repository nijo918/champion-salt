import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

const services = [
  {
    title: 'Bulk Industrial Supply',
    description: 'Large-scale salt supply for manufacturing, chemical processing, and industrial operations. Reliable delivery and consistent quality.',
    image: '/champion-salt/assets/industrialgradesalt.jpeg',
    specs: ['Industrial grade', 'Custom sizing', 'Bulk discounts', 'Fleet delivery'],
  },
  {
    title: 'Agricultural Salt',
    description: 'De-icing salt and agricultural-grade products for farms, livestock operations, and seasonal needs.',
    image: '/champion-salt/assets/agricsalt.jpeg',
    specs: ['Livestock-safe', 'De-icing grade', 'Seasonal supply', 'Competitive pricing'],
  },
  {
    title: 'Export Solutions',
    description: 'International-certified salt products packaged and prepared for export to regional and global markets.',
    image: '/champion-salt/assets/hero-salt-production.jpeg',
    specs: ['Export certified', 'International standards', 'Custom packaging', 'Documentation support'],
  },
  {
    title: 'Distribution & Logistics',
    description: 'Comprehensive distribution network across Zimbabwe and southern Africa. We handle transport, storage, and inventory management.',
    image: '/champion-salt/assets/hero-salt-truck.jpeg',
    specs: ['Fleet logistics', 'Warehouse storage', 'Inventory tracking', 'Timely delivery'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-slate-50 py-20 pt-[200px]">
          <div className="container-premium">
            <div className="mb-16 text-center">
              <p className="mb-3 text-lg font-semibold text-red-600">Our Services</p>
              <h1 className="mb-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                Industrial & Export Solutions
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Champion Salt supplies bulk salt and comprehensive services to industrial, agricultural, and export markets.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="mb-3 text-2xl font-bold text-slate-900">{service.title}</h3>
                    <p className="mb-6 text-slate-600">{service.description}</p>
                    <div className="mb-8 space-y-2">
                      {service.specs.map((spec) => (
                        <p key={spec} className="flex items-center text-sm text-slate-700">
                          <span className="mr-3 inline-block h-2 w-2 rounded-full bg-red-600"></span>
                          {spec}
                        </p>
                      ))}
                    </div>
                    <a
                      href="/champion-salt/contact/"
                      className="inline-flex rounded-sm bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-normal text-white hover:bg-red-700"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-lg bg-slate-100 p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">Need a custom supply solution?</h2>
              <p className="mb-8 text-lg text-slate-600">Our team can work with you to develop the perfect salt supply arrangement for your business.</p>
              <a
                href="/champion-salt/contact/"
                className="inline-flex rounded-sm bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-normal text-white hover:bg-red-700"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
