
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Heart, 
  Shield, 
  Users, 
  Target, 
  Eye,
  CheckCircle,
  Calendar,
  ArrowRight,
  Quote
} from 'lucide-react'
import FivePillars from '@/components/five-pillars'

export const metadata: Metadata = {
  title: 'About Bondspire | Our Mission to Transform Business',
  description: 'Learn how Bondspire is proving businesses can be forces for positive change while maintaining sustainability.',
  keywords: ['mission-driven business', 'social impact', 'transparency', 'community building'],
  openGraph: {
    title: 'About Bondspire | Our Mission to Transform Business',
    description: 'Learn how Bondspire is proving businesses can be forces for positive change while maintaining sustainability.',
    url: 'https://wearebondspire.com/about',
  },
}

const timelineEvents = [
  {
    year: '2022',
    title: 'The Founding Vision',
    description: 'Recognized the disconnect between business success and societal wellbeing. Started researching systematic solutions to interconnected social challenges.',
    milestone: 'Research Phase'
  },
  {
    year: '2023',
    title: 'Community Formation',
    description: 'Began building our first community of families interested in transparent wealth-building and mutual support networks.',
    milestone: '50+ Founding Families'
  },
  {
    year: '2024',
    title: 'Framework Development',
    description: 'Developed and tested the Generational Wealth Framework with pilot families, achieving measurable financial improvements.',
    milestone: '200+ Beta Users'
  },
  {
    year: '2025',
    title: 'Scaling Impact',
    description: 'Expanded our reach while maintaining transparency and community-first values. Launched comprehensive approach to all five pillars.',
    milestone: '1,200+ Families Served'
  }
]

const coreValues = [
  {
    icon: Shield,
    title: 'Radical Transparency',
    description: 'We share our successes and failures openly. Our financial reports, decision-making processes, and impact measurements are accessible to our community.',
    example: 'Our quarterly reports include both wins and losses, with detailed explanations of what we learned from each.'
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Real relationships create lasting change. We prioritize authentic connections over digital metrics and local impact over global scale.',
    example: 'We limit our growth rate to ensure we can maintain meaningful relationships with every family we serve.'
  },
  {
    icon: Target,
    title: 'Measurable Impact',
    description: 'Good intentions aren\'t enough. We track every dollar, measure every outcome, and report every result with public accountability.',
    example: 'Every program has specific metrics, timelines, and public progress reports updated monthly.'
  },
  {
    icon: Heart,
    title: 'Authentic Care',
    description: 'We genuinely care about the people we serve. This isn\'t just business—it\'s personal responsibility for community wellbeing.',
    example: 'Our team regularly participates in community events and maintains ongoing relationships with families.'
  },
  {
    icon: Eye,
    title: 'Systems Thinking',
    description: 'Complex problems require systematic solutions. We address root causes, not just symptoms, across interconnected challenges.',
    example: 'Our five pillars work together—financial empowerment connects to education, which builds community resilience.'
  }
]

