
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { NavigationItem } from '@/lib/types'

const navigationData: NavigationItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Products', href: '/products' },
  { label: 'Resources', href: '/resources' },
  { label: 'Community', href: '/community' },
  { label: 'Impact', href: '/impact' },
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
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "nav-link px-3 py-2 rounded-md",
                    isTransparent ? "text-white hover:text-sky-tint" : "text-midnight-navy hover:text-bond-blue"
                  )}
                >
                  {item.label}
                </Link>
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
                <Link
                  href={item.href}
                  className="block font-montserrat font-semibold text-midnight-navy py-2 hover:text-bond-blue transition-colors duration-200"
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
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
