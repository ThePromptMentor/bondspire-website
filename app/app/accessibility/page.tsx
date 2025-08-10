
import { Metadata } from 'next'
import Link from 'next/link'
import { Eye, Keyboard, Volume2, MousePointer, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Bondspire',
  description: 'Bondspire is committed to ensuring digital accessibility for all users. Learn about our accessibility features and how to get support.',
  robots: { index: true, follow: true },
}

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-content max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-bond-blue to-spire-pink rounded-full flex items-center justify-center text-white mx-auto mb-6">
            <Eye className="w-8 h-8" />
          </div>
          <h1 className="text-heading-1 font-montserrat font-bold text-midnight-navy mb-4">
            Accessibility Statement
          </h1>
          <p className="text-body text-slate-gray leading-relaxed">
            Bondspire is committed to ensuring digital accessibility for all users, regardless of ability.
          </p>
          <p className="text-sm text-slate-gray mt-2">
            Last updated: January 10, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Our Commitment */}
          <div className="bg-sky-tint/30 rounded-lg p-8 mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-4">
              Our Accessibility Commitment
            </h2>
            <p className="text-slate-gray leading-relaxed">
              We believe that everyone deserves equal access to information and opportunities for 
              positive change. Our website and services are designed to be accessible to all users, 
              including those with disabilities. We continuously work to improve the accessibility 
              of our digital platforms.
            </p>
          </div>

          {/* Standards Compliance */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6">
              Accessibility Standards
            </h2>
            
            <div className="bg-bond-blue/10 border border-bond-blue/20 rounded-lg p-6 mb-6">
              <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                WCAG 2.1 AA Compliance
              </h3>
              <p className="text-slate-gray text-sm leading-relaxed">
                Our website conforms to the Web Content Accessibility Guidelines (WCAG) 2.1 at the 
                AA level. These guidelines explain how to make web content more accessible to people 
                with disabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-sky-tint/20 rounded-lg p-6">
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Perceivable
                </h3>
                <ul className="space-y-1 text-slate-gray text-sm">
                  <li>• Alt text for all images</li>
                  <li>• High contrast color ratios</li>
                  <li>• Resizable text up to 200%</li>
                  <li>• Clear visual hierarchy</li>
                </ul>
              </div>

              <div className="bg-sky-tint/20 rounded-lg p-6">
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Operable
                </h3>
                <ul className="space-y-1 text-slate-gray text-sm">
                  <li>• Full keyboard navigation</li>
                  <li>• No seizure-inducing content</li>
                  <li>• Sufficient time limits</li>
                  <li>• Focus indicators</li>
                </ul>
              </div>

              <div className="bg-sky-tint/20 rounded-lg p-6">
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Understandable
                </h3>
                <ul className="space-y-1 text-slate-gray text-sm">
                  <li>• Plain language content</li>
                  <li>• Consistent navigation</li>
                  <li>• Clear form labels</li>
                  <li>• Error identification</li>
                </ul>
              </div>

              <div className="bg-sky-tint/20 rounded-lg p-6">
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Robust
                </h3>
                <ul className="space-y-1 text-slate-gray text-sm">
                  <li>• Valid HTML markup</li>
                  <li>• ARIA labels and roles</li>
                  <li>• Screen reader compatibility</li>
                  <li>• Cross-browser support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6">
              Accessibility Features
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bond-blue to-spire-pink rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Keyboard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
                    Keyboard Navigation
                  </h3>
                  <p className="text-slate-gray text-sm leading-relaxed mb-3">
                    Navigate our entire website using only a keyboard. Use Tab to move forward, 
                    Shift+Tab to move backward, and Enter or Space to activate links and buttons.
                  </p>
                  <div className="bg-sky-tint/30 p-3 rounded">
                    <p className="text-xs text-slate-gray">
                      <strong>Skip Links:</strong> Press Tab on any page to access "Skip to main content" 
                      link for faster navigation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gradient-purple to-spire-pink rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
                    Visual Accessibility
                  </h3>
                  <p className="text-slate-gray text-sm leading-relaxed mb-3">
                    Our design meets high contrast requirements and works well with browser zoom up to 200%. 
                    All interactive elements have clear focus indicators.
                  </p>
                  <div className="bg-sky-tint/30 p-3 rounded">
                    <p className="text-xs text-slate-gray">
                      <strong>Color Usage:</strong> We never rely on color alone to convey information. 
                      All content is accessible in grayscale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-spire-pink to-bond-blue rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Volume2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
                    Screen Reader Support
                  </h3>
                  <p className="text-slate-gray text-sm leading-relaxed mb-3">
                    All content is structured with proper headings, landmarks, and ARIA labels. 
                    Images include descriptive alt text, and forms have clear labels and instructions.
                  </p>
                  <div className="bg-sky-tint/30 p-3 rounded">
                    <p className="text-xs text-slate-gray">
                      <strong>Tested With:</strong> NVDA, JAWS, and VoiceOver screen readers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bond-blue to-gradient-purple rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <MousePointer className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
                    Motor Accessibility
                  </h3>
                  <p className="text-slate-gray text-sm leading-relaxed mb-3">
                    All interactive elements meet minimum size requirements (44x44 pixels) and have 
                    sufficient spacing. No actions require precise timing or complex gestures.
                  </p>
                  <div className="bg-sky-tint/30 p-3 rounded">
                    <p className="text-xs text-slate-gray">
                      <strong>Touch Friendly:</strong> Optimized for touch interfaces and assistive devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Browser & AT Support */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6">
              Browser & Assistive Technology Support
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Supported Browsers
                </h3>
                <ul className="space-y-2 text-slate-gray text-sm">
                  <li>• Chrome (latest 2 versions)</li>
                  <li>• Firefox (latest 2 versions)</li>
                  <li>• Safari (latest 2 versions)</li>
                  <li>• Edge (latest 2 versions)</li>
                  <li>• Mobile Safari (iOS 12+)</li>
                  <li>• Chrome Mobile (Android 8+)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-3">
                  Assistive Technologies
                </h3>
                <ul className="space-y-2 text-slate-gray text-sm">
                  <li>• NVDA (Windows)</li>
                  <li>• JAWS (Windows)</li>
                  <li>• VoiceOver (Mac/iOS)</li>
                  <li>• TalkBack (Android)</li>
                  <li>• Dragon NaturallySpeaking</li>
                  <li>• Switch navigation devices</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Known Issues */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6">
              Known Limitations
            </h2>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
                Transparency Notice
              </h3>
              <p className="text-slate-gray text-sm leading-relaxed">
                In line with our commitment to radical transparency, we openly share areas where 
                our accessibility could be improved and our timeline for addressing these issues.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-sky-tint/20 rounded-lg p-4">
                <h4 className="font-montserrat font-semibold text-midnight-navy mb-2 text-sm">
                  Third-Party Content
                </h4>
                <p className="text-slate-gray text-sm leading-relaxed">
                  Some embedded content (videos, maps) may have accessibility limitations. 
                  We provide alternative access methods where possible and work with providers 
                  to improve accessibility.
                </p>
              </div>

              <div className="bg-sky-tint/20 rounded-lg p-4">
                <h4 className="font-montserrat font-semibold text-midnight-navy mb-2 text-sm">
                  PDF Documents
                </h4>
                <p className="text-slate-gray text-sm leading-relaxed">
                  We're working to ensure all PDF documents are accessible. If you need an 
                  alternative format for any document, please contact us.
                </p>
              </div>
            </div>
          </section>

          {/* Feedback & Support */}
          <section className="mb-12">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-6 flex items-center">
              <Mail className="w-6 h-6 text-bond-blue mr-3" />
              Accessibility Support
            </h2>
            
            <div className="bg-gradient-to-r from-bond-blue to-spire-pink rounded-lg p-8 text-white">
              <h3 className="font-montserrat font-bold text-xl mb-4">
                Need Help or Have Feedback?
              </h3>
              <p className="mb-6 leading-relaxed">
                We welcome your feedback on the accessibility of our website. If you encounter 
                any accessibility barriers or need assistance accessing content, please contact 
                us immediately. We'll work to provide alternative access and address any issues.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-montserrat font-semibold mb-2">Contact Methods:</h4>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li>• Email: accessibility@wearebondspire.com</li>
                    <li>• Phone: (555) 123-BOND</li>
                    <li>• Contact form: /contact</li>
                    <li>• Response time: Within 24 hours</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-montserrat font-semibold mb-2">When Contacting:</h4>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li>• Describe the accessibility issue</li>
                    <li>• Include the page URL where possible</li>
                    <li>• Tell us your assistive technology</li>
                    <li>• Let us know your preferred solution</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <Link 
                  href="/contact" 
                  className="btn-secondary border-white text-white hover:bg-white hover:text-bond-blue"
                >
                  Contact Accessibility Team
                </Link>
              </div>
            </div>
          </section>

          {/* Ongoing Commitment */}
          <section className="border-t border-sky-tint pt-8">
            <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy mb-4">
              Our Ongoing Commitment
            </h2>
            <div className="space-y-4 text-slate-gray">
              <p className="leading-relaxed">
                Accessibility is an ongoing priority, not a one-time check. We regularly review 
                and update our website to improve accessibility and user experience for all visitors.
              </p>
              
              <div className="bg-sky-tint/30 rounded-lg p-6">
                <h3 className="font-montserrat font-semibold text-midnight-navy mb-2">
                  Regular Reviews
                </h3>
                <ul className="space-y-2 text-slate-gray text-sm">
                  <li>• Monthly accessibility audits</li>
                  <li>• User testing with disabled community members</li>
                  <li>• Staff accessibility training</li>
                  <li>• Continuous improvement based on feedback</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
