# Старі кейси для видалення

## Статус: Видалені кейси, які все ще згадуються в коді

---

## 1. **career-ops** (замінено на GALA)

### Файли з посиланнями:

#### Критичні (потрібно виправити):
- **`public/llms.txt`** (багато посилань)
  - Рядок 3: "Creator of Career-Ops (41.7K+ ⭐)"
  - Рядок 9: Весь маніфест про Career-Ops
  - Рядок 150-151: Секція "Career Ops (Open Source)" з посиланнями
  - Рядок 172: Case study посилання

- **`chatbot-prompt.txt`** (багато посилань)
  - Рядок 51: Опис Career Ops проекту
  - Рядок 158: Guardrails про Career Ops

- **`api/voice-token.js`**
  - Рядок 140: Згадка в списку проектів

#### Конфігураційні файли:
- **`scripts/extract-stack-brands.mjs`**
  - Рядок 19: `'../src/career-ops-i18n.ts'`

- **`scripts/image-budget-exceptions.json`**
  - Рядки 9-13: Виключення для career-ops зображень

- **`scripts/validate-articles.ts`**
  - Рядок 35: `'career-ops': 'src/CareerOps.tsx'`

- **`scripts/README.md`**
  - Рядок 25-27: Документація про заміну

#### Код компонентів:
- **`src/App.bad`**
  - Рядок 2245: Коментар про Career-Ops demo video

- **`scripts/update-github-stats.ts`**
  - Рядок 160: Коментар про видалені посилання

---

## 2. **jacobo** (замінено на SmartCourses)

### Файли з посиланнями:

#### Критичні:
- **`api/_shared/rag.js`**
  - Рядок 254: `'jacobo': { page_path_es: '/agente-ia-jacobo', page_path_en: '/ai-agent-jacobo' }`
  - Рядок 233: Keywords для jacobo

- **`chatbot-prompt.txt`**
  - Рядок 136: URL в списку артиклів

#### Активний код (використовується):
- **`src/i18n.ts`**
  - Рядки 413, 1194: `jacobo:` об'єкт (можливо використовується)

- **`src/App.tsx`**
  - Рядки 1702-1749: Весь блок про jacobo в experience.bablo

- **`src/advogram-i18n.ts`**
  - Рядки 45, 406: `jacoboCta` об'єкт

- **`src/Advogram.tsx`**
  - Рядки 79-83: Використання jacoboCta

#### Конфігураційні:
- **`pages.txt`**
  - Рядок 41: `JacoboAgent`

- **`src/articles/content-types.tsx`**
  - Рядки 1022, 1063: Коментарі та basePath

- **`scripts/image-budget-exceptions.json`**
  - Рядки 4-8: Виключення для jacobo зображень

- **`scripts/diagnose-rag.ts`**
  - Рядок 25: Keywords для jacobo

- **`scripts/README.md`**
  - Рядки 32-34: Документація про заміну

- **`scripts/extract-stack-brands.mjs`**
  - Рядок 26: `'../src/jacobo-i18n.ts'`

- **`scripts/export-chunks.ts`**
  - Рядок 114: Коментар про jacoboContent

---

## 3. **n8n-para-pms / n8n-for-pms** (замінено на PerfectSquad)

### Файли з посиланнями:

#### Критичні:
- **`api/_shared/rag.js`**
  - Рядок 252: `'n8n-for-pms': { page_path_es: '/n8n-para-pms', page_path_en: '/n8n-for-pms' }`
  - Рядок 232: Keywords

- **`chatbot-prompt.txt`**
  - Рядок 42: Опис проекту "n8n for PMs"
  - Рядок 136: URL в списку артиклів

#### Конфігураційні:
- **`scripts/diagnose-rag.ts`**
  - Рядок 25: Keywords

- **`scripts/validate-articles.ts`**
  - Рядок 30: `'n8n-for-pms': 'src/N8nForPMs.tsx'`

- **`scripts/README.md`**
  - Рядок 37: Документація про заміну

---

## 4. **seo-programatico / programmatic-seo** (видалено)

### Файли з посиланнями:

#### Критичні:
- **`api/_shared/rag.js`**
  - Рядок 255: `'programmatic-seo': { page_path_es: '/seo-programatico', page_path_en: '/programmatic-seo' }`
  - Рядок 235: Keywords

- **`chatbot-prompt.txt`**
  - Рядок 136: URL в списку артиклів

