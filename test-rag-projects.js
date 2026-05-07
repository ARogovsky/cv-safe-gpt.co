/**
 * Test RAG search for "other AI projects" query
 * Tests what chunks are returned and in what order
 */

import { config } from 'dotenv'
import { resolve } from 'path'

// Load env
config({ path: resolve(process.cwd(), '.env.local') })

console.log('🧪 Testing RAG search for "other AI projects"\n')

async function testRAGSearch() {
  try {
    const { searchPortfolio } = await import('./api/_shared/rag.js')
    
    // Test query similar to the eval question
    const query = 'інші AI проєкти окрім GALA AI Tool Insights'
    
    console.log(`Query: "${query}"\n`)
    
    const result = await searchPortfolio(query, null, null)
    
    console.log(`✓ Search completed`)
    console.log(`✓ Found ${result.chunks?.length || 0} chunks`)
    console.log(`✓ Sources: ${result.sources?.length || 0}`)
    console.log(`✓ Degraded: ${result.degraded}`)
    if (result.degradedReason) {
      console.log(`✓ Degraded reason: ${result.degradedReason}`)
    }
    
    console.log('\n📊 Metrics:')
    console.log(`  Embedding: ${result.metrics.embeddingMs}ms`)
    console.log(`  Retrieval: ${result.metrics.retrievalMs}ms`)
    console.log(`  Rerank: ${result.metrics.rerankMs}ms`)
    
    console.log('\n📚 Sources returned:')
    if (result.sources && result.sources.length > 0) {
      result.sources.forEach((source, i) => {
        console.log(`  ${i + 1}. ${source}`)
      })
    } else {
      console.log('  (none)')
    }
    
    console.log('\n📄 Chunks returned:')
    if (result.chunks && result.chunks.length > 0) {
      result.chunks.forEach((chunk, i) => {
        console.log(`\n  Chunk ${i + 1}:`)
        console.log(`    Article: ${chunk.article_slug}`)
        console.log(`    Similarity: ${chunk.similarity?.toFixed(4) || 'N/A'}`)
        console.log(`    Content length: ${chunk.content.length} chars`)
        console.log(`    Full content:\n${chunk.content}`)
        console.log(`    ---`)
      })
    } else {
      console.log('  (none)')
    }
    
  } catch (error) {
    console.error(`\n❌ Test failed: ${error.message}`)
    console.error(`Stack: ${error.stack}`)
    process.exit(1)
  }
}

testRAGSearch()
