
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  DollarSign, 
  Shield, 
  Users, 
  Eye, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  BookOpen,
  Globe
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'What We Do | Solutions for Systemic Change',
  description: 'Discover how Bondspire addresses society\'s five greatest challenges through systematic solutions, transparency, and community building.',
  keywords: ['social solutions', 'systemic change', 'community building', 'financial inequality', 'transparency'],
  openGraph: {
    title: 'What We Do | Solutions for Systemic Change', 
    description: 'Discover how Bondspire addresses society\'s five greatest challenges through systematic solutions, transparency, and community building.',
    url: 'https://wearebondspire.com/what-we-do',
  },
}

const pillarSolutions = [
  {
    id: 'financial-inequality',
    title: 'Financial Inequality Solutions',
    subtitle: 'Breaking down barriers to generational wealth building',
    icon: DollarSign,
    color: 'bond-blue',
    problem: 'Traditional wealth-building advice excludes millions of middle-class families. Complex fee structures, high minimums, and insider knowledge create barriers that perpetuate financial inequality.',
    approach: 'We create transparent, accessible frameworks that demystify wealth building for everyday families. Our solutions prioritize education, community support, and sustainable growth over quick profits.',
    solutions: [
      {
        name: 'The Generational Wealth Framework',
        description: 'Step-by-step roadmap for building lasting financial security',
        features: ['Transparent fee structure', 'Community accountability', 'Real-world case studies', 'Monthly progress tracking']
      },
      {
        name: 'Financial Literacy Workshops',
        description: 'Monthly community sessions on practical money management',
        features: ['Guest expert speakers', 'Interactive Q&A sessions', 'Peer learning groups', 'Take-home resources']
      },
      {
        name: 'Family Financial Planning',
        description: 'Personalized support for long-term financial goals',
        features: ['One-on-one consultations', 'Custom action plans', 'Quarterly check-ins', 'Goal achievement tracking']
      }
    ],
    impact: {
      metric: '$2.4M+',
      label: 'Wealth Created',
      details: 'Average participant sees 23% improvement in financial stability within 6 months'
    },
    testimonial: {
      quote: 'For the first time, we have a clear path to financial independence that actually makes sense for our family.',
      author: 'Jessica M., Program Participant',
      role: 'Mother of two, Teacher'
    }
  },
  {
    id: 'information-integrity',
    title: 'Information Integrity Tools',
    subtitle: 'Restoring trust through transparent information sharing',
    icon: Shield,
    color: 'gradient-purple',
    problem: 'Misinformation and lack of transparency erode public trust. Without reliable information sources, communities struggle to make informed decisions about their wellbeing and future.',
    approach: 'We model radical transparency in our operations and provide tools that help communities verify information, understand complex topics, and make informed decisions together.',
    solutions: [
      {
        name: 'Transparency Reports',
        description: 'Monthly public reports on our operations, finances, and impact',
        features: ['Detailed financial statements', 'Impact measurement data', 'Decision-making processes', 'Lessons learned documentation']
      },
      {
        name: 'Community Education Programs',
        description: 'Workshops on media literacy and information verification',
        features: ['Source verification techniques', 'Critical thinking frameworks', 'Bias identification tools', 'Collaborative fact-checking']
      },
      {
        name: 'Open Decision Making',
        description: 'Public participation in organizational decisions',
        features: ['Community voting on initiatives', 'Open board meetings', 'Public feedback sessions', 'Transparent criteria sharing']
      }
    ],
    impact: {
      metric: '500+',
      label: 'People Educated Monthly',
      details: '89% of participants report improved confidence in identifying reliable information'
    },
    testimonial: {
      quote: 'Bondspire\'s transparency reports helped me understand what to look for in other organizations I support.',
      author: 'Marcus R., Community Member',
      role: 'Local Business Owner'
    }
  },
  {
    id: 'community-resilience',
    title: 'Community Resilience Programs', 
    subtitle: 'Rebuilding authentic local connections and support networks',
    icon: Users,
    color: 'spire-pink',
    problem: 'Digital connections can\'t replace community bonds. Social isolation weakens local support systems, leaving individuals vulnerable during crises and reducing collective problem-solving capacity.',
    approach: 'We facilitate genuine local relationships through shared activities, mutual aid networks, and collaborative problem-solving that strengthens communities from within.',
    solutions: [
      {
        name: 'Local Connection Events',
        description: 'Monthly gatherings that build authentic relationships',
        features: ['Family-friendly activities', 'Skill-sharing workshops', 'Community meals', 'Collaborative projects']
      },
      {
        name: 'Mutual Aid Networks',
        description: 'Organized systems for community members to support each other',
        features: ['Resource sharing platforms', 'Emergency response teams', 'Childcare cooperatives', 'Elder care networks']
      },
      {
        name: 'Community Problem-Solving',
        description: 'Collaborative approaches to local challenges',
        features: ['Issue identification sessions', 'Solution brainstorming', 'Action planning workshops', 'Progress tracking meetings']
      }
    ],
    impact: {
      metric: '3,890+',
      label: 'Connections Made',
      details: '12 active mutual aid networks serving 850+ families across multiple communities'
    },
    testimonial: {
      quote: 'I\'ve lived in this neighborhood for years, but Bondspire events are how I finally met my neighbors.',
      author: 'Kim L., Event Participant',
      role: 'Working Parent'
    }
  },
  {
    id: 'political-transparency',
    title: 'Political Transparency Initiatives',
    subtitle: 'Promoting accountable governance and citizen engagement',
    icon: Eye,
    color: 'bond-blue',
    problem: 'Complex political systems obscure decision-making processes. Citizens feel disconnected from governance, reducing democratic participation and accountability.',
    approach: 'We advocate for transparency and create tools that help citizens engage meaningfully with governance at all levels, from local to federal.',
    solutions: [
      {
        name: 'Civic Engagement Workshops',
        description: 'Education on effective political participation',
        features: ['Government process explanations', 'Public speaking training', 'Meeting participation guides', 'Advocacy strategy development']
      },
      {
        name: 'Policy Research & Analysis',
        description: 'Independent analysis of legislation and policy proposals',
        features: ['Plain-language summaries', 'Impact assessments', 'Community benefit analysis', 'Stakeholder identification']
      },
      {
        name: 'Accountability Tools',
        description: 'Resources for tracking elected officials and policies',
        features: ['Voting record databases', 'Campaign finance tracking', 'Policy outcome measurement', 'Public engagement metrics']
      }
    ],
    impact: {
      metric: '156+',
      label: 'Civic Actions Supported',
      details: 'Community members participated in 45 public meetings and submitted 89 public comments'
    },
    testimonial: {
      quote: 'I never thought I could make a difference in local politics until Bondspire showed me how.',
      author: 'Robert T., Workshop Participant',
      role: 'Retired Teacher'
    }
  },
  {
    id: 'educational-access',
    title: 'Educational Access Platforms',
    subtitle: 'Democratizing learning and skill development opportunities',
    icon: GraduationCap,
    color: 'gradient-purple',
    problem: 'High costs and complex requirements limit access to quality education. Traditional credentials often matter more than actual skills, creating barriers for capable learners.',
    approach: 'We create alternative learning pathways that prioritize outcomes over credentials, making valuable skills accessible to learners regardless of background or financial status.',
    solutions: [
      {
        name: 'Skills-Based Learning Programs',
        description: 'Practical education focused on real-world applications',
        features: ['Project-based learning', 'Peer mentoring', 'Industry partnerships', 'Portfolio development']
      },
      {
        name: 'Community Learning Exchanges',
        description: 'Peer-to-peer knowledge sharing networks',
        features: ['Skill-sharing workshops', 'Expert speaker series', 'Study groups', 'Collaborative learning projects']
      },
      {
        name: 'Alternative Credentialing',
        description: 'Recognition systems based on demonstrated competency',
        features: ['Competency assessments', 'Portfolio reviews', 'Community endorsements', 'Skills verification']
      }
    ],
    impact: {
      metric: '200+',
      label: 'Learners Served',
      details: '78% of participants report significant skill improvement within 3 months'
    },
    testimonial: {
      quote: 'These programs gave me the confidence and skills to start my own business.',
      author: 'Angela D., Program Graduate',
      role: 'Entrepreneur'
    }
  }
]

