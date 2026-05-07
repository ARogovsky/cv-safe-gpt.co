// ---------------------------------------------------------------------------
// Model Router — unified interface for OpenAI and Azure OpenAI
// Automatically selects provider based on available environment variables
// ---------------------------------------------------------------------------

// Vercel AI SDK for Bedrock (Edge Runtime compatible)
import { bedrock } from '@ai-sdk/amazon-bedrock'

// ---------------------------------------------------------------------------
// Provider detection
// ---------------------------------------------------------------------------

function detectProvider(service = 'embedding') {
  // For Claude (chat completions)
  if (service === 'claude') {
    const hasBedrock = !!(
      (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) ||
      process.env.AWS_BEARER_TOKEN_BEDROCK
    ) && process.env.AWS_REGION
    const hasAnthropic = !!process.env.ANTHROPIC_API_KEY
    
    if (hasBedrock) return 'bedrock'
    if (hasAnthropic) return 'anthropic'
    return null
  }
  
  // For embeddings and realtime
  const hasAzure = !!(
    process.env.AZURE_OPENAI_ENDPOINT &&
    process.env.AZURE_OPENAI_API_KEY
  )
  const hasOpenAI = !!process.env.OPENAI_API_KEY

  if (hasAzure) return 'azure'
  if (hasOpenAI) return 'openai'
  return null
}

// ---------------------------------------------------------------------------
// Embeddings
// ---------------------------------------------------------------------------

/**
 * Generate embeddings for text
 * @param {string} text - Text to embed
 * @param {Object} options - Optional parameters
 * @param {string} options.model - Model name (default: text-embedding-3-small)
 * @returns {Promise<{embedding: number[], latencyMs: number, totalTokens: number, provider: string}>}
 */
export async function createEmbedding(text, options = {}) {
  const t0 = Date.now()
  const provider = detectProvider()

  if (!provider) {
    throw new Error('No embedding provider configured. Set OPENAI_API_KEY or AZURE_OPENAI_* variables.')
  }

  if (provider === 'azure') {
    return createEmbeddingAzure(text, options, t0)
  } else {
    return createEmbeddingOpenAI(text, options, t0)
  }
}

async function createEmbeddingOpenAI(text, options, t0) {
  const model = options.model || 'text-embedding-3-small'

  const response = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      input: text,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`OpenAI embedding failed: ${response.status} - ${error}`)
  }

  const data = await response.json()
  return {
    embedding: data.data[0].embedding,
    latencyMs: Date.now() - t0,
    totalTokens: data.usage?.total_tokens || 0,
    provider: 'openai',
    model: data.model,
  }
}

