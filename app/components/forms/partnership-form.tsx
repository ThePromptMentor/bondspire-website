
'use client'

import { useState } from 'react'
import { 
  Handshake, 
  Building, 
  User, 
  Mail, 
  Phone, 
  Globe,
  MessageSquare,
  CheckCircle, 
  AlertCircle, 
  Loader2 
} from 'lucide-react'
import { cn, validateEmail, validateRequired } from '@/lib/utils'
import type { FormData } from '@/lib/types'

interface PartnershipFormProps {
  className?: string
  onSuccess?: () => void
}

export default function PartnershipForm({ className, onSuccess }: PartnershipFormProps) {
  const [formData, setFormData] = useState<FormData>({
    organizationName: '',
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    partnershipType: []
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const partnershipTypes = [
    { id: 'financial-advisory', label: 'Financial Advisory' },
    { id: 'educational-institution', label: 'Educational Institution' },
    { id: 'community-organization', label: 'Community Organization' },
    { id: 'impact-investor', label: 'Impact Investor' },
    { id: 'media-press', label: 'Media/Press' },
    { id: 'technology-partner', label: 'Technology Partner' },
    { id: 'content-creator', label: 'Content Creator' },
    { id: 'other', label: 'Other' }
  ]

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!validateRequired(formData.organizationName || '')) {
      newErrors.organizationName = 'Organization name is required'
    }

    if (!validateRequired(formData.name || '')) {
      newErrors.name = 'Contact name is required'
    }

    if (!validateRequired(formData.email || '')) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email || '')) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!validateRequired(formData.message || '')) {
      newErrors.message = 'Please tell us about your partnership interest'
    }

    if (!formData.partnershipType?.length) {
      newErrors.partnershipType = 'Please select at least one partnership type'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handlePartnershipTypeChange = (typeId: string, checked: boolean) => {
    const currentTypes = formData.partnershipType || []
    
    if (checked) {
      setFormData({
        ...formData,
        partnershipType: [...currentTypes, typeId]
      })
    } else {
      setFormData({
        ...formData,
        partnershipType: currentTypes.filter(t => t !== typeId)
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setStatus('loading')

    try {
      // Simulate API call - in real implementation, this would send to backend
      const response = await fetch('/api/partnership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          formType: 'partnership'
        }),
      })

      if (!response?.ok) {
        throw new Error('Failed to send partnership inquiry')
      }

      setStatus('success')
      setFormData({
        organizationName: '',
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
        partnershipType: []
      })

      onSuccess?.()
      
    } catch (error) {
      console.error('Partnership form error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  if (status === 'success') {
    return (
      <div className={cn(
        "bg-bond-blue/10 border border-bond-blue/20 rounded-lg p-8 text-center",
        className
      )}>
        <CheckCircle className="w-12 h-12 text-bond-blue mx-auto mb-4" />
        <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-2">
          Partnership Inquiry Received!
        </h3>
        <p className="text-slate-gray mb-4">
          Thank you for your interest in partnering with Bondspire. Our partnerships team will review your inquiry and get back to you within 3-5 business days.
        </p>
        <p className="text-sm text-slate-gray">
          Questions in the meantime? Email us at{' '}
          <a href="mailto:partnerships@wearebondspire.com" className="text-bond-blue hover:underline">
            partnerships@wearebondspire.com
          </a>
        </p>
      </div>
    )
  }

  return (
    <div className={cn("bg-white rounded-lg p-8 shadow-lg", className)}>
      <div className="text-center mb-8">
        <Handshake className="w-10 h-10 text-bond-blue mx-auto mb-4" />
        <h3 className="font-montserrat font-bold text-2xl text-midnight-navy mb-2">
          Partner With Us
        </h3>
        <p className="text-slate-gray max-w-2xl mx-auto">
          We're looking for aligned organizations and individuals who share our commitment to solving society's greatest challenges. Let's explore how we can work together to create meaningful change.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Organization Name */}
        <div>
          <label htmlFor="partnership-org" className="form-label">Organization Name</label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-gray w-5 h-5" />
            <input
              type="text"
              id="partnership-org"
              name="organizationName"
              value={formData.organizationName || ''}
              onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
              placeholder="Your organization or company name"
              className={cn(
                "form-input pl-10",
                errors?.organizationName && "border-spire-pink focus:border-spire-pink focus:ring-spire-pink"
              )}
              aria-invalid={!!errors?.organizationName}
              disabled={status === 'loading'}
              required
            />
          </div>
          {errors?.organizationName && (
            <p className="form-error flex items-center space-x-1 mt-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.organizationName}</span>
            </p>
          )}
        </div>

        {/* Contact Information Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact Name */}
          <div>
            <label htmlFor="partnership-name" className="form-label">Contact Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-gray w-5 h-5" />
              <input
                type="text"
                id="partnership-name"
                name="name"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className={cn(
                  "form-input pl-10",
                  errors?.name && "border-spire-pink focus:border-spire-pink focus:ring-spire-pink"
                )}
                aria-invalid={!!errors?.name}
                disabled={status === 'loading'}
                required
              />
            </div>
            {errors?.name && (
              <p className="form-error flex items-center space-x-1 mt-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="partnership-email" className="form-label">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-gray w-5 h-5" />
              <input
                type="email"
                id="partnership-email"
                name="email"
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className={cn(
                  "form-input pl-10",
                  errors?.email && "border-spire-pink focus:border-spire-pink focus:ring-spire-pink"
                )}
                aria-invalid={!!errors?.email}
                disabled={status === 'loading'}
                required
              />
            </div>
            {errors?.email && (
              <p className="form-error flex items-center space-x-1 mt-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Phone and Website Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phone (Optional) */}
          <div>
            <label htmlFor="partnership-phone" className="form-label">
              Phone <span className="text-slate-gray font-normal">(optional)</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-gray w-5 h-5" />
              <input
                type="tel"
                id="partnership-phone"
                name="phone"
                value={formData.phone || ''}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(555) 123-4567"
                className="form-input pl-10"
                disabled={status === 'loading'}
              />
            </div>
          </div>

          {/* Website (Optional) */}
          <div>
            <label htmlFor="partnership-website" className="form-label">
              Website <span className="text-slate-gray font-normal">(optional)</span>
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-gray w-5 h-5" />
              <input
                type="url"
                id="partnership-website"
                name="website"
                value={formData.website || ''}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="https://yourwebsite.com"
                className="form-input pl-10"
                disabled={status === 'loading'}
              />
            </div>
          </div>
        </div>

        {/* Partnership Types */}
        <div>
          <label className="form-label">
            Partnership Type <span className="text-spire-pink">*</span>
          </label>
          <p className="text-sm text-slate-gray mb-3">Select all that apply</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {partnershipTypes.map((type) => (
              <label
                key={type.id}
                className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-bond-blue hover:bg-sky-tint/20 cursor-pointer transition-colors duration-200"
              >
                <input
                  type="checkbox"
                  checked={formData.partnershipType?.includes(type.id) || false}
                  onChange={(e) => handlePartnershipTypeChange(type.id, e.target.checked)}
                  className="form-checkbox text-bond-blue focus:ring-bond-blue"
                  disabled={status === 'loading'}
                />
                <span className="text-sm text-midnight-navy">{type.label}</span>
              </label>
            ))}
          </div>
          {errors?.partnershipType && (
            <p className="form-error flex items-center space-x-1 mt-2">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.partnershipType}</span>
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="partnership-message" className="form-label">Partnership Details</label>
          <textarea
            id="partnership-message"
            name="message"
            value={formData.message || ''}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your organization, your mission, and how you envision partnering with Bondspire. What value can we create together?"
            rows={6}
            className={cn(
              "form-textarea",
              errors?.message && "border-spire-pink focus:border-spire-pink focus:ring-spire-pink"
            )}
            aria-invalid={!!errors?.message}
            disabled={status === 'loading'}
            required
          />
          {errors?.message && (
            <p className="form-error flex items-center space-x-1 mt-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className={cn(
            "btn-primary w-full flex items-center justify-center space-x-2 text-lg py-4",
            status === 'loading' && "opacity-75 cursor-not-allowed"
          )}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              <span>Sending Inquiry...</span>
            </>
          ) : (
            <>
              <Handshake className="w-6 h-6" />
              <span>Submit Partnership Inquiry</span>
            </>
          )}
        </button>

        {/* Error Message */}
        {status === 'error' && (
          <div className="bg-spire-pink/10 border border-spire-pink/20 rounded-lg p-4">
            <p className="text-spire-pink text-sm flex items-center space-x-2">
              <AlertCircle className="w-5 h-5" />
              <span>Failed to send partnership inquiry. Please try again or email us directly at partnerships@wearebondspire.com</span>
            </p>
          </div>
        )}

        {/* Partnership Info */}
        <div className="bg-sky-tint/30 border border-sky-tint rounded-lg p-4">
          <h4 className="font-montserrat font-semibold text-midnight-navy mb-2">
            What We Look For in Partners
          </h4>
          <ul className="text-sm text-slate-gray space-y-1">
            <li>• Alignment with our mission to solve societal challenges</li>
            <li>• Commitment to transparency and authentic community building</li>
            <li>• Complementary skills, resources, or reach</li>
            <li>• Shared values of integrity, impact, and innovation</li>
          </ul>
        </div>
      </form>
    </div>
  )
}
