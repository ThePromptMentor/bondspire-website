
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  DollarSign,
  BookOpen,
  Zap,
  Shield,
  Clock,
  Target,
  Heart,
  Mail
} from 'lucide-react'
import ContactForm from '@/components/forms/contact-form'
import NewsletterSignup from '@/components/forms/newsletter-signup'

export const metadata: Metadata = {
  title: 'Products | Solutions by Bondspire',
  description: 'Discover Bondspire\'s innovative products addressing financial inequality, community resilience, and educational access.',
  keywords: ['wealth building framework', 'financial products', 'community solutions', 'educational tools'],
  openGraph: {
    title: 'Products | Solutions by Bondspire',
    description: 'Discover Bondspire\'s innovative products addressing financial inequality, community resilience, and educational access.',
    url: 'https://wearebondspire.com/products',
  },
}

const productFeatures = [
  {
    icon: Shield,
    title: 'Transparent Pricing',
    description: 'No hidden fees, clear costs, fair value for every family'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Connect with other families on the same journey'
  },
  {
    icon: BookOpen,
    title: 'Educational Resources',
    description: 'Step-by-step guides, workshops, and expert insights'
  },
  {
    icon: Target,
    title: 'Measurable Results',
    description: 'Track your progress with clear metrics and milestones'
  },
  {
    icon: Clock,
    title: 'Flexible Timeline',
    description: 'Work at your own pace with family-friendly scheduling'
  },
  {
    icon: Heart,
    title: 'Values-Aligned',
    description: 'Building wealth without compromising your principles'
  }
]

const frameworkModules = [
  {
    module: 'Module 1',
    title: 'Foundation Building',
    duration: '2-3 weeks',
    topics: ['Financial assessment', 'Goal setting', 'Mindset development', 'Community connection'],
    outcome: 'Clear understanding of your starting point and destination'
  },
  {
    module: 'Module 2', 
    title: 'Wealth Strategy',
    duration: '3-4 weeks',
    topics: ['Income optimization', 'Expense reduction', 'Investment basics', 'Risk management'],
    outcome: 'Personalized wealth-building strategy tailored to your situation'
  },
  {
    module: 'Module 3',
    title: 'Implementation',
    duration: '4-6 weeks', 
    topics: ['Account setup', 'Automation systems', 'Progress tracking', 'Obstacle navigation'],
    outcome: 'Active wealth-building systems running on autopilot'
  },
  {
    module: 'Module 4',
    title: 'Acceleration',
    duration: '6-8 weeks',
    topics: ['Advanced strategies', 'Tax optimization', 'Estate planning', 'Generational transfer'],
    outcome: 'Optimized systems for maximum long-term wealth creation'
  },
  {
    module: 'Module 5',
    title: 'Community Impact',
    duration: 'Ongoing',
    topics: ['Teaching others', 'Community investment', 'Social impact', 'Legacy building'],
    outcome: 'Contributing to community wealth and breaking generational patterns'
  }
]

const testimonials = [
  {
    quote: 'This framework finally made wealth building accessible to our middle-class family. The transparency and community support made all the difference.',
    author: 'Jessica M.',
    role: 'Teacher and Mother of Two',
    result: 'Increased net worth by $45,000 in first year',
    image: '/images/testimonials/jessica-m.jpg'
  },
  {
    quote: 'I was skeptical about another financial program, but the radical transparency and no-sales approach won me over. Real results, real community.',
    author: 'Marcus R.',
    role: 'Small Business Owner',
    result: 'Eliminated $18,000 in debt in 8 months',
    image: '/images/testimonials/marcus-r.jpg'
  },
  {
    quote: 'The community aspect is what sets this apart. Having other families on the same journey provides accountability and encouragement.',
    author: 'Sarah & David L.',
    role: 'Working Parents',
    result: 'Built 6-month emergency fund and started investing',
    image: '/images/testimonials/sarah-david-l.jpg'
  }
]