export default function WhatWeDoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-midnight-navy to-bond-blue text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container-content text-center">
          <h1 className="text-heading-1 font-montserrat font-bold mb-6">
            Solutions for Systemic Change
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Society's greatest challenges are interconnected. Our systematic approach addresses 
            five critical areas that reinforce each other, creating lasting positive change.
          </p>
          <Link href="#solutions" className="btn-secondary border-white text-white hover:bg-white hover:text-bond-blue">
            Explore Our Solutions
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-16">
            <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-6">
              Our Integrated Approach
            </h2>
            <p className="text-body text-slate-gray max-w-4xl mx-auto leading-relaxed">
              These challenges don't exist in isolation—they're part of interconnected systems that 
              reinforce each other. Financial inequality limits educational access. Information breakdown 
              weakens community bonds. Political disconnection reduces accountability. We address them 
              as an integrated whole.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Systematic Solutions', 'Community-Centered', 'Measurable Impact'].map((principle, index) => (
              <div key={principle} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-bond-blue to-spire-pink rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {index === 0 && <Target className="w-8 h-8" />}
                  {index === 1 && <Users className="w-8 h-8" />}
                  {index === 2 && <TrendingUp className="w-8 h-8" />}
                </div>
                <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-3">
                  {principle}
                </h3>
                <p className="text-slate-gray leading-relaxed">
                  {index === 0 && 'We address root causes, not just symptoms, with coordinated solutions across multiple pillars.'}
                  {index === 1 && 'Every solution is designed with and for the communities it serves, ensuring relevance and sustainability.'}
                  {index === 2 && 'We track progress transparently and adjust based on real outcomes, not good intentions.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Detail Section */}
      <section id="solutions" className="section-padding bg-sky-tint/30">
        <div className="container-content">
          <div className="space-y-20">
            {pillarSolutions.map((pillar, index) => (
              <div key={pillar.id} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-12 items-center`}>
                
                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  
                  {/* Header */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 bg-${pillar.color} rounded-lg flex items-center justify-center text-white`}>
                        <pillar.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="font-montserrat font-bold text-2xl text-midnight-navy">
                          {pillar.title}
                        </h2>
                        <p className="text-slate-gray">{pillar.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Problem */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-montserrat font-bold text-spire-pink mb-3">The Problem</h3>
                    <p className="text-slate-gray leading-relaxed">{pillar.problem}</p>
                  </div>

                  {/* Approach */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-montserrat font-bold text-bond-blue mb-3">Our Approach</h3>
                    <p className="text-slate-gray leading-relaxed">{pillar.approach}</p>
                  </div>

                  {/* Impact */}
                  <div className="bg-gradient-to-br from-bond-blue to-spire-pink text-white rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-montserrat font-bold">Current Impact</h3>
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-montserrat font-bold mb-1">{pillar.impact.metric}</div>
                    <div className="text-sm opacity-90 mb-2">{pillar.impact.label}</div>
                    <p className="text-sm opacity-90">{pillar.impact.details}</p>
                  </div>

                  {/* CTA */}
                  <Link 
                    href={`/what-we-do/${pillar.id}`}
                    className="inline-flex items-center space-x-2 text-bond-blue hover:text-spire-pink font-montserrat font-semibold transition-colors duration-300 group"
                  >
                    <span>Learn More About This Solution</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Solutions List */}
                <div className="lg:w-1/2">
                  <div className="space-y-4">
                    {pillar.solutions.map((solution) => (
                      <div key={solution.name} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h4 className="font-montserrat font-bold text-midnight-navy mb-2">
                          {solution.name}
                        </h4>
                        <p className="text-slate-gray text-sm mb-4">
                          {solution.description}
                        </p>
                        <div className="space-y-2">
                          {solution.features.map((feature) => (
                            <div key={feature} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-bond-blue flex-shrink-0" />
                              <span className="text-slate-gray">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Testimonial */}
                    <div className="bg-sky-tint/50 rounded-lg p-6 border-l-4 border-bond-blue">
                      <p className="text-slate-gray italic mb-3">"{pillar.testimonial.quote}"</p>
                      <div className="text-sm">
                        <div className="font-montserrat font-semibold text-midnight-navy">
                          {pillar.testimonial.author}
                        </div>
                        <div className="text-slate-gray">{pillar.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section-padding bg-white">
        <div className="container-content text-center">
          <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-6">
            Get Involved in the Solution
          </h2>
          <p className="text-body text-slate-gray max-w-3xl mx-auto mb-12 leading-relaxed">
            These solutions work best when communities actively participate. Choose how you'd like 
            to contribute to creating positive change in your area.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-bond-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat font-bold text-lg text-midnight-navy mb-3">
                Join Our Community
              </h3>
              <p className="text-slate-gray text-sm mb-4 leading-relaxed">
                Participate in programs, attend events, and connect with like-minded families.
              </p>
              <Link href="/community" className="btn-primary text-sm">
                Join Now
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat font-bold text-lg text-midnight-navy mb-3">
                Partner With Us
              </h3>
              <p className="text-slate-gray text-sm mb-4 leading-relaxed">
                Collaborate to expand these solutions in your organization or community.
              </p>
              <Link href="/community#partner" className="btn-secondary text-sm">
                Explore Partnership
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-spire-pink rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat font-bold text-lg text-midnight-navy mb-3">
                Access Resources
              </h3>
              <p className="text-slate-gray text-sm mb-4 leading-relaxed">
                Use our research, tools, and frameworks to create change in your context.
              </p>
              <Link href="/resources" className="btn-accent text-sm">
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
