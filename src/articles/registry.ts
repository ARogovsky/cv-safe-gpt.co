import type { ComponentType } from 'react'

export interface ArticleSeo {
  title: string
  description: string
}

export interface ArticleSeoMeta {
  datePublished: string
  dateModified: string
  keywords: string[]
  articleType: 'Article' | 'TechArticle'
  articleTags: string
  images: string[]
  about: Array<Record<string, string>>
  extra?: Record<string, string>
  citation?: Array<{ '@type': string; name: string; url: string }>
  isBasedOn?: Record<string, unknown>
  mentions?: Array<Record<string, string | string[] | Record<string, string>>>
  discussionUrl?: string
  relatedLink?: string
  communityUrl?: string
  video?: Record<string, unknown>
  subjectOf?: Record<string, unknown>
}

export interface ArticleConfig {
  id: string
  slugs: { es?: string; en: string; uk?: string }
  titles: { es?: string; en: string; uk?: string }
  seo: { es?: ArticleSeo; en: ArticleSeo; uk?: ArticleSeo }
  sectionLabels: { es?: Record<string, string>; en: Record<string, string>; uk?: Record<string, string> }
  type: 'collab' | 'case-study' | 'bridge'
  /** Absolute OG image URL for prerender (social cards: LinkedIn, Twitter) */
  ogImage?: string
  /** Hero image path for JSON-LD / GEO (what AI search engines see). Falls back to ogImage if not set. */
  heroImage?: string
  component: () => Promise<{ default: ComponentType<{ lang?: 'es' | 'en' | 'uk' }> }>
  /** x-default hreflang slug (defaults to ES slug) */
  xDefaultSlug?: string
  /** Whether this article is ready for RAG indexing (default: false) */
  ragReady?: boolean
  /** Path to i18n content file relative to project root (required when ragReady=true) */
  i18nFile?: string
  /** SEO metadata for prerender JSON-LD + article meta tags */
  seoMeta?: ArticleSeoMeta
}

