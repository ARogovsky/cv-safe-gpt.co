// ---------------------------------------------------------------------------
// Azure OpenAI Integration Tests
// Tests embeddings (text-embedding-3-small) and Realtime API (gpt-realtime-1.5)
// 
// NOTE: Realtime API requires OpenAI SDK with AzureOpenAI and OpenAIRealtimeWS
// ---------------------------------------------------------------------------

import { config } from 'dotenv'
import OpenAI from 'openai'
import { OpenAIRealtimeWS } from 'openai/realtime/ws'
import WebSocket from 'ws'

// Load environment variables from .env.local
config({ path: '.env.local' })

const REQUIRED_ENV_VARS = [
  'AZURE_OPENAI_ENDPOINT',
  'AZURE_OPENAI_API_KEY',
  'AZURE_EMBEDDING_DEPLOYMENT',
  'AZURE_REALTIME_DEPLOYMENT',
]

// ---------------------------------------------------------------------------
// Helper: Validate deployment exists by making a test API call
// ---------------------------------------------------------------------------

async function validateEmbeddingDeployment(
  endpoint: string,
  apiKey: string,
  deployment: string
): Promise<{ valid: boolean; error?: string; model?: string }> {
  try {
    const url = `${endpoint.replace(/\/$/, '')}/openai/deployments/${deployment}/embeddings?api-version=2024-02-01`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: 'test',
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      let errorMessage = `HTTP ${response.status}`
      
      try {
        const errorJson = JSON.parse(errorText)
        errorMessage = errorJson.error?.message || errorText
      } catch {
        errorMessage = errorText
      }

      return { valid: false, error: errorMessage }
    }

    const data = await response.json()
    return { valid: true, model: data.model }
  } catch (err) {
    return { 
      valid: false, 
      error: err instanceof Error ? err.message : String(err) 
    }
  }
}

async function validateRealtimeDeployment(
  endpoint: string,
  apiKey: string,
  deployment: string
): Promise<{ valid: boolean; error?: string; model?: string }> {
  try {
    const wsUrl = endpoint.replace('https://', 'wss://').replace(/\/$/, '') + `/openai/v1/realtime?model=${deployment}`

    return new Promise((resolve, reject) => {
      let responseReceived = false

      const ws = new WebSocket(wsUrl, {
        headers: {
          'api-key': apiKey,
        },
      })

      const timeout = setTimeout(() => {
        if (!responseReceived) {
          ws.close()
          reject(new Error('Connection timeout (10s)'))
        }
      }, 10000)

      ws.on('unexpected-response', (req, res) => {
        responseReceived = true
        let body = ''
        res.on('data', (d) => (body += d))
        res.on('end', () => {
          clearTimeout(timeout)
          reject(new Error(`HTTP ${res.statusCode}: ${body}`))
        })
      })

      ws.on('open', () => {
        responseReceived = true
      })

      ws.on('message', (data) => {
        try {
          const message = JSON.parse(data.toString())
          
          if (message.type === 'session.created') {
            clearTimeout(timeout)
            ws.close()
            resolve({ valid: true, model: message.session?.model })
          }
        } catch (err) {
          // Ignore parse errors
        }
      })

      ws.on('error', (err: any) => {
        responseReceived = true
        clearTimeout(timeout)
        reject(err)
      })

      ws.on('close', (code, reason) => {
        if (!responseReceived) {
          clearTimeout(timeout)
          reject(new Error(`WebSocket closed unexpectedly: ${code}`))
        }
      })
    })
  } catch (err) {
    return {
      valid: false,
      error: err instanceof Error ? err.message : String(err),
    }
  }
}

// ---------------------------------------------------------------------------
// Test 1: Embeddings API (text-embedding-3-small)
// ---------------------------------------------------------------------------

