#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Читаем маппинг
const brandMapping = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'brand-to-domain.json'), 'utf-8')
);

// Получаем уникальные домены
const expectedDomains = new Set();
for (const [brand, domain] of Object.entries(brandMapping)) {
  if (domain) {
    expectedDomains.add(domain);
  }
}

// Читаем скачанные файлы
const downloadedFiles = fs.readdirSync(path.join(__dirname, '..', 'public', 'logos'))
  .filter(f => f.endsWith('.svg'))
  .map(f => f.replace('.svg', ''));

const downloadedSet = new Set(downloadedFiles);

console.log('\n📊 Coverage Report\n');
console.log('━'.repeat(60));
console.log(`\nExpected domains: ${expectedDomains.size}`);
console.log(`Downloaded: ${downloadedFiles.length}`);
console.log(`Missing: ${expectedDomains.size - downloadedFiles.length}\n`);

const missing = [];
for (const domain of expectedDomains) {
  if (!downloadedSet.has(domain)) {
    missing.push(domain);
  }
}

if (missing.length > 0) {
  console.log('❌ Missing domains:\n');
  missing.forEach(d => console.log(`  - ${d}`));
  console.log();
}

console.log('✅ Downloaded:\n');
downloadedFiles.sort().forEach(d => console.log(`  - ${d}`));
console.log();
