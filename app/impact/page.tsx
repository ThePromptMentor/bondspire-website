
import ImpactMetrics from '@/components/impact-metrics'

export const metadata = {
  title: 'Our Impact | Bondspire',
  description: 'See the meaningful impact we\'re making in communities across the nation through our generational wealth building initiatives.',
}

export default function ImpactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-bond-blue to-spire-pink">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-4">
            Our Impact
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Measuring progress in building generational wealth and community resilience
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-midnight-navy mb-4">
              Progress Toward Our Mission
            </h2>
            <p className="text-lg text-slate-gray max-w-3xl mx-auto">
              While we're in our early stages, we're already making meaningful strides toward our vision of generational wealth equality.
            </p>
          </div>

          <ImpactMetrics />

          <div className="mt-16 bg-sky-tint p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-montserrat font-bold text-midnight-navy mb-4">
                Early-Stage Progress
              </h3>
              <p className="text-slate-gray mb-6 max-w-2xl mx-auto">
                As a startup focused on systemic change, we're building the foundation for lasting impact through research, community engagement, and strategic partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/community" className="btn-primary">
                  Join Our Community
                </a>
                <a href="/resources" className="btn-secondary">
                  View Our Research
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
