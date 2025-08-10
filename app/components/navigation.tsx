
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { NavigationItem } from '@/lib/types'

const navigationData: NavigationItem[] = [
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about#our-story' },
      { label: 'Mission & Values', href: '/about#mission-values' },
      { label: 'The Five Pillars', href: '/about#five-pillars' },
      { label: 'Team', href: '/about#team' }
    ]
  },
  {
    label: 'What We Do',
    href: '/what-we-do',
    children: [
      { label: 'Financial Inequality Solutions', href: '/what-we-do/financial-inequality' },
      { label: 'Information Integrity Tools', href: '/what-we-do/information-integrity' },
      { label: 'Community Resilience Programs', href: '/what-we-do/community-resilience' },
      { label: 'Political Transparency Initiatives', href: '/what-we-do/political-transparency' },
      { label: 'Educational Access Platforms', href: '/what-we-do/educational-access' }
    ]
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'The Generational Wealth Framework', href: '/products#wealth-framework' },
      { label: 'Coming Soon', href: '/products#coming-soon' },
      { label: 'Request Early Access', href: '/products#early-access' }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Research & Reports', href: '/resources/research' },
      { label: 'Success Stories', href: '/resources/success-stories' },
      { label: 'FAQ', href: '/resources/faq' }
    ]
  },
  {
    label: 'Community',
    href: '/community',
    children: [
      { label: 'Join Us', href: '/community#join-us' },
      { label: 'Events', href: '/community#events' },
      { label: 'Partner With Us', href: '/community#partner' }
    ]
  },
  { label: 'Contact', href: '/contact' }
]

interface NavigationProps {
  transparent?: boolean
  fixed?: boolean
  className?: string
}

export default function Navigation({ transparent = false, fixed = true, className }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const isTransparent = transparent && !isScrolled && !isMobileMenuOpen

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
        tabIndex={0}
      >
        Skip to main content
      </a>

      <nav 
        className={cn(
          "w-full z-50 transition-all duration-300",
          fixed && "fixed top-0",
          isTransparent 
            ? "bg-transparent" 
            : "bg-white/95 backdrop-blur-sm shadow-sm",
          className
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-content">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-bond-blue focus:ring-offset-2 rounded"
              aria-label="Bondspire Home"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src="/images/logo/bondspire-logo.png"
                  alt="Bondspire"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className={cn(
                "font-montserrat font-bold text-lg md:text-xl transition-colors duration-300",
                isTransparent ? "text-white" : "text-midnight-navy"
              )}>
                Bondspire
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationData.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <>
                      <button
                        className={cn(
                          "nav-link px-3 py-2 rounded-md flex items-center space-x-1",
                          isTransparent ? "text-white hover:text-sky-tint" : "text-midnight-navy hover:text-bond-blue"
                        )}
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        onFocus={() => setActiveDropdown(item.label)}
                        onBlur={(e) => {
                          // Only close if focus is moving outside the dropdown
                          if (!e.currentTarget.parentElement?.contains(e.relatedTarget)) {
                            setActiveDropdown(null)
                          }
                        }}
                        aria-expanded={activeDropdown === item.label}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div
                        className={cn(
                          "absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50",
                          "opacity-0 invisible transform -translate-y-2 transition-all duration-200",
                          activeDropdown === item.label && "opacity-100 visible translate-y-0"
                        )}
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-midnight-navy hover:text-bond-blue hover:bg-sky-tint transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "nav-link px-3 py-2 rounded-md",
                        isTransparent ? "text-white hover:text-sky-tint" : "text-midnight-navy hover:text-bond-blue"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <Link href="/community" className="btn-primary ml-4">
                Join the Movement
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-bond-blue",
                isTransparent ? "text-white" : "text-midnight-navy"
              )}
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden fixed inset-0 top-16 bg-white z-40 transition-all duration-300",
            isMobileMenuOpen 
              ? "opacity-100 visible" 
              : "opacity-0 invisible pointer-events-none"
          )}
        >
          <div className="h-full overflow-y-auto px-4 py-6">
            {navigationData.map((item) => (
              <div key={item.label} className="mb-4">
                {item.children ? (
                  <>
                    <button
                      className="w-full text-left font-montserrat font-semibold text-midnight-navy py-2 flex items-center justify-between"
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      aria-expanded={activeDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180"
                      )} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-slate-gray hover:text-bond-blue transition-colors duration-200"
                            onClick={toggleMobileMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block font-montserrat font-semibold text-midnight-navy py-2 hover:text-bond-blue transition-colors duration-200"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200">
              <Link 
                href="/community" 
                className="btn-primary w-full text-center block"
                onClick={toggleMobileMenu}
              >
                Join the Movement
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}
