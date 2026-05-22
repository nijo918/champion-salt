import Image from 'next/image'

const serviceGroups = [
  {
    title: 'Salt products for homes, retail and foodservice.',
    body: 'Fine table salt, consumer packs and hospitality-ready products supplied with clean packaging and consistent quality.',
    cta: 'View Products',
    link: '/champion-salt/products/',
    image: '/champion-salt/assets/saltproducts.jpeg',
  },
  {
    title: 'Bulk salt supply for industrial and export markets.',
    body: 'Industrial grades, wholesale packs and custom bulk supply for manufacturers, distributors, agriculture and export buyers.',
    cta: 'View Services',
    link: '/champion-salt/services/',
    image: '/champion-salt/assets/industrialgradesalt.jpeg',
  },
]

export default function Products() {
  return (
    <section id="products" className="bg-slate-100 py-20">
      <div className="container-premium">
        <div className="grid gap-8 lg:grid-cols-2">
          {serviceGroups.map((group) => (
            <article key={group.title} className="bg-white shadow-sm">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={group.image}
                  alt={group.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="mb-4 text-2xl font-extrabold leading-tight text-slate-900">{group.title}</h3>
                <p className="mb-8 leading-7 text-slate-600">{group.body}</p>
                <a href={group.link} className="btn-primary">
                  {group.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
