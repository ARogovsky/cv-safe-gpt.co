/**
 * Brand logo mappings to downloaded SVG/PNG files in public/logos/
 */

interface BrandLogo {
  file: string // filename in public/logos/
  type: 'svg' | 'png' | 'ico'
}

// Normalized lookup key: lowercase, stripped of special chars
function normalizeKey(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '')
}

const logos: Record<string, BrandLogo> = {
  // Downloaded SVG logos
  airtable: { file: 'airtable.com.svg', type: 'svg' },
  anthropic: { file: 'anthropic.com.svg', type: 'svg' },
  astro: { file: 'astro.build.svg', type: 'svg' },
  clerk: { file: 'clerk.com.svg', type: 'svg' },
  cloudflare: { file: 'cloudflare.com.svg', type: 'svg' },
  docker: { file: 'docker.com.svg', type: 'svg' },
  github: { file: 'github.com.svg', type: 'svg' },
  'google ads': { file: 'ads.google.com.svg', type: 'svg' },
  googleads: { file: 'ads.google.com.svg', type: 'svg' },
  huggingface: { file: 'huggingface.co.svg', type: 'svg' },
  langfuse: { file: 'langfuse.com.svg', type: 'svg' },
  nodejs: { file: 'nodejs.org.svg', type: 'svg' },
  openai: { file: 'openai.com.svg', type: 'svg' },
  playwright: { file: 'playwright.dev.svg', type: 'svg' },
  python: { file: 'python.org.svg', type: 'svg' },
  pytorch: { file: 'pytorch.org.svg', type: 'svg' },
  react: { file: 'react.dev.svg', type: 'svg' },
  resend: { file: 'resend.com.svg', type: 'svg' },
  supabase: { file: 'supabase.com.svg', type: 'svg' },
  typescript: { file: 'typescriptlang.org.svg', type: 'svg' },
  vercel: { file: 'vercel.com.svg', type: 'svg' },
  vite: { file: 'vitejs.dev.svg', type: 'svg' },
  zadarma: { file: 'zadarma.com.svg', type: 'svg' },
  
  // Downloaded PNG logos
  fastapi: { file: 'fastapi.tiangolo.com.png', type: 'png' },
  dataforseo: { file: 'dataforseo.com.png', type: 'png' },
  'mystery-customer-insight': { file: 'mystery-customer-insight.com.png', type: 'png' },
  pptr: { file: 'pptr.dev.png', type: 'png' },
  puppeteer: { file: 'pptr.dev.png', type: 'png' },
  eij: { file: 'eij.com.ua.png', type: 'png' },
  'eij.com.ua': { file: 'eij.com.ua.png', type: 'png' },
  eijcomua: { file: 'eij.com.ua.png', type: 'png' },
  talentedchild: { file: 'talentedchild.club.svg', type: 'svg' },
}

// Aliases
logos['claude'] = logos['anthropic']
logos['claude sonnet'] = logos['anthropic']
logos['claude haiku'] = logos['anthropic']
logos['claude code'] = logos['anthropic']
logos['google ads sdk'] = logos['python'] // Python script for Google Ads SDK
logos['googleadssdk'] = logos['python']
logos['performance max'] = logos['googleads']
logos['performancemax'] = logos['googleads']
logos['roberta'] = logos['huggingface']
logos['node.js'] = logos['nodejs']
logos['react 19'] = logos['react']
logos['react19'] = logos['react']
logos['mystery-customer-insight.com'] = logos['mystery-customer-insight']
logos['mysterycustomerinsightcom'] = logos['mystery-customer-insight']
logos['pptr.dev'] = logos['pptr']
logos['eij.com.ua'] = logos['eij']
logos['talentedchild.club'] = logos['talentedchild']
logos['ai'] = { file: 'openai.com.svg', type: 'svg' } // fallback for AI
// Context-specific aliases (different projects use same tech differently)
// For PerfectSquad: Google Ads SDK = Google logo, AI ads generator = OpenAI
// For AI Tools: Google Ads SDK = Python, AI ads generator = Playwright
logos['google ads sdk perfectsquad'] = logos['googleads']
logos['ai ads generator perfectsquad'] = logos['openai']

export function getBrandLogo(name: string): string | null {
  const key = normalizeKey(name)
  
  // Direct match
  if (logos[key]) return `/logos/${logos[key].file}`
  
  // Lowercase full name match
  const lower = name.toLowerCase()
  if (logos[lower]) return `/logos/${logos[lower].file}`
  
  // Partial match
  for (const [k, v] of Object.entries(logos)) {
    if (key.includes(k) || k.includes(key)) {
      return `/logos/${v.file}`
    }
  }
  
  return null
}
