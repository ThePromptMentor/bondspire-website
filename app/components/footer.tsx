
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  ArrowRight,
  Heart
} from 'lucide-react'
import { cn } from '@/lib/utils'
import NewsletterSignup from './forms/newsletter-signup'
import type { SocialLink } from '@/lib/types'

const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/bondspire',
    icon: 'Linkedin',
    label: 'Follow us on LinkedIn'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/bondspire',
    icon: 'Twitter', 
    label: 'Follow us on Twitter'
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/bondspire',
    icon: 'Facebook',
    label: 'Follow us on Facebook'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/bondspire',
    icon: 'Instagram',
    label: 'Follow us on Instagram'
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/@bondspire',
    icon: 'Youtube',
    label: 'Subscribe to our YouTube channel'
  }
]

const navigationSections = [
  {
    title: 'About',
    links: [
      { label: 'Our Story', href: '/about#our-story' },
      { label: 'Mission & Values', href: '/about#mission-values' },
      { label: 'The Five Pillars', href: '/about#five-pillars' },
      { label: 'Team', href: '/about#team' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Financial Inequality', href: '/what-we-do/financial-inequality' },
      { label: 'Information Integrity', href: '/what-we-do/information-integrity' },
      { label: 'Community Resilience', href: '/what-we-do/community-resilience' },
      { label: 'Political Transparency', href: '/what-we-do/political-transparency' },
      { label: 'Educational Access', href: '/what-we-do/educational-access' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Research & Reports', href: '/resources/research' },
      { label: 'Success Stories', href: '/resources/success-stories' },
      { label: 'FAQ', href: '/resources/faq' }
    ]
  }
]

interface FooterProps {
  variant?: 'full' | 'simple'
  className?: string
}

export default function Footer({ variant = 'full', className }: FooterProps) {
  const getSocialIcon = (iconName: string) => {
    const icons = {
      Facebook,
      Twitter,
      Linkedin,
      Instagram,
      Youtube
    }
    const Icon = icons[iconName as keyof typeof icons] || Mail
    return <Icon className="w-5 h-5" />
  }

  if (variant === 'simple') {
    return (
      <footer className={cn("bg-midnight-navy text-white py-8", className)}>
        <div className="container-content">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative w-8 h-8">
                  <Image
                    src="/images/logo/bondspire-logo-white.svg"
                    alt="Bondspire"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-montserrat font-bold text-lg">Bondspire</span>
              </Link>
              <span className="text-slate-gray">© 2025</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.slice(0, 3).map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-gray hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className={cn("bg-midnight-navy text-white", className)}>
      {/* Main Footer Content */}
      <div className="section-padding border-b border-slate-gray/20">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="relative w-10 h-10">
                  <Image
                    src="/images/logo/bondspire-logo-white.svg"
                    alt="Bondspire"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-montserrat font-bold text-xl">Bondspire</span>
              </Link>

              {/* Mission Statement */}
              <p className="text-slate-gray mb-6 leading-relaxed">
                Proving business can be a powerful force for positive societal change through 
                systematic solutions, radical transparency, and authentic community building.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a 
                  href="mailto:team@wearebondspire.com" 
                  className="flex items-center space-x-3 text-slate-gray hover:text-white transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 group-hover:text-bond-blue" />
                  <span>team@wearebondspire.com</span>
                </a>
                
                <div className="flex items-center space-x-3 text-slate-gray">
                  <MapPin className="w-5 h-5" />
                  <span>United States</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-gray/20 rounded-lg flex items-center justify-center text-slate-gray hover:text-white hover:bg-bond-blue transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            {navigationSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-montserrat font-bold text-lg mb-4 text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-slate-gray hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-slate-gray/20">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="font-montserrat font-bold text-xl text-white mb-2">
                Stay Connected
              </h3>
              <p className="text-slate-gray mb-6">
                Join our community and get updates on our progress, new resources, and ways to create positive change.
              </p>
              
              {/* Newsletter Signup Form */}
              <div className="max-w-md mx-auto">
                <NewsletterSignup 
                  variant="footer" 
                  showInterests={false}
                  className="bg-slate-gray/10 border border-slate-gray/20 p-4 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <div className="container-content">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-slate-gray">
              <p>© 2025 Bondspire. All rights reserved.</p>
              <span className="hidden md:inline">•</span>
              <p className="flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-spire-pink" /> for positive change
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-slate-gray">
              <Link 
                href="/privacy" 
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link 
                href="/accessibility" 
                className="hover:text-white transition-colors duration-300"
              >
                Accessibility
              </Link>
            </div>
          </div>

          {/* Additional Footer Info */}
          <div className="mt-6 pt-6 border-t border-slate-gray/20 text-center">
            <p className="text-slate-gray text-sm max-w-3xl mx-auto leading-relaxed">
              <strong className="text-white">Our Commitment:</strong> We practice radical transparency in everything we do. 
              Our financial reports, impact measurements, and decision-making processes are open to our community. 
              We believe accountability drives authentic change.
            </p>
            
            <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-slate-gray text-sm">
              <Link 
                href="/transparency" 
                className="hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span>View Our Transparency Reports</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="/impact" 
                className="hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span>See Our Impact Metrics</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility: Hidden content for screen readers */}
      <div className="sr-only">
        <h2>Bondspire Footer Navigation</h2>
        <p>Connect with us through our social media channels and stay updated with our newsletter</p>
      </div>
    </footer>
  )
}
