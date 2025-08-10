
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { email } = body
    
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Check for existing subscription
    const existingSubscription = await prisma.newsletterSubscription.findUnique({
      where: { email: email.trim().toLowerCase() }
    })

    if (existingSubscription) {
      return NextResponse.json(
        { success: false, message: 'This email is already subscribed' },
        { status: 409 }
      )
    }

    // Create subscription
    const subscription = await prisma.newsletterSubscription.create({
      data: {
        email: email.trim().toLowerCase(),
        firstName: body.firstName?.trim() || null,
        interestArea: body.interestArea || 'all',
        subscribedAt: new Date(),
        status: 'active',
        source: 'website'
      }
    })

    // Send welcome email (in real implementation)
    // This would integrate with email service like Mailchimp, ConvertKit, etc.
    console.log('New newsletter subscription:', {
      id: subscription.id,
      email: subscription.email,
      interestArea: subscription.interestArea
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Welcome to the movement! Check your email for a confirmation message.',
      subscriptionId: subscription.id
    })

  } catch (error) {
    console.error('Newsletter signup error:', error)
    
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Newsletter signup API endpoint' })
}
