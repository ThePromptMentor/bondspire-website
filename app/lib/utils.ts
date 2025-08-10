
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Validation utilities
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
}

export function validateRequired(value: string): boolean {
  return value?.trim().length > 0
}

export function validateMinLength(value: string, minLength: number): boolean {
  return value?.trim().length >= minLength
}

// Animation utilities
export function getAnimationDelay(index: number, baseDelay: number = 100): number {
  return index * baseDelay
}

export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Counter animation utility
export function animateCounter(
  element: HTMLElement,
  start: number,
  end: number,
  duration: number = 2000
): void {
  let startTimestamp: number | null = null
  
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    const current = Math.floor(progress * (end - start) + start)
    element.textContent = current.toLocaleString()
    
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  
  window.requestAnimationFrame(step)
}

// Format utilities
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toLocaleString()
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function truncate(text: string, length: number): string {
  return text.length <= length ? text : text.substring(0, length) + '...'
}

// URL utilities
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')
}

export function getBaseUrl(): string {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return process.env.NEXT_PUBLIC_BASE_URL || 'https://wearebondspire.com'
}

// Local storage utilities with SSR safety
export function getLocalStorage(key: string, defaultValue: any = null) {
  if (typeof window === 'undefined') return defaultValue
  
  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error('Error reading from localStorage:', error)
    return defaultValue
  }
}

export function setLocalStorage(key: string, value: any): void {
  if (typeof window === 'undefined') return
  
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error('Error writing to localStorage:', error)
  }
}

// Debounce utility
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

// Theme utilities
export function getBrandGradient(opacity: number = 1): string {
  return `linear-gradient(135deg, 
    rgba(43, 110, 242, ${opacity}) 0%, 
    rgba(109, 76, 242, ${opacity}) 50%, 
    rgba(227, 56, 164, ${opacity}) 100%)`
}

// Accessibility utilities
export function announceToScreenReader(message: string): void {
  if (typeof window === 'undefined') return
  
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', 'polite')
  announcement.setAttribute('aria-atomic', 'true')
  announcement.classList.add('sr-only')
  
  document.body.appendChild(announcement)
  announcement.textContent = message
  
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Device detection utilities
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth <= 768
}

export function isTablet(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth > 768 && window.innerWidth <= 1024
}

export function isDesktop(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth > 1024
}

// Performance utilities
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// Error handling utilities
export function handleApiError(error: any): { message: string; code?: string } {
  if (error?.response?.data?.message) {
    return { message: error.response.data.message, code: error.response.status }
  }
  
  if (error?.message) {
    return { message: error.message }
  }
  
  return { message: 'An unexpected error occurred. Please try again.' }
}

// SEO utilities
export function generateMetaDescription(text: string, maxLength: number = 160): string {
  const cleaned = text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  return truncate(cleaned, maxLength)
}

export function generatePageTitle(title: string, siteName: string = 'Bondspire'): string {
  return `${title} | ${siteName}`
}
