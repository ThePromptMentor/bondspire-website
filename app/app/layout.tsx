
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://wearebondspire.com'),
  title: {
    default: 'Bondspire | Where bonds inspire change',
    template: '%s | Bondspire'
  },
  description: 'Join Bondspire in solving society\'s greatest challenges through business innovation, radical transparency, and authentic community building.',
  keywords: ['social impact', 'mission-driven business', 'community building', 'financial empowerment', 'transparency', 'positive change'],
  authors: [{ name: 'Bondspire Team' }],
  creator: 'Bondspire',
  publisher: 'Bondspire',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wearebondspire.com',
    siteName: 'Bondspire',
    title: 'Bondspire | Where bonds inspire change',
    description: 'Join Bondspire in solving society\'s greatest challenges through business innovation, radical transparency, and authentic community building.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bondspire - Where bonds inspire change',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bondspire | Where bonds inspire change',
    description: 'Join Bondspire in solving society\'s greatest challenges through business innovation, radical transparency, and authentic community building.',
    images: ['/images/og-image.jpg'],
    creator: '@bondspire',
  },
  alternates: {
    canonical: 'https://wearebondspire.com',
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
  other: {
    'msapplication-TileColor': '#2B6EF2',
    'theme-color': '#2B6EF2',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Lato:wght@300;400;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Lato:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </noscript>

        {/* Google Analytics - Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID_PLACEHOLDER');
            `,
          }}
        />
      </head>
      <body className={cn(
        "min-h-screen bg-white font-lato antialiased",
        "selection:bg-bond-blue/20 selection:text-midnight-navy"
      )}>
        {/* Skip Navigation Link */}
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-midnight-navy focus:text-white focus:no-underline"
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <Navigation transparent={true} />

        {/* Main Content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Web Share API Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('SW registered: ', registration);
                  }, function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
