// Google Analytics integration for SPA
// Dynamically loads gtag.js and provides tracking utilities

const GA_MEASUREMENT_ID = 'G-ST1GPHCQRG'
const AW_CONVERSION_ID = 'AW-10998062484'
const GTM_ID = 'GTM-K3C49NDJ'

let isInitialized = false
let isGTMInitialized = false

/**
 * Initialize Google Tag Manager
 * Safe to call multiple times - only initializes once
 */
export function initGTM(): void {
  if (isGTMInitialized) return
  if (typeof window === 'undefined') return // SSR safety

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  })

  // Inject GTM script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  const firstScript = document.getElementsByTagName('script')[0]
  firstScript.parentNode?.insertBefore(script, firstScript)

  // Add noscript iframe to body
  const noscript = document.createElement('noscript')
  const iframe = document.createElement('iframe')
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`
  iframe.height = '0'
  iframe.width = '0'
  iframe.style.display = 'none'
  iframe.style.visibility = 'hidden'
  noscript.appendChild(iframe)
  document.body.insertBefore(noscript, document.body.firstChild)

  isGTMInitialized = true
}

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
 * @param url - The mailto URL to open after conversion is tracked
 */
export function trackEmailConversion(url: string): void {
  if (!window.gtag) {
    console.warn('Google Analytics not initialized')
    window.location.href = url
    return
  }

  const callback = function () {
    if (typeof url !== 'undefined') {
      window.location.href = url
    }
  }

  window.gtag('event', 'conversion', {
    send_to: 'AW-10998062484/7gX2CJf2rqkcEJS7pPwo',
    event_callback: callback,
  })
}
