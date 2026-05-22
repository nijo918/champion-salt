const advantages = [
  {
    title: 'Durability',
    body: 'Salt products packaged and supplied to hold up through handling, storage and transport.',
  },
  {
    title: 'Versatility',
    body: 'Retail packs, industrial grades, bulk supply and export-ready specifications for different use cases.',
  },
  {
    title: 'Quality',
    body: 'Consistent product standards and attention to detail from sourcing through packaging.',
  },
  {
    title: 'Cost-effectiveness',
    body: 'Practical supply options that help buyers manage volume, packaging and logistics efficiently.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 text-slate-800">
      <div className="container-premium">
        <h2 className="mb-12 text-3xl font-extrabold text-slate-900 md:text-4xl">
          Reasons clients have trusted us for over <span className="text-red-600">25+ years</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <div key={item.title}>
              <h3 className="mb-4 text-xl font-extrabold text-slate-900">
                {item.title}
              </h3>
              <div className="mb-4 h-1 w-12 rounded-full bg-red-600" />
              <p className="leading-7 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
