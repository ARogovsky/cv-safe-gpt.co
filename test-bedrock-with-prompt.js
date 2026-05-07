import { config } from 'dotenv'
config({ path: '.env.local' })

import { bedrock } from '@ai-sdk/amazon-bedrock'
import { generateText } from 'ai'
import { readFileSync } from 'fs'

async function test() {
  console.log('Testing Bedrock with System Prompt...')
  console.log('AWS_BEARER_TOKEN_BEDROCK:', process.env.AWS_BEARER_TOKEN_BEDROCK ? 'SET' : 'NOT SET')
  console.log('AWS_REGION:', process.env.AWS_REGION)
  console.log('')
  
  try {
    // Load system prompt from file
    const systemPrompt = readFileSync('./chatbot-prompt.txt', 'utf-8')
    console.log(`System prompt loaded: ${systemPrompt.length} characters`)
    console.log(`First 100 chars: ${systemPrompt.substring(0, 100)}...\n`)
    
    const model = bedrock('eu.anthropic.claude-sonnet-4-6')
    
    // Test questions
    const tests = [
      {
        question: 'Де ти знаходишся?',
        expected: ['Німеч', 'Germany'],
      },
      {
        question: 'Як з тобою зв\'язатися?',
        expected: ['esupport@esupport.org.ua'],
      },
      {
        question: 'Як тебе контактувати через Telegram?',
        expected: ['t.me/andreyrogovsky'],
      },
    ]
    
    let passed = 0
    let failed = 0
    
    for (const test of tests) {
      console.log('='.repeat(60))
      console.log(`\n📝 Question: "${test.question}"`)
      console.log(`   Expected: ${test.expected.join(', ')}`)
      
      const result = await generateText({
        model,
        system: systemPrompt,
        prompt: test.question,
        maxTokens: 300,
      })
      
      console.log(`\n💬 Answer:\n${result.text}\n`)
      
      // Check for expected keywords
      let foundCount = 0
      const missing = []
      for (const keyword of test.expected) {
        if (result.text.includes(keyword)) {
          console.log(`   ✓ Found: "${keyword}"`)
          foundCount++
        } else {
          console.log(`   ✗ Missing: "${keyword}"`)
          missing.push(keyword)
        }
      }
      
      console.log(`\n   Result: ${foundCount}/${test.expected.length} keywords found`)
      console.log(`   Usage: ${result.usage.promptTokens} in, ${result.usage.completionTokens} out`)
      
      if (missing.length === 0) {
        console.log(`   ✅ PASSED`)
        passed++
      } else {
        console.log(`   ❌ FAILED - Missing: ${missing.join(', ')}`)
        failed++
      }
    }
    
    console.log('\n' + '='.repeat(60))
    console.log(`\n📊 Final Results: ${passed}/${tests.length} tests passed`)
    
    if (failed > 0) {
      console.log(`\n❌ ${failed} test(s) failed - system prompt NOT working correctly`)
      process.exit(1)
    } else {
      console.log(`\n✅ All tests passed - system prompt working correctly!`)
    }
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message)
    console.error('Stack:', error.stack)
    process.exit(1)
  }
}

test()
