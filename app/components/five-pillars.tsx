
'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { 
  DollarSign, 
  Shield, 
  Users, 
  Eye, 
  GraduationCap,
  ArrowRight,
  ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { PillarData } from '@/lib/types'

const pillarsData: PillarData[] = [
  {
    id: 'financial-inequality',
    title: 'Financial Inequality Crisis',
    description: 'Breaking down barriers to generational wealth building',
    longDescription: 'Traditional wealth-building advice excludes millions of families. We\'re creating accessible frameworks that work for middle-class families, not just the wealthy.',
    icon: 'DollarSign',
    problem: '40% of Americans can\'t cover a $400 emergency, while wealth concentration grows.',
    solution: 'Transparent, accessible frameworks that demystify wealth building for everyday families.',
    impact: 'Framework development and beta testing with initial community members.',
    progress: 5
  },
  {
    id: 'information-integrity',
    title: 'Information Integrity Breakdown',
    description: 'Restoring trust through transparent information sharing',
    longDescription: 'Misinformation and lack of transparency erode public trust. We model radical honesty in business and provide tools for information verification.',
    icon: 'Shield',
    problem: '73% of Americans struggle to identify reliable information sources.',
    solution: 'Transparency-first business practices and information integrity tools.',
    impact: 'Transparency research and early community engagement initiatives.',
    progress: 3
  },
  {
    id: 'community-resilience',
    title: 'Community Resilience Collapse',
    description: 'Rebuilding authentic local connections and support networks',
    longDescription: 'Digital connections can\'t replace community bonds. We facilitate real-world relationships that strengthen local resilience and mutual support.',
    icon: 'Users',
    problem: 'Social isolation affects 35% of adults, weakening community support systems.',
    solution: 'Programs that foster genuine local connections and mutual aid networks.',
    impact: 'Community building research and initial networking events planning.',
    progress: 7
  },
  {
    id: 'political-transparency',
    title: 'Political Transparency Deficit',
    description: 'Promoting accountable governance and citizen engagement',
    longDescription: 'Complex political systems obscure decision-making. We advocate for transparency and create tools that help citizens engage meaningfully with governance.',
    icon: 'Eye',
    problem: '58% of citizens feel disconnected from political decision-making processes.',
    solution: 'Transparency advocacy and citizen engagement tools.',
    impact: 'Early research into transparency tools and civic engagement platforms.',
    progress: 2
  },
  {
    id: 'educational-access',
    title: 'Educational Access Gatekeeping',
    description: 'Democratizing learning and skill development opportunities',
    longDescription: 'High costs and complex requirements limit access to quality education. We create alternative pathways that prioritize learning outcomes over credentials.',
    icon: 'GraduationCap',
    problem: 'Student debt exceeds $1.7T while many valuable skills aren\'t taught.',
    solution: 'Alternative learning pathways focused on practical skills and outcomes.',
    impact: 'Alternative learning pathway research and initial curriculum development.',
    progress: 4
  }
]

interface PillarCardProps {
  pillar: PillarData
  isExpanded: boolean
  onToggle: () => void
  index: number
}

