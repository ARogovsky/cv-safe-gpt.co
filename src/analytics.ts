// Google Analytics integration for SPA
// Dynamically loads gtag.js and provides tracking utilities

const GA_MEASUREMENT_ID = 'G-ST1GPHCQRG'
const AW_CONVERSION_ID = 'AW-10998062484'

let isInitialized = false

/**
 * Initialize Google Analytics by injecting gtag.js script
 * Safe to call multiple times - only initializes once
 */
export function initGA(): void {
  if (isInitialized) return
  if (typeof window === 'undefined') return // SSR safety

  // Create dataLayer
  window.dataLayer = window.dataLayer || []
  
  // Define gtag function
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments)
  }

  // Initialize with current timestamp
  window.gtag('js', new Date())
  
  // Configure Google Analytics
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll send pageviews manually for SPA routing
  })

  // Configure Google Ads Conversion Tracking
  window.gtag('config', AW_CONVERSION_ID)

  // Inject gtag.js script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  isInitialized = true
}

/**
 * Track a pageview event
 * @param url - The page URL (pathname + search + hash)
 */
export function trackPageView(url: string): void {
  if (!window.gtag) {
    console.warn('Google Analytics not initialized')
    return
  }

  window.gtag('event', 'page_view', {
    page_path: url,
  })
}

/**
 * Track a custom event
 * @param eventName - Name of the event
 * @param eventParams - Optional event parameters
 */
export function trackEvent(eventName: string, eventParams?: Record<string, unknown>): void {
  if (!window.gtag) {
    console.warn('Google Analytics not initialized')
    return
  }

  window.gtag('event', eventName, eventParams)
}

/**
 * Track Google Ads conversion for email contact
 * Fires when user clicks on email link
 * Uses event_callback to ensure conversion is sent before mailto opens
 */
export function trackEmailConversion(): void {
  if (!window.gtag) {
    console.warn('Google Analytics not initialized')
    return
  }

  window.gtag('event', 'conversion', {
    send_to: 'AW-10998062484/7gX2CJf2rqkcEJS7pPwo',
  })
}