const teamMembers = [
  {
    id: 'founder-ceo',
    name: 'Alex Thompson',
    role: 'Founder & CEO',
    bio: 'Former financial advisor who became frustrated with industry practices that excluded middle-class families from wealth-building opportunities.',
    image: '/images/team/alex-thompson.jpg',
    whyImHere: 'I started Bondspire because I saw too many families excluded from financial opportunities simply because they weren\'t already wealthy. Business should create opportunity, not gatekeep it.',
    linkedIn: 'https://linkedin.com/in/alexthompsonbondspire',
    twitter: 'https://twitter.com/alexbondspire'
  },
  {
    id: 'community-director',
    name: 'Maria Rodriguez',
    role: 'Director of Community',
    bio: 'Community organizer with 15 years of experience building grassroots movements and fostering authentic local connections.',
    image: '/images/team/maria-rodriguez.jpg',
    whyImHere: 'Real change happens when people connect authentically. I\'m here to ensure every family feels genuinely supported and heard in our community.',
    linkedIn: 'https://linkedin.com/in/mariarodriguezbondspire'
  },
  {
    id: 'transparency-lead',
    name: 'David Chen',
    role: 'Head of Transparency & Impact',
    bio: 'Former nonprofit financial analyst specializing in impact measurement and transparent reporting for mission-driven organizations.',
    image: '/images/team/david-chen.jpg',
    whyImHere: 'Transparency isn\'t just a buzzword—it\'s how we build trust. I\'m here to ensure every number we share tells the truth about our impact.',
    linkedIn: 'https://linkedin.com/in/davidchenbondspire'
  },
  {
    id: 'product-lead',
    name: 'Sarah Kim',
    role: 'Product Development Lead',
    bio: 'UX designer and educator focused on making complex financial concepts accessible to everyday families without diluting their power.',
    image: '/images/team/sarah-kim.jpg',
    whyImHere: 'Financial education shouldn\'t require an MBA to understand. I\'m here to make wealth-building accessible to every family, regardless of background.',
    linkedIn: 'https://linkedin.com/in/sarahkimbondspire'
  }
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-sky-tint to-white">
        <div className="absolute inset-0 bg-hero-gradient opacity-10" />
        <div className="relative z-10 container-content text-center">
          <h1 className="text-heading-1 font-montserrat font-bold text-midnight-navy mb-6">
            Our Mission to Transform Business
          </h1>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
            We believe business can be a powerful force for positive societal change. 
            Here's how we're proving it through systematic solutions, radical transparency, 
            and authentic community building.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="section-padding bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Story Content */}
            <div>
              <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-6">
                Our Story
              </h2>
              
              <div className="space-y-6 text-slate-gray leading-relaxed">
                <p>
                  Bondspire began with a simple observation: traditional business models often exclude 
                  the very people they could help most. Middle-class families were told to "invest for 
                  the long term" while being locked out of the wealth-building strategies that actually work.
                </p>
                
                <p>
                  We saw financial advisors charging high fees for generic advice, educational institutions 
                  gatekeeping valuable knowledge, and communities becoming increasingly isolated despite 
                  digital connectivity.
                </p>
                
                <div className="bg-sky-tint/30 border-l-4 border-bond-blue p-4 rounded-r-lg">
                  <p className="italic">
                    "What if business could solve these problems instead of perpetuating them? 
                    What if transparency, not secrecy, was our competitive advantage?"
                  </p>
                </div>
                
                <p>
                  That question led us to develop frameworks that work for everyday families, 
                  build genuine community connections, and measure our impact with radical transparency. 
                  We're not just changing how business operates—we're proving it can be better.
                </p>
              </div>
            </div>

            {/* Story Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-sky-tint/20 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/about/founding-story.jpg"
                  alt="Bondspire founding team working together"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Quote */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <Quote className="w-8 h-8 text-bond-blue mb-2" />
                <p className="text-sm text-slate-gray italic">
                  "Business should create opportunity, not gatekeep it."
                </p>
                <p className="text-xs text-bond-blue font-montserrat font-semibold mt-2">
                  - Alex Thompson, Founder
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="border-t border-sky-tint pt-16">
            <h3 className="text-heading-3 font-montserrat font-bold text-midnight-navy text-center mb-12">
              Our Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-bond-blue to-spire-pink rounded-full" />
              
              {/* Timeline Events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={event.year} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-white rounded-lg p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-bond-blue font-montserrat font-bold text-lg">
                            {event.year}
                          </span>
                          <span className="text-xs text-white bg-spire-pink px-2 py-1 rounded-full">
                            {event.milestone}
                          </span>
                        </div>
                        <h4 className="font-montserrat font-bold text-midnight-navy mb-2">
                          {event.title}
                        </h4>
                        <p className="text-slate-gray text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-bond-blue rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section id="mission-values" className="section-padding bg-sky-tint/50">
        <div className="container-content">
          
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-6">
              Mission & Values
            </h2>
            
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-4">
                Our Mission
              </h3>
              <p className="text-xl text-slate-gray leading-relaxed mb-6">
                To prove business can be a powerful force for positive societal change by creating 
                systematic solutions to interconnected challenges through radical transparency, 
                authentic community building, and measurable impact.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-montserrat font-bold text-bond-blue">1,200+</div>
                  <div className="text-sm text-slate-gray">Families Empowered</div>
                </div>
                <div>
                  <div className="text-2xl font-montserrat font-bold text-spire-pink">$2.4M+</div>
                  <div className="text-sm text-slate-gray">Wealth Created</div>
                </div>
                <div>
                  <div className="text-2xl font-montserrat font-bold text-gradient-purple">89</div>
                  <div className="text-sm text-slate-gray">Community Events</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-heading-3 font-montserrat font-bold text-midnight-navy text-center mb-12">
              Our Core Values in Action
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div key={value.title} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-bond-blue to-spire-pink rounded-lg flex items-center justify-center text-white mb-4">
                    <value.icon className="w-6 h-6" />
                  </div>
                  
                  <h4 className="font-montserrat font-bold text-midnight-navy mb-3">
                    {value.title}
                  </h4>
                  
                  <p className="text-slate-gray text-sm leading-relaxed mb-4">
                    {value.description}
                  </p>
                  
                  <div className="bg-sky-tint/30 p-3 rounded-lg">
                    <p className="text-xs text-slate-gray italic">
                      <strong>Example:</strong> {value.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Five Pillars - Detailed */}
      <section id="five-pillars">
        <FivePillars showAsPreview={false} />
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4">
              Our Team
            </h2>
            <p className="text-body text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Meet the people behind Bondspire. Each team member brings unique expertise united 
              by a shared commitment to using business as a force for positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-sky-tint/20 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                
                {/* Profile Image */}
                <div className="flex items-start space-x-6 mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-1">
                      {member.name}
                    </h3>
                    <p className="text-bond-blue font-montserrat font-semibold mb-2">
                      {member.role}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex space-x-3">
                      {member.linkedIn && (
                        <a 
                          href={member.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-gray hover:text-bond-blue transition-colors duration-300"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                          </svg>
                        </a>
                      )}
                      {member.twitter && (
                        <a 
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-gray hover:text-bond-blue transition-colors duration-300"
                          aria-label={`${member.name} on Twitter`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-slate-gray leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Why I'm Here Quote */}
                <div className="bg-white p-4 rounded-lg border-l-4 border-spire-pink">
                  <p className="text-slate-gray text-sm italic mb-2">
                    "Why I'm here:"
                  </p>
                  <p className="text-midnight-navy font-medium text-sm leading-relaxed">
                    {member.whyImHere}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Join Our Team CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-bond-blue to-spire-pink rounded-lg p-8 text-white">
              <h3 className="font-montserrat font-bold text-xl mb-4">
                Join Our Mission
              </h3>
              <p className="mb-6 leading-relaxed">
                We're always looking for passionate individuals who share our commitment to using 
                business as a force for positive change. Explore opportunities to join our team.
              </p>
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-bond-blue">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="section-padding bg-sky-tint/50">
        <div className="container-content text-center">
          <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-6">
            Our Vision for the Future
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-slate-gray leading-relaxed mb-8">
              We envision a world where business success is measured not just by profit, but by positive 
              impact on communities. Where transparency is the default, not the exception. Where every 
              family has access to the tools and support they need to build generational wealth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-montserrat font-bold text-bond-blue mb-2">10,000+</div>
                <div className="text-slate-gray">Families Served by 2026</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-montserrat font-bold text-spire-pink mb-2">$100M+</div>
                <div className="text-slate-gray">Community Wealth Created</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-montserrat font-bold text-gradient-purple mb-2">50+</div>
                <div className="text-slate-gray">Partner Organizations</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/community" className="btn-primary">
                Join Our Movement
              </Link>
              <Link href="/products" className="btn-secondary">
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
