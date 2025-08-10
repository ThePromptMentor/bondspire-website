


export const metadata = {
  title: 'Transparency | Bondspire',
  description: 'Our commitment to radical transparency in everything we do - from financials to decision-making processes.',
}

export default function TransparencyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-bond-blue to-spire-pink">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-4">
            Radical Transparency
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Building trust through openness and accountability in everything we do
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-midnight-navy mb-6">
                Our Commitment to Openness
              </h2>
              <p className="text-lg text-slate-gray mb-6">
                Transparency isn't just a value for us—it's the foundation of everything we do. We believe that meaningful change requires complete openness about our processes, progress, and challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-bond-blue rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-midnight-navy mb-1">Financial Transparency</h3>
                    <p className="text-slate-gray">Open book approach to our funding, expenses, and financial decisions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-bond-blue rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-midnight-navy mb-1">Decision Making</h3>
                    <p className="text-slate-gray">Clear documentation of how and why we make strategic decisions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-bond-blue rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-midnight-navy mb-1">Progress Metrics</h3>
                    <p className="text-slate-gray">Regular updates on our progress, including setbacks and learnings.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-sky-tint p-8 rounded-lg">
              <h3 className="text-2xl font-montserrat font-bold text-midnight-navy mb-6">Coming Soon</h3>
              <p className="text-slate-gray mb-6">
                We're developing comprehensive transparency reports and dashboards that will provide real-time insights into our operations and impact.
              </p>
              <div className="space-y-3">
                <p className="text-sm text-slate-gray">• Quarterly Financial Reports</p>
                <p className="text-sm text-slate-gray">• Impact Measurement Dashboard</p>
                <p className="text-sm text-slate-gray">• Community Decision Logs</p>
                <p className="text-sm text-slate-gray">• Partnership Transparency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-midnight-navy text-white">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">Stay Informed</h2>
          <p className="text-lg text-sky-tint mb-8 max-w-2xl mx-auto">
            Subscribe to our transparency updates and be the first to access our detailed reports and metrics.
          </p>
          <a href="/community#newsletter" className="btn-primary">
            Subscribe to Updates
          </a>
        </div>
      </section>
    </>
  )
}