function PillarCard({ pillar, isExpanded, onToggle, index }: PillarCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  const getIcon = (iconName: string) => {
    const icons = {
      DollarSign,
      Shield,
      Users,
      Eye,
      GraduationCap
    }
    const Icon = icons[iconName as keyof typeof icons] || DollarSign
    return <Icon className="w-8 h-8" />
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        "card-pillar group cursor-pointer transform transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        isExpanded && "ring-2 ring-bond-blue"
      )}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-controls={`pillar-content-${pillar.id}`}
    >
      {/* Icon and Progress Ring */}
      <div className="flex items-start justify-between mb-4">
        <div className="relative">
          {/* Progress Ring */}
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-sky-tint"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - pillar.progress / 100)}`}
              className="text-bond-blue transition-all duration-1000"
              strokeLinecap="round"
            />
          </svg>
          
          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center text-bond-blue group-hover:text-spire-pink transition-colors duration-300">
            {getIcon(pillar.icon)}
          </div>
          
          {/* Progress Percentage */}
          <div className="absolute -bottom-1 -right-1 bg-bond-blue text-white text-xs font-montserrat font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {pillar.progress}%
          </div>
        </div>

        <ChevronRight 
          className={cn(
            "w-5 h-5 text-slate-gray group-hover:text-bond-blue transition-all duration-300",
            isExpanded && "rotate-90"
          )} 
        />
      </div>

      {/* Title */}
      <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-2 group-hover:text-bond-blue transition-colors duration-300">
        {pillar.title}
      </h3>

      {/* Short Description */}
      <p className="text-slate-gray text-base mb-4 leading-relaxed">
        {pillar.description}
      </p>

      {/* Expanded Content */}
      <div
        id={`pillar-content-${pillar.id}`}
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out",
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pt-4 border-t border-sky-tint space-y-4">
          {/* Long Description */}
          <p className="text-slate-gray text-sm leading-relaxed">
            {pillar.longDescription}
          </p>

          {/* Problem/Solution/Impact */}
          <div className="space-y-3">
            <div>
              <h4 className="font-montserrat font-semibold text-spire-pink text-sm mb-1">The Problem</h4>
              <p className="text-slate-gray text-sm leading-relaxed">{pillar.problem}</p>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold text-bond-blue text-sm mb-1">Our Solution</h4>
              <p className="text-slate-gray text-sm leading-relaxed">{pillar.solution}</p>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold text-gradient-purple text-sm mb-1">Current Impact</h4>
              <p className="text-slate-gray text-sm leading-relaxed">{pillar.impact}</p>
            </div>
          </div>

          {/* Learn More Link */}
          <Link
            href={`/what-we-do/${pillar.id}`}
            className="inline-flex items-center space-x-1 text-bond-blue hover:text-spire-pink font-montserrat font-medium text-sm transition-colors duration-300 group"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  )
}

interface FivePillarsProps {
  showAsPreview?: boolean
  className?: string
}

export default function FivePillars({ showAsPreview = false, className }: FivePillarsProps) {
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const togglePillar = (pillarId: string) => {
    setExpandedPillar(expandedPillar === pillarId ? null : pillarId)
  }

  return (
    <section 
      ref={sectionRef}
      className={cn("section-padding bg-sky-tint/50", className)}
      aria-labelledby="pillars-title"
    >
      <div className="container-content">
        {/* Section Header */}
        <div 
          className={cn(
            "text-center mb-12 transform transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <h2 
            id="pillars-title"
            className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4"
          >
            {showAsPreview ? "Our Five Pillars" : "The Five Pillars of Change"}
          </h2>
          <p className="text-body text-slate-gray max-w-3xl mx-auto leading-relaxed">
            {showAsPreview 
              ? "We're tackling society's most pressing challenges through systematic, transparent solutions."
              : "These interconnected challenges require coordinated solutions. We're addressing each pillar through innovative frameworks, community building, and radical transparency."
            }
          </p>

          {showAsPreview && (
            <Link
              href="/about#five-pillars"
              className="inline-flex items-center space-x-2 text-bond-blue hover:text-spire-pink font-montserrat font-medium mt-4 transition-colors duration-300 group"
            >
              <span>Explore All Pillars</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          )}
        </div>

        {/* Pillars Grid */}
        <div className={cn(
          showAsPreview 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8"
        )}>
          {/* First 4 pillars in 2x2 grid for full view */}
          {(showAsPreview ? pillarsData.slice(0, 3) : pillarsData.slice(0, 4)).map((pillar, index) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              isExpanded={expandedPillar === pillar.id}
              onToggle={() => togglePillar(pillar.id)}
              index={index}
            />
          ))}
        </div>

        {/* 5th pillar centered below when showing all */}
        {!showAsPreview && (
          <div className="flex justify-center mt-6 lg:mt-8">
            <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
              <PillarCard
                key={pillarsData[4].id}
                pillar={pillarsData[4]}
                isExpanded={expandedPillar === pillarsData[4].id}
                onToggle={() => togglePillar(pillarsData[4].id)}
                index={4}
              />
            </div>
          </div>
        )}

        {/* Additional Info for Full View */}
        {!showAsPreview && (
          <div 
            className={cn(
              "mt-12 text-center transform transition-all duration-700 delay-500",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-4">
                Our Integrated Approach
              </h3>
              <p className="text-body text-slate-gray leading-relaxed mb-6">
                These pillars aren't isolated challenges—they're interconnected systems that reinforce each other. 
                Financial inequality limits educational access. Information breakdown weakens community bonds. 
                We address them as an integrated whole, creating solutions that strengthen multiple pillars simultaneously.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/what-we-do" className="btn-primary">
                  Explore Our Solutions
                </Link>
                <Link href="/products" className="btn-secondary">
                  View Our Products
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
