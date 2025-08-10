
export const metadata = {
  title: 'FAQ | Bondspire',
  description: 'Frequently asked questions about Bondspire.',
}

export default function FAQPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-bond-blue to-spire-pink">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-4">
            FAQ
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Coming Soon - Frequently Asked Questions
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-content text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-montserrat font-bold text-midnight-navy mb-6">
              Questions & Answers Coming Soon
            </h2>
            <p className="text-slate-gray mb-8">
              We're compiling the most frequently asked questions about our mission, 
              products, and community. Check back soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Ask a Question
              </a>
              <a href="/" className="btn-secondary">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
