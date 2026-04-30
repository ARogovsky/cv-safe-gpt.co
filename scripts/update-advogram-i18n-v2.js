// Скрипт для автоматического обновления advogram-i18n.ts
// Добавляет украинскую версию, altSlug, export type
// Удаляет internalLinks и footer

import { readFileSync, writeFileSync } from 'fs';

// Читаем backup
const backup = readFileSync('src/advogram-i18n.ts.backup', 'utf8');

// Парсим содержимое - находим объект en
const enStart = backup.indexOf('en: {');
const enEnd = backup.lastIndexOf('},\n} as const');

if (enStart === -1 || enEnd === -1) {
  console.error('Не удалось найти структуру en объекта');
  process.exit(1);
}

// Извлекаем содержимое en объекта (без "en: {" и закрывающей "}")
let enContentRaw = backup.substring(enStart + 5, enEnd).trim();

// Удаляем internalLinks секцию полностью
enContentRaw = enContentRaw.replace(/internalLinks: \{[^}]*\},\s*/g, '');

// Удаляем footer секцию полностью  
enContentRaw = enContentRaw.replace(/footer: \{[\s\S]*?\},\s*$/g, '');

// Добавляем altSlug в slug строку
enContentRaw = enContentRaw.replace(
  /slug: 'advogram-gtm-case-study',/,
  `slug: 'advogram-gtm-case-study-en',\n    altSlug: 'advogram-gtm-case-study',`
);

// Создаем украинскую версию
let ukContentRaw = enContentRaw
  .replace(/slug: 'advogram-gtm-case-study-en',/, `slug: 'advogram-gtm-case-study',`)
  .replace(/altSlug: 'advogram-gtm-case-study',/, `altSlug: 'advogram-gtm-case-study-en',`)
  .replace(/readingTime: '8 min read',/, `readingTime: '8 хв читання',`)
  .replace(/breadcrumbHome: 'Home',/, `breadcrumbHome: 'Головна',`)
  .replace(/breadcrumbCurrent: 'GTM Case Study',/, `breadcrumbCurrent: 'GTM Кейс',`);

// Формируем новый файл
const newContent = `export type AdvogramLang = 'uk' | 'en'

export const advogramContent = {
  uk: {
    ${ukContentRaw}
  },
  en: {
    ${enContentRaw}
  },
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
