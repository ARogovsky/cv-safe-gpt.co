# Оцінка контенту для переписування AI промптів

## Статус: ✅ ДОСТАТНЬО для повного переписування

---

## Що є в наявності

### 1. **scripts/about-me.txt** ✅
**Якість:** Відмінна  
**Обсяг:** Повний професійний профіль

**Що є:**
- Повна біографія: освіта (MSc 2002, PhD unfinished 2002-2004)
- 25 років досвіду: від System Administrator (2002) до Senior AI Engineer (2026)
- Детальний Work Experience з 7 компаній:
  - E-lli.com (2025-2026) - CTO, Co-founder
  - Bablo Digital Agency (2024-2025) - Founder & Lead AI Engineer
  - AVID Cloud Solutions (2019-2023) - Lead DevOps Engineer
  - LLC Fortex Finance (2017-2019) - Senior Security Engineer
  - InetPartners Group (2011-2016) - Senior DevOps Engineer
  - IntWay World Corporation (2006-2009) - Head of Compute Department
  - Envisionext Inc (2004-2006) - Senior Linux System Administrator
  - Lawyer Agency Meta-Info (2002-2004) - Middle System Administrator
- Повний технічний стек:
  - MLOps: Kubeflow, LakeFS, AWS SageMaker, Azure AI Foundry, vLLM, HuggingFace, PyTorch
  - DevOps: Kubernetes, KEDA, Docker, Terraform, Pulumi, Jenkins, GitLab CI, GitHub Actions, ArgoCD, Flux, Helm
  - Cloud: AWS, GCP, Azure, IBM Bluemix, VMware
  - Programming: Python, GoLang, Bash, TypeScript, PHP
  - Compliance: PCI DSS, HIPAA, GDPR, SOC2, ISO
- Контакти: a.rogovsky@gmail.com, Germany, English C1

**Що можна використати:**
- Професійний summary для llms.txt
- Технічні навички для chatbot-prompt.txt
- Досвід роботи для voice-token.js
- Освіта та сертифікації

---

### 2. **Кейси в scripts/** ✅
**Якість:** Відмінна  
**Обсяг:** 7 детальних кейсів з метриками

#### **PerfectSquad** (scripts/PerfectSquad)
- **Обсяг:** ~150 рядків, детальний
- **Метрики:** 14 200 кліків, CTR 7-10%, $16 400 витрат, 227 реєстрацій
- **Технічний контекст:** AI ads generator, Google Ads SDK, Prompt engineering
- **Інсайти:** Геолокаційна карта дешевого ігрового трафіку (Туреччина, Аргентина, LatAm)

#### **SmartCourses** (scripts/SmartCourse)
- **Обсяг:** ~100 рядків, детальний
- **Метрики:** 502 реєстрації, 500 бажаючих купити, 22 транзакції, CTR 13-17%
- **Технічний контекст:** Google Ads SDK, AI-driven outreach, Prompt engineering
- **Партнерство:** Тернопільський національний педагогічний університет

#### **offzmi** (scripts/offzmi)
- **Обсяг:** ~800 рядків, ДУЖЕ детальний
- **Метрики:** 222 AI-статті, $452 витрат, 401 клік, CTR 11.9%, +1000% зростання
- **Технічний контекст:** AI + MCP-browser, мікросервіс публікації, Google Ads
- **Інсайти:** Ніша презентацій для маркетологів знайдена через поведінку

#### **GALA** (scripts/gala)
- **Обсяг:** ~120 рядків, детальний
- **Метрики:** 85 дзвінків/день, 90 активних користувачів, 6 900 повідомлень/міс
- **Технічний контекст:** RoBERTa classifier (PyTorch), 20k sites dataset, 50-100ms CPU inference
- **Перевага:** 15-25% економії навантаження на браузер

#### **PII Removal** (scripts/pii-removal)
- **Обсяг:** ~100 рядків, детальний
- **Метрики:** 76-87% точність vs 14% AWS, 37% Azure
- **Технічний контекст:** Fine-tuned RoBERTa, Knowledge distillation від OpenAI, PyTorch
- **Роль:** CTO & Tech Lead, 60% менеджмент, 30% hands-on, 10% менторинг

#### **AI Tools** (scripts/AITools)
- **Обсяг:** ~80 рядків, детальний
- **Метрики:** 16 000+ AI-інструментів, 2 340 кліків, CTR 9.59%, 111 реєстрацій, retention 100%
- **Технічний контекст:** AI-агент парсер, автогенерація карток, Performance Max
- **Монетизація:** $99/міс за клеймінг сторінки

#### **Advogram** (згадується в about-me.txt)
- **Контекст:** HR platform, full-stack product built via AI coding agents
- **Примітка:** Детальний кейс є в `src/advogram-i18n.ts` (вже перекладений на українську)

---

