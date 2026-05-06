import { config } from 'dotenv'
config({ path: '.env.local' })

import { createClaudeClient } from './api/_shared/claude-client.js'

async function test() {
  console.log('Testing Claude client...')
  console.log('AWS_BEDROCK_KEY:', process.env.AWS_BEDROCK_KEY ? 'SET' : 'NOT SET')
  console.log('AWS_REGION:', process.env.AWS_REGION)
  
  try {
    const client = createClaudeClient()
    console.log('Client created successfully')
    
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 100,
      messages: [{ role: 'user', content: 'test' }],
    })
    
    console.log('Response:', response.content[0].text)
  } catch (error) {
    console.error('ERROR:', error.message)
    console.error('Stack:', error.stack)
  }
}

test()
