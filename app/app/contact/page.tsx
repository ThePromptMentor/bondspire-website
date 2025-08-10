
import { Metadata } from 'next'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Newspaper,
  Users,
  Handshake,
  HelpCircle,
  ExternalLink
} from 'lucide-react'
import ContactForm from '@/components/forms/contact-form'

export const metadata: Metadata = {
  title: 'Contact | Get in Touch with Bondspire',
  description: 'Contact Bondspire for general inquiries, media requests, partnership opportunities, or community questions. We respond within 24 hours.',
  keywords: ['contact', 'get in touch', 'support', 'media inquiries', 'partnerships'],
  openGraph: {
    title: 'Contact | Get in Touch with Bondspire',
    description: 'Contact Bondspire for general inquiries, media requests, partnership opportunities, or community questions. We respond within 24 hours.',
    url: 'https://wearebondspire.com/contact',
  },
}

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'General inquiries and support',
    details: 'team@wearebondspire.com',
    href: 'mailto:team@wearebondspire.com',
    responseTime: 'Within 24 hours'
  },
  {
    icon: Newspaper,
    title: 'Media Inquiries',
    description: 'Press, interviews, and media requests',
    details: 'media@wearebondspire.com',
    href: 'mailto:media@wearebondspire.com',
    responseTime: 'Within 12 hours'
  },
  {
    icon: Handshake,
    title: 'Partnerships',
    description: 'Collaboration and partnership opportunities',
    details: 'partnerships@wearebondspire.com',
    href: 'mailto:partnerships@wearebondspire.com',
    responseTime: 'Within 48 hours'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Member questions and community assistance',
    details: 'community@wearebondspire.com',
    href: 'mailto:community@wearebondspire.com',
    responseTime: 'Within 24 hours'
  }
]

const faqQuick = [
  {
    question: 'How quickly will you respond to my inquiry?',
    answer: 'We respond to all inquiries within 24 hours during business days. Media inquiries typically get responses within 12 hours.'
  },
  {
    question: 'Do you offer phone consultations?',
    answer: 'We prefer email for initial contact to ensure we can provide thoughtful, detailed responses. Phone calls are available for community members and partners.'
  },
  {
    question: 'Can I visit your office?',
    answer: 'We operate as a distributed team to keep costs low and serve families better. Virtual meetings are available for partners and media by appointment.'
  },
  {
    question: 'What information should I include in my message?',
    answer: 'Please be specific about your question or need. Include relevant background information and your preferred response method.'
  }
]

const socialLinks = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/bondspire',
    description: 'Professional updates and thought leadership'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/bondspire',
    description: 'Daily insights and community conversations'
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/bondspire',
    description: 'Community stories and local event updates'
  }
]

