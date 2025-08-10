
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Users, 
  Calendar, 
  Handshake, 
  Heart,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  MessageSquare,
  Award,
  TrendingUp,
  Shield,
  Target,
  BookOpen
} from 'lucide-react'
import NewsletterSignup from '@/components/forms/newsletter-signup'
import PartnershipForm from '@/components/forms/partnership-form'

export const metadata: Metadata = {
  title: 'Community | Join the Movement for Change',
  description: 'Join Bondspire\'s community of families and organizations working together to solve society\'s greatest challenges through transparency and collaboration.',
  keywords: ['community', 'join', 'partnership', 'events', 'collaboration', 'movement'],
  openGraph: {
    title: 'Community | Join the Movement for Change',
    description: 'Join Bondspire\'s community of families and organizations working together to solve society\'s greatest challenges through transparency and collaboration.',
    url: 'https://wearebondspire.com/community',
  },
}

const communityStats = [
  {
    metric: '1,247+',
    label: 'Community Members',
    description: 'Families actively participating in our programs'
  },
  {
    metric: '89',
    label: 'Events Hosted',
    description: 'Local gatherings, workshops, and collaborative sessions'
  },
  {
    metric: '23',
    label: 'Partner Organizations',
    description: 'Aligned organizations amplifying our collective impact'
  },
  {
    metric: '12',
    label: 'Active Cities',
    description: 'Communities with established local networks'
  }
]

const membershipBenefits = [
  {
    icon: Users,
    title: 'Authentic Community',
    description: 'Connect with like-minded families who share your values and commitment to positive change.'
  },
  {
    icon: BookOpen,
    title: 'Exclusive Resources',
    description: 'Access member-only content, frameworks, and tools developed from community feedback.'
  },
  {
    icon: Calendar,
    title: 'Regular Events',
    description: 'Participate in monthly workshops, quarterly gatherings, and annual community conferences.'
  },
  {
    icon: Target,
    title: 'Accountability Support',
    description: 'Stay motivated with goal-setting, progress tracking, and celebration of milestones.'
  },
  {
    icon: MessageSquare,
    title: 'Direct Access',
    description: 'Connect directly with our team and other members through private forums and channels.'
  },
  {
    icon: TrendingUp,
    title: 'Collective Impact',
    description: 'Contribute to research, advocate for change, and amplify your individual efforts.'
  }
]

const upcomingEvents = [
  {
    title: 'Monthly Community Workshop: Building Emergency Funds',
    date: '2025-01-25',
    time: '7:00 PM EST',
    type: 'Virtual Workshop',
    description: 'Practical strategies for creating financial security, even on a tight budget. Interactive session with Q&A.',
    registrationUrl: '/events/emergency-funds-workshop',
    featured: true
  },
  {
    title: 'Local Meetup: Phoenix Community Gathering',
    date: '2025-02-08',
    time: '2:00 PM MST',
    type: 'In-Person Event',
    location: 'Central Phoenix Community Center',
    description: 'Connect with local families, share experiences, and plan collaborative community projects.',
    registrationUrl: '/events/phoenix-meetup'
  },
  {
    title: 'Partner Spotlight: Sustainable Investing with GreenVest Co-op',
    date: '2025-02-15',
    time: '8:00 PM EST',
    type: 'Virtual Presentation',
    description: 'Learn about values-aligned investing options from our partner organization.',
    registrationUrl: '/events/sustainable-investing'
  },
  {
    title: 'Quarterly All-Community Call: Impact Review & Planning',
    date: '2025-03-01',
    time: '3:00 PM EST',
    type: 'Virtual Community Call',
    description: 'Review our collective progress, celebrate wins, and plan next quarter\'s initiatives.',
    registrationUrl: '/events/quarterly-call',
    featured: true
  }
]

