import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-slate-800 py-20 pt-[200px] text-white">
          <div className="container-premium text-center">
            <div className="mb-6 inline-flex items-center justify-center gap-3 text-sm uppercase tracking-[0.35em] text-red-400">
              <span className="block h-0.5 w-16 bg-red-600"></span>
              CHAMPION SALT
              <span className="block h-0.5 w-16 bg-red-600"></span>
            </div>
            <h1 className="mb-4 text-5xl font-black tracking-tight md:text-6xl">
              <span className="block text-red-600">Champion</span>
              <span className="block text-slate-100">Salt Supply</span>
            </h1>
            <p className="mx-auto mb-4 max-w-3xl text-lg leading-relaxed text-slate-300">
              We have over <span className="font-semibold text-red-500">25 years experience</span> delivering premium salt solutions for homes, retail, industry and export.
            </p>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-slate-300">
              Contact Stanley for personalised service and fast support across every stage of your supply chain.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-slate-700 p-8">
                <h3 className="mb-4 text-xl font-bold">Call Stanley</h3>
                <a href="tel:+447572396710" className="text-lg text-red-400 hover:text-red-300">
                  +44 7572 396710
                </a>
              </div>

              <div className="rounded-lg bg-slate-700 p-8">
                <h3 className="mb-4 text-xl font-bold">Email</h3>
                <a href="mailto:hello@championsalt.co.zw" className="text-lg text-red-400 hover:text-red-300">
                  hello@championsalt.co.zw
                </a>
              </div>

              <div className="rounded-lg bg-slate-700 p-8">
                <h3 className="mb-4 text-xl font-bold">Location</h3>
                <p className="text-lg">Zimbabwe</p>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold">Let's build your supply together.</h2>
              <a
                href="mailto:hello@championsalt.co.zw"
                className="inline-flex rounded-sm bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-normal text-white hover:bg-red-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

