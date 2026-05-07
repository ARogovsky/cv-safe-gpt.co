import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const { data, error } = await supabase
  .from('documents')
  .select('content, metadata')
  .eq('metadata->>article_id', 'about')
  .eq('metadata->>section_id', 'intro');

if (error) {
  console.error('Error:', error);
  process.exit(1);
}

console.log('Found', data.length, 'intro chunks for about page:');
for (const row of data) {
  console.log('\n--- Chunk ---');
  console.log('Content preview:', row.content.substring(0, 500));
  console.log('Has Germany:', row.content.includes('Germany'));
  console.log('Has email:', row.content.includes('esupport@esupport.org.ua'));
  console.log('Has telegram:', row.content.includes('t.me/andreyrogovsky'));
}
