
'use client'

import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { cn, validateEmail } from '@/lib/utils'
import type { NewsletterSignup } from '@/lib/types'

interface NewsletterSignupProps {
  variant?: 'inline' | 'modal' | 'footer'
  className?: string
  showInterests?: boolean
}

export default function NewsletterSignup({ 
  variant = 'inline', 
  className,
  showInterests = true 
}: NewsletterSignupProps) {
  const [formData, setFormData] = useState<NewsletterSignup>({
    email: '',
    firstName: '',
    interestArea: 'all'
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setStatus('loading')

    try {
      // Simulate API call - in real implementation, this would connect to email service
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response?.ok) {
        throw new Error('Failed to subscribe')
      }

      setStatus('success')
      setFormData({ email: '', firstName: '', interestArea: 'all' })
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
      
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const inputClasses = cn(
    "form-input pl-10",
    errors?.email && "border-spire-pink focus:border-spire-pink focus:ring-spire-pink"
  )

  const isCompact = variant === 'footer' || variant === 'modal'

  if (status === 'success') {
    return (
      <div className={cn(
        "bg-bond-blue/10 border border-bond-blue/20 rounded-lg p-6 text-center",
        isCompact && "p-4",
        className
      )}>
        <CheckCircle className="w-8 h-8 text-bond-blue mx-auto mb-3" />
        <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
          Welcome to the movement!
        </h3>
        <p className="text-slate-gray text-sm">
          Thank you for subscribing. Check your email for a welcome message with next steps.
        </p>
      </div>
    )
  }

  return (
    <div className={cn("bg-white rounded-lg", !isCompact && "p-6 shadow-lg", className)}>
      {!isCompact && (
        <div className="text-center mb-6">
          <Mail className="w-8 h-8 text-bond-blue mx-auto mb-3" />
          <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-2">
            Stay Connected
          </h3>
          <p className="text-slate-gray">
            Get updates on our progress, new resources, and ways to get involved in creating positive change.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Email Field */}
        <div>
          {!isCompact && <label htmlFor="newsletter-email" className="form-label">Email Address</label>}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-gray w-5 h-5" />
            <input
              type="email"
              id="newsletter-email"
              name="email"
              value={formData.email || ''}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={isCompact ? "Enter your email" : "your@email.com"}
              className={inputClasses}
              aria-invalid={!!errors?.email}
              aria-describedby={errors?.email ? "email-error" : undefined}
              disabled={status === 'loading'}
              required
            />
          </div>
          {errors?.email && (
            <p id="email-error" className="form-error flex items-center space-x-1 mt-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* First Name Field (optional) */}
        {!isCompact && (
          <div>
            <label htmlFor="newsletter-firstname" className="form-label">
              First Name <span className="text-slate-gray font-normal">(optional)</span>
            </label>
            <input
              type="text"
              id="newsletter-firstname"
              name="firstName"
              value={formData.firstName || ''}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="Your first name"
              className="form-input"
              disabled={status === 'loading'}
            />
          </div>
        )}

        {/* Interest Area */}
        {showInterests && !isCompact && (
          <div>
            <label htmlFor="newsletter-interest" className="form-label">
              What interests you most?
            </label>
            <select
              id="newsletter-interest"
              name="interestArea"
              value={formData.interestArea || 'all'}
              onChange={(e) => setFormData({ 
                ...formData, 
                interestArea: e.target.value as NewsletterSignup['interestArea'] 
              })}
              className="form-select"
              disabled={status === 'loading'}
            >
              <option value="all">All Updates</option>
              <option value="financial">Financial Empowerment</option>
              <option value="community">Community Building</option>
              <option value="education">Educational Access</option>
            </select>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className={cn(
            "btn-primary w-full flex items-center justify-center space-x-2",
            status === 'loading' && "opacity-75 cursor-not-allowed"
          )}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : (
            <>
              <Mail className="w-5 h-5" />
              <span>{isCompact ? "Subscribe" : "Join the Movement"}</span>
            </>
          )}
        </button>

        {/* Error Message */}
        {status === 'error' && (
          <div className="bg-spire-pink/10 border border-spire-pink/20 rounded-lg p-3">
            <p className="text-spire-pink text-sm flex items-center space-x-2">
              <AlertCircle className="w-4 h-4" />
              <span>Something went wrong. Please try again or contact us directly.</span>
            </p>
          </div>
        )}

        {/* Privacy Note */}
        <p className="text-xs text-slate-gray text-center">
          We respect your privacy. Unsubscribe at any time. 
          <br />
          <a href="/privacy" className="text-bond-blue hover:underline">
            View our privacy policy
          </a>
        </p>
      </form>
    </div>
  )
}
