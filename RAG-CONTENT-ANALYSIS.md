# RAG Content Analysis

## Як працює RAG система

### 1. Експорт контенту (`npm run rag:export`)

**Скрипт:** `scripts/export-chunks.ts`

**Що робить:**
- Читає `articleRegistry` з `src/articles/registry.ts`
- Фільтрує тільки статті з `ragReady: true`
- Для кожної статті:
  - Імпортує i18n файл (наприклад `src/perfectsquad-i18n.ts`)
  - Знаходить експорт `*Content` (наприклад `perfectsquadContent`)
  - Парсить структуру: `en.header`, `en.intro`, `en.sections.*`
  - Створює chunks з metadata (article_id, section_id, section_anchor)
- Зберігає в `scripts/chunks/{article_id}.json`

**Що виключається:**
```typescript
const EXCLUDE_KEYS = new Set([
  'slug', 'altSlug', 'readingTime', 'date', 'badge', 'seo', 'nav',
  'breadcrumbHome', 'breadcrumbCurrent', 'back',
  'href', 'icon', 'src', 'imgAlt', 'imgTitle', 'image', 'ogImage',
  'kickerLink', 'figcaption', 'importUrl', 'downloadUrl', 'jsonUrl',
  'num', 'emoji', 'kind', 'value',
  'internalLinks',
])
```

### 2. Інгест в Supabase (`npm run rag:ingest`)

**Скрипт:** `scripts/ingest-rag.ts`

**Що робить:**
- Читає chunks з `scripts/chunks/*.json`
- Для кожного chunk:
  1. **Contextual retrieval:** Додає summary через Claude Haiku
  2. **Embedding:** Створює vector через OpenAI/Azure (1536 dims)
  3. **Upsert:** Зберігає в Supabase `documents` table
- Change detection через SHA256 hash (skip unchanged)

### 3. Пошук в чаті

**Файл:** `api/_shared/rag.js` → `searchPortfolio()`

**Процес:**
1. Embed user query → vector
2. Hybrid search в Supabase (semantic 70% + keyword 30%)
3. Filter: similarity >= 0.3
4. Rerank через Claude Haiku (top 5)
5. Diversify: 1 chunk per article
6. Format для context

## Що є в RAG зараз

### Статті з `ragReady: true` (7 шт):

1. **perfectsquad** - Gaming traffic research
2. **smartcourses** - EdTech platform
3. **advogram** - ATS tools validation
4. **offzmi** - AI + MCP-browser niche
5. **ai-tools** - 16K+ AI tools catalog
6. **gala** - B2B lead gen agent
7. **pii-removal** - Fine-tuned RoBERTa

### Що НЕ входить в RAG:

❌ **Біографічна інформація:**
- 25 років досвіду
- Локація (Ukraine → Germany)
- Email контакт
- Telegram
- Цільові ролі (Senior AI Engineer, MLOps)

❌ **Досвід роботи:**
- E-lli.com (2025-2026)
- Bablo Digital Agency (2024-2025)
- AVID Cloud Solutions (2019-2023)
- LLC Fortex Finance (2017-2019)
- InetPartners Group (2011-2016)
- IntWay World Corporation (2006-2009)
- Envisionext Inc (2004-2006)
- Lawyer Agency Meta-Info (2002-2004)

❌ **Освіта:**
- Master of Science (2002)
- PhD Program (2002-2004, unfinished)

❌ **Технічний стек:**
- MLOps tools (Kubeflow, LakeFS, SageMaker)
- DevOps tools (Kubernetes, Terraform, Pulumi)
- Cloud platforms (AWS, GCP, Azure)
- Programming languages (Python, GoLang, TypeScript)

❌ **Сертифікації та публікації:**
- DOU articles
- IT Sprout educator
- Hatathon mentor

## Чому evals падають

### Проблема 1: Немає "about me" документа

**Що відсутнє:**
- `scripts/about-me.txt` існує, але **НЕ індексується** в RAG
- Немає статті з `ragReady: true` для біографії
- Немає chunks для загальної інформації про Андрія

**Результат:**
- ❌ exp-years: Не знає про 25 років досвіду
- ❌ location: Не знає про Ukraine/Germany
- ❌ target-roles: Не знає які ролі шукає
- ❌ email-always: Не згадує email контакт

### Проблема 2: Similarity threshold занадто високий

**Поточне значення:** 0.3

**Що відбувається:**
```javascript
// api/_shared/rag.js
const filteredChunks = searchResult.chunks.filter(c => (c.similarity || 0) >= 0.3)
```

