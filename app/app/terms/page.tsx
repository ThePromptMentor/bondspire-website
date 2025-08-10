
import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Bondspire',
  description: 'Terms of Service for using Bondspire\'s website, programs, and community. Clear, fair terms that reflect our values of transparency and respect.',
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-content max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-bond-blue to-spire-pink rounded-full flex items-center justify-center text-white mx-auto mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-heading-1 font-montserrat font-bold text-midnight-navy mb-4">
            Terms of Service
          </h1>
          <p className="text-body text-slate-gray leading-relaxed">
            Clear, fair terms that reflect our values of transparency and mutual respect.
          </p>
          <p className="text-sm text-slate-gray mt-2">
            Last updated: January 10, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <div className="bg-sky-tint/30 rounded-lg p-8 mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-4">
              Our Approach to Terms
            </h2>
            <p className="text-slate-gray leading-relaxed">
              These terms are designed to protect both you and Bondspire while fostering the kind 
              of authentic, transparent relationship we value. We've written them in plain language 
              and focused on fairness rather than legal complexity.
            </p>
          </div>

          {/* Acceptance */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6">
              Agreement to Terms
            </h2>
            <p className="text-slate-gray leading-relaxed mb-4">
              By accessing or using Bondspire's website, programs, or services, you agree to be bound 
              by these Terms of Service and our Privacy Policy. If you don't agree with these terms, 
              please don't use our services.
            </p>
            <p className="text-slate-gray leading-relaxed">
              These terms apply to all users of our website, newsletter subscribers, program participants, 
              community members, and partners.
            </p>
          </section>

          {/* Services Description */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6 flex items-center">
              <Scale className="w-6 h-6 text-bond-blue mr-3" />
              Our Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-sky-tint/20 rounded-lg p-6">
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Free Services
                </h3>
                <ul className="space-y-1 text-slate-gray text-sm">
                  <li>• Website access and content</li>
                  <li>• Newsletter and updates</li>
                  <li>• Community forum participation</li>
                  <li>• Free resources and tools</li>
                  <li>• Public events and workshops</li>
                </ul>
              </div>

              <div className="bg-sky-tint/20 rounded-lg p-6">
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Paid Programs
                </h3>
                <ul className="space-y-1 text-slate-gray text-sm">
                  <li>• Generational Wealth Framework</li>
                  <li>• Premium community access</li>
                  <li>• One-on-one consultations</li>
                  <li>• Advanced workshops and coaching</li>
                  <li>• Custom partnership programs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6">
              Your Responsibilities
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Community Participation
                </h3>
                <p className="text-slate-gray leading-relaxed mb-3">
                  We maintain a supportive, inclusive community. When participating, you agree to:
                </p>
                <ul className="space-y-2 text-slate-gray">
                  <li>• Treat all community members with respect and kindness</li>
                  <li>• Share honestly about your experiences without misleading others</li>
                  <li>• Respect others' privacy and confidentiality</li>
                  <li>• Avoid promotional activities without permission</li>
                  <li>• Report inappropriate behavior to our team</li>
                </ul>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Accurate Information
                </h3>
                <p className="text-slate-gray leading-relaxed">
                  Please provide accurate information when signing up for programs or contacting us. 
                  This helps us serve you better and maintain the integrity of our community.
                </p>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Prohibited Activities
                </h3>
                <ul className="space-y-2 text-slate-gray">
                  <li>• Using our services for illegal activities</li>
                  <li>• Attempting to hack or disrupt our systems</li>
                  <li>• Sharing login credentials with others</li>
                  <li>• Reproducing or redistributing our copyrighted content without permission</li>
                  <li>• Harassing other users or our team members</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Program Terms */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6">
              Program-Specific Terms
            </h2>
            
            <div className="space-y-6">
              <div className="bg-bond-blue/10 border border-bond-blue/20 rounded-lg p-6">
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Paid Programs
                </h3>
                <ul className="space-y-2 text-slate-gray text-sm">
                  <li>• Payment is required before accessing program materials</li>
                  <li>• All sales are final, but we offer a 30-day satisfaction guarantee</li>
                  <li>• You receive lifetime access to materials and community</li>
                  <li>• Sharing login credentials violates these terms</li>
                  <li>• We reserve the right to remove disruptive participants</li>
                </ul>
              </div>

              <div className="bg-spire-pink/10 border border-spire-pink/20 rounded-lg p-6">
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Financial Disclaimer
                </h3>
                <p className="text-slate-gray text-sm leading-relaxed">
                  Our programs provide education and frameworks, not financial advice. We share what has 
                  worked for others, but results vary based on individual circumstances, effort, and 
                  external factors. Consult with qualified professionals for personalized financial advice.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6">
              Intellectual Property
            </h2>
            
            <div className="space-y-4 text-slate-gray">
              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
                  Our Content
                </h3>
                <p className="leading-relaxed">
                  All content on our website, in our programs, and in our communications is owned by 
                  Bondspire or used with permission. You may use it for personal purposes but cannot 
                  redistribute, sell, or use it commercially without written permission.
                </p>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
                  Your Content
                </h3>
                <p className="leading-relaxed">
                  When you share content in our community or provide testimonials, you grant us 
                  permission to use it in our marketing and educational materials. We'll always 
                  attribute it to you and won't use it in ways that misrepresent your experience.
                </p>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
                  Fair Use
                </h3>
                <p className="leading-relaxed">
                  You may quote small portions of our content for educational or review purposes, 
                  with proper attribution. For larger uses, please contact us for permission.
                </p>
              </div>
            </div>
          </section>

          {/* Limitations */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 text-spire-pink mr-3" />
              Limitations & Disclaimers
            </h2>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
                Important Notice
              </h3>
              <p className="text-slate-gray text-sm leading-relaxed">
                We provide our services "as is" and cannot guarantee specific outcomes. While we work 
                hard to provide valuable content and support, individual results depend on many factors 
                beyond our control.
              </p>
            </div>

            <div className="space-y-4 text-slate-gray">
              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
                  No Guarantees
                </h3>
                <p className="text-sm leading-relaxed">
                  We cannot guarantee specific financial results, outcomes, or experiences. Success 
                  depends on your effort, circumstances, and factors outside our control.
                </p>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
                  Service Availability
                </h3>
                <p className="text-sm leading-relaxed">
                  We strive for 99.9% uptime but cannot guarantee uninterrupted service. We may need 
                  to perform maintenance or updates that temporarily affect availability.
                </p>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
                  Limitation of Liability
                </h3>
                <p className="text-sm leading-relaxed">
                  Our liability is limited to the amount you've paid for our services. We're not 
                  responsible for indirect damages, lost profits, or consequential losses.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6">
              Termination
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Your Right to Cancel
                </h3>
                <ul className="space-y-2 text-slate-gray text-sm">
                  <li>• Cancel free services anytime</li>
                  <li>• 30-day money-back guarantee on paid programs</li>
                  <li>• Keep access to purchased content after cancellation</li>
                  <li>• Request data deletion per privacy policy</li>
                </ul>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Our Right to Terminate
                </h3>
                <ul className="space-y-2 text-slate-gray text-sm">
                  <li>• Violation of community guidelines</li>
                  <li>• Breach of these terms</li>
                  <li>• Abusive behavior toward staff or members</li>
                  <li>• Fraudulent or illegal activity</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6">
              Changes to These Terms
            </h2>
            <p className="text-slate-gray leading-relaxed mb-4">
              We may update these terms from time to time to reflect changes in our services or 
              legal requirements. When we do, we'll:
            </p>
            <ul className="space-y-2 text-slate-gray">
              <li>• Post the updated terms on this page</li>
              <li>• Update the "Last updated" date</li>
              <li>• Notify active users via email for significant changes</li>
              <li>• Give you 30 days notice for changes that affect your rights</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6 flex items-center">
              <Shield className="w-6 h-6 text-bond-blue mr-3" />
              Questions or Concerns?
            </h2>
            
            <div className="bg-gradient-to-r from-bond-blue to-spire-pink rounded-lg p-8 text-white">
              <p className="mb-4 leading-relaxed">
                If you have questions about these terms or need clarification on any point, 
                please don't hesitate to contact us. We believe in clear communication and 
                are happy to explain our policies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="btn-secondary border-white text-white hover:bg-white hover:text-bond-blue"
                >
                  Contact Us
                </Link>
                <a 
                  href="mailto:legal@wearebondspire.com"
                  className="btn-primary bg-white text-bond-blue hover:bg-sky-tint"
                >
                  legal@wearebondspire.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