export const articleRegistry: ArticleConfig[] = [
  {
    id: 'perfectsquad',
    slugs: { uk: 'perfectsquad-gaming-traffic', en: 'perfectsquad-gaming-traffic-en' },
    titles: { uk: 'PerfectSquad', en: 'PerfectSquad' },
    seo: {
      uk: {
        title: 'PerfectSquad: Геолокаційне дослідження вартості ігрового трафіку | Case Study',
        description: 'GTM-експеримент з AI-генератором оголошень. 14 200 кліків, CTR 7-10%, $16 400 бюджет. Карта геолокацій для дешевого ігрового трафіку.',
      },
      en: {
        title: 'PerfectSquad: Geo-location Research of Gaming Traffic Cost | Case Study',
        description: 'GTM experiment with AI ad generator. 14,200 clicks, 7-10% CTR, $16,400 budget. Geo map for cheap gaming traffic.',
      },
    },
    sectionLabels: {
      uk: {
        'what': 'Що Це',
        'goal': 'Мета',
        'technical': 'Технічна Реалізація',
        'google-ads': 'Дані Google Ads',
        'screener': 'Дані Screener',
        'geo-insights': 'Геолокаційні Інсайти',
        'geo-map': 'Карта Геолокацій',
        'economics': 'Юніт-економіка',
        'proven': 'Що Доведено',
        'stack': 'Стек',
        'faq': 'FAQ',
      },
      en: {
        'what': 'What It Is',
        'goal': 'Goal',
        'technical': 'Technical Implementation',
        'google-ads': 'Google Ads Data',
        'screener': 'Screener Data',
        'geo-insights': 'Geo Insights',
        'geo-map': 'Geo Map',
        'economics': 'Unit Economics',
        'proven': 'What Was Proven',
        'stack': 'Stack',
        'faq': 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/perfectsquad-i18n.ts',
    ogImage: 'https://esupport.org.ua/perfectsquad/og-perfectsquad.webp',
    heroImage: 'https://esupport.org.ua/perfectsquad/hero-perfectsquad.webp',
    component: () => import('../PerfectSquad.tsx'),
    xDefaultSlug: 'perfectsquad-gaming-traffic',
    seoMeta: {
      datePublished: '2026-01-23',
      dateModified: '2026-04-28',
      keywords: ['Gaming', 'Google Ads', 'AI', 'GTM', 'geo-targeting', 'CPA optimization', 'ad generator', 'gaming traffic', 'Turkey', 'Argentina', 'Latin America', 'AI ads', 'prompt engineering', 'Screener'],
      articleType: 'TechArticle',
      articleTags: 'Gaming,Google Ads,AI,GTM,geo-targeting,CPA optimization,ad generator',
      images: ['https://esupport.org.ua/perfectsquad/og-perfectsquad.webp'],
      about: [
        { '@type': 'SoftwareApplication', name: 'Google Ads', url: 'https://ads.google.com', applicationCategory: 'Advertising Platform' },
        { '@type': 'SoftwareApplication', name: 'Screener', url: 'https://screener.so', applicationCategory: 'Analytics' },
        { '@type': 'Thing', name: 'Gaming Traffic Research' },
        { '@type': 'Thing', name: 'Geo-targeting' },
      ],
      extra: { proficiencyLevel: 'Intermediate', dependencies: 'Google Ads SDK, AI ads generator, Screener, talentedchild.club' },
      citation: [
        { '@type': 'WebPage', name: 'Google Ads SDK Documentation', url: 'https://developers.google.com/google-ads/api/docs/start' },
        { '@type': 'WebPage', name: 'Screener Analytics', url: 'https://screener.so' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Google Ads', url: 'https://ads.google.com' },
        { '@type': 'SoftwareApplication', name: 'Screener', url: 'https://screener.so' },
      ],
    },
  },
  {
    id: 'smartcourses',
    slugs: { uk: 'smartcourses-edtech-platforma', en: 'smartcourses-edtech-platform' },
    titles: { uk: 'SmartCourses', en: 'SmartCourses' },
    seo: {
      uk: {
        title: 'SmartCourses: EdTech платформа для підвищення кваліфікації вчителів | Case Study',
        description: 'EdTech платформа з університетською акредитацією. 502 реєстрації, 500 бажаючих купити, CTR 13-17%. AI-driven GTM і автоматизований sales pipeline.',
      },
      en: {
        title: 'SmartCourses: EdTech Platform for Teacher Professional Development | Case Study',
        description: 'EdTech platform with university accreditation. 502 registrations, 500 willing to buy, 13-17% CTR. AI-driven GTM and automated sales pipeline.',
      },
    },
    sectionLabels: {
      uk: {
        'context': 'Контекст',
        'role': 'Моя Роль',
        'numbers': 'Що Показали Цифри',
        'why-stopped': 'Чому Зупинилось',
        'proven': 'Що Доведено',
        'potential': 'Потенціал',
        'stack': 'Стек',
        'faq': 'FAQ',
      },
      en: {
        'context': 'Context',
        'role': 'My Role',
        'numbers': 'What the Numbers Showed',
        'why-stopped': 'Why Stopped',
        'proven': 'What Was Proven',
        'potential': 'Potential',
        'stack': 'Stack',
        'faq': 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/smartcourses-i18n.ts',
    ogImage: 'https://esupport.org.ua/smartcourses/og-smartcourses.webp',
    heroImage: 'https://esupport.org.ua/smartcourses/hero-smartcourses.webp',
    component: () => import('../SmartCourses.tsx'),
    xDefaultSlug: 'smartcourses-edtech-platforma',
    seoMeta: {
      datePublished: '2026-04-25',
      dateModified: '2026-04-28',
      keywords: ['EdTech', 'Google Ads', 'AI', 'GTM', 'sales pipeline', 'university partnership', 'teacher training', 'professional development', 'Ukraine', 'online courses', 'accredited certificates', 'AI ads generator', 'prompt engineering', 'automated sales'],
      articleType: 'TechArticle',
      articleTags: 'EdTech,Google Ads,AI,GTM,sales pipeline,university partnership,teacher training',
      images: ['https://esupport.org.ua/smartcourses/og-smartcourses.webp'],
      about: [
        { '@type': 'SoftwareApplication', name: 'Google Ads', url: 'https://ads.google.com', applicationCategory: 'Advertising Platform' },
        { '@type': 'Organization', name: 'Ternopil National Pedagogical University', url: 'https://tnpu.edu.ua' },
        { '@type': 'Thing', name: 'EdTech Platform' },
        { '@type': 'Thing', name: 'Teacher Professional Development' },
      ],
      extra: { proficiencyLevel: 'Intermediate', dependencies: 'Google Ads SDK, AI (prompt engineering), Screener, University Partnership' },
      citation: [
        { '@type': 'WebPage', name: 'Google Ads SDK Documentation', url: 'https://developers.google.com/google-ads/api/docs/start' },
        { '@type': 'WebPage', name: 'Screener Analytics', url: 'https://screener.so' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Google Ads', url: 'https://ads.google.com' },
        { '@type': 'SoftwareApplication', name: 'Screener', url: 'https://screener.so' },
        { '@type': 'Organization', name: 'Ternopil National Pedagogical University', url: 'https://tnpu.edu.ua' },
      ],
    },
  },
  {
    id: 'advogram',
    slugs: { uk: 'advogram-gtm-case-study', en: 'advogram-gtm-case-study-en' },
    titles: { uk: 'Advogram GTM', en: 'Advogram GTM' },
    seo: {
      uk: {
        title: 'Як я валідував нішу ATS-інструментів і знайшов ринок з CPA $0.32 за 6 тижнів | Advogram',
        description: 'GTM кейс: як я валідував ринок HR-інструментів, визначив платоспроможні географії та побудував модель юніт-економіки для freemium SaaS — за 6 тижнів і $3,430.',
      },
      en: {
        title: 'How I Validated the ATS Tools Niche and Found a $0.32 CPA Market in 6 Weeks | Advogram',
        description: 'GTM case study: how I validated the HR tools market, identified paying geographies, and built the unit economics model for a freemium SaaS — in 6 weeks and $3,430.',
      },
    },
    sectionLabels: {
      uk: {
        'day-in-life': 'Питання експерименту',
        'why-custom': 'Чому експеримент?',
        'overview': 'Налаштування',
        'e2e-flows': 'Що показали дані',
        'cross-cutting': 'Юніт-економіка',
        'impact': 'Що купили за $3,430',
        'before-after': 'До і після',
        'decisions': 'Журнал рішень',
        'lessons': 'Висновки',
        'platform-evolution': 'Хронологія',
        'replicability': 'Методологія',
        'faq': 'FAQ',
        'resources': 'Ресурси',
      },
      en: {
        'day-in-life': 'Experiment Questions',
        'why-custom': 'Why Experiment?',
        'overview': 'Setup',
        'e2e-flows': 'Data Findings',
        'cross-cutting': 'Unit Economics',
        'impact': 'What $3,430 Bought',
        'before-after': 'Before/After',
        'decisions': 'Decision Log',
        'lessons': 'Takeaways',
        'platform-evolution': 'Timeline',
        'replicability': 'Methodology',
        'faq': 'FAQ',
        'resources': 'Resources',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/advogram-i18n.ts',
    ogImage: 'https://esupport.org.ua/advogram/og-advogram-gtm.webp',
    heroImage: 'https://esupport.org.ua/advogram/hero-advogram-experiment.webp',
    component: () => import('../Advogram.tsx'),
    xDefaultSlug: 'advogram-gtm-case-study',
    seoMeta: {
      datePublished: '2026-04-27',
      dateModified: '2026-04-27',
      keywords: ['GTM experiment', 'ATS tools', 'market validation', 'CPA optimization', 'geo targeting', 'unit economics', 'freemium SaaS', 'Google Ads', 'paid traffic research', 'product-market fit', 'customer acquisition', 'Western markets', 'emerging markets', 'retention strategy', 'job search tools'],
      articleType: 'TechArticle',
      articleTags: 'GTM,market validation,ATS,CPA,Google Ads,unit economics,freemium,SaaS',
      images: ['https://esupport.org.ua/advogram/og-advogram-gtm.webp'],
      about: [
        { '@type': 'SoftwareApplication', name: 'Advogram', url: 'https://advogram.com', applicationCategory: 'Job Search Tools' },
        { '@type': 'SoftwareApplication', name: 'Google Ads', url: 'https://ads.google.com', applicationCategory: 'Advertising Platform' },
        { '@type': 'Thing', name: 'Go-to-Market Strategy' },
        { '@type': 'Thing', name: 'Market Validation' },
      ],
      extra: { proficiencyLevel: 'Intermediate', dependencies: 'Google Ads, Screener Analytics, DataForSEO' },
      citation: [
        { '@type': 'WebPage', name: 'Google Ads Documentation', url: 'https://support.google.com/google-ads' },
        { '@type': 'WebPage', name: 'Screener Analytics', url: 'https://screener.so' },
        { '@type': 'WebPage', name: 'DataForSEO API', url: 'https://dataforseo.com' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Advogram', url: 'https://advogram.com' },
        { '@type': 'SoftwareApplication', name: 'Google Ads', url: 'https://ads.google.com' },
        { '@type': 'SoftwareApplication', name: 'Screener', url: 'https://screener.so' },
      ],
    },
  },
  {
    id: 'offzmi',
    slugs: { uk: 'offzmi-gtm-doslidzhennia', en: 'offzmi-gtm-case-study' },
    titles: { uk: 'offzmi GTM', en: 'offzmi GTM' },
    seo: {
      uk: {
        title: 'Як AI знайшов нішу презентацій для маркетологів: 222 статті, $452 і ринковий сигнал | offzmi.com',
        description: 'GTM-кейс: як за допомогою AI + MCP-browser було знайдено нішу, піднято мікросервіс для 222 статей і виявлено, що українські маркетологи масово шукають презентації.',
      },
      en: {
        title: 'How AI Found the Presentation Niche for Marketers: 222 Articles, $452 and a Market Signal | offzmi.com',
        description: 'GTM case study: how AI + MCP-browser niche surfing, a 222-article microservice pipeline, and paid traffic revealed that Ukrainian marketers are massively searching for presentation tools.',
      },
    },
    sectionLabels: {
      uk: {
        'genesis': 'Що було зроблено',
        'evolution': 'Хронологія експерименту',
        'architecture': 'Як це влаштовано',
        'how-it-was-built': 'Чому AI + MCP-browser',
        'findings': 'Що показали дані',
        'unit-economics': 'Модель юніт-економіки',
        'impact': 'Що купили за $452',
        'before-after-summary': 'До vs Після',
        'decisions': 'Лог рішень',
        'lessons': 'Висновки',
        'timeline': 'Хронологія',
        'replicability': 'Методологія',
        'faq': 'FAQ',
        'resources': 'Ресурси',
      },
      en: {
        'genesis': 'What Was Done',
        'evolution': 'Experiment Timeline',
        'architecture': 'How It Works',
        'how-it-was-built': 'Why AI + MCP-browser',
        'findings': 'What the Data Showed',
        'unit-economics': 'Unit Economics Model',
        'impact': 'What $452 Bought',
        'before-after-summary': 'Before vs After',
        'decisions': 'Decision Log',
        'lessons': 'Takeaways',
        'timeline': 'Timeline',
        'replicability': 'Transferable Methodology',
        'faq': 'FAQ',
        'resources': 'Resources',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/offzmi-i18n.ts',
    ogImage: 'https://esupport.org.ua/offzmi/og-offzmi-gtm.webp',
    heroImage: 'https://esupport.org.ua/offzmi/hero-offzmi-experiment.webp',
    component: () => import('../Offzmi.tsx'),
    xDefaultSlug: 'offzmi-gtm-doslidzhennia',
    seoMeta: {
      datePublished: '2026-04-27',
      dateModified: '2026-04-27',
      keywords: ['GTM experiment', 'AI niche discovery', 'MCP-browser', 'Google Ads', 'unit economics', 'offzmi', 'marketing tools', 'presentation tools', 'Ukrainian market', 'microservice', 'content automation'],
      articleType: 'TechArticle',
      articleTags: 'GTM,AI,MCP-browser,niche discovery,Google Ads,unit economics,offzmi',
      images: ['https://esupport.org.ua/offzmi/og-offzmi-gtm.webp'],
      about: [
        { '@type': 'SoftwareApplication', name: 'offzmi.com', url: 'https://offzmi.com', applicationCategory: 'Marketing Tools' },
        { '@type': 'SoftwareApplication', name: 'Google Ads', url: 'https://ads.google.com', applicationCategory: 'Advertising Platform' },
        { '@type': 'Thing', name: 'Go-to-Market Strategy' },
        { '@type': 'Thing', name: 'AI Niche Discovery' },
      ],
      extra: { proficiencyLevel: 'Intermediate', dependencies: 'AI, MCP-browser, Google Ads, DataForSEO' },
      citation: [
        { '@type': 'WebPage', name: 'Google Ads Documentation', url: 'https://support.google.com/google-ads' },
        { '@type': 'WebPage', name: 'DataForSEO API', url: 'https://dataforseo.com' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'offzmi.com', url: 'https://offzmi.com' },
        { '@type': 'SoftwareApplication', name: 'Google Ads', url: 'https://ads.google.com' },
      ],
    },
  },
  {
    id: 'ai-tools',
    slugs: { uk: 'ai-tools-katalog-doslidzhennia', en: 'ai-tools-catalog-research' },
    titles: { uk: 'AI Tool Insights', en: 'AI Tool Insights' },
    seo: {
      uk: {
        title: 'AI Tool Insights: Маркетингове дослідження попиту на AI-інструменти | Case Study',
        description: 'Каталог 16 000+ AI-інструментів з автоматичною генерацією. 2 340 кліків, CTR 9.59%, 111 реєстрацій, retention 100%. Повна розробка через AI.',
      },
      en: {
        title: 'AI Tool Insights: Marketing Research of AI Tools Demand | Case Study',
        description: 'Catalog of 16,000+ AI tools with auto-generation. 2,340 clicks, 9.59% CTR, 111 sign-ups, 100% retention. Full development via AI.',
      },
    },
    sectionLabels: {
      uk: {
        'what': 'Що Це',
        'role': 'Моя Роль',
        'goal': 'Мета Експерименту',
        'technical': 'Технічна Реалізація',
        'google-ads': 'Дані Google Ads',
        'screener': 'Дані Screener',
        'economics': 'Юніт-економіка',
        'proven': 'Що Доведено',
        'next': 'Наступний Етап',
        'stack': 'Стек',
        'faq': 'FAQ',
      },
      en: {
        'what': 'What It Is',
        'role': 'My Role',
        'goal': 'Experiment Goal',
        'technical': 'Technical Implementation',
        'google-ads': 'Google Ads Data',
        'screener': 'Screener Data',
        'economics': 'Unit Economics',
        'proven': 'What Was Proven',
        'next': 'Next Stage',
        'stack': 'Stack',
        'faq': 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/aitools-i18n.ts',
    ogImage: 'https://esupport.org.ua/aitools/og-aitools.webp',
    heroImage: 'https://esupport.org.ua/aitools/hero-aitools.webp',
    component: () => import('../AiTools.tsx'),
    xDefaultSlug: 'ai-tools-katalog-doslidzhennia',
    seoMeta: {
      datePublished: '2026-03-30',
      dateModified: '2026-04-28',
      keywords: ['AI tools', 'catalog', 'market research', 'Google Ads', 'Clerk', 'retention', 'AI development', 'GTM', 'Performance Max', 'mystery-customer-insight', 'AI agent', 'parser', 'auto-generation'],
      articleType: 'TechArticle',
      articleTags: 'AI tools,catalog,market research,Google Ads,Clerk,retention,AI development,GTM',
      images: ['https://esupport.org.ua/aitools/og-aitools.webp'],
      about: [
        { '@type': 'SoftwareApplication', name: 'Google Ads', url: 'https://ads.google.com', applicationCategory: 'Advertising Platform' },
        { '@type': 'SoftwareApplication', name: 'Clerk', url: 'https://clerk.com', applicationCategory: 'Authentication' },
        { '@type': 'Thing', name: 'AI Tools Catalog' },
        { '@type': 'Thing', name: 'Market Research' },
      ],
      extra: { proficiencyLevel: 'Intermediate', dependencies: 'AI (full development), Google Ads SDK, AI ads generator, Clerk, Performance Max' },
      citation: [
        { '@type': 'WebPage', name: 'Google Ads SDK Documentation', url: 'https://developers.google.com/google-ads/api/docs/start' },
        { '@type': 'WebPage', name: 'Clerk Documentation', url: 'https://clerk.com/docs' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Google Ads', url: 'https://ads.google.com' },
        { '@type': 'SoftwareApplication', name: 'Clerk', url: 'https://clerk.com' },
        { '@type': 'WebSite', name: 'mystery-customer-insight.com', url: 'https://mystery-customer-insight.com' },
      ],
    },
  },
  {
    id: 'self-healing-chatbot',
    slugs: { es: 'chatbot-que-se-cura-solo', en: 'self-healing-chatbot' },
    titles: { es: 'El Chatbot Que Se Cura Solo', en: 'The Self-Healing Chatbot' },
    seo: {
      es: {
        title: 'El Chatbot Que Se Cura Solo: De Widget a LLMOps en Producción',
        description: 'Case study: cómo evolucioné un chatbot de 50 líneas a un sistema LLMOps con RAG agéntico, defensa de jailbreak en 6 capas, 71 evals y closed-loop automático.',
      },
      en: {
        title: 'The Self-Healing Chatbot: From Widget to Production LLMOps',
        description: 'Case study: production LLMOps with agentic observability, 6-layer defense, 71 evals, voice mode, and a closed-loop that generates tests from real failures.',
      },
    },
    sectionLabels: {
      es: {
        'genesis': 'La Génesis',
        'evolution': 'La Evolución',
        'architecture': 'Arquitectura',
        'how-it-was-built': 'Cómo Se Construyó',
        'rag': 'RAG Agéntico',
        'defense': 'Defensa',
        'agentic-observability': 'Observabilidad Agéntica',
        'evals': 'Los 71 Tests',
        'closed-loop': 'El Loop Cerrado',
        'cost': 'Coste Real',
        'voice': 'Modo Voz',
        'lessons': 'Lecciones',
        'faq': 'FAQ',
      },
      en: {
        'genesis': 'The Genesis',
        'evolution': 'The Evolution',
        'architecture': 'Architecture',
        'how-it-was-built': 'How It Was Built',
        'rag': 'Agentic RAG',
        'defense': 'Defense',
        'agentic-observability': 'Agentic Observability',
        'evals': 'The 71 Tests',
        'closed-loop': 'The Closed Loop',
        'cost': 'Real Cost',
        'voice': 'Voice Mode',
        'lessons': 'Lessons',
        'faq': 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/chatbot-i18n.ts',
    ogImage: 'https://esupport.org.ua/chatbot/og-self-healing-chatbot.webp',
    heroImage: 'https://esupport.org.ua/chatbot/hero-self-healing-chatbot.webp',
    component: () => import('../SelfHealingChatbot.tsx'),
    seoMeta: {
      datePublished: '2026-03-11',
      dateModified: '2026-03-14',
      keywords: ['LLMOps', 'self-healing chatbot', 'agentic RAG', 'jailbreak defense', 'prompt injection', 'LLM evaluation', 'closed loop LLM', 'Langfuse', 'prompt versioning', 'adversarial testing', 'trace-to-eval', 'hybrid search pgvector', 'AI portfolio', 'chatbot evals', 'CI gate LLM', 'voice mode chatbot', 'OpenAI Realtime API', 'speech-to-speech AI', 'agentic observability', 'developer feedback loop', 'AI maintaining AI'],
      articleType: 'TechArticle',
      articleTags: 'LLMOps,self-healing chatbot,agentic RAG,jailbreak defense,Langfuse,evals,closed-loop,prompt injection',
      images: ['https://esupport.org.ua/chatbot/og-self-healing-chatbot.webp'],
      about: [
        { '@type': 'SoftwareApplication', name: 'Langfuse', url: 'https://langfuse.com', applicationCategory: 'LLM Observability' },
        { '@type': 'SoftwareApplication', name: 'Supabase', url: 'https://supabase.com', applicationCategory: 'Database' },
        { '@type': 'Thing', name: 'LLMOps' },
        { '@type': 'Thing', name: 'Retrieval-Augmented Generation' },
      ],
      extra: { proficiencyLevel: 'Expert', dependencies: 'Claude, Langfuse, Supabase, Vercel, OpenAI, Resend, GitHub Actions' },
      citation: [
        { '@type': 'SocialMediaPosting', name: 'Han hackeado a mi chatbot — LinkedIn post (300+ reactions)', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7421984735024816128/' },
        { '@type': 'WebPage', name: 'OWASP Top 10 for LLM Applications', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
        { '@type': 'TechArticle', name: 'Anthropic Tool Use Documentation', url: 'https://docs.anthropic.com/en/docs/build-with-claude/tool-use' },
        { '@type': 'TechArticle', name: 'Langfuse — Open Source LLM Engineering Platform', url: 'https://langfuse.com/docs' },
        { '@type': 'TechArticle', name: 'Supabase pgvector — Vector Embeddings Documentation', url: 'https://supabase.com/docs/guides/ai/vector-embeddings' },
        { '@type': 'TechArticle', name: 'Anthropic — Defending Against Prompt Injection', url: 'https://www.anthropic.com/news/prompt-injections' },
        { '@type': 'WebPage', name: 'Prompt Injection (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Prompt_injection' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Langfuse', url: 'https://langfuse.com' },
        { '@type': 'SoftwareApplication', name: 'Supabase', url: 'https://supabase.com' },
        { '@type': 'SoftwareApplication', name: 'OpenAI Realtime API', url: 'https://platform.openai.com' },
        { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://claude.ai' },
        { '@type': 'SoftwareApplication', name: 'Vercel', url: 'https://vercel.com' },
      ],
    },
  },
  {
    id: 'gala',
    slugs: { uk: 'gala-b2b-lidogeneratsiya', en: 'gala-b2b-lead-generation' },
    titles: { uk: 'GALA', en: 'GALA' },
    seo: {
      uk: {
        title: 'GALA: Автономний Агент B2B Лідогенерації — Case Study',
        description: 'Автономний агент B2B лідогенерації з RoBERTa-класифікатором. 85 дзвінків/день, 90 активних користувачів, 15-25% економії навантаження браузера.',
      },
      en: {
        title: 'GALA: Autonomous B2B Lead Generation Agent — Case Study',
        description: 'Autonomous B2B lead generation agent with RoBERTa classifier. 85 calls/day peak, 90 active users, 15-25% browser load savings.',
      },
    },
    sectionLabels: {
      uk: {
        'main-result': 'Головний Результат',
        'ga4-data': 'Дані GA4',
        'retention': 'Retention',
        'economics': 'Юніт-економіка',
        'technical': 'Технічна Перевага',
        'monetization': 'Монетизація',
        'next': 'Що Далі',
        'faq': 'FAQ',
      },
      en: {
        'main-result': 'Main Result',
        'ga4-data': 'GA4 Data',
        'retention': 'Retention',
        'economics': 'Unit Economics',
        'technical': 'Technical Advantage',
        'monetization': 'Monetization',
        'next': 'What\'s Next',
        'faq': 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/gala-i18n.ts',
    ogImage: 'https://esupport.org.ua/gala/og-gala.webp',
    heroImage: 'https://esupport.org.ua/gala/hero-gala.webp',
    component: () => import('../Gala.tsx'),
    seoMeta: {
      datePublished: '2026-04-16',
      dateModified: '2026-04-28',
      keywords: ['b2b lead generation', 'autonomous agent', 'roberta classifier', 'pytorch', 'form filling automation', 'playwright', 'zadarma', 'call tracking', 'лідогенерація', 'автономний агент', 'заповнення форм'],
      articleType: 'TechArticle',
      articleTags: 'B2B lead generation,RoBERTa,PyTorch,autonomous agent,form filling,Playwright',
      images: ['https://esupport.org.ua/gala/og-gala.webp'],
      about: [
        { '@type': 'SoftwareApplication', name: 'PyTorch', url: 'https://pytorch.org', applicationCategory: 'ML Framework' },
        { '@type': 'SoftwareApplication', name: 'Playwright', url: 'https://playwright.dev', applicationCategory: 'Browser Automation' },
        { '@type': 'Thing', name: 'RoBERTa Classifier' },
        { '@type': 'Thing', name: 'B2B Lead Generation' },
      ],
      extra: { proficiencyLevel: 'Expert', dependencies: 'Python, PyTorch, RoBERTa, Playwright, Zadarma, Astro, Google Ads' },
      citation: [
        { '@type': 'WebPage', name: 'PyTorch Documentation', url: 'https://pytorch.org/docs/stable/index.html' },
        { '@type': 'WebPage', name: 'Playwright Browser Automation Documentation', url: 'https://playwright.dev/docs/intro' },
        { '@type': 'WebPage', name: 'RoBERTa: A Robustly Optimized BERT Pretraining Approach', url: 'https://arxiv.org/abs/1907.11692' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'PyTorch', url: 'https://pytorch.org' },
        { '@type': 'SoftwareApplication', name: 'Playwright', url: 'https://playwright.dev' },
        { '@type': 'SoftwareApplication', name: 'Zadarma', url: 'https://zadarma.com' },
        { '@type': 'SoftwareApplication', name: 'Astro', url: 'https://astro.build' },
      ],
    },
  },
  {
    id: 'pii-removal',
    slugs: { uk: 'pii-removal-roberta-ukrainska', en: 'pii-removal-roberta-ukrainian' },
    titles: { uk: 'PII Removal', en: 'PII Removal' },
    seo: {
      uk: {
        title: 'PII Removal: Fine-tuned RoBERTa для українських персональних даних | Case Study',
        description: 'Fine-tuned RoBERTa модель для видалення персональних даних з українських текстів. 76-87% точність vs 14% AWS і 37% Azure. Knowledge distillation від OpenAI.',
      },
      en: {
        title: 'PII Removal: Fine-tuned RoBERTa for Ukrainian Personal Data | Case Study',
        description: 'Fine-tuned RoBERTa model for removing personal data from Ukrainian texts. 76-87% accuracy vs 14% AWS and 37% Azure. Knowledge distillation from OpenAI.',
      },
    },
    sectionLabels: {
      uk: {
        'context': 'Контекст',
        'role': 'Моя Роль',
        'technical': 'Технічне Рішення',
        'benchmark': 'Результати Бенчмарку',
        'gaps': 'Прогалини',
        'next': 'Що Далі',
        'stack': 'Стек',
        'faq': 'FAQ',
      },
      en: {
        'context': 'Context',
        'role': 'My Role',
        'technical': 'Technical Solution',
        'benchmark': 'Benchmark Results',
        'gaps': 'Known Gaps',
        'next': 'What\'s Next',
        'stack': 'Stack',
        'faq': 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/pii-removal-i18n.ts',
    ogImage: 'https://esupport.org.ua/pii-removal/og-pii-removal.webp',
    heroImage: 'https://esupport.org.ua/pii-removal/hero-pii-removal.webp',
    component: () => import('../PiiRemoval.tsx'),
    xDefaultSlug: 'pii-removal-roberta-ukrainska',
    seoMeta: {
      datePublished: '2026-04-20',
      dateModified: '2026-04-28',
      keywords: ['PII removal', 'RoBERTa', 'PyTorch', 'NER', 'Ukrainian NLP', 'knowledge distillation', 'MLOps', 'personal data', 'GDPR', 'data privacy', 'Cyrillic', 'transliteration', 'RNOKPP', 'EDRPOU', 'fine-tuning', 'transformer'],
      articleType: 'TechArticle',
      articleTags: 'PII removal,RoBERTa,PyTorch,NER,Ukrainian NLP,knowledge distillation,MLOps',
      images: ['https://esupport.org.ua/pii-removal/og-pii-removal.webp'],
      about: [
        { '@type': 'SoftwareApplication', name: 'PyTorch', url: 'https://pytorch.org', applicationCategory: 'ML Framework' },
        { '@type': 'SoftwareApplication', name: 'RoBERTa', url: 'https://huggingface.co/roberta-base', applicationCategory: 'NLP Model' },
        { '@type': 'Thing', name: 'PII Removal' },
        { '@type': 'Thing', name: 'Named Entity Recognition' },
      ],
      extra: { proficiencyLevel: 'Expert', dependencies: 'Python, PyTorch, RoBERTa, OpenAI API, FastAPI, Docker, MLOps' },
      citation: [
        { '@type': 'WebPage', name: 'PyTorch Documentation', url: 'https://pytorch.org/docs/stable/index.html' },
        { '@type': 'WebPage', name: 'RoBERTa: A Robustly Optimized BERT Pretraining Approach', url: 'https://arxiv.org/abs/1907.11692' },
        { '@type': 'WebPage', name: 'Knowledge Distillation', url: 'https://arxiv.org/abs/1503.02531' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'PyTorch', url: 'https://pytorch.org' },
        { '@type': 'SoftwareApplication', name: 'RoBERTa', url: 'https://huggingface.co/roberta-base' },
        { '@type': 'SoftwareApplication', name: 'OpenAI API', url: 'https://platform.openai.com' },
        { '@type': 'SoftwareApplication', name: 'FastAPI', url: 'https://fastapi.tiangolo.com' },
      ],
    },
  },
]

// Derived maps for GlobalNav and routing
export function getAltPaths(): Record<string, string> {
  const map: Record<string, string> = {
    '/': '/en',
    '/en': '/',
    '/sobre-mi': '/about',
    '/about': '/sobre-mi',
    '/privacidad': '/privacy',
    '/privacy': '/privacidad',
  }
  for (const article of articleRegistry) {
    // Handle ES ↔ EN
    if (article.slugs.es && article.slugs.en) {
      map[`/${article.slugs.es}`] = `/${article.slugs.en}`
      map[`/${article.slugs.en}`] = `/${article.slugs.es}`
    }
    // Handle UK ↔ EN
    if (article.slugs.uk && article.slugs.en) {
      map[`/${article.slugs.uk}`] = `/${article.slugs.en}`
      map[`/${article.slugs.en}`] = `/${article.slugs.uk}`
    }
  }
  return map
}

export function getPageTitles(): Record<string, string> {
  const map: Record<string, string> = {
    '/': 'Portfolio de Santiago',
    '/en': "Santiago's Portfolio",
    '/sobre-mi': 'Sobre Mí',
    '/about': 'About',
  }
  for (const article of articleRegistry) {
    if (article.slugs.es && article.titles.es) {
      map[`/${article.slugs.es}`] = article.titles.es
    }
    if (article.slugs.en && article.titles.en) {
      map[`/${article.slugs.en}`] = article.titles.en
    }
    if (article.slugs.uk && article.titles.uk) {
      map[`/${article.slugs.uk}`] = article.titles.uk
    }
  }
  return map
}

export function getSectionLabels(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {}
  for (const article of articleRegistry) {
    if (article.slugs.es && article.sectionLabels.es) {
      map[`/${article.slugs.es}`] = article.sectionLabels.es
    }
    if (article.slugs.en && article.sectionLabels.en) {
      map[`/${article.slugs.en}`] = article.sectionLabels.en
    }
    if (article.slugs.uk && article.sectionLabels.uk) {
      map[`/${article.slugs.uk}`] = article.sectionLabels.uk
    }
  }
  return map
}

/** All UK slugs (for lang detection: if pathname matches a UK slug → lang is 'uk') */
export function getUkSlugs(): Set<string> {
  const slugs = new Set<string>(['/', '/privacidad', '/sobre-mi'])
  for (const article of articleRegistry) {
    if (article.slugs.uk) {
      slugs.add(`/${article.slugs.uk}`)
    }
  }
  return slugs
}