const partnerTypes = [
  {
    type: 'Financial Advisory Partners',
    description: 'Advisors who share our commitment to transparency and middle-class family focus',
    examples: ['Fee-only financial planners', 'Credit unions', 'Community banks', 'Investment cooperatives'],
    benefits: ['Client referrals', 'Co-developed resources', 'Thought leadership opportunities']
  },
  {
    type: 'Educational Institutions',
    description: 'Schools and organizations committed to accessible, practical education',
    examples: ['Community colleges', 'Adult learning centers', 'Skills training programs', 'Online education platforms'],
    benefits: ['Curriculum collaboration', 'Student internships', 'Research partnerships']
  },
  {
    type: 'Community Organizations',
    description: 'Local groups working to strengthen community connections and resilience',
    examples: ['Mutual aid networks', 'Neighborhood associations', 'Faith communities', 'Volunteer organizations'],
    benefits: ['Event collaboration', 'Resource sharing', 'Local impact amplification']
  },
  {
    type: 'Impact Investors',
    description: 'Investors who prioritize social impact alongside financial returns',
    examples: ['Community development funds', 'Social impact bonds', 'B-Corps', 'ESG-focused funds'],
    benefits: ['Deal flow sharing', 'Impact measurement collaboration', 'Portfolio company connections']
  }
]

const testimonials = [
  {
    quote: 'Bondspire\'s community gave us the support and accountability we needed to completely transform our financial situation. It\'s not just education—it\'s genuine care.',
    author: 'Jessica M.',
    role: 'Teacher and Community Member',
    location: 'Denver, CO',
    image: '/images/testimonials/jessica-community.jpg'
  },
  {
    quote: 'Partnering with Bondspire has allowed us to serve our clients better while staying true to our values. Their transparency approach has improved how we run our own business.',
    author: 'Michael Chen, CFP',
    role: 'Partner Advisor',
    location: 'Portland, OR',
    image: '/images/testimonials/michael-chen.jpg'
  },
  {
    quote: 'The local meetups have been incredible. I\'ve met neighbors I never knew, and we\'ve started two mutual aid initiatives that are really making a difference in our area.',
    author: 'Roberto L.',
    role: 'Community Organizer',
    location: 'San Antonio, TX',
    image: '/images/testimonials/roberto-community.jpg'
  }
]