async function testEmbeddings() {
  console.log('\n🧪 Testing Azure OpenAI Embeddings API...')

  const endpoint = process.env.AZURE_OPENAI_ENDPOINT
  const apiKey = process.env.AZURE_OPENAI_API_KEY
  const deployment = process.env.AZURE_EMBEDDING_DEPLOYMENT

  if (!endpoint || !apiKey || !deployment) {
    throw new Error('Missing required environment variables for embeddings test')
  }

  const url = `${endpoint.replace(/\/$/, '')}/openai/deployments/${deployment}/embeddings?api-version=2024-02-01`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      input: 'Hello, this is a test embedding',
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Embeddings API failed: ${response.status} - ${error}`)
  }

  const data = await response.json()

  // Validate response structure
  if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
    throw new Error('Invalid embeddings response structure')
  }

  const embedding = data.data[0].embedding
  if (!Array.isArray(embedding) || embedding.length === 0) {
    throw new Error('Embedding vector is empty or invalid')
  }

  console.log('✅ Embeddings API working')
  console.log(`   - Model: ${data.model}`)
  console.log(`   - Embedding dimensions: ${embedding.length}`)
  console.log(`   - Tokens used: ${data.usage?.total_tokens || 'N/A'}`)

  return {
    success: true,
    model: data.model,
    dimensions: embedding.length,
    tokens: data.usage?.total_tokens,
  }
}

// ---------------------------------------------------------------------------
// Test 2: Realtime API (gpt-realtime-1.5) - WebSocket connection test
// ---------------------------------------------------------------------------

async function testRealtimeAPI() {
  console.log('\n🧪 Testing Azure OpenAI Realtime API...')

  const endpoint = process.env.AZURE_OPENAI_ENDPOINT
  const apiKey = process.env.AZURE_OPENAI_API_KEY
  const deployment = process.env.AZURE_REALTIME_DEPLOYMENT

  if (!endpoint || !apiKey || !deployment) {
    throw new Error('Missing required environment variables for Realtime API test')
  }

  // Build baseURL with /openai/v1 for GA version
  const baseUrl = endpoint.replace(/\/$/, '') + '/openai/v1'

  // Use OpenAI client (not AzureOpenAI) with baseURL
  const client = new OpenAI({
    baseURL: baseUrl,
    apiKey: apiKey,
  })

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Realtime API test timeout (10s)'))
    }, 10000)

    ;(async () => {
      try {
        // Pass api-key explicitly through options.headers for WebSocket
        const rt = await OpenAIRealtimeWS.create(client, {
          model: deployment,
          options: {
            headers: {
              'api-key': apiKey,  // Critical: SDK doesn't pass this automatically
            },
          },
        })

        console.log('   - WebSocket connection established')

        rt.on('session.created', (event: any) => {
          console.log('✅ Realtime API working')
          console.log(`   - Session ID: ${event.session?.id}`)
          console.log(`   - Model: ${event.session?.model}`)
          console.log(`   - Voice: ${event.session?.voice}`)
          console.log(`   - Expires at: ${new Date(event.session?.expires_at * 1000).toISOString()}`)

          clearTimeout(timeout)
          rt.close()

          resolve({
            success: true,
            sessionId: event.session?.id,
            model: event.session?.model,
            voice: event.session?.voice,
          })
        })

        rt.on('error', (error: any) => {
          clearTimeout(timeout)
          rt.close()
          reject(error)
        })
      } catch (err) {
        clearTimeout(timeout)
        reject(err)
      }
    })()
  })
}

// ---------------------------------------------------------------------------
// Main test runner
// ---------------------------------------------------------------------------

async function runTests() {
  console.log('🚀 Azure OpenAI Integration Tests')
  console.log('=' .repeat(50))

  // Check required environment variables
  const missing = REQUIRED_ENV_VARS.filter(v => !process.env[v])
  if (missing.length > 0) {
    console.error('\n❌ Missing required environment variables:')
    missing.forEach(v => console.error(`   - ${v}`))
    console.error('\nPlease set these in your .env.local file')
    process.exit(1)
  }

  const endpoint = process.env.AZURE_OPENAI_ENDPOINT!
  const apiKey = process.env.AZURE_OPENAI_API_KEY!
  const embeddingDeployment = process.env.AZURE_EMBEDDING_DEPLOYMENT!
  const realtimeDeployment = process.env.AZURE_REALTIME_DEPLOYMENT!

  console.log('\n✅ Environment variables loaded:')
  console.log(`   - AZURE_OPENAI_ENDPOINT: ${endpoint}`)
  console.log(`   - AZURE_EMBEDDING_DEPLOYMENT: ${embeddingDeployment}`)
  console.log(`   - AZURE_REALTIME_DEPLOYMENT: ${realtimeDeployment}`)

  // Step 1: Validate deployments exist
  console.log('\n🔍 Step 1: Validating deployments...')
  
  console.log(`\n   Checking embedding deployment: ${embeddingDeployment}`)
  const embeddingValidation = await validateEmbeddingDeployment(endpoint, apiKey, embeddingDeployment)
  
  if (!embeddingValidation.valid) {
    console.error(`   ❌ Embedding deployment validation failed: ${embeddingValidation.error}`)
    console.error('\n💡 Possible issues:')
    console.error('   - Deployment name is incorrect')
    console.error('   - Deployment does not exist in your Azure OpenAI resource')
    console.error('   - API key does not have access to this deployment')
    console.error('\n   Check your deployments at: https://oai.azure.com/resource/deployments')
    process.exit(1)
  }
  
  console.log(`   ✅ Embedding deployment found: ${embeddingValidation.model}`)

  console.log(`\n   Checking realtime deployment: ${realtimeDeployment}`)
  const realtimeValidation = await validateRealtimeDeployment(endpoint, apiKey, realtimeDeployment)
  
  if (!realtimeValidation.valid) {
    console.warn(`   ⚠️  Realtime deployment validation failed: ${realtimeValidation.error}`)
    console.warn('\n💡 Note: Realtime API may not be available in your region or for your deployment')
    console.warn('   Continuing with embeddings test only...')
  } else {
    console.log(`   ✅ Realtime deployment found: ${realtimeValidation.model}`)
  }

  // Step 2: Run full tests
  console.log('\n🧪 Step 2: Running full API tests...')

  const results = {
    embeddings: null as any,
    realtime: null as any,
    errors: [] as string[],
  }

  // Test 1: Embeddings
  try {
    results.embeddings = await testEmbeddings()
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err)
    console.error(`\n❌ Embeddings test failed: ${error}`)
    results.errors.push(`Embeddings: ${error}`)
  }

  // Test 2: Realtime API (only if validation passed)
  if (realtimeValidation.valid) {
    try {
      results.realtime = await testRealtimeAPI()
    } catch (err) {
      const error = err instanceof Error ? err.message : String(err)
      console.error(`\n❌ Realtime API test failed: ${error}`)
      results.errors.push(`Realtime: ${error}`)
    }
  } else {
    console.log('\n⏭️  Skipping Realtime API test (validation failed)')
  }

  // Summary
  console.log('\n' + '='.repeat(50))
  console.log('📊 Test Summary')
  console.log('='.repeat(50))

  if (results.errors.length === 0) {
    console.log('\n✅ All tests passed!')
    console.log('\n🎉 Azure OpenAI integration is working correctly')
    console.log('\n📋 Validated:')
    console.log(`   - Embedding model: ${embeddingValidation.model}`)
    if (realtimeValidation.valid) {
      console.log(`   - Realtime model: ${realtimeValidation.model}`)
    }
    process.exit(0)
  } else {
    console.log('\n❌ Some tests failed:')
    results.errors.forEach(err => console.log(`   - ${err}`))
    process.exit(1)
  }
}

// Run tests
runTests().catch(err => {
  console.error('\n💥 Unexpected error:', err)
  process.exit(1)
})
