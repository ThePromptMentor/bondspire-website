
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { organizationName, name, email, message, partnershipType } = body
    
    if (!organizationName || !name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Organization name, contact name, email, and message are required' },
        { status: 400 }
      )
    }

    if (!partnershipType || partnershipType.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please select at least one partnership type' },
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

    // Store partnership inquiry in database
    const inquiry = await prisma.formSubmission.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: body.phone?.trim() || null,
        message: message.trim(),
        formType: 'partnership',
        organizationName: organizationName.trim(),
        website: body.website?.trim() || null,
        partnershipType,
        timestamp: new Date(),
        status: 'new'
      }
    })

    // Send notification email to partnerships team (in real implementation)
    console.log('New partnership inquiry:', {
      id: inquiry.id,
      organizationName: inquiry.organizationName,
      name: inquiry.name,
      email: inquiry.email,
      partnershipType: inquiry.partnershipType
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your partnership inquiry. Our team will review your submission and get back to you within 3-5 business days.',
      inquiryId: inquiry.id
    })

  } catch (error) {
    console.error('Partnership form error:', error)
    
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Partnership API endpoint' })
}
