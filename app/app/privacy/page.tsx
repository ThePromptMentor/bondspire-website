
import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Eye, Database, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Bondspire',
  description: 'Learn how Bondspire collects, uses, and protects your personal information. Our commitment to transparency extends to privacy practices.',
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-content max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-bond-blue to-spire-pink rounded-full flex items-center justify-center text-white mx-auto mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-heading-1 font-montserrat font-bold text-midnight-navy mb-4">
            Privacy Policy
          </h1>
          <p className="text-body text-slate-gray leading-relaxed">
            Our commitment to transparency extends to how we handle your personal information.
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
              Our Privacy Philosophy
            </h2>
            <p className="text-slate-gray leading-relaxed">
              Radical transparency is one of our core values, and this extends to how we collect, 
              use, and protect your personal information. We believe you have the right to know 
              exactly what data we collect, why we collect it, and how we use it to serve you better.
            </p>
          </div>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6 flex items-center">
              <Database className="w-6 h-6 text-bond-blue mr-3" />
              Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Information You Provide Directly
                </h3>
                <ul className="space-y-2 text-slate-gray">
                  <li>• <strong>Contact Information:</strong> Name, email address, phone number when you contact us or sign up for our newsletter</li>
                  <li>• <strong>Program Information:</strong> Details you share when applying for or participating in our programs</li>
                  <li>• <strong>Partnership Information:</strong> Organization details when inquiring about partnerships</li>
                  <li>• <strong>Communication:</strong> Messages you send us through contact forms or email</li>
                </ul>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Information Collected Automatically
                </h3>
                <ul className="space-y-2 text-slate-gray">
                  <li>• <strong>Usage Data:</strong> Pages visited, time spent, click patterns (via Google Analytics)</li>
                  <li>• <strong>Technical Information:</strong> IP address, browser type, device information</li>
                  <li>• <strong>Cookies:</strong> Small files to improve website functionality and remember preferences</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6 flex items-center">
              <Eye className="w-6 h-6 text-bond-blue mr-3" />
              How We Use Your Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-sky-tint/20 rounded-lg p-6">
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Service Delivery
                </h3>
                <ul className="space-y-1 text-slate-gray text-sm">
                  <li>• Respond to your inquiries</li>
                  <li>• Provide program access and support</li>
                  <li>• Send program updates and materials</li>
                  <li>• Process partnership applications</li>
                </ul>
              </div>

              <div className="bg-sky-tint/20 rounded-lg p-6">
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Communication
                </h3>
                <ul className="space-y-1 text-slate-gray text-sm">
                  <li>• Send newsletter updates (with consent)</li>
                  <li>• Notify about events and opportunities</li>
                  <li>• Share impact reports and research</li>
                  <li>• Provide customer support</li>
                </ul>
              </div>

              <div className="bg-sky-tint/20 rounded-lg p-6">
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Improvement
                </h3>
                <ul className="space-y-1 text-slate-gray text-sm">
                  <li>• Analyze website usage patterns</li>
                  <li>• Improve our programs and resources</li>
                  <li>• Develop new solutions</li>
                  <li>• Measure impact and effectiveness</li>
                </ul>
              </div>

              <div className="bg-sky-tint/20 rounded-lg p-6">
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Legal Compliance
                </h3>
                <ul className="space-y-1 text-slate-gray text-sm">
                  <li>• Comply with applicable laws</li>
                  <li>• Protect our rights and property</li>
                  <li>• Ensure platform security</li>
                  <li>• Prevent fraud and abuse</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6">
              Information Sharing
            </h2>
            
            <div className="bg-spire-pink/10 border border-spire-pink/20 rounded-lg p-6 mb-6">
              <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
                We Do NOT Sell Your Data
              </h3>
              <p className="text-slate-gray text-sm">
                We have never sold personal information and never will. Your trust is more valuable 
                to us than any revenue from data sales.
              </p>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                Limited Sharing Scenarios
              </h3>
              <ul className="space-y-2 text-slate-gray">
                <li>• <strong>Service Providers:</strong> Trusted vendors who help us operate (email service, analytics, hosting) under strict confidentiality agreements</li>
                <li>• <strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
                <li>• <strong>Business Transfer:</strong> In the unlikely event of a merger or acquisition, with the same privacy commitments</li>
                <li>• <strong>Consent:</strong> When you explicitly authorize us to share specific information</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6">
              Your Privacy Rights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Access & Control
                </h3>
                <ul className="space-y-2 text-slate-gray text-sm">
                  <li>• Request a copy of your personal data</li>
                  <li>• Update or correct inaccurate information</li>
                  <li>• Delete your account and data</li>
                  <li>• Opt out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Communication Preferences
                </h3>
                <ul className="space-y-2 text-slate-gray text-sm">
                  <li>• Unsubscribe from newsletters anytime</li>
                  <li>• Choose communication frequency</li>
                  <li>• Select specific topics of interest</li>
                  <li>• Pause communications temporarily</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6">
              How We Protect Your Information
            </h2>
            
            <div className="space-y-4 text-slate-gray">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-bond-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-montserrat font-semibold text-midnight-navy mb-1">
                    Technical Safeguards
                  </h3>
                  <p className="text-sm">
                    SSL encryption, secure servers, regular security updates, and access controls 
                    to protect data from unauthorized access.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Database className="w-5 h-5 text-bond-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-montserrat font-semibold text-midnight-navy mb-1">
                    Data Minimization
                  </h3>
                  <p className="text-sm">
                    We collect only the information necessary to provide our services and 
                    delete data when it's no longer needed.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Eye className="w-5 h-5 text-bond-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-montserrat font-semibold text-midnight-navy mb-1">
                    Access Controls
                  </h3>
                  <p className="text-sm">
                    Only authorized team members have access to personal information, 
                    and all access is logged and monitored.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6 flex items-center">
              <Mail className="w-6 h-6 text-bond-blue mr-3" />
              Questions About Privacy?
            </h2>
            
            <div className="bg-gradient-to-r from-bond-blue to-spire-pink rounded-lg p-8 text-white">
              <p className="mb-4 leading-relaxed">
                We're committed to transparency about our privacy practices. If you have questions, 
                concerns, or want to exercise your privacy rights, please don't hesitate to contact us.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="btn-secondary border-white text-white hover:bg-white hover:text-bond-blue"
                >
                  Contact Us
                </Link>
                <a 
                  href="mailto:privacy@wearebondspire.com"
                  className="btn-primary bg-white text-bond-blue hover:bg-sky-tint"
                >
                  privacy@wearebondspire.com
                </a>
              </div>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="border-t border-sky-tint pt-8">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-4">
              Changes to This Policy
            </h2>
            <p className="text-slate-gray leading-relaxed">
              We may update this privacy policy from time to time to reflect changes in our practices 
              or legal requirements. When we do, we'll post the updated policy on this page and update 
              the "Last updated" date. For significant changes, we'll notify you via email or prominent 
              website notice.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
