
import { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import FivePillars from '@/components/five-pillars'
import ImpactMetrics from '@/components/impact-metrics'
import NewsletterSignup from '@/components/forms/newsletter-signup'
import { ArrowRight, Users, Shield, Target, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Bondspire | Where bonds inspire change',
  description: 'Join Bondspire in solving society\'s greatest challenges through business innovation, radical transparency, and authentic community building.',
  keywords: ['social impact', 'mission-driven business', 'community building', 'financial empowerment'],
  openGraph: {
    title: 'Bondspire | Where bonds inspire change',
    description: 'Join Bondspire in solving society\'s greatest challenges through business innovation, radical transparency, and authentic community building.',
    url: 'https://wearebondspire.com',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        title="Where bonds inspire change"
        subtitle="We're proving business can solve society's greatest challenges through innovation, transparency, and community."
        backgroundImage="/images/hero/community-building-hero.jpg"
        primaryCta={{ text: "Discover Our Mission", href: "/about" }}
        secondaryCta={{ text: "Join the Movement", href: "/community" }}
        showVideo={true}
      />

      {/* The Five Pillars Preview */}
      <FivePillars showAsPreview={true} />

      {/* Impact Metrics */}
      <ImpactMetrics />

      {/* Our Approach Section */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4">
              Our Approach to Change
            </h2>
            <p className="text-body text-slate-gray max-w-3xl mx-auto leading-relaxed">
              We believe lasting change requires a systematic approach built on three foundational principles 
              that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Radical Transparency */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-bond-blue to-gradient-purple rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:shadow-bond-lg transition-all duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-4">
                Radical Transparency
              </h3>
              <p className="text-slate-gray leading-relaxed mb-4">
                We share our failures alongside our successes. Our financial reports, decision-making processes, 
                and impact measurements are open to our community. Transparency builds trust, and trust enables change.
              </p>
              <Link 
                href="/transparency" 
                className="inline-flex items-center text-bond-blue hover:text-spire-pink transition-colors duration-300 group"
              >
                <span className="font-montserrat font-medium">View Our Reports</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Community First */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-gradient-purple to-spire-pink rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:shadow-spire transition-all duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-4">
                Community First
              </h3>
              <p className="text-slate-gray leading-relaxed mb-4">
                Real connections create lasting change. We prioritize authentic relationships over digital metrics, 
                local impact over global scale, and community needs over corporate profits.
              </p>
              <Link 
                href="/community" 
                className="inline-flex items-center text-bond-blue hover:text-spire-pink transition-colors duration-300 group"
              >
                <span className="font-montserrat font-medium">Join Our Community</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Measurable Impact */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-spire-pink to-bond-blue rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:shadow-bond-lg transition-all duration-300">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-4">
                Measurable Impact
              </h3>
              <p className="text-slate-gray leading-relaxed mb-4">
                Good intentions aren't enough. We track every dollar, measure every outcome, and report every result. 
                Public accountability drives authentic progress toward solving real problems.
              </p>
              <Link 
                href="/impact" 
                className="inline-flex items-center text-bond-blue hover:text-spire-pink transition-colors duration-300 group"
              >
                <span className="font-montserrat font-medium">See Our Impact</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="section-padding bg-sky-tint/50">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/products/wealth-framework-preview.jpg"
                  alt="The Generational Wealth Framework interface"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-bond-blue rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-sm text-midnight-navy">1,247+</p>
                    <p className="text-xs text-slate-gray">Families Served</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-spire-pink rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-sm text-midnight-navy">4.8/5</p>
                    <p className="text-xs text-slate-gray">Average Rating</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Content */}
            <div>
              <div className="mb-4">
                <span className="text-bond-blue font-montserrat font-semibold text-sm bg-bond-blue/10 px-3 py-1 rounded-full">
                  Featured Product
                </span>
              </div>
              
              <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4">
                The Generational Wealth Framework
              </h2>
              
              <p className="text-body text-slate-gray mb-6 leading-relaxed">
                Traditional wealth-building advice excludes middle-class families. Our framework provides 
                transparent, accessible strategies that actually work for everyday people—not just the wealthy.
              </p>

              {/* Key Benefits */}
              <div className="space-y-3 mb-8">
                {[
                  'Step-by-step wealth building roadmap',
                  'Transparent fee structure (no hidden costs)',
                  'Community support and accountability',
                  'Real-world case studies from families like yours'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-bond-blue flex-shrink-0" />
                    <span className="text-slate-gray">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products#wealth-framework" className="btn-primary">
                  Explore Framework
                </Link>
                <Link href="/products#early-access" className="btn-secondary">
                  Request Early Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4">
              Ready to Create Change?
            </h2>
            <p className="text-body text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Choose your path to get involved with Bondspire. Whether you're a family seeking financial empowerment 
              or an organization looking to partner, there's a place for you in our movement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* For Families */}
            <div className="bg-gradient-to-br from-sky-tint to-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-bond-blue rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              
              <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-4">
                For Families
              </h3>
              
              <p className="text-slate-gray leading-relaxed mb-6">
                Join a community of families building generational wealth through transparency, 
                mutual support, and proven frameworks.
              </p>

              <ul className="text-left text-slate-gray space-y-2 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-bond-blue mr-2 flex-shrink-0" />
                  Access to wealth building resources
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-bond-blue mr-2 flex-shrink-0" />
                  Community support network
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-bond-blue mr-2 flex-shrink-0" />
                  Monthly workshops and events
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-bond-blue mr-2 flex-shrink-0" />
                  Progress tracking tools
                </li>
              </ul>

              <Link href="/community#join-families" className="btn-primary w-full">
                Join as a Family
              </Link>
            </div>

            {/* For Partners */}
            <div className="bg-gradient-to-br from-white to-sky-tint rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gradient-purple to-spire-pink rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              
              <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-4">
                For Partners
              </h3>
              
              <p className="text-slate-gray leading-relaxed mb-6">
                Collaborate with us to amplify your impact. Together, we can solve problems 
                neither of us could tackle alone.
              </p>

              <ul className="text-left text-slate-gray space-y-2 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-spire-pink mr-2 flex-shrink-0" />
                  Co-create innovative solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-spire-pink mr-2 flex-shrink-0" />
                  Share resources and expertise
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-spire-pink mr-2 flex-shrink-0" />
                  Expand community reach
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-spire-pink mr-2 flex-shrink-0" />
                  Transparent impact reporting
                </li>
              </ul>

              <Link href="/community#partner" className="btn-accent w-full">
                Explore Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="section-padding bg-gradient-to-r from-bond-blue via-gradient-purple to-spire-pink">
        <div className="container-content text-center">
          <h2 className="text-heading-2 font-montserrat font-bold text-white mb-4">
            Stay Connected with Our Progress
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get monthly updates on our impact, new resources, and opportunities to get involved 
            in creating positive change.
          </p>
          
          <div className="max-w-md mx-auto">
            <NewsletterSignup 
              variant="modal" 
              showInterests={false}
              className="bg-white/10 backdrop-blur border border-white/20"
            />
          </div>
        </div>
      </section>
    </>
  )
}
