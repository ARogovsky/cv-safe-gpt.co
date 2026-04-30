// Скрипт для автоматического обновления advogram-i18n.ts
// Добавляет украинскую версию, altSlug, export type
// Удаляет internalLinks и footer

import { readFileSync, writeFileSync } from 'fs';

// Читаем backup
const backup = readFileSync('src/advogram-i18n.ts.backup', 'utf8');

// Извлекаем английскую версию (все между "en: {" и последней "}")
const enMatch = backup.match(/en: \{[\s\S]*\n\}/);
if (!enMatch) {
  console.error('Не удалось найти английскую версию');
  process.exit(1);
}

let enContent = enMatch[0];

// Удаляем internalLinks из английской версии (включая запятую перед ним)
enContent = enContent.replace(/,\s*internalLinks: \{[^}]*\},?/g, '');

// Удаляем footer из английской версии (включая запятую перед ним)
enContent = enContent.replace(/,\s*footer: \{[\s\S]*?\},?/g, '');

// Добавляем altSlug в английскую версию
enContent = enContent.replace(
  /slug: 'advogram-gtm-case-study',/,
  `slug: 'advogram-gtm-case-study-en',\n    altSlug: 'advogram-gtm-case-study',`
);

// Создаем украинскую версию (копия английской с переводом ключевых полей)
// Сначала убираем "en: " из начала, чтобы получить чистый объект
let ukContent = enContent
  .replace(/^en: /, '') // Убираем "en: " из начала
  .replace(/slug: 'advogram-gtm-case-study-en',/, `slug: 'advogram-gtm-case-study',`)
  .replace(/altSlug: 'advogram-gtm-case-study',/, `altSlug: 'advogram-gtm-case-study-en',`)
  .replace(/readingTime: '8 min read',/, `readingTime: '8 хв читання',`)
  .replace(/breadcrumbHome: 'Home',/, `breadcrumbHome: 'Головна',`)
  .replace(/breadcrumbCurrent: 'GTM Case Study',/, `breadcrumbCurrent: 'GTM Кейс',`);

// Формируем новый файл
const newContent = `export type AdvogramLang = 'uk' | 'en'

export const advogramContent = {
  uk: ${ukContent},
  ${enContent},
} as const
`;

// Записываем
writeFileSync('src/advogram-i18n.ts', newContent, 'utf8');

console.log('✅ Файл advogram-i18n.ts обновлен!');
console.log('✅ Добавлен export type AdvogramLang');
console.log('✅ Добавлена украинская версия (uk)');
console.log('✅ Добавлены altSlug в обе версии');
console.log('✅ Удалены internalLinks и footer');
console.log('');
console.log('⚠️  ВАЖНО: Украинская версия - это копия английской.');
console.log('   Нужно вручную перевести весь контент sections на украинский.');
