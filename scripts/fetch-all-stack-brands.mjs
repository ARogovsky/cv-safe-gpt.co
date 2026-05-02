#!/usr/bin/env node

/**
 * Fetch all brand icons from stack sections
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = process.env.BRANDFETCH_API_KEY;

if (!API_KEY) {
  console.error('❌ BRANDFETCH_API_KEY not set');
  process.exit(1);
}

// Читаем маппинг брендов на домены
const brandMapping = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'brand-to-domain.json'), 'utf-8')
);

// Читаем список брендов
const brands = fs.readFileSync(path.join(__dirname, 'stack-brands.txt'), 'utf-8')
  .split('\n')
  .map(b => b.trim())
  .filter(b => b);

console.log(`\n📦 Processing ${brands.length} brands...\n`);

const domainsToFetch = [];
const skippedBrands = [];

for (const brand of brands) {
  const domain = brandMapping[brand];
  
  if (!domain) {
    skippedBrands.push(brand);
  } else if (!domainsToFetch.includes(domain)) {
    domainsToFetch.push(domain);
  }
}

console.log(`✅ ${domainsToFetch.length} unique domains to fetch`);
console.log(`⚠️  ${skippedBrands.length} brands skipped (no domain mapping)\n`);

if (skippedBrands.length > 0) {
  console.log('Skipped brands:');
  skippedBrands.forEach(b => console.log(`  - ${b}`));
  console.log();
}

// Запускаем fetch-brand-icons.mjs
const domainsArg = domainsToFetch.join(' ');
const command = `BRANDFETCH_API_KEY='${API_KEY}' node scripts/fetch-brand-icons.mjs ${domainsArg}`;

console.log('🚀 Fetching brand icons...\n');

try {
  execSync(command, { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..'),
  });
  
  console.log('\n✅ Done!');
  console.log('\n📁 SVG files saved to:');
  console.log('  - scripts/brand-icons-output/');
  
  // Копируем в public/logos
  console.log('\n📋 Copying to public/logos...');
  execSync('cp scripts/brand-icons-output/*.svg public/logos/', {
    cwd: path.join(__dirname, '..'),
  });
  console.log('  ✅ Copied to public/logos/');
  
} catch (error) {
  console.error('\n❌ Error:', error.message);
  process.exit(1);
}