const officeHours = [
  {
    day: 'Monday - Friday',
    hours: '9:00 AM - 6:00 PM EST',
    note: 'Standard response times'
  },
  {
    day: 'Saturday',
    hours: '10:00 AM - 2:00 PM EST',
    note: 'Limited availability'
  },
  {
    day: 'Sunday',
    hours: 'Closed',
    note: 'Emergency inquiries only'
  }
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-sky-tint to-white">
        <div className="absolute inset-0 bg-hero-gradient opacity-10" />
        <div className="relative z-10 container-content text-center">
          <h1 className="text-heading-1 font-montserrat font-bold text-midnight-navy mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
            Have questions about our mission, want to explore partnership opportunities, 
            or need support with our programs? We're here to help and respond to all 
            inquiries promptly.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method) => (
              <div key={method.title} className="text-center p-6 bg-sky-tint/20 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-bond-blue to-spire-pink rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <method.icon className="w-8 h-8" />
                </div>
                
                <h3 className="font-montserrat font-bold text-midnight-navy mb-2">
                  {method.title}
                </h3>
                
                <p className="text-slate-gray text-sm mb-3 leading-relaxed">
                  {method.description}
                </p>
                
                <a
                  href={method.href}
                  className="text-bond-blue hover:text-spire-pink font-montserrat font-medium transition-colors duration-300 block mb-2"
                >
                  {method.details}
                </a>
                
                <div className="text-xs text-slate-gray">
                  Response: {method.responseTime}
                </div>
              </div>
            ))}
          </div>

          {/* Office Hours */}
          <div className="bg-sky-tint/30 rounded-lg p-8 mb-16">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-bond-blue mr-3" />
              <h2 className="font-montserrat font-bold text-xl text-midnight-navy">
                Response Hours
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {officeHours.map((schedule) => (
                <div key={schedule.day} className="text-center">
                  <div className="font-montserrat font-semibold text-midnight-navy mb-1">
                    {schedule.day}
                  </div>
                  <div className="text-bond-blue font-medium mb-1">
                    {schedule.hours}
                  </div>
                  <div className="text-slate-gray text-sm">
                    {schedule.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-sky-tint/50">
        <div className="container-content">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4">
                Send Us a Message
              </h2>
              <p className="text-body text-slate-gray leading-relaxed">
                Use the form below for detailed inquiries. We'll respond with thoughtful, 
                personalized answers and next steps within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg">
              <ContactForm variant="full" />
            </div>
          </div>
        </div>
      </section>

      {/* Media Inquiries Section */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Media Info */}
            <div>
              <div className="flex items-center mb-6">
                <Newspaper className="w-8 h-8 text-bond-blue mr-4" />
                <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy">
                  Media Inquiries
                </h2>
              </div>
              
              <p className="text-body text-slate-gray leading-relaxed mb-8">
                We welcome media attention that helps spread awareness about using business 
                as a force for positive change. Our team is available for interviews, 
                commentary, and collaborative content.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 text-bond-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-montserrat font-semibold text-midnight-navy mb-1">
                      Available for Commentary
                    </h4>
                    <p className="text-slate-gray text-sm leading-relaxed">
                      Financial inequality, community resilience, transparency in business, 
                      alternative education models, and social impact measurement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-bond-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-montserrat font-semibold text-midnight-navy mb-1">
                      Community Stories
                    </h4>
                    <p className="text-slate-gray text-sm leading-relaxed">
                      Connect with community members who can share their experiences 
                      with our programs and their impact on family finances and wellbeing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-5 h-5 text-bond-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-montserrat font-semibold text-midnight-navy mb-1">
                      Research Access
                    </h4>
                    <p className="text-slate-gray text-sm leading-relaxed">
                      Access to our research reports, impact data, and transparent 
                      financial information for fact-checking and background.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-sky-tint/30 rounded-lg p-6">
                <h4 className="font-montserrat font-semibold text-midnight-navy mb-2">
                  Media Contact
                </h4>
                <p className="text-slate-gray text-sm mb-3">
                  For fastest response to media inquiries, please email directly:
                </p>
                <a 
                  href="mailto:media@wearebondspire.com" 
                  className="text-bond-blue hover:text-spire-pink font-montserrat font-medium"
                >
                  media@wearebondspire.com
                </a>
              </div>
            </div>

            {/* Quick FAQ */}
            <div>
              <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-6">
                Quick Answers
              </h3>
              
              <div className="space-y-4">
                {faqQuick.map((item) => (
                  <div key={item.question} className="bg-sky-tint/20 rounded-lg p-4">
                    <h4 className="font-montserrat font-semibold text-midnight-navy mb-2">
                      {item.question}
                    </h4>
                    <p className="text-slate-gray text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-bond-blue to-spire-pink rounded-lg text-white">
                <h4 className="font-montserrat font-bold mb-3">
                  Need More Information?
                </h4>
                <p className="text-sm mb-4 text-white/90 leading-relaxed">
                  Visit our Resources section for detailed FAQ, research reports, 
                  and community success stories.
                </p>
                <a 
                  href="/resources" 
                  className="inline-flex items-center space-x-2 text-white hover:text-sky-tint transition-colors duration-300"
                >
                  <span className="font-montserrat font-medium">Explore Resources</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section-padding bg-sky-tint/50">
        <div className="container-content text-center">
          <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-6">
            Connect With Us Online
          </h2>
          <p className="text-body text-slate-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            Follow our journey and join the conversation on social media. 
            We share daily insights, community stories, and behind-the-scenes updates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
              >
                <h3 className="font-montserrat font-bold text-midnight-navy mb-2">
                  {social.platform}
                </h3>
                <p className="text-slate-gray text-sm leading-relaxed mb-3">
                  {social.description}
                </p>
                <div className="flex items-center justify-center space-x-2 text-bond-blue">
                  <span className="font-montserrat font-medium">Follow Us</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="font-montserrat font-bold text-midnight-navy mb-4">
              Our Commitment to You
            </h3>
            <p className="text-slate-gray leading-relaxed">
              We're committed to radical transparency in all our communications. 
              When you contact us, you'll get honest, thoughtful responses—even if 
              that means admitting when we don't have all the answers or when our 
              programs might not be the right fit for your situation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
