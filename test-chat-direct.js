import { config } from 'dotenv'
config({ path: '.env.local' })

// Simulate the chat.js handler
import { createClaudeClient } from './api/_shared/claude-client.js'
import { getSystemPrompt } from './api/_shared/prompt.js'

async function testChat() {
  console.log('Testing chat flow...')
  
  try {
    // Step 1: Get system prompt
    console.log('1. Getting system prompt...')
    const { text: systemPrompt } = await getSystemPrompt(null)
    console.log('✓ System prompt loaded:', systemPrompt.substring(0, 50) + '...')
    
    // Step 2: Create Claude client
    console.log('2. Creating Claude client...')
    const client = createClaudeClient()
    console.log('✓ Client created')
    
    // Step 3: Call Claude
    console.log('3. Calling Claude...')
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 100,
      system: systemPrompt,
      messages: [{ role: 'user', content: 'test' }],
    })
    
    console.log('✓ Response:', response.content[0].text)
    console.log('\n✅ All steps passed!')
    
  } catch (error) {
    console.error('❌ ERROR at step:', error.message)
    console.error('Stack:', error.stack)
  }
}

testChat()