**Результат:**
- Загальні питання ("experience", "skills") дають similarity 0.22-0.26
- Фільтруються → 0 chunks → модель не має контексту
- Конкретні питання ("GALA", "PerfectSquad") дають 0.37+ → працює

### Проблема 3: System prompt не містить fallback

**Поточний стан:**
- System prompt в `chatbot-prompt.txt` або Langfuse
- Не містить критичних фактів як fallback
- Модель не знає що згадувати коли RAG не знаходить контекст

## Рішення

### Варіант 1: Додати "about" статтю в RAG ✅ (Рекомендую)

**Що зробити:**
1. Створити `src/about-i18n.ts` з біографією
2. Додати в `articleRegistry` з `ragReady: true`
3. Структура:
   ```typescript
   aboutContent = {
     en: {
       header: { title: "About Andrey Rogovsky" },
       intro: "Senior AI Engineer with 25 years...",
       sections: {
         experience: "25 years in cloud infrastructure...",
         location: "Based in Germany, originally from Ukraine...",
         contact: "Email: esupport@esupport.org.ua, Telegram: @andreyrogovsky",
         roles: "Seeking: Senior AI Engineer, MLOps Engineer...",
         education: "Master of Science...",
         workHistory: { /* E-lli, Bablo, AVID, etc */ },
       }
     }
   }
   ```
4. Запустити `npm run rag:sync`

**Плюси:**
- Всі факти в RAG, доступні через пошук
- Узгоджено з існуючою архітектурою
- Автоматичні updates при змінах

**Мінуси:**
- Потрібно створити нову статтю
- Потрібно визначити URL (наприклад `/about` вже зайнятий)

### Варіант 2: Знизити similarity threshold ⚠️

**Що зробити:**
```javascript
// api/_shared/rag.js
const filteredChunks = searchResult.chunks.filter(c => (c.similarity || 0) >= 0.25) // було 0.3
```

**Плюси:**
- Швидке виправлення
- Більше chunks проходить фільтр

**Мінуси:**
- Може давати менш релевантні результати
- Не вирішує проблему відсутності біографії

### Варіант 3: Додати fallback в system prompt ⚠️

**Що зробити:**
Додати в `chatbot-prompt.txt`:
```
CRITICAL FACTS (always mention when relevant):
- 25 years of experience in cloud infrastructure (since 1999)
- Location: Germany (remote), originally from Ukraine
- Contact: esupport@esupport.org.ua, Telegram: @andreyrogovsky
- Seeking: Senior AI Engineer, MLOps Engineer, AI Product Engineer
- Tech stack: LangGraph, Kubernetes, AWS/GCP/Azure, PyTorch
```

**Плюси:**
- Швидке виправлення
- Гарантує що критичні факти завжди доступні

**Мінуси:**
- Дублювання інформації (в prompt + в RAG)
- Важче підтримувати (2 місця для updates)
- Збільшує розмір prompt

### Варіант 4: Комбінований підхід ✅✅ (Найкраще)

1. **Додати "about" статтю** (Варіант 1) - для повної біографії
2. **Знизити threshold до 0.25** (Варіант 2) - для кращого recall
3. **Додати мінімальний fallback в prompt** (Варіант 3) - тільки email та локація

**Результат:**
- RAG знаходить більше релевантного контексту
- Критичні факти завжди доступні через prompt
- Повна біографія доступна через RAG

## Наступні кроки

1. ✅ Створити `src/about-i18n.ts` з біографією
2. ✅ Додати в `articleRegistry` з `ragReady: true`
3. ✅ Запустити `npm run rag:sync`
4. ✅ Знизити similarity threshold до 0.25
5. ✅ Додати мінімальний fallback в system prompt
6. 🧪 Перезапустити evals
7. 📊 Порівняти результати

## Технічні деталі

**Файли для аналізу:**
- `scripts/export-chunks.ts` - експорт контенту
- `scripts/ingest-rag.ts` - інгест в Supabase
- `api/_shared/rag.js` - пошук та reranking
- `src/articles/registry.ts` - конфігурація статей
- `scripts/about-me.txt` - біографія (НЕ індексується)

**Chunks в RAG:**
- 7 статей × ~10-20 chunks = ~70-140 chunks
- Кожен chunk: content + metadata + embedding (1536 dims)
- Similarity threshold: 0.3 (занадто високий)
- Reranking: Claude Haiku top 5
- Diversification: 1 chunk per article
