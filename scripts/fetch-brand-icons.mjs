#!/usr/bin/env node

/**
 * Brandfetch Icon Fetcher
 * 
 * Автоматически получает SVG иконки брендов через Brandfetch API
 * и генерирует TypeScript код для tech-icons.ts
 * 
 * Usage:
 *   node scripts/fetch-brand-icons <brand1> <brand2> ...
 *   node scripts/fetch-brand-icons --file brands.txt
 *   node scripts/fetch-brand-icons --interactive
 * 
 * Examples:
 *   node scripts/fetch-brand-icons openai anthropic vercel
 *   node scripts/fetch-brand-icons --file scripts/brands-to-fetch.txt
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { URL } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CLIENT_ID = '1idt6vD87LNj58TokBg';
const API_KEY = process.env.BRANDFETCH_API_KEY || '';
const API_BASE = 'api.brandfetch.io';
const OUTPUT_DIR = path.join(__dirname, 'brand-icons-output');

// Цвета для консоли
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Делает HTTP GET запрос к Brandfetch API
 */
function fetchBrandData(domain) {
  return new Promise((resolve, reject) => {
    const headers = {
      'Accept': 'application/json',
    };

    // Добавляем Authorization если есть API ключ
    if (API_KEY) {
      headers['Authorization'] = `Bearer ${API_KEY}`;
    }

    const options = {
      hostname: API_BASE,
      path: `/v2/brands/${domain}`,
      method: 'GET',
      headers: headers,
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error(`Failed to parse JSON: ${e.message}`));
          }
        } else if (res.statusCode === 404) {
          reject(new Error(`Brand not found: ${domain}`));
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.end();
  });
}

/**
 * Скачивает SVG файл
 */
function downloadSvg(url) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0',
      }
    };

    const protocol = urlObj.protocol === 'https:' ? https : https;

    protocol.get(options, (res) => {
      // Обрабатываем все виды редиректов
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadSvg(res.headers.location).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }

      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(data);
      });
    }).on('error', reject);
  });
}

/**
 * Извлекает path из SVG
 */
function extractSvgPath(svgContent) {
  // Простой парсинг SVG для извлечения path
  const pathMatch = svgContent.match(/<path[^>]*d="([^"]+)"/);
  if (pathMatch) {
    return pathMatch[1];
  }

  // Если несколько path, объединяем
  const paths = [];
  const pathRegex = /<path[^>]*d="([^"]+)"/g;
  let match;
  while ((match = pathRegex.exec(svgContent)) !== null) {
    paths.push(match[1]);
  }

  if (paths.length > 0) {
    return paths.join(' ');
  }

  return null;
}

/**
 * Извлекает основной цвет бренда
 */
function extractBrandColor(brandData) {
  if (brandData.colors && brandData.colors.length > 0) {
    // Ищем accent или primary цвет
    const accentColor = brandData.colors.find(c => c.type === 'accent');
    if (accentColor) return accentColor.hex;

    // Иначе берем первый
    return brandData.colors[0].hex;
  }
  return '#000000';
}

/**
 * Находит лучший SVG логотип
 */
function findBestSvgLogo(brandData) {
  if (!brandData.logos || brandData.logos.length === 0) {
    return null;
  }

  // Приоритет: icon > symbol > logo
  const priorities = ['icon', 'symbol', 'logo'];
  
  for (const type of priorities) {
    const logo = brandData.logos.find(l => l.type === type);
    if (logo && logo.formats) {
      const svgFormat = logo.formats.find(f => f.format === 'svg');
      if (svgFormat) {
        return {
          url: svgFormat.src,
          type: type,
        };
      }
    }
  }

  return null;
}

/**
 * Обрабатывает один бренд
 */
async function processBrand(brandName) {
  log(`\n📦 Processing: ${brandName}`, 'cyan');

  try {
    // 1. Получаем данные бренда
    log('  Fetching brand data...', 'blue');
    const brandData = await fetchBrandData(brandName);
    
    log(`  ✓ Found: ${brandData.name}`, 'green');

    // 2. Находим лучший SVG
    const svgLogo = findBestSvgLogo(brandData);
    if (!svgLogo) {
      log('  ✗ No SVG logo found', 'red');
      return null;
    }

    log(`  ✓ Found ${svgLogo.type} logo (SVG)`, 'green');

    // 3. Скачиваем SVG
    log('  Downloading SVG...', 'blue');
    const svgContent = await downloadSvg(svgLogo.url);

    // 4. Извлекаем path
    const svgPath = extractSvgPath(svgContent);
    if (!svgPath) {
      log('  ✗ Could not extract SVG path', 'red');
      return null;
    }

    // 5. Получаем цвет
    const color = extractBrandColor(brandData);

    log(`  ✓ Color: ${color}`, 'green');
    log(`  ✓ Path length: ${svgPath.length} chars`, 'green');

    // 6. Сохраняем полный SVG для справки
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const svgFilePath = path.join(OUTPUT_DIR, `${brandName}.svg`);
    fs.writeFileSync(svgFilePath, svgContent);
    log(`  ✓ Saved full SVG: ${svgFilePath}`, 'green');

    return {
      name: brandName,
      displayName: brandData.name,
      domain: brandData.domain,
      color: color,
      path: svgPath,
      type: svgLogo.type,
    };

  } catch (error) {
    log(`  ✗ Error: ${error.message}`, 'red');
    return null;
  }
}

/**
 * Генерирует TypeScript код для tech-icons.ts
 */
