
export const metadata = {
  title: 'Research | Bondspire',
  description: 'Research and reports on social impact and wealth building.',
}

export default function ResearchPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-bond-blue to-spire-pink">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-4">
            Research
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Coming Soon - Research and reports on social impact
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-content text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-montserrat font-bold text-midnight-navy mb-6">
              Research in Progress
            </h2>
            <p className="text-slate-gray mb-8">
              We're conducting research on financial inequality, community resilience, 
              and systemic change. Our findings will be published here soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/community" className="btn-primary">
                Join Our Community
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
