export type AiToolsLang = 'uk' | 'en'

export const aiToolsContent = {
  uk: {
    slug: 'ai-tools-katalog-doslidzhennia',
    altSlug: 'ai-tools-catalog-research',
    readingTime: '8 хв читання',
    seo: {
      title: 'AI Tool Insights: Маркетингове дослідження попиту на AI-інструменти | Case Study',
      description: 'Каталог 16 000+ AI-інструментів з автоматичною генерацією. 2 340 кліків, CTR 9.59%, 111 реєстрацій, retention 100%. Повна розробка через AI.',
    },
    nav: {
      breadcrumbHome: 'Головна',
      breadcrumbCurrent: 'AI Tool Insights',
    },
    header: {
      kicker: 'GTM-експеримент: mystery-customer-insight.com',
      h1: 'AI Tool Insights — Маркетингове дослідження попиту на AI-інструменти',
      subtitle: 'Каталог 16 000+ AI-інструментів з автоматично згенерованими картками продуктів. Мета: виявити які AI-інструменти реально цікавлять користувачів через пошукову поведінку і реєстрації.',
      date: '30 бер 2026',
    },
    heroMetrics: [
      { value: '16 000+', label: 'AI-інструментів' },
      { value: '2 340', label: 'Кліки' },
      { value: '9.59%', label: 'CTR' },
      { value: '111', label: 'Реєстрації' },
      { value: '100%', label: 'Retention' },
    ],
    tldr: 'mystery-customer-insight.com — каталог AI-інструментів з автоматично згенерованими картками продуктів. База: 16 000+ AI-інструментів. Весь проєкт — фронтенд і бекенд — створений через AI. Датасет AI-моделей зібраний парсером, побудованим AI-агентом. Рекламний фід згенерований автоматично. Результат: 2 340 кліків, CTR 9.59%, 111 реєстрацій, retention 100% після 3 місяців.',
    sections: {
      what: {
        heading: 'Що Це',
        product: 'mystery-customer-insight.com — каталог AI-інструментів з автоматично згенерованими картками продуктів. База: 16 000+ AI-інструментів. Кожна картка містить опис, категорію, рейтинг — структуровані сторінки без ручного написання контенту.',
        tech: 'Весь проєкт — фронтенд і бекенд — створений через AI. Датасет AI-моделей зібраний парсером, побудованим AI-агентом. Рекламний фід згенерований автоматично.',
      },
      role: {
        heading: 'Моя Роль',
        description: 'Product Lead і GTM. Побудував продукт цілком через AI — від парсингу датасету до генерації карток продуктів і рекламного фіду. Запустив платний трафік для дослідження попиту. Розробив модель монетизації для наступного етапу.',
      },
      goal: {
        heading: 'Мета Експерименту',
        intro: 'Два завдання паралельно:',
        objectives: [
          {
            title: 'Market research',
            detail: 'Які AI-інструменти реально шукають користувачі? Пошукові запити, CTR по категоріях, поведінка на сайті — відповідь через реальний трафік, а не опитування.',
          },
          {
            title: 'Юніт-економіка лідів',
            detail: 'Скільки коштує залучити зареєстрованого користувача через Clerk в ніші AI-інструментів? Це база для монетизаційної моделі наступного етапу.',
          },
        ],
      },
      technical: {
        heading: 'Технічна Реалізація',
        items: [
          {
            title: 'AI-агент парсер',
            detail: 'Зібрав датасет AI-моделей і автоматично згенерував картки продуктів — структуровані сторінки з описом, категорією, рейтингом. Без ручного написання контенту.',
          },
          {
            title: 'Рекламний фід',
            detail: 'Згенерований автоматично з датасету — динамічні оголошення на базі карток продуктів через Performance Max і Search Leads кампанії.',
          },
          {
            title: 'Реєстрація через Clerk',
            detail: 'Трекінг реальних лідів, не просто кліків.',
          },
        ],
      },
      googleAds: {
        heading: 'Дані Google Ads (29 березня – 8 квітня 2026)',
        duration: '10 днів',
        overall: {
          heading: 'Загальні показники',
          metrics: [
            { label: 'Кліки', value: '2 340' },
            { label: 'Показів', value: '24 400' },
            { label: 'Avg CPC', value: '$0.97' },
            { label: 'Витрачено', value: '$2 270' },
            { label: 'Optimization score', value: '99.9%' },
          ],
        },
        campaigns: {
          heading: 'По кампаніях',
          items: [
            { name: 'Performance Max 1', spent: '$2 263', clicks: '2 339', ctr: '9.59%' },
            { name: 'Search Leads', spent: '$7.95', clicks: '5', ctr: '9.26%' },
          ],
        },
        leadFunnel: {
          heading: 'Lead funnel',
          items: [
            { label: 'Interactions', value: '2 344' },
            { label: 'Raw leads', value: '6' },
            { label: 'CPA по leads', value: '~$378' },
          ],
        },
        topKeywords: {
          heading: 'Топ ключових слів',
          items: [
            { keyword: 'ai tools', ctr: '6.25%' },
            { keyword: 'free ai tools', ctr: '9.09%' },
            { keyword: 'free ai app', ctr: '20.00%' },
          ],
        },
        searchQueries: {
          heading: 'Топ пошукових запитів аудиторії',
          description: 'gamma app, google ai studio translate, grok com ai, kling ai free, map ai, nova ai free, pingo ai apk, scribe ai, sherlock ai, warm gpt, which ai',
          insight: 'Конкретні інструменти, не загальні запити. Користувачі шукають альтернативи і порівняння.',
        },
        devices: {
          heading: 'Пристрої',
          description: 'Computers домінують — 93.1% витрат, 92.3% кліків. Desktop-first аудиторія.',
        },
        demographics: {
          heading: 'Демографія',
          description: 'Чоловіки 25–44, активність рівномірна протягом доби — глобальна аудиторія.',
        },
      },
      screener: {
        heading: 'Дані Screener (30 жовтня 2025 – 30 квітня 2026)',
        metrics: [
          { label: 'Total sign-ups', value: '111', desc: 'за весь час' },
          { label: '102 реєстрації', value: 'за квітень', desc: 'різкий стрибок після запуску реклами' },
          { label: '102 активних', value: 'у квітні', desc: 'всі нові' },
          { label: 'Monthly cohort retention', value: '100%', desc: 'після 3 місяців' },
        ],
        retentionInsight: 'Retention 100% — ключовий інсайт. Каталог AI-інструментів створює повторну потребу природно — люди повертаються шукати нові інструменти. Це підтверджує продуктову гіпотезу.',
      },
      economics: {
        heading: 'Юніт-економіка',
        cpa: {
          heading: 'CPA реєстрації через Clerk',
          calculation: '$2 270 / 111 sign-ups = ~$20 за реєстрацію',
          realistic: 'Реалістичний CPA при фокусі на конверсію: $15–25',
        },
        monetization: {
          heading: 'Монетизаційна математика наступного етапу',
          items: [
            'Власник AI-інструменту платить $99/міс за клеймінг сторінки',
            'При 100 проклеймлених сторінках → $9 900 MRR',
            'CPA залучення власника через існуючий органічний трафік каталогу значно нижчий за холодний outreach',
          ],
        },
      },
      proven: {
        heading: 'Що Доведено',
        items: [
          {
            title: 'Попит підтверджений',
            desc: 'CTR 9.59% на Performance Max і 20% на "free ai app" — аудиторія активно шукає і порівнює інструменти.',
          },
          {
            title: 'Користувачі шукають конкретні інструменти, не категорії',
            desc: 'Запити gamma app, grok com ai, kling ai free — людям потрібні порівняння і альтернативи. Продукт потрапляє точно в цю потребу.',
          },
          {
            title: 'Retention 100% — унікальний показник',
            desc: 'Каталог як продукт створює повторну потребу природно. Це база для побудови платної моделі.',
          },
          {
            title: 'CPA $20 — ефективна юніт-економіка',
            desc: 'Для B2B SaaS каталогу.',
          },
          {
            title: 'AI-driven розробка підтверджена на складному продукті',
            desc: 'Парсер, генерація карток, рекламний фід, фронтенд і бекенд — все через AI без традиційної команди розробників.',
          },
        ],
      },
      nextSteps: {
        heading: 'Наступний Етап — Монетизація',
        claiming: {
          title: 'Клеймінг сторінок',
          detail: 'Власники AI-інструментів отримують доступ до своєї сторінки, можуть оновлювати контент і брендинг — платна підписка.',
        },
        insights: {
          title: 'Анонімні інсайти',
          detail: 'Відгуки користувачів, які не публікуються публічно, доступні власнику інструменту як B2B-аналітика — voice of customer без публічного ризику.',
        },
        revenue: {
          title: 'Два потоки виручки',
          detail: 'Підписка власників інструментів + реклама всередині каталогу.',
        },
      },
      stack: {
        heading: 'Стек',
        items: [
          { name: 'AI (повна розробка)', role: 'Розробка через AI' },
          { name: 'Google Ads SDK', role: 'Платформа реклами' },
          { name: 'AI ads generator', role: 'Генерація оголошень' },
          { name: 'Clerk', role: 'Аутентифікація' },
          { name: 'Performance Max', role: 'Тип кампанії' },
          { name: 'mystery-customer-insight.com', role: 'Платформа' },
        ],
      },
    },
    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Як AI створив весь проєкт?',
          a: 'AI-агент побудував парсер для збору датасету 16 000+ AI-інструментів, згенерував картки продуктів, створив фронтенд і бекенд, і автоматично згенерував рекламний фід для Google Ads. Без традиційної команди розробників.',
        },
        {
          q: 'Чому retention 100%?',
          a: 'Каталог AI-інструментів створює повторну потребу природно — користувачі повертаються шукати нові інструменти. Це підтверджує продуктову гіпотезу і базу для монетизації.',
        },
        {
          q: 'Як працює монетизація?',
          a: 'Власники AI-інструментів платять $99/міс за клеймінг своєї сторінки — доступ до оновлення контенту, брендингу, і анонімних відгуків користувачів як B2B-аналітика.',
        },
        {
          q: 'Що шукають користувачі?',
          a: 'Конкретні інструменти (gamma app, grok com ai, kling ai free), не загальні категорії. Людям потрібні порівняння і альтернативи — каталог потрапляє точно в цю потребу.',
        },
        {
          q: 'Чому CPA $20 — це добре?',
          a: 'Для B2B SaaS каталогу CPA $20 за реєстрацію через Clerk — ефективна юніт-економіка. При монетизації $99/міс за клеймінг, окупність настає після 1 місяця.',
        },
      ],
    },
  },
  en: {
    slug: 'ai-tools-catalog-research',
    altSlug: 'ai-tools-katalog-doslidzhennia',
    readingTime: '8 min read',
    seo: {
      title: 'AI Tool Insights: Marketing Research of AI Tools Demand | Case Study',
      description: 'Catalog of 16,000+ AI tools with auto-generation. 2,340 clicks, 9.59% CTR, 111 sign-ups, 100% retention. Full development via AI.',
    },
    nav: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'AI Tool Insights',
    },
    header: {
      kicker: 'GTM Experiment: mystery-customer-insight.com',
      h1: 'AI Tool Insights — Marketing Research of AI Tools Demand',
      subtitle: 'Catalog of 16,000+ AI tools with auto-generated product cards. Goal: identify which AI tools users actually care about through search behavior and registrations.',
      date: 'Mar 30, 2026',
    },
    heroMetrics: [
      { value: '16,000+', label: 'AI Tools' },
      { value: '2,340', label: 'Clicks' },
      { value: '9.59%', label: 'CTR' },
      { value: '111', label: 'Sign-ups' },
      { value: '100%', label: 'Retention' },
    ],
    tldr: 'mystery-customer-insight.com — AI tools catalog with auto-generated product cards. Database: 16,000+ AI tools. Entire project — frontend and backend — built via AI. AI models dataset collected by parser built by AI agent. Ad feed auto-generated. Result: 2,340 clicks, 9.59% CTR, 111 sign-ups, 100% retention after 3 months.',
    sections: {
      what: {
        heading: 'What It Is',
        product: 'mystery-customer-insight.com — AI tools catalog with auto-generated product cards. Database: 16,000+ AI tools. Each card contains description, category, rating — structured pages without manual content writing.',
        tech: 'Entire project — frontend and backend — built via AI. AI models dataset collected by parser built by AI agent. Ad feed auto-generated.',
      },
      role: {
        heading: 'My Role',
        description: 'Product Lead and GTM. Built product entirely via AI — from dataset parsing to product card generation and ad feed. Launched paid traffic for demand research. Developed monetization model for next stage.',
      },
      goal: {
        heading: 'Experiment Goal',
        intro: 'Two parallel objectives:',
        objectives: [
          {
            title: 'Market research',
            detail: 'Which AI tools do users actually search for? Search queries, CTR by categories, on-site behavior — answers through real traffic, not surveys.',
          },
          {
            title: 'Lead unit economics',
            detail: 'How much does it cost to acquire a registered user via Clerk in the AI tools niche? This is the foundation for the next stage monetization model.',
          },
        ],
      },
      technical: {
        heading: 'Technical Implementation',
        items: [
          {
            title: 'AI agent parser',
            detail: 'Collected AI models dataset and auto-generated product cards — structured pages with description, category, rating. No manual content writing.',
          },
          {
            title: 'Ad feed',
            detail: 'Auto-generated from dataset — dynamic ads based on product cards via Performance Max and Search Leads campaigns.',
          },
          {
            title: 'Registration via Clerk',
            detail: 'Tracking real leads, not just clicks.',
          },
        ],
      },
      googleAds: {
        heading: 'Google Ads Data (March 29 – April 8, 2026)',
        duration: '10 days',
        overall: {
          heading: 'Overall Metrics',
          metrics: [
            { label: 'Clicks', value: '2,340' },
            { label: 'Impressions', value: '24,400' },
            { label: 'Avg CPC', value: '$0.97' },
            { label: 'Spent', value: '$2,270' },
            { label: 'Optimization score', value: '99.9%' },
          ],
        },
        campaigns: {
          heading: 'By Campaign',
          items: [
            { name: 'Performance Max 1', spent: '$2,263', clicks: '2,339', ctr: '9.59%' },
            { name: 'Search Leads', spent: '$7.95', clicks: '5', ctr: '9.26%' },
          ],
        },
        leadFunnel: {
          heading: 'Lead Funnel',
          items: [
            { label: 'Interactions', value: '2,344' },
            { label: 'Raw leads', value: '6' },
            { label: 'CPA for leads', value: '~$378' },
          ],
        },
        topKeywords: {
          heading: 'Top Keywords',
          items: [
            { keyword: 'ai tools', ctr: '6.25%' },
            { keyword: 'free ai tools', ctr: '9.09%' },
            { keyword: 'free ai app', ctr: '20.00%' },
          ],
        },
        searchQueries: {
          heading: 'Top Audience Search Queries',
          description: 'gamma app, google ai studio translate, grok com ai, kling ai free, map ai, nova ai free, pingo ai apk, scribe ai, sherlock ai, warm gpt, which ai',
          insight: 'Specific tools, not general queries. Users search for alternatives and comparisons.',
        },
        devices: {
          heading: 'Devices',
          description: 'Computers dominate — 93.1% spend, 92.3% clicks. Desktop-first audience.',
        },
        demographics: {
          heading: 'Demographics',
          description: 'Males 25–44, activity evenly distributed throughout the day — global audience.',
        },
      },
      screener: {
        heading: 'Screener Data (October 30, 2025 – April 30, 2026)',
        metrics: [
          { label: 'Total sign-ups', value: '111', desc: 'all time' },
          { label: '102 registrations', value: 'in April', desc: 'sharp jump after ad launch' },
          { label: '102 active', value: 'in April', desc: 'all new' },
          { label: 'Monthly cohort retention', value: '100%', desc: 'after 3 months' },
        ],
        retentionInsight: '100% retention — key insight. AI tools catalog creates repeat need naturally — people return to search for new tools. This confirms the product hypothesis.',
      },
      economics: {
        heading: 'Unit Economics',
        cpa: {
          heading: 'Registration CPA via Clerk',
          calculation: '$2,270 / 111 sign-ups = ~$20 per registration',
          realistic: 'Realistic CPA with conversion focus: $15–25',
        },
        monetization: {
          heading: 'Next Stage Monetization Math',
          items: [
            'AI tool owner pays $99/mo for page claiming',
            'At 100 claimed pages → $9,900 MRR',
            'Owner acquisition CPA via existing catalog organic traffic significantly lower than cold outreach',
          ],
        },
      },
      proven: {
        heading: 'What Was Proven',
        items: [
          {
            title: 'Demand confirmed',
            desc: '9.59% CTR on Performance Max and 20% on "free ai app" — audience actively searches and compares tools.',
          },
          {
            title: 'Users search for specific tools, not categories',
            desc: 'Queries gamma app, grok com ai, kling ai free — people need comparisons and alternatives. Product hits this need precisely.',
          },
          {
            title: '100% retention — unique metric',
            desc: 'Catalog as product creates repeat need naturally. This is the foundation for building a paid model.',
          },
          {
            title: '$20 CPA — effective unit economics',
            desc: 'For B2B SaaS catalog.',
          },
          {
            title: 'AI-driven development validated on complex product',
            desc: 'Parser, card generation, ad feed, frontend and backend — all via AI without traditional dev team.',
          },
        ],
      },
      nextSteps: {
        heading: 'Next Stage — Monetization',
        claiming: {
          title: 'Page Claiming',
          detail: 'AI tool owners get access to their page, can update content and branding — paid subscription.',
        },
        insights: {
          title: 'Anonymous Insights',
          detail: 'User reviews not published publicly, available to tool owner as B2B analytics — voice of customer without public risk.',
        },
        revenue: {
          title: 'Two Revenue Streams',
          detail: 'Tool owner subscriptions + in-catalog advertising.',
        },
      },
      stack: {
        heading: 'Stack',
        items: [
          { name: 'AI (full development)', role: 'AI-powered development' },
          { name: 'Google Ads SDK', role: 'Advertising platform' },
          { name: 'AI ads generator', role: 'Ad generation' },
          { name: 'Clerk', role: 'Authentication' },
          { name: 'Performance Max', role: 'Campaign type' },
          { name: 'mystery-customer-insight.com', role: 'Platform' },
        ],
      },
    },
    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'How did AI build the entire project?',
          a: 'AI agent built parser to collect 16,000+ AI tools dataset, generated product cards, created frontend and backend, and auto-generated ad feed for Google Ads. Without traditional dev team.',
        },
        {
          q: 'Why 100% retention?',
          a: 'AI tools catalog creates repeat need naturally — users return to search for new tools. This confirms product hypothesis and monetization foundation.',
        },
        {
          q: 'How does monetization work?',
          a: 'AI tool owners pay $99/mo for claiming their page — access to update content, branding, and anonymous user reviews as B2B analytics.',
        },
        {
          q: 'What do users search for?',
          a: 'Specific tools (gamma app, grok com ai, kling ai free), not general categories. People need comparisons and alternatives — catalog hits this need precisely.',
        },
        {
          q: 'Why is $20 CPA good?',
          a: 'For B2B SaaS catalog, $20 CPA per Clerk registration is effective unit economics. With $99/mo claiming monetization, payback happens after 1 month.',
        },
      ],
    },
  },
} as const