### 3. **src/about-i18n.ts + src/AboutPage.tsx** ✅
**Якість:** Відмінна  
**Обсяг:** Повний структурований профіль + UI компонент

**Що є в about-i18n.ts:**
- SEO-оптимізовані заголовки та описи (UK + EN)
- Manifesto: "25 років інфраструктури. Тепер я будую AI, який виживає в продакшні."
- Повна біографія (3 параграфи)
- Timeline з 8 позицій
- 8 проєктів з описами та посиланнями
- FAQ (3 питання)
- Контакти: esupport@esupport.org.ua

**Що є в AboutPage.tsx:**
- Повний UI компонент для /about та /about-en сторінок
- JSON-LD structured data для Person та FAQPage
- Секції: Header, Manifesto, Bio, Technical Skills, Timeline, Projects, Certifications, Education, Press, Community, FAQ, Connect
- Соціальні посилання: Telegram (https://t.me/andreyrogovsky)
- Hreflang теги для UK/EN версій
- Canonical URLs

**Важливо:** AboutPage.tsx вже використовує контент з about-i18n.ts, тому сторінка /about вже показує правильну інформацію про Andrey!

---

## Що ДОСТАТНЬО для переписування

### ✅ **public/llms.txt**
**Потрібно:** Професійний профіль, проєкти, досвід, контакти  
**Є в наявності:**
- ✅ Повна біографія з about-me.txt
- ✅ 7 детальних кейсів з метриками
- ✅ Технічний стек
- ✅ Досвід роботи (25 років)
- ✅ Контакти

**Структура нового llms.txt:**
```
# Andrey Rogovsky, Senior AI Engineer

> Senior AI Engineer · 25 years cloud infrastructure · GenAI production systems

## Manifesto
25 років інфраструктури. Тепер я будую AI, який виживає в продакшні.

## Contact & Availability
- Location: Germany
- Email: esupport@esupport.org.ua
- Telegram: https://t.me/andreyrogovsky
- Website: https://esupport.org.ua

## Professional Summary
[З about-me.txt]

## Core Competencies
[З about-me.txt: MLOps, DevOps, Cloud, Programming]

## Work Experience
[З about-me.txt: 8 позицій]

## Projects
[З scripts/: PerfectSquad, SmartCourses, offzmi, GALA, PII Removal, AI Tools, Advogram, E-lli.com]

## Education
[З about-me.txt]
```

---

### ✅ **chatbot-prompt.txt**
**Потрібно:** System prompt для AI chatbot з контекстом про Andrey  
**Є в наявності:**
- ✅ Професійний профіль
- ✅ Детальні кейси для search_portfolio
- ✅ Технічний стек
- ✅ Контакти

**Структура нового chatbot-prompt.txt:**
```
Ти — AI-асистент Andrey Rogovsky. Говориш від першої особи як він.

## Про Andrey
[З about-me.txt: короткий summary]

## Проєкти (використовуй search_portfolio для деталей)
- PerfectSquad: [короткий опис]
- SmartCourses: [короткий опис]
- offzmi: [короткий опис]
- GALA: [короткий опис]
- PII Removal: [короткий опис]
- AI Tools: [короткий опис]
- Advogram: [короткий опис]
- E-lli.com: [короткий опис]

## Технічний стек
[З about-me.txt]

## Контакти
- Email: esupport@esupport.org.ua
- Telegram: https://t.me/andreyrogovsky

## Правила
[Адаптувати з існуючого chatbot-prompt.txt]
```

---

### ✅ **api/voice-token.js**
**Потрібно:** Voice mode system prompt  
**Є в наявності:**
- ✅ Короткий профіль для голосового режиму
- ✅ Список проєктів
- ✅ Контакти

**Структура нового voice prompt:**
```
Ти — AI-асистент Andrey Rogovsky. Голосовий режим.

## Про Andrey (короткий контекст)
Senior AI Engineer, 25 років досвіду, GenAI production systems.

## Проєкти (використовуй search_portfolio для деталей)
[Короткий список з 1-2 словами про кожен]

## Контакти
esupport@esupport.org.ua, https://t.me/andreyrogovsky
```

---

### ✅ **index.html JSON-LD**
**Потрібно:** Structured data про Andrey  
**Є в наявності:**
- ✅ Повна біографія
- ✅ Проєкти
- ✅ Освіта
- ✅ Досвід роботи
- ✅ Навички

**Що змінити:**
- Person name: Santiago → Andrey Rogovsky ✅ (вже є в AboutPage.tsx)
- jobTitle: AI Product Manager → Senior AI Engineer ✅ (вже є в AboutPage.tsx)
- knowsAbout: [оновити на основі about-me.txt]
- hasCredential: [оновити на основі about-me.txt]
- alumniOf: [оновити на основі about-me.txt] ✅ (вже є в AboutPage.tsx)
- sameAs: [тільки 2 URL: website + Telegram]
- FAQ: [замінити на FAQ про Andrey з about-i18n.ts] ✅ (вже є в AboutPage.tsx)

**Примітка:** AboutPage.tsx вже має правильний JSON-LD для /about сторінки. Потрібно тільки оновити index.html для головної сторінки.

---

## Що НЕ вистачає (але не критично)

### ⚠️ **Сертифікації**
**Є:** Загальні категорії (AWS, GCP, Azure, Kubernetes, PCI DSS, Brainbench Bash 4.8/5.0)  
**Немає:** Конкретних посилань на сертифікати (як у Santiago були Anthropic, Airtable)

**Рішення:** Використати те, що є. Якщо потрібні конкретні сертифікати — додати пізніше.

---

### ⚠️ **LinkedIn, GitHub, Social Media**
**Є:** Email, Telegram, Website  
**Немає:** LinkedIn, GitHub, Twitter, Facebook

**Рішення:** Використати тільки те, що є. У тебе тільки 2 контакти — це нормально.

---

### ⚠️ **Testimonials, Press, Community**
**Є:** Нічого  
**Немає:** Відгуки клієнтів, публікації в пресі, участь у спільнотах

**Рішення:** Пропустити ці секції. Вони не критичні для AI промптів.

---

## Висновок

### ✅ **ДОСТАТНЬО для повного переписування**

**Що є:**
1. ✅ Повний професійний профіль (about-me.txt)
2. ✅ 7 детальних кейсів з метриками (scripts/)
3. ✅ Структурований контент (about-i18n.ts)
4. ✅ UI компонент для /about сторінки (AboutPage.tsx) - **вже працює!**
5. ✅ JSON-LD structured data в AboutPage.tsx
6. ✅ Технічний стек
7. ✅ Досвід роботи (25 років, 8 компаній)
8. ✅ Освіта
9. ✅ Контакти (email, Telegram, website)
10. ✅ FAQ (3 питання про Andrey)

**Чого немає (але не критично):**
- ⚠️ Конкретні посилання на сертифікати
- ⚠️ LinkedIn, GitHub
- ⚠️ Testimonials, Press

**Рекомендація:** Починаємо переписування зараз. Контенту достатньо для створення повноцінних AI промптів про Andrey Rogovsky.

---

## План переписування

### Пріоритет 0 (КРИТИЧНО):
1. **public/llms.txt** - повністю переписати на Andrey
2. **chatbot-prompt.txt** - повністю переписати на Andrey
3. **api/voice-token.js** - повністю переписати на Andrey
4. **index.html JSON-LD** - оновити Person, FAQ, sameAs

### Пріоритет 1 (Cleanup):
5. **api/_shared/rag.js** - видалити ARTICLE_ROUTES для видалених кейсів
6. **scripts/** - видалити конфігураційні файли з посиланнями на Santiago

### Пріоритет 2 (Verification):
7. Запустити білд і перевірити, що все працює
8. Перевірити AI chatbot - чи відповідає про Andrey, а не Santiago

---

## Готовий до старту? 🚀

Маю весь необхідний контент. Можу почати переписування прямо зараз.


---

## 🎉 ДОДАТКОВА ЗНАХІДКА: /about сторінка вже працює!

### ✅ **src/AboutPage.tsx + src/about-i18n.ts**

**Що вже є:**
- ✅ Повна /about сторінка з правильним контентом про Andrey
- ✅ JSON-LD structured data для Person:
  ```json
  {
    "@type": "Person",
    "name": "Andrey Rogovsky",
    "alternateName": ["Андрій Роговський"],
    "email": "esupport@esupport.org.ua",
    "jobTitle": ["Senior AI Engineer", "Lead DevOps Engineer", "MLOps Engineer"],
    "knowsAbout": ["Artificial Intelligence", "Machine Learning", "RAG", "LangGraph", "Kubernetes", "Cloud Infrastructure"],
    "alumniOf": [{"@type": "EducationalOrganization", "name": "Odessa National Academy of Food Technologies"}]
  }
  ```
- ✅ JSON-LD structured data для FAQPage з 3 питаннями про Andrey
- ✅ Hreflang теги: UK (/about), EN (/about-en)
- ✅ Canonical URLs
- ✅ Соціальні посилання: Telegram (https://t.me/andreyrogovsky)

**Що це означає:**
1. Сторінка /about **вже показує правильну інформацію** про Andrey
2. JSON-LD на /about **вже правильний**
3. FAQ на /about **вже про Andrey**
4. Потрібно тільки оновити:
   - index.html (головна сторінка) - JSON-LD про Santiago
   - public/llms.txt - контекст для AI про Santiago
   - chatbot-prompt.txt - system prompt про Santiago
   - api/voice-token.js - voice prompt про Santiago

**Висновок:** Половина роботи вже зроблена! Сторінка /about працює правильно. Залишилось тільки оновити AI-контекст (llms.txt, chatbot, voice) та головну сторінку (index.html).