export default function CommunityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-bond-blue to-spire-pink text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/community/community-hero.jpg"
            alt="Community gathering"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container-content text-center">
          <h1 className="text-heading-1 font-montserrat font-bold mb-6">
            Join the Movement for Change
          </h1>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            Be part of a community that's proving business can solve society's greatest challenges. 
            Connect with families and organizations committed to transparency, authenticity, and 
            measurable impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="#join-us" className="btn-primary bg-white text-bond-blue hover:bg-sky-tint">
              Join Our Community
            </Link>
            <Link href="#events" className="btn-secondary border-white text-white hover:bg-white hover:text-bond-blue">
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4">
              Our Growing Community
            </h2>
            <p className="text-body text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Real people creating real change. Here's what we've built together through 
              authentic connections and shared commitment to positive impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {communityStats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-sky-tint/20 rounded-lg">
                <div className="text-4xl font-montserrat font-bold text-bond-blue mb-2">
                  {stat.metric}
                </div>
                <div className="font-montserrat font-semibold text-midnight-navy mb-2">
                  {stat.label}
                </div>
                <div className="text-slate-gray text-sm leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Community Testimonials */}
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
                    <p className="text-bond-blue text-xs">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-slate-gray text-sm leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join-us" className="section-padding bg-sky-tint/50">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Join Content */}
            <div>
              <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-6">
                Become Part of Something Bigger
              </h2>
              
              <p className="text-body text-slate-gray leading-relaxed mb-8">
                Our community isn't just about individual success—it's about collective impact. 
                When families succeed together, entire communities get stronger. Join us in 
                proving that business can be a force for positive change.
              </p>

              <div className="space-y-6 mb-8">
                {membershipBenefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-bond-blue to-spire-pink rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-midnight-navy mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-gray text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-montserrat font-bold text-midnight-navy mb-4">
                  Ready to Join?
                </h3>
                <p className="text-slate-gray text-sm mb-4 leading-relaxed">
                  Community membership is free and includes access to our monthly workshops, 
                  resource library, and member forums. Premium programs available for those 
                  wanting deeper engagement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#newsletter" className="btn-primary flex-1 text-center">
                    Join Free Community
                  </Link>
                  <Link href="/products" className="btn-secondary flex-1 text-center">
                    View Premium Programs
                  </Link>
                </div>
              </div>
            </div>

            {/* Community Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-sky-tint to-white rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/community/community-gathering.jpg"
                  alt="Community members at local event"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Community Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-montserrat font-bold text-bond-blue">98%</div>
                  <div className="text-xs text-slate-gray">Member Satisfaction</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-montserrat font-bold text-spire-pink">47%</div>
                  <div className="text-xs text-slate-gray">Average Goal Achievement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4">
              Upcoming Community Events
            </h2>
            <p className="text-body text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Join us for workshops, local meetups, and collaborative sessions. All events are 
              designed to build authentic connections and share practical knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <div key={event.title} className={`rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                event.featured 
                  ? 'bg-gradient-to-br from-bond-blue/10 to-spire-pink/10 border border-bond-blue/20' 
                  : 'bg-white border border-gray-100'
              }`}>
                
                {event.featured && (
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="w-5 h-5 text-bond-blue" />
                    <span className="text-bond-blue font-montserrat font-semibold text-sm">
                      Featured Event
                    </span>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-montserrat font-bold text-midnight-navy mb-2 leading-tight">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-slate-gray mb-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      
                      {event.location && (
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="ml-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-montserrat font-semibold ${
                      event.type.includes('Virtual') 
                        ? 'bg-bond-blue/20 text-bond-blue'
                        : 'bg-spire-pink/20 text-spire-pink'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-gray text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                
                <Link
                  href={event.registrationUrl}
                  className="inline-flex items-center space-x-2 text-bond-blue hover:text-spire-pink font-montserrat font-semibold transition-colors duration-300 group"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-sky-tint/30 rounded-lg p-8">
              <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-4">
                Don't See an Event in Your Area?
              </h3>
              <p className="text-slate-gray mb-6 leading-relaxed max-w-2xl mx-auto">
                We're always looking to expand to new communities. If you're interested in 
                hosting or organizing an event in your area, we'll provide all the support you need.
              </p>
              <Link href="/contact" className="btn-primary">
                Start a Local Group
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partner" className="section-padding bg-gradient-to-br from-midnight-navy to-bond-blue text-white">
        <div className="container-content">
          <div className="text-center mb-16">
            <h2 className="text-heading-2 font-montserrat font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Amplify your impact by partnering with Bondspire. Together, we can solve problems 
              that neither of us could tackle alone while staying true to our shared values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {partnerTypes.map((partner, index) => (
              <div key={partner.type} className="bg-white/10 backdrop-blur rounded-lg p-8">
                <h3 className="font-montserrat font-bold text-xl mb-4">
                  {partner.type}
                </h3>
                
                <p className="text-white/90 leading-relaxed mb-6">
                  {partner.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-montserrat font-semibold text-white/90 mb-3">Examples:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {partner.examples.map((example) => (
                      <div key={example} className="flex items-center space-x-2 text-sm text-white/80">
                        <CheckCircle className="w-4 h-4 text-sky-tint flex-shrink-0" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-montserrat font-semibold text-white/90 mb-3">Partnership Benefits:</h4>
                  <div className="space-y-2">
                    {partner.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-2 text-sm text-white/80">
                        <Star className="w-4 h-4 text-spire-pink flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              Ready to Partner?
            </h3>
            <p className="text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              We're selective about partnerships to ensure alignment with our values and 
              mission. Let's explore how we can create meaningful change together.
            </p>
            <Link href="#partnership-form" className="btn-primary bg-white text-bond-blue hover:bg-sky-tint">
              Submit Partnership Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section id="partnership-form" className="section-padding bg-sky-tint/50">
        <div className="container-content">
          <div className="max-w-4xl mx-auto">
            <PartnershipForm />
          </div>
        </div>
      </section>

      {/* Community Newsletter */}
      <section id="newsletter" className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4">
              Join Our Community
            </h2>
            <p className="text-body text-slate-gray mb-8 leading-relaxed">
              Start by joining our newsletter community. Get access to member resources, 
              event invitations, and be the first to know about new programs and opportunities.
            </p>
            
            <NewsletterSignup 
              variant="inline"
              className="bg-sky-tint/20 shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  )
}
