export default function About() {
  return (
    <section id="about" className="bg-white py-20 text-slate-800">
      <div className="container-premium">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-lg font-semibold text-ocean-blue">We've got you covered!</p>
            <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Welcome to Champion Salt.
            </h2>
          </div>

          <div className="space-y-5 text-[17px] leading-8 text-slate-600">
            <p>
              Champion Salt supplies dependable natural salt products for retail shelves, food production, hospitality,
              industrial processes and export markets.
            </p>
            <p>
              We focus on practical supply: consistent grading, reliable packaging, responsive service and salt products
              that perform well in Zimbabwean and regional conditions.
            </p>
            <p>
              When you need quality, affordable salt for your business, factory, farm, kitchen or distribution network,
              Champion Salt is ready to advise on the best specification for your needs.
            </p>
            <a
              href="#products"
              className="inline-flex rounded-sm bg-red-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white hover:bg-red-700"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