function generateTypeScriptCode(results) {
  const successfulResults = results.filter(r => r !== null);

  if (successfulResults.length === 0) {
    return '// No icons fetched';
  }

  let code = '// Generated by scripts/fetch-brand-icons\n';
  code += `// Date: ${new Date().toISOString()}\n`;
  code += '// Add these to your tech-icons.ts file\n\n';

  for (const result of successfulResults) {
    code += `// ${result.displayName} (${result.domain})\n`;
    code += `icons['${result.name}'] = {\n`;
    code += `  color: '${result.color}',\n`;
    code += `  path: '${result.path}',\n`;
    code += `}\n\n`;
  }

  return code;
}

/**
 * Генерирует JSON файл с результатами
 */
function generateJsonOutput(results) {
  const successfulResults = results.filter(r => r !== null);
  
  return JSON.stringify({
    generated: new Date().toISOString(),
    count: successfulResults.length,
    icons: successfulResults,
  }, null, 2);
}

/**
 * Читает список брендов из файла
 */
function readBrandsFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'));
}

/**
 * Интерактивный режим
 */
async function interactiveMode() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    log('\n🎯 Interactive Mode', 'bright');
    log('Enter brand names or domains (one per line)', 'cyan');
    log('Press Ctrl+D or type "done" when finished\n', 'cyan');

    const brands = [];

    rl.on('line', (line) => {
      const brand = line.trim();
      if (brand.toLowerCase() === 'done') {
        rl.close();
      } else if (brand) {
        brands.push(brand);
        log(`  Added: ${brand}`, 'green');
      }
    });

    rl.on('close', () => {
      resolve(brands);
    });
  });
}

/**
 * Main
 */
async function main() {
  log('\n🎨 Brandfetch Icon Fetcher', 'bright');
  log('━'.repeat(50), 'cyan');

  // Проверяем наличие API ключа
  if (!API_KEY) {
    log('\n⚠️  Warning: BRANDFETCH_API_KEY not set', 'yellow');
    log('   Brand API requires authentication.', 'yellow');
    log('   Get your API key at: https://brandfetch.com/developers\n', 'yellow');
    log('   Set it with: export BRANDFETCH_API_KEY=your_key_here', 'cyan');
    log('   Or add it to your .env file\n', 'cyan');
    process.exit(1);
  }

  const args = process.argv.slice(2);
  let brands = [];

  // Парсим аргументы
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    log('\nUsage:', 'yellow');
    log('  ./scripts/fetch-brand-icons <brand1> <brand2> ...', 'cyan');
    log('  ./scripts/fetch-brand-icons --file brands.txt', 'cyan');
    log('  ./scripts/fetch-brand-icons --interactive', 'cyan');
    log('\nExamples:', 'yellow');
    log('  ./scripts/fetch-brand-icons openai anthropic vercel', 'cyan');
    log('  ./scripts/fetch-brand-icons --file scripts/brands-to-fetch.txt', 'cyan');
    process.exit(0);
  }

  if (args[0] === '--interactive' || args[0] === '-i') {
    brands = await interactiveMode();
  } else if (args[0] === '--file' || args[0] === '-f') {
    if (!args[1]) {
      log('\n✗ Error: --file requires a file path', 'red');
      process.exit(1);
    }
    brands = readBrandsFromFile(args[1]);
    log(`\n📄 Loaded ${brands.length} brands from ${args[1]}`, 'green');
  } else {
    brands = args;
  }

  if (brands.length === 0) {
    log('\n✗ No brands specified', 'red');
    process.exit(1);
  }

  log(`\n🚀 Fetching ${brands.length} brand(s)...`, 'bright');

  // Обрабатываем все бренды
  const results = [];
  for (const brand of brands) {
    const result = await processBrand(brand);
    results.push(result);
    
    // Небольшая задержка между запросами
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Генерируем выходные файлы
  log('\n📝 Generating output files...', 'bright');

  // Создаем директорию если её нет
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const tsCode = generateTypeScriptCode(results);
  const tsFilePath = path.join(OUTPUT_DIR, 'icons.ts');
  fs.writeFileSync(tsFilePath, tsCode);
  log(`  ✓ TypeScript: ${tsFilePath}`, 'green');

  const jsonOutput = generateJsonOutput(results);
  const jsonFilePath = path.join(OUTPUT_DIR, 'icons.json');
  fs.writeFileSync(jsonFilePath, jsonOutput);
  log(`  ✓ JSON: ${jsonFilePath}`, 'green');

  // Статистика
  const successful = results.filter(r => r !== null).length;
  const failed = results.length - successful;

  log('\n📊 Summary', 'bright');
  log('━'.repeat(50), 'cyan');
  log(`  Total: ${results.length}`, 'cyan');
  log(`  ✓ Successful: ${successful}`, 'green');
  if (failed > 0) {
    log(`  ✗ Failed: ${failed}`, 'red');
  }
  log(`  📁 Output: ${OUTPUT_DIR}`, 'cyan');

  log('\n✨ Done!', 'bright');
  log('\nNext steps:', 'yellow');
  log('  1. Review the generated icons.ts file', 'cyan');
  log('  2. Copy the icon definitions to src/tech-icons.ts', 'cyan');
  log('  3. Add any necessary aliases', 'cyan');
}

// Запуск
main().catch((error) => {
  log(`\n✗ Fatal error: ${error.message}`, 'red');
  console.error(error);
  process.exit(1);
});
