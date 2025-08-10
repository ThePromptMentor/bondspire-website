
'use client'

import { useState } from 'react'
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Tag,
  CheckCircle, 
  AlertCircle, 
  Loader2 
} from 'lucide-react'
import { cn, validateEmail, validateRequired, validateMinLength } from '@/lib/utils'
import type { FormData } from '@/lib/types'

interface ContactFormProps {
  variant?: 'full' | 'simple' | 'modal'
  className?: string
  onSuccess?: () => void
}

export default function ContactForm({ 
  variant = 'full', 
  className,
  onSuccess 
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    howDidYouHear: ''
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const subjectOptions = [
    'General Inquiry',
    'Partnership Opportunity', 
    'Media Inquiry',
    'Product Information',
    'Community Questions',
    'Support Request',
    'Speaking Engagement',
    'Other'
  ]

  const howDidYouHearOptions = [
    'Google Search',
    'Social Media',
    'Friend/Family Referral',
    'News Article',
    'Podcast',
    'Event',
    'Partner Organization',
    'Other'
  ]

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!validateRequired(formData.name || '')) {
      newErrors.name = 'Name is required'
    }

    if (!validateRequired(formData.email || '')) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email || '')) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!validateRequired(formData.message || '')) {
      newErrors.message = 'Message is required'
    } else if (!validateMinLength(formData.message || '', 10)) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    if (formData.phone && formData.phone.trim() && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setStatus('loading')

    try {
      // Simulate API call - in real implementation, this would send to backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          formType: 'contact'
        }),
      })

      if (!response?.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        howDidYouHear: ''
      })

      onSuccess?.()
      
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const isSimple = variant === 'simple' || variant === 'modal'

  if (status === 'success') {
    return (
      <div className={cn(
        "bg-bond-blue/10 border border-bond-blue/20 rounded-lg p-6 text-center",
        className
      )}>
        <CheckCircle className="w-12 h-12 text-bond-blue mx-auto mb-4" />
        <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-slate-gray mb-4">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <p className="text-sm text-slate-gray">
          In the meantime, explore our{' '}
          <a href="/resources" className="text-bond-blue hover:underline">resources</a>{' '}
          or learn more about{' '}
          <a href="/about" className="text-bond-blue hover:underline">our mission</a>.
        </p>
      </div>
    )
  }

  return (
    <div className={cn("bg-white rounded-lg", !isSimple && "p-6 shadow-lg", className)}>
      {!isSimple && (
        <div className="text-center mb-6">
          <MessageSquare className="w-8 h-8 text-bond-blue mx-auto mb-3" />
          <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-2">
            Get in Touch
          </h3>
          <p className="text-slate-gray">
            Have questions about our mission, products, or how to get involved? We'd love to hear from you.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor="contact-name" className="form-label">Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-gray w-5 h-5" />
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              className={cn(
                "form-input pl-10",
                errors?.name && "border-spire-pink focus:border-spire-pink focus:ring-spire-pink"
              )}
              aria-invalid={!!errors?.name}
              aria-describedby={errors?.name ? "name-error" : undefined}
              disabled={status === 'loading'}
              required
            />
          </div>
          {errors?.name && (
            <p id="name-error" className="form-error flex items-center space-x-1 mt-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="contact-email" className="form-label">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-gray w-5 h-5" />
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email || ''}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className={cn(
                "form-input pl-10",
                errors?.email && "border-spire-pink focus:border-spire-pink focus:ring-spire-pink"
              )}
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

        {/* Phone Field (Optional) */}
        {!isSimple && (
          <div>
            <label htmlFor="contact-phone" className="form-label">
              Phone <span className="text-slate-gray font-normal">(optional)</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-gray w-5 h-5" />
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={formData.phone || ''}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(555) 123-4567"
                className={cn(
                  "form-input pl-10",
                  errors?.phone && "border-spire-pink focus:border-spire-pink focus:ring-spire-pink"
                )}
                aria-invalid={!!errors?.phone}
                aria-describedby={errors?.phone ? "phone-error" : undefined}
                disabled={status === 'loading'}
              />
            </div>
            {errors?.phone && (
              <p id="phone-error" className="form-error flex items-center space-x-1 mt-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        )}

        {/* Subject Field */}
        {!isSimple && (
          <div>
            <label htmlFor="contact-subject" className="form-label">Subject</label>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-gray w-5 h-5" />
              <select
                id="contact-subject"
                name="subject"
                value={formData.subject || ''}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="form-select pl-10"
                disabled={status === 'loading'}
              >
                <option value="">Select a subject</option>
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Message Field */}
        <div>
          <label htmlFor="contact-message" className="form-label">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message || ''}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your question, idea, or how we can help..."
            rows={isSimple ? 4 : 6}
            className={cn(
              "form-textarea",
              errors?.message && "border-spire-pink focus:border-spire-pink focus:ring-spire-pink"
            )}
            aria-invalid={!!errors?.message}
            aria-describedby={errors?.message ? "message-error" : undefined}
            disabled={status === 'loading'}
            required
          />
          {errors?.message && (
            <p id="message-error" className="form-error flex items-center space-x-1 mt-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* How Did You Hear About Us */}
        {!isSimple && (
          <div>
            <label htmlFor="contact-source" className="form-label">
              How did you hear about us? <span className="text-slate-gray font-normal">(optional)</span>
            </label>
            <select
              id="contact-source"
              name="howDidYouHear"
              value={formData.howDidYouHear || ''}
              onChange={(e) => setFormData({ ...formData, howDidYouHear: e.target.value })}
              className="form-select"
              disabled={status === 'loading'}
            >
              <option value="">Please select</option>
              {howDidYouHearOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
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
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </button>

        {/* Error Message */}
        {status === 'error' && (
          <div className="bg-spire-pink/10 border border-spire-pink/20 rounded-lg p-3">
            <p className="text-spire-pink text-sm flex items-center space-x-2">
              <AlertCircle className="w-4 h-4" />
              <span>Failed to send message. Please try again or email us directly at team@wearebondspire.com</span>
            </p>
          </div>
        )}
      </form>
    </div>
  )
}