async function createEmbeddingAzure(text, options, t0) {
  const deployment = process.env.AZURE_EMBEDDING_DEPLOYMENT || 'text-embedding-3-small'
  const endpoint = process.env.AZURE_OPENAI_ENDPOINT
  const apiVersion = options.apiVersion || '2024-02-01'

  const url = `${endpoint.replace(/\/$/, '')}/openai/deployments/${deployment}/embeddings?api-version=${apiVersion}`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'api-key': process.env.AZURE_OPENAI_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      input: text,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Azure OpenAI embedding failed: ${response.status} - ${error}`)
  }

  const data = await response.json()
  return {
    embedding: data.data[0].embedding,
    latencyMs: Date.now() - t0,
    totalTokens: data.usage?.total_tokens || 0,
    provider: 'azure',
    model: data.model,
    deployment,
  }
}

// ---------------------------------------------------------------------------
// Realtime (Voice)
// ---------------------------------------------------------------------------

/**
 * Create ephemeral token for Realtime API
 * @param {Object} config - Realtime session configuration
 * @param {string} config.instructions - System instructions
 * @param {string} config.voice - Voice name (default: cedar)
 * @param {Array} config.modalities - Modalities (default: ['audio', 'text'])
 * @param {Array} config.tools - Function calling tools
 * @param {Object} config.turnDetection - Turn detection config
 * @param {Object} config.inputAudioTranscription - Transcription config
 * @returns {Promise<{token: string, expiresAt: number, provider: string, model: string}>}
 */
export async function createRealtimeSession(config) {
  const provider = detectProvider()

  if (!provider) {
    throw new Error('No realtime provider configured. Set OPENAI_API_KEY or AZURE_OPENAI_* variables.')
  }

  if (provider === 'azure') {
    return createRealtimeSessionAzure(config)
  } else {
    return createRealtimeSessionOpenAI(config)
  }
}

async function createRealtimeSessionOpenAI(config) {
  const model = config.model || 'gpt-4o-realtime-preview-2024-12-17'

  const response = await fetch('https://api.openai.com/v1/realtime/sessions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      voice: config.voice || 'alloy',
      modalities: config.modalities || ['audio', 'text'],
      instructions: config.instructions,
      tools: config.tools,
      turn_detection: config.turnDetection,
      input_audio_transcription: config.inputAudioTranscription,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`OpenAI Realtime session failed: ${response.status} - ${error}`)
  }

  const data = await response.json()
  return {
    token: data.client_secret?.value,
    expiresAt: data.client_secret?.expires_at,
    provider: 'openai',
    model,
  }
}

async function createRealtimeSessionAzure(config) {
  const deployment = process.env.AZURE_REALTIME_DEPLOYMENT || 'gpt-realtime-1.5'
  const endpoint = process.env.AZURE_OPENAI_ENDPOINT

  // Azure Realtime uses WebSocket, not REST API for session creation
  // Return WebSocket URL and api-key for client-side connection
  const wsUrl = endpoint
    .replace('https://', 'wss://')
    .replace(/\/$/, '') + 
    `/openai/realtime?api-version=2024-10-01-preview&deployment=${deployment}`

  return {
    // For Azure, we return WebSocket URL instead of ephemeral token
    wsUrl,
    apiKey: process.env.AZURE_OPENAI_API_KEY,
    provider: 'azure',
    model: deployment,
    deployment,
    // Note: Azure doesn't provide ephemeral tokens like OpenAI
    // Client must connect directly with api-key header
  }
}

// ---------------------------------------------------------------------------
// Utility: Get active provider
// ---------------------------------------------------------------------------

/**
 * Get currently active provider
 * @param {string} service - Service type: 'embedding', 'realtime', 'claude'
 * @returns {'openai' | 'azure' | 'anthropic' | 'bedrock' | null}
 */
export function getActiveProvider(service = 'embedding') {
  return detectProvider(service)
}

/**
 * Check if embeddings are available
 * @returns {boolean}
 */
export function isEmbeddingAvailable() {
  const provider = detectProvider()
  if (!provider) return false

  if (provider === 'azure') {
    return !!process.env.AZURE_EMBEDDING_DEPLOYMENT
  }
  return true // OpenAI always has embeddings
}

/**
 * Check if realtime is available
 * @returns {boolean}
 */
export function isRealtimeAvailable() {
  const provider = detectProvider()
  if (!provider) return false

  if (provider === 'azure') {
    return !!process.env.AZURE_REALTIME_DEPLOYMENT
  }
  return true // OpenAI always has realtime
}

// ---------------------------------------------------------------------------
// Claude (Chat Completions)
// ---------------------------------------------------------------------------

/**
 * Create Claude chat completion (non-streaming)
 * @param {Object} params - Chat completion parameters
 * @param {string} params.model - Model name (e.g., 'claude-sonnet-4-6')
 * @param {number} params.max_tokens - Max tokens to generate
 * @param {Array} params.system - System messages
 * @param {Array} params.messages - Chat messages
 * @param {Array} params.tools - Function calling tools (optional)
 * @returns {Promise<Object>} - Claude response
 */
export async function createChatCompletion(params) {
  const provider = detectProvider('claude')

  if (!provider) {
    throw new Error('No Claude provider configured. Set AWS_BEARER_TOKEN_BEDROCK or ANTHROPIC_API_KEY.')
  }

  if (provider === 'bedrock') {
    return createChatCompletionBedrock(params)
  } else {
    return createChatCompletionAnthropic(params)
  }
}

async function createChatCompletionAnthropic(params) {
  // This would use Anthropic SDK - not implemented yet
  // For now, throw error to force Bedrock usage
  throw new Error('Anthropic direct API not implemented. Use AWS Bedrock.')
}

async function createChatCompletionBedrock(params) {
  // Map model names to Bedrock inference profile IDs
  const modelMap = {
    'claude-sonnet-4-6': 'eu.anthropic.claude-sonnet-4-6',
    'claude-haiku-4-5-20251001': 'eu.anthropic.claude-haiku-4-5-20251001-v1:0',
  }
  
  const modelId = modelMap[params.model] || params.model
  
  // Create Bedrock model instance (uses AWS_ACCESS_KEY_ID + AWS_SECRET_ACCESS_KEY)
  const model = bedrock(modelId, {
    region: process.env.AWS_REGION || 'eu-central-1',
  })
  
  // Use Vercel AI SDK generateText API
  const { generateText, tool, stepCountIs } = await import('ai')
  const { z } = await import('zod')
  
  // Convert Anthropic tools format to Vercel AI SDK format
  let vercelTools = undefined
  if (params.tools && params.tools.length > 0) {
    vercelTools = {}
    for (const anthropicTool of params.tools) {
      const zodSchema = await convertJsonSchemaToZod(anthropicTool.input_schema)
      vercelTools[anthropicTool.name] = tool({
        description: anthropicTool.description,
        inputSchema: zodSchema,
        // No execute - tools will be handled by caller
      })
    }
  }
  
  // Convert system blocks to string (Vercel AI SDK expects string, not array)
  let systemPrompt = ''
  if (params.system) {
    if (typeof params.system === 'string') {
      systemPrompt = params.system
    } else if (Array.isArray(params.system)) {
      // Extract text from content blocks, filter empty ones
      systemPrompt = params.system
        .filter(block => block.type === 'text' && block.text && block.text.trim().length > 0)
        .map(block => block.text)
        .join('\n\n')
    }
  }
  
  const result = await generateText({
    model,
    ...(systemPrompt && { system: systemPrompt }), // Only include system if not empty
    messages: params.messages,
    maxTokens: params.max_tokens,
    ...(vercelTools && { 
      tools: vercelTools,
      stopWhen: stepCountIs(1), // Single step for non-streaming
    }),
  })
  
  // Convert Vercel AI SDK response to Anthropic format
  const content = []
  
  // Add text content
  if (result.text) {
    content.push({ type: 'text', text: result.text })
  }
  
  // Add tool calls from the first step (if any)
  if (result.steps && result.steps.length > 0) {
    const firstStep = result.steps[0]
    if (firstStep.toolCalls && firstStep.toolCalls.length > 0) {
      for (const toolCall of firstStep.toolCalls) {
        content.push({
          type: 'tool_use',
          id: toolCall.toolCallId,
          name: toolCall.toolName,
          input: toolCall.input,
        })
      }
    }
  }
  
  // Determine stop reason
  let stopReason = 'end_turn'
  if (result.steps && result.steps.length > 0) {
    const lastStep = result.steps[result.steps.length - 1]
    if (lastStep.toolCalls && lastStep.toolCalls.length > 0) {
      stopReason = 'tool_use'
    }
  }
  
  // Return in Anthropic-compatible format
  return {
    id: `msg_${Date.now()}`,
    type: 'message',
    role: 'assistant',
    content,
    model: modelId,
    stop_reason: stopReason,
    usage: {
      input_tokens: result.usage?.promptTokens || 0,
      output_tokens: result.usage?.completionTokens || 0,
    },
    provider: 'bedrock',
  }
}

// Helper to convert JSON Schema to Zod schema
async function convertJsonSchemaToZod(jsonSchema) {
  const { z } = await import('zod')
  
  if (!jsonSchema || jsonSchema.type !== 'object') {
    return z.object({})
  }
  
  const shape = {}
  const properties = jsonSchema.properties || {}
  const required = jsonSchema.required || []
  
  for (const [key, prop] of Object.entries(properties)) {
    let zodType
    
    switch (prop.type) {
      case 'string':
        zodType = z.string()
        break
      case 'number':
        zodType = z.number()
        break
      case 'boolean':
        zodType = z.boolean()
        break
      case 'array':
        zodType = z.array(z.any())
        break
      case 'object':
        zodType = z.object({})
        break
      default:
        zodType = z.any()
    }
    
    if (prop.description) {
      zodType = zodType.describe(prop.description)
    }
    
    if (!required.includes(key)) {
      zodType = zodType.optional()
    }
    
    shape[key] = zodType
  }
  
  return z.object(shape)
}

/**
 * Create Claude chat completion stream
 * @param {Object} params - Chat completion parameters (same as createChatCompletion)
 * @returns {Promise<AsyncIterable>} - Promise that resolves to stream of events
 */
export async function createChatCompletionStream(params) {
  const provider = detectProvider('claude')

  if (!provider) {
    throw new Error('No Claude provider configured. Set AWS_BEDROCK_KEY or ANTHROPIC_API_KEY.')
  }

  if (provider === 'bedrock') {
    return await createChatCompletionStreamBedrock(params)
  } else {
    return await createChatCompletionStreamAnthropic(params)
  }
}

async function createChatCompletionStreamAnthropic(params) {
  throw new Error('Anthropic direct API not implemented. Use AWS Bedrock.')
}

async function createChatCompletionStreamBedrock(params) {
  // Map model names to Bedrock inference profile IDs
  const modelMap = {
    'claude-sonnet-4-6': 'eu.anthropic.claude-sonnet-4-6',
    'claude-haiku-4-5-20251001': 'eu.anthropic.claude-haiku-4-5-20251001-v1:0',
  }
  
  const modelId = modelMap[params.model] || params.model
  
  // Create Bedrock model instance (uses AWS_ACCESS_KEY_ID + AWS_SECRET_ACCESS_KEY)
  const model = bedrock(modelId, {
    region: process.env.AWS_REGION || 'eu-central-1',
  })
  
  // Use Vercel AI SDK streamText API
  const { streamText, tool, stepCountIs } = await import('ai')
  
  // Convert Anthropic tools format to Vercel AI SDK format
  let vercelTools = undefined
  if (params.tools && params.tools.length > 0) {
    vercelTools = {}
    for (const anthropicTool of params.tools) {
      const zodSchema = await convertJsonSchemaToZod(anthropicTool.input_schema)
      
      // Check if tool has execute function (for auto-execution like RAG)
      const toolConfig = {
        description: anthropicTool.description,
        inputSchema: zodSchema,  // ← FIXED: inputSchema instead of parameters
      }
      
      // If execute function is provided, use it
      if (anthropicTool.execute) {
        toolConfig.execute = anthropicTool.execute
      }
      
      vercelTools[anthropicTool.name] = tool(toolConfig)
    }
  }
  
  // Convert system blocks to string (Vercel AI SDK expects string, not array)
  let systemPrompt = ''
  if (params.system) {
    if (typeof params.system === 'string') {
      systemPrompt = params.system
    } else if (Array.isArray(params.system)) {
      // Extract text from content blocks, filter empty ones
      systemPrompt = params.system
        .filter(block => block.type === 'text' && block.text && block.text.trim().length > 0)
        .map(block => block.text)
        .join('\n\n')
    }
  }
  
  const result = streamText({
    model,
    ...(systemPrompt && { system: systemPrompt }), // Only include system if not empty
    messages: params.messages,
    maxTokens: params.max_tokens,
    ...(vercelTools && { 
      tools: vercelTools,
      stopWhen: stepCountIs(5), // Allow multiple tool calls for agentic RAG
    }),
  })
  
  // Return async generator that converts Vercel AI SDK stream to Anthropic-compatible format
  return (async function* () {
    // Use fullStream to get all events including tool calls
    for await (const event of result.fullStream) {
      // Only yield text deltas, skip tool call events
      if (event.type === 'text-delta') {
        yield {
          type: 'content_block_delta',
          index: 0,
          delta: { type: 'text_delta', text: event.text },
          provider: 'bedrock',
        }
      }
    }
    
    // Send final message_stop event
    yield {
      type: 'message_stop',
      provider: 'bedrock',
    }
  })()
}

/**
 * Check if Claude is available
 * @returns {boolean}
 */
export function isClaudeAvailable() {
  return !!detectProvider('claude')
}