#### Конфігураційні:
- **`scripts/diagnose-rag.ts`**
  - Рядок 28: Keywords

- **`scripts/validate-articles.ts`**
  - Рядок 33: `'programmatic-seo': 'src/ProgrammaticSeo.tsx'`

---

## 5. **sobre-mi** (Spanish about page, замінено на /about)

### Файли з посиланнями:

#### Критичні:
- **`src/App.tsx`**
  - Рядок 1504: `Link to={lang === 'uk' ? '/sobre-mi' : '/about'}`

- **`chatbot-prompt.txt`**
  - Рядок 136: URL в списку артиклів
  - Рядок 137: Опис сторінки

#### Конфігураційні:
- **`scripts/generate-sitemap.ts`**
  - Рядки 94-108: Генерація sitemap для sobre-mi

- **`vercel.json`**
  - Рядок 65: Redirect `/sobre-mi` → `/`

- **`src/App.bad`**
  - Рядок 1502: Старий код з sobre-mi

---

## 6. **business-os** (статус невідомий - потрібно уточнити)

### Файли з посиланнями:

#### Критичні:
- **`api/_shared/rag.js`**
  - Рядок 233: Keywords для business-os

#### Конфігураційні:
- **`scripts/extract-stack-brands.mjs`**
  - Рядок 24: `'../src/business-os-i18n.ts'`

- **`scripts/validate-articles.ts`**
  - Рядок 31: `'business-os': 'src/BusinessOS.tsx'`

- **`scripts/diagnose-rag.ts`**
  - Рядок 26: Keywords

- **`scripts/README.md`**
  - Рядок 17-19: "✅ replaced by Advogram"

- **`evals/datasets/rag.json`**
  - Рядки 34, 96: Assertions для business-os

- **`evals/datasets/source-badges.json`**
  - Рядки 45-53: Badge test для business-os

---

## 7. **santifer-irepair** (статус невідомий)

### Файли з посиланнями:

#### Критичні:
- **`api/_shared/rag.js`**
  - Рядок 258: `'santifer-irepair': { page_path_es: '/santifer-irepair', page_path_en: '/santifer-irepair-founder' }`

#### Конфігураційні:
- **`scripts/validate-articles.ts`**
  - Рядок 34: `'santifer-irepair': 'src/SantiferIRepair.tsx'`

- **`scripts/extract-stack-brands.mjs`**
  - Рядок 27: `'../src/irepair-i18n.ts'`

---

---

## ГЛИБОКИЙ АНАЛІЗ: Як career-ops використовується на сайті

### ❌ НЕ використовується в UI коді:
- **Жодних компонентів React** - пошук по `src/**/*.tsx` не знайшов жодного використання
- **Жодних перекладів** - пошук по `src/**/*-i18n.ts` не знайшов жодного використання
- **Жодних роутів** - немає сторінки `/career-ops` в App.tsx
- **index.html** - згадується тільки в JSON-LD FAQ (2 питання про Career Ops)

### ✅ АКТИВНО використовується в AI системі:

#### 1. **`public/llms.txt`** - Основний контекст для AI (КРИТИЧНО!)
Це файл, який читає AI chatbot для розуміння контексту. Career-ops згадується:
- **Рядок 3**: "Creator of Career-Ops (41.7K+ ⭐)" - в заголовку
- **Рядок 6-9**: Весь маніфест про Career-Ops (150+ слів)
- **Рядок 150-151**: Секція "Career Ops (Open Source)" з детальним описом
- **Рядок 172**: В списку Published Case Studies

**Проблема**: Це файл про Santiago, а не про Andrey. Career-ops - це проект Santiago.

#### 2. **`chatbot-prompt.txt`** - System prompt для AI chatbot (КРИТИЧНО!)
Career-ops згадується:
- **Рядок 51**: В списку проектів з детальним описом
- **Рядок 158**: В guardrails - "Career Ops має ДВА entry points..."

**Проблема**: AI chatbot буде розповідати про career-ops як про твій проект, хоча це не так.

#### 3. **`api/voice-token.js`** - Voice mode system prompt
- **Рядок 140**: "Proyectos (usa search_portfolio para CUALQUIER detalle — CERO métricas de memoria): - Career Ops: Pipeline HITL..."

**Проблема**: Voice AI також буде згадувати career-ops.

