
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Home, ArrowLeft, Search, Mail } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-tint to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* 404 Illustration */}
        <div className="relative w-64 h-48 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-bond-blue/20 to-spire-pink/20 rounded-lg flex items-center justify-center">
            <div className="text-6xl font-montserrat font-bold text-bond-blue opacity-50">
              404
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-16 h-16 bg-spire-pink rounded-full opacity-20 animate-pulse" />
          <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-purple rounded-full opacity-20 animate-pulse delay-1000" />
        </div>

        {/* Error Message */}
        <h1 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4">
          Page Not Found
        </h1>
        
        <p className="text-body text-slate-gray leading-relaxed mb-8 max-w-lg mx-auto">
          We couldn't find the page you're looking for. It might have been moved, 
          deleted, or you may have mistyped the URL.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/" 
            className="btn-primary flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="font-montserrat font-bold text-midnight-navy mb-4">
            Looking for something specific?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <Link 
              href="/about" 
              className="flex items-center space-x-2 text-slate-gray hover:text-bond-blue transition-colors duration-300 p-2 rounded hover:bg-sky-tint/20"
            >
              <span>Learn About Our Mission</span>
            </Link>
            
            <Link 
              href="/what-we-do" 
              className="flex items-center space-x-2 text-slate-gray hover:text-bond-blue transition-colors duration-300 p-2 rounded hover:bg-sky-tint/20"
            >
              <span>Explore Our Solutions</span>
            </Link>
            
            <Link 
              href="/products" 
              className="flex items-center space-x-2 text-slate-gray hover:text-bond-blue transition-colors duration-300 p-2 rounded hover:bg-sky-tint/20"
            >
              <span>View Our Products</span>
            </Link>
            
            <Link 
              href="/community" 
              className="flex items-center space-x-2 text-slate-gray hover:text-bond-blue transition-colors duration-300 p-2 rounded hover:bg-sky-tint/20"
            >
              <span>Join Our Community</span>
            </Link>
            
            <Link 
              href="/resources" 
              className="flex items-center space-x-2 text-slate-gray hover:text-bond-blue transition-colors duration-300 p-2 rounded hover:bg-sky-tint/20"
            >
              <span>Browse Resources</span>
            </Link>
            
            <Link 
              href="/contact" 
              className="flex items-center space-x-2 text-slate-gray hover:text-bond-blue transition-colors duration-300 p-2 rounded hover:bg-sky-tint/20"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <p className="text-slate-gray text-sm mt-8">
          If you believe this is an error, please{' '}
          <Link href="/contact" className="text-bond-blue hover:underline">
            contact our support team
          </Link>
          {' '}and we'll help you find what you're looking for.
        </p>
      </div>
    </div>
  )
}
