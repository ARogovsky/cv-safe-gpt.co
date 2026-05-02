#!/usr/bin/env node

/**
 * Extract unique brand names from all case study stack sections
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const i18nFiles = [
  '../src/pii-removal-i18n.ts',
  '../src/gala-i18n.ts',
  '../src/perfectsquad-i18n.ts',
  '../src/aitools-i18n.ts',
  '../src/career-ops-i18n.ts',
  '../src/smartcourses-i18n.ts',
  '../src/pseo-i18n.ts',
  '../src/chatbot-i18n.ts',
  '../src/advogram-i18n.ts',
  '../src/business-os-i18n.ts',
  '../src/jacobo-i18n.ts',
  '../src/irepair-i18n.ts',
];

const brands = new Set();

for (const file of i18nFiles) {
  const filePath = path.join(__dirname, file);
  
  if (!fs.existsSync(filePath)) {
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Ищем секции stack с items
  const stackMatches = content.matchAll(/stack:\s*\{[^}]*items:\s*\[([^\]]+)\]/gs);
  
  for (const match of stackMatches) {
    const itemsContent = match[1];
    
    // Извлекаем name из объектов { name: '...', role: '...' }
    const nameMatches = itemsContent.matchAll(/name:\s*['"]([^'"]+)['"]/g);
    
    for (const nameMatch of nameMatches) {
      const brandName = nameMatch[1].trim();
      if (brandName) {
        brands.add(brandName);
      }
    }
  }
}

const sortedBrands = Array.from(brands).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log('\n📦 Found', sortedBrands.length, 'unique brands:\n');
sortedBrands.forEach(brand => console.log('  -', brand));

// Сохраняем в файл
const outputPath = path.join(__dirname, 'stack-brands.txt');
fs.writeFileSync(outputPath, sortedBrands.join('\n'));

console.log('\n✅ Saved to:', outputPath);
