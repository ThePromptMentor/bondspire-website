
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  title?: string
  subtitle?: string
  backgroundImage?: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  showVideo?: boolean
  className?: string
}

export default function HeroSection({
  title = "Where bonds inspire change",
  subtitle = "We're proving business can solve society's greatest challenges through innovation, transparency, and community.",
  backgroundImage = "/images/hero/community-building-hero.jpg",
  primaryCta = { text: "Discover Our Mission", href: "/about" },
  secondaryCta = { text: "Join the Movement", href: "/community" },
  showVideo = false,
  className
}: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section 
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        className
      )}
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <div className="relative w-full h-full bg-gradient-to-br from-sky-tint to-slate-gray/20">
            <Image
              src={backgroundImage}
              alt="Community building and connection"
              fill
              className="object-cover"
              priority
              quality={90}
              onError={() => setImageError(true)}
              onLoad={() => console.log('Hero image loaded successfully')}
            />
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(43, 110, 242, 0.7) 0%, rgba(109, 76, 242, 0.7) 50%, rgba(227, 56, 164, 0.7) 100%)'
              }}
            />
          </div>
        ) : (
          // Fallback gradient background if image fails to load
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, rgba(43, 110, 242, 0.9) 0%, rgba(109, 76, 242, 0.9) 50%, rgba(227, 56, 164, 0.9) 100%)'
            }}
          />
        )}
      </div>

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-20 container-content text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Title */}
          <h1 
            id="hero-title"
            className={cn(
              "text-white font-montserrat font-bold mb-6 text-balance",
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
              "transform transition-all duration-1000",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p 
            className={cn(
              "text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl font-lato mb-8 max-w-3xl mx-auto text-balance leading-relaxed",
              "transform transition-all duration-1000 delay-300",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center items-center",
              "transform transition-all duration-1000 delay-500",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <Link
              href={primaryCta.href}
              className="btn-primary bg-white text-bond-blue hover:bg-sky-tint hover:text-midnight-navy transition-all duration-300 group min-w-[200px] sm:min-w-0"
            >
              <span>{primaryCta.text}</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href={secondaryCta.href}
              className="btn-secondary border-white text-white hover:bg-white hover:text-bond-blue min-w-[200px] sm:min-w-0"
            >
              {secondaryCta.text}
            </Link>

            {showVideo && (
              <button
                className="flex items-center space-x-2 text-white hover:text-sky-tint transition-colors duration-300 group ml-0 sm:ml-4"
                aria-label="Play introduction video"
              >
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:border-sky-tint group-hover:bg-white/10 transition-all duration-300">
                  <Play className="w-5 h-5 ml-1" fill="currentColor" />
                </div>
                <span className="font-montserrat font-medium">Watch Our Story</span>
              </button>
            )}
          </div>

          {/* Scroll Indicator */}
          <div 
            className={cn(
              "absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce",
              "transform transition-all duration-1000 delay-1000",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-lato">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility: Hidden heading for screen readers */}
      <div className="sr-only">
        <h2>Bondspire: Solving society's challenges through business innovation</h2>
      </div>
    </section>
  )
}