#### 4. **`api/_shared/rag.js`** - RAG система (НЕ критично)
Career-ops НЕ в ARTICLE_ROUTES (немає роуту), але згадується в коментарях та старих функціях.

---

## ВИСНОВОК: Career-ops - це "привид Santiago"

**Що це означає:**
1. Career-ops НЕ є частиною твого сайту (немає сторінки, компонентів, перекладів)
2. Career-ops є частиною AI контексту, який описує Santiago, а не тебе
3. Якщо користувач запитає AI chatbot про career-ops, він розповість про проект Santiago

**Чому це проблема:**
- Твій сайт - це esupport.org.ua про Andrey Rogovsky
- AI chatbot використовує контекст про Santiago Fernández
- Це повна плутанина ідентичності!

**Що потрібно зробити:**
1. Замінити весь контекст Santiago на Andrey в `public/llms.txt`
2. Замінити весь контекст Santiago на Andrey в `chatbot-prompt.txt`
3. Замінити весь контекст Santiago на Andrey в `api/voice-token.js`
4. Видалити career-ops з усіх AI промптів
5. Додати твої реальні проекти: PerfectSquad, SmartCourses, Advogram, offzmi, GALA, AI Tools, PII Removal

---

## План дій (ОНОВЛЕНИЙ)

### 🔥 ПРІОРИТЕТ 0 (КРИТИЧНО - Плутанина ідентичності):
**Проблема**: Весь AI контекст описує Santiago, а не Andrey!

1. **`public/llms.txt`** - ПОВНІСТЮ переписати:
   - Замінити Santiago → Andrey Rogovsky
   - Видалити career-ops, jacobo, business-os, n8n-for-pms, programmatic-seo
   - Додати твої проекти: PerfectSquad, SmartCourses, Advogram, offzmi, GALA, AI Tools, PII Removal
   - Оновити контакти: esupport@esupport.org.ua, https://t.me/andreyrogovsky
   - Видалити LinkedIn, GitHub, Twitter (у тебе їх немає)

2. **`chatbot-prompt.txt`** - ПОВНІСТЮ переписати:
   - Замінити Santiago → Andrey Rogovsky
   - Видалити career-ops, jacobo, business-os, n8n-for-pms, programmatic-seo
   - Додати твої проекти з контентом з `scripts/`
   - Оновити URLs: /about (UK), /about-en (EN)
   - Видалити sobre-mi, agente-ia-jacobo, n8n-para-pms, seo-programatico

3. **`api/voice-token.js`** - ПОВНІСТЮ переписати:
   - Замінити Santiago → Andrey Rogovsky
   - Видалити career-ops, jacobo, business-os
   - Додати твої проекти

4. **`index.html`** - Оновити JSON-LD:
   - Видалити FAQ про career-ops (2 питання)
   - Видалити FAQ про jacobo (2 питання)
   - Додати FAQ про твої проекти

### Пріоритет 1 (RAG система):
5. **`api/_shared/rag.js`** - Видалити ARTICLE_ROUTES для:
   - n8n-for-pms
   - jacobo
   - programmatic-seo
   - santifer-irepair (якщо не твій)

### Пріоритет 2 (Конфігураційні файли):
6. **`scripts/validate-articles.ts`** - видалити видалені кейси
7. **`scripts/extract-stack-brands.mjs`** - видалити видалені i18n файли
8. **`scripts/diagnose-rag.ts`** - видалити keywords
9. **`scripts/generate-sitemap.ts`** - видалити sobre-mi
10. **`scripts/image-budget-exceptions.json`** - видалити виключення для видалених кейсів

### Пріоритет 3 (Cleanup):
11. **`pages.txt`** - видалити JacoboAgent, CareerOps
12. **`src/articles/content-types.tsx`** - видалити коментарі про jacobo
13. **`src/App.tsx`** - виправити sobre-mi на /about (рядок 1504)
14. **`evals/datasets/`** - видалити тести для business-os

---

## Питання для уточнення:

1. **Чи є у тебе контент для llms.txt та chatbot-prompt.txt?** Потрібен опис твоїх проектів, досвіду, навичок.
2. **business-os** - це твій проект чи Santiago? Видаляти?
3. **santifer-irepair** - це твій проект чи Santiago? Видаляти?
4. **Чи потрібно видаляти зображення** з `public/career-ops/`, `public/jacobo/` тощо?
5. **Чи потрібно видаляти backup файли** типу `src/App.bad`, `src/advogram-i18n.ts.backup`?
