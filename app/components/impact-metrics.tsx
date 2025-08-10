
'use client'

import { useState, useEffect, useRef } from 'react'
import { TrendingUp, Users, DollarSign, Heart, Target } from 'lucide-react'
import { cn, animateCounter } from '@/lib/utils'
import type { ImpactMetric } from '@/lib/types'

const metricsData: ImpactMetric[] = [
  {
    label: 'Families Served',
    value: 1247,
    suffix: '+',
    animationDelay: 0
  },
  {
    label: 'Community Connections Made',
    value: 3890,
    suffix: '+',
    animationDelay: 200
  },
  {
    label: 'Wealth Created',
    value: 2400000,
    prefix: '$',
    suffix: '+',
    animationDelay: 400
  },
  {
    label: 'Problems Solved',
    value: 156,
    suffix: '+',
    animationDelay: 600
  },
  {
    label: 'Community Events',
    value: 89,
    suffix: '+',
    animationDelay: 800
  }
]

interface MetricCardProps {
  metric: ImpactMetric
  index: number
  isVisible: boolean
}

function MetricCard({ metric, index, isVisible }: MetricCardProps) {
  const [currentValue, setCurrentValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (isVisible && !hasAnimated && countRef.current) {
      setTimeout(() => {
        animateCounter(countRef.current!, 0, metric.value, 2000)
        setHasAnimated(true)
      }, metric.animationDelay || 0)
    }
  }, [isVisible, hasAnimated, metric.value, metric.animationDelay])

  const getIcon = (index: number) => {
    const icons = [Users, Heart, DollarSign, Target, TrendingUp]
    const Icon = icons[index % icons.length]
    return <Icon className="w-6 h-6 md:w-8 md:h-8" />
  }

  const formatValue = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`
    }
    return value.toLocaleString()
  }

  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-6 shadow-lg text-center transform transition-all duration-700",
        "hover:shadow-xl hover:-translate-y-1",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-bond-blue to-gradient-purple rounded-full flex items-center justify-center text-white mx-auto mb-4">
        {getIcon(index)}
      </div>

      {/* Value */}
      <div className="mb-2">
        <span className="counter text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-bond-blue">
          {metric.prefix || ''}
          <span ref={countRef}>
            {hasAnimated ? formatValue(metric.value) : '0'}
          </span>
          {metric.suffix || ''}
        </span>
      </div>

      {/* Label */}
      <h3 className="font-montserrat font-semibold text-midnight-navy text-sm md:text-base">
        {metric.label}
      </h3>
    </div>
  )
}

interface ImpactMetricsProps {
  className?: string
  title?: string
  subtitle?: string
}

export default function ImpactMetrics({ 
  className,
  title = "Our Impact by the Numbers",
  subtitle = "Real change requires measurable results. Here's the impact we've created together with our community."
}: ImpactMetricsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Only animate once
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={cn("section-padding bg-gradient-to-br from-sky-tint to-white", className)}
      aria-labelledby="metrics-title"
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
            id="metrics-title"
            className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4"
          >
            {title}
          </h2>
          <p className="text-body text-slate-gray max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {metricsData.map((metric, index) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Additional Context */}
        <div 
          className={cn(
            "mt-12 text-center transform transition-all duration-700 delay-1000",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-4">
              Transparency in Measurement
            </h3>
            <p className="text-slate-gray leading-relaxed mb-4">
              We believe in radical transparency about our impact. These numbers represent real families, 
              real communities, and real change. Every metric is independently verified and regularly audited 
              to ensure accuracy and authenticity.
            </p>
            <p className="text-sm text-slate-gray">
              <strong className="text-midnight-navy">Last updated:</strong> January 2025 | 
              <strong className="text-midnight-navy"> Next update:</strong> April 2025 | 
              <a href="/transparency" className="text-bond-blue hover:underline">View detailed reports</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
