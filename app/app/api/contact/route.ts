
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, message, formType = 'contact' } = body
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
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

    // Store submission in database
    const submission = await prisma.formSubmission.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: body.phone?.trim() || null,
        subject: body.subject?.trim() || null,
        message: message.trim(),
        howDidYouHear: body.howDidYouHear?.trim() || null,
        formType,
        organizationName: body.organizationName?.trim() || null,
        website: body.website?.trim() || null,
        partnershipType: body.partnershipType || null,
        timestamp: new Date(),
        status: 'new'
      }
    })

    // Send notification email (in real implementation)
    // This would integrate with email service like SendGrid, Mailchimp, etc.
    console.log('New form submission:', {
      id: submission.id,
      name: submission.name,
      email: submission.email,
      formType: submission.formType
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We\'ll respond within 24 hours.',
      submissionId: submission.id
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Contact API endpoint' })
}