const upcomingProducts = [
  {
    title: 'Community Resilience Toolkit',
    description: 'Resources for building stronger local connections and mutual aid networks',
    expectedLaunch: 'Summer 2025',
    features: ['Event planning guides', 'Mutual aid frameworks', 'Conflict resolution tools', 'Community assessment methods']
  },
  {
    title: 'Educational Access Platform',
    description: 'Alternative credentialing system focused on practical skills over traditional degrees',
    expectedLaunch: 'Fall 2025', 
    features: ['Skills-based assessments', 'Portfolio development', 'Peer learning networks', 'Industry partnerships']
  },
  {
    title: 'Transparency Reporting Tools',
    description: 'Software for organizations to implement radical transparency practices',
    expectedLaunch: 'Early 2026',
    features: ['Automated reporting', 'Stakeholder dashboards', 'Impact measurement', 'Public accountability systems']
  }
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-sky-tint to-white">
        <div className="absolute inset-0 bg-hero-gradient opacity-10" />
        <div className="relative z-10 container-content text-center">
          <h1 className="text-heading-1 font-montserrat font-bold text-midnight-navy mb-6">
            Solutions That Create Real Change
          </h1>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed mb-8">
            Our products address the root causes of societal challenges with transparency, 
            community support, and measurable results. No gimmicks, no hidden agendas—just 
            proven solutions that work.
          </p>
          <Link href="#wealth-framework" className="btn-primary">
            Explore Our Framework
          </Link>
        </div>
      </section>

      {/* The Generational Wealth Framework - Featured Product */}
      <section id="wealth-framework" className="section-padding bg-white">
        <div className="container-content">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-bond-blue/10 px-4 py-2 rounded-full mb-4">
              <Star className="w-5 h-5 text-bond-blue" />
              <span className="text-bond-blue font-montserrat font-semibold text-sm">Featured Product</span>
            </div>
            <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4">
              The Generational Wealth Framework
            </h2>
            <p className="text-body text-slate-gray max-w-3xl mx-auto leading-relaxed">
              A comprehensive, transparent approach to building lasting financial security for 
              middle-class families. No more one-size-fits-all advice that doesn't work for real life.
            </p>
          </div>

          {/* Product Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-sky-tint to-white rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/products/wealth-framework-dashboard.jpg"
                  alt="Generational Wealth Framework dashboard interface"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-montserrat font-bold text-bond-blue">1,247+</div>
                  <div className="text-xs text-slate-gray">Families Served</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-montserrat font-bold text-spire-pink">4.8/5</div>
                  <div className="text-xs text-slate-gray">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h3 className="font-montserrat font-bold text-2xl text-midnight-navy mb-4">
                What Makes This Different?
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-bond-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-montserrat font-semibold text-midnight-navy">Radical Transparency</h4>
                    <p className="text-slate-gray text-sm">All fees upfront, no hidden costs, open about limitations and realistic timelines.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-bond-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-montserrat font-semibold text-midnight-navy">Community-Centered</h4>
                    <p className="text-slate-gray text-sm">Connect with other families, share experiences, and support each other's progress.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-bond-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-montserrat font-semibold text-midnight-navy">Real-World Focused</h4>
                    <p className="text-slate-gray text-sm">Designed for families with jobs, kids, and real-life constraints—not trust fund babies.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-bond-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-montserrat font-semibold text-midnight-navy">Measurable Results</h4>
                    <p className="text-slate-gray text-sm">Track your progress with clear metrics and celebrate milestones with your community.</p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-sky-tint/30 rounded-lg p-6 mb-6">
                <h4 className="font-montserrat font-bold text-midnight-navy mb-2">Transparent Pricing</h4>
                <div className="text-3xl font-montserrat font-bold text-bond-blue mb-1">$497</div>
                <p className="text-slate-gray text-sm mb-4">One-time payment, lifetime access, no recurring fees</p>
                <div className="text-xs text-slate-gray">
                  <div>✓ Complete 5-module framework</div>
                  <div>✓ Community access</div>
                  <div>✓ Monthly group coaching</div>
                  <div>✓ Resource library</div>
                  <div>✓ Progress tracking tools</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#early-access" className="btn-primary flex-1 text-center">
                  Request Early Access
                </Link>
                <Link href="#learn-more" className="btn-secondary flex-1 text-center">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Framework Features */}
          <div className="mb-20">
            <h3 className="font-montserrat font-bold text-2xl text-midnight-navy text-center mb-12">
              Everything You Need to Succeed
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productFeatures.map((feature) => (
                <div key={feature.title} className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-bond-blue to-spire-pink rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-montserrat font-bold text-midnight-navy mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-slate-gray text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Framework Modules */}
          <div id="learn-more" className="mb-20">
            <h3 className="font-montserrat font-bold text-2xl text-midnight-navy text-center mb-12">
              The Complete Framework
            </h3>
            
            <div className="space-y-6">
              {frameworkModules.map((module, index) => (
                <div key={module.module} className="bg-white border border-sky-tint rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                      <div className="w-12 h-12 bg-bond-blue text-white rounded-full flex items-center justify-center font-montserrat font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-montserrat font-bold text-midnight-navy">{module.title}</h4>
                        <p className="text-bond-blue text-sm">{module.module} • {module.duration}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-montserrat font-semibold text-midnight-navy mb-2">Topics Covered</h5>
                      <ul className="space-y-1">
                        {module.topics.map((topic) => (
                          <li key={topic} className="flex items-center text-slate-gray text-sm">
                            <CheckCircle className="w-4 h-4 text-bond-blue mr-2 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-montserrat font-semibold text-midnight-navy mb-2">Expected Outcome</h5>
                      <p className="text-slate-gray text-sm leading-relaxed">{module.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h3 className="font-montserrat font-bold text-2xl text-midnight-navy text-center mb-12">
              Real Results from Real Families
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-midnight-navy">{testimonial.author}</h4>
                      <p className="text-slate-gray text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-gray text-sm leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="bg-bond-blue/10 rounded-lg p-3">
                    <p className="text-bond-blue font-montserrat font-semibold text-sm">
                      {testimonial.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Form */}
      <section id="early-access" className="section-padding bg-sky-tint/50">
        <div className="container-content">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4">
                Request Early Access
              </h2>
              <p className="text-body text-slate-gray leading-relaxed">
                Join our next cohort starting March 2025. Limited to 50 families to ensure 
                personalized attention and strong community connections.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg">
              <ContactForm variant="full" />
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Products */}
      <section id="coming-soon" className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-16">
            <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4">
              Coming Soon
            </h2>
            <p className="text-body text-slate-gray max-w-3xl mx-auto leading-relaxed">
              We're developing additional solutions to address all five pillars of societal challenge. 
              Get notified when these products become available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {upcomingProducts.map((product) => (
              <div key={product.title} className="bg-gradient-to-br from-sky-tint/30 to-white rounded-lg p-6 shadow-lg">
                <div className="mb-4">
                  <h3 className="font-montserrat font-bold text-midnight-navy mb-2">
                    {product.title}
                  </h3>
                  <p className="text-slate-gray text-sm leading-relaxed mb-3">
                    {product.description}
                  </p>
                  <div className="inline-flex items-center space-x-2 bg-bond-blue/10 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-bond-blue" />
                    <span className="text-bond-blue font-montserrat font-semibold text-xs">
                      {product.expectedLaunch}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center text-slate-gray text-sm">
                      <Zap className="w-4 h-4 text-gradient-purple mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter CTA for Updates */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-bond-blue to-spire-pink rounded-lg p-8 text-white">
              <h3 className="font-montserrat font-bold text-xl mb-4">
                Be First to Know
              </h3>
              <p className="mb-6 leading-relaxed max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to hear about new product launches, 
                early access opportunities, and exclusive community updates.
              </p>
              
              <div className="max-w-md mx-auto">
                <NewsletterSignup 
                  variant="modal" 
                  showInterests={false}
                  className="bg-white/10 backdrop-blur border border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
