// Edge runtime supports direct txt import, Node.js doesn't
// This works in Vercel edge runtime
let FALLBACK
try {
  // Try dynamic import for edge runtime
  FALLBACK = await import('../../chatbot-prompt.txt?raw').then(m => m.default).catch(() => null)
} catch {
  FALLBACK = null
}

// Fallback for Node.js (testing)
if (!FALLBACK && typeof process !== 'undefined' && process.versions?.node) {
  try {
    const { readFileSync } = await import('fs')
    const { fileURLToPath } = await import('url')
    const { dirname, resolve } = await import('path')
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    FALLBACK = readFileSync(resolve(__dirname, '../../chatbot-prompt.txt'), 'utf-8')
  } catch {
    FALLBACK = 'You are an AI assistant.' // ultimate fallback
  }
}

export async function getSystemPrompt(langfuse) {
  try {
    if (langfuse) {
      const prompt = await langfuse.getPrompt('chatbot-system', undefined, {
        type: 'text', label: 'production', cacheTtlSeconds: 300,
      })
      return { text: prompt.prompt, version: prompt.version }
    }
  } catch { /* fallback to file */ }
  return { text: FALLBACK, version: 'file' }
}
