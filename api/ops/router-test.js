import { validateOpsAuth } from '../_shared/ops-auth.js'
import { createClaudeClient } from '../_shared/claude-client.js'
import { createEmbedding, isEmbeddingAvailable, getActiveProvider } from '../_shared/model-router.js'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  try {
    const auth = validateOpsAuth(req)
    if (!auth.ok) return auth.response

    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 })
    }

    const results = {
      timestamp: new Date().toISOString(),
      tests: [],
      errors: [],
    }

    // Test 1: Environment variables
    try {
      results.tests.push({
        name: 'Environment Variables',
        status: 'success',
        details: {
          AWS_BEDROCK_KEY: process.env.AWS_BEDROCK_KEY ? '✓ SET' : '✗ NOT SET',
          AWS_REGION: process.env.AWS_REGION || '✗ NOT SET',
          AZURE_OPENAI_ENDPOINT: process.env.AZURE_OPENAI_ENDPOINT ? '✓ SET' : '✗ NOT SET',
          AZURE_OPENAI_API_KEY: process.env.AZURE_OPENAI_API_KEY ? '✓ SET' : '✗ NOT SET',
          AZURE_EMBEDDING_DEPLOYMENT: process.env.AZURE_EMBEDDING_DEPLOYMENT || '✗ NOT SET',
        },
      })
    } catch (error) {
      results.tests.push({
        name: 'Environment Variables',
        status: 'error',
        error: error.message,
        stack: error.stack,
      })
      results.errors.push(`Env check failed: ${error.message}`)
    }

    // Test 2: Provider detection
    try {
      const claudeProvider = getActiveProvider('claude')
      const embeddingProvider = getActiveProvider('embedding')
      
      results.tests.push({
        name: 'Provider Detection',
        status: 'success',
        details: {
          claude: claudeProvider || 'none',
          embedding: embeddingProvider || 'none',
          embeddingAvailable: isEmbeddingAvailable(),
        },
      })
    } catch (error) {
      results.tests.push({
        name: 'Provider Detection',
        status: 'error',
        error: error.message,
        stack: error.stack,
      })
      results.errors.push(`Provider detection failed: ${error.message}`)
    }

    // Test 3: Claude client
    try {
      const client = createClaudeClient()
      const response = await client.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 50,
        messages: [{ role: 'user', content: 'test' }],
      })

      results.tests.push({
        name: 'Claude Client',
        status: 'success',
        details: {
          provider: getActiveProvider('claude'),
          model: 'claude-sonnet-4-6',
          response: response.content[0].text.substring(0, 100),
          inputTokens: response.usage.input_tokens,
          outputTokens: response.usage.output_tokens,
        },
      })
    } catch (error) {
      results.tests.push({
        name: 'Claude Client',
        status: 'error',
        error: error.message,
        stack: error.stack,
        errorType: error.constructor.name,
      })
      results.errors.push(`Claude client failed: ${error.message}`)
    }

    // Test 4: Embeddings
    try {
      const result = await createEmbedding('test text', { model: 'text-embedding-3-small' })
      
      results.tests.push({
        name: 'Embeddings',
        status: 'success',
        details: {
          provider: result.provider,
          model: result.model || result.deployment,
          dimensions: result.embedding.length,
          latencyMs: result.latencyMs,
          totalTokens: result.totalTokens,
        },
      })
    } catch (error) {
      results.tests.push({
        name: 'Embeddings',
        status: 'error',
        error: error.message,
        stack: error.stack,
        errorType: error.constructor.name,
      })
      results.errors.push(`Embeddings failed: ${error.message}`)
    }

    // Overall status
    const hasErrors = results.tests.some(t => t.status === 'error')
    results.overallStatus = hasErrors ? 'partial' : 'success'

    return new Response(JSON.stringify(results, null, 2), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    // Global error handler
    return new Response(JSON.stringify({
      timestamp: new Date().toISOString(),
      overallStatus: 'fatal_error',
      error: error.message,
      errorType: error.constructor.name,
      stack: error.stack,
      tests: [],
    }, null, 2), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
