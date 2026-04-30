export type PerfectSquadLang = 'uk' | 'en'

export const perfectSquadContent = {
  uk: {
    slug: 'perfectsquad-gaming-traffic',
    altSlug: 'perfectsquad-gaming-traffic-en',
    readingTime: '7 хв читання',
    seo: {
      title: 'PerfectSquad: Геолокаційне дослідження вартості ігрового трафіку | Case Study',
      description: 'GTM-експеримент з AI-генератором оголошень. 14 200 кліків, CTR 7-10%, $16 400 бюджет. Карта геолокацій для дешевого ігрового трафіку.',
    },
    nav: {
      breadcrumbHome: 'Головна',
      breadcrumbCurrent: 'PerfectSquad',
    },
    header: {
      kicker: 'GTM-експеримент: talentedchild.club',
      h1: 'PerfectSquad — Геолокаційне дослідження вартості ігрового трафіку',
      subtitle: 'GTM-експеримент з AI-генератором оголошень через Google Ads SDK. Мета: знайти геолокації з низькою вартістю ігрового трафіку. Результат: карта ринків з CPA $35-50.',
      date: '23 січ 2026',
    },
    heroMetrics: [
      { value: '14 200', label: 'Кліки' },
      { value: '7-10%', label: 'CTR топ-ключів' },
      { value: '$16 400', label: 'Бюджет' },
      { value: '227', label: 'Реєстрації' },
      { value: '99.9%', label: 'Optimization Score' },
    ],
    tldr: 'PerfectSquad — продукт з AI-агентами, які симулюють реальних гравців. Мета експерименту: знайти геолокації з низькою вартістю ігрового трафіку. Рекламні кампанії згенеровані автоматично через AI-генератор на базі Google Ads SDK. Результат: 14 200 кліків, CTR 7-10%, карта ринків (Туреччина, Аргентина, LatAm) з цільовим CPA $35-50 замість поточних $72.',
    sections: {
      what: {
        heading: 'Що Це',
        product: 'PerfectSquad — продукт з AI-агентами, які симулюють реальних гравців з емпатичною комунікацією, заточеною під ігровий контекст. Prompt-tuned агенти відтворюють людську манеру спілкування всередині ігрових сесій.',
        platform: 'Сайт: talentedchild.club — платформа для гравців з базою 120k+ Steam-ігор.',
      },
      goal: {
        heading: 'Мета Експерименту',
        intro: 'Не утримання і не продажі. Одне питання:',
        question: 'В яких геолокаціях можна отримувати ігровий трафік за низькою вартістю конверсії?',
        explanation: 'Реєстрація = підтверджений інтерес. Retention 0% — це не проблема, це правильний результат для дослідницької фази. Ми вимірюємо CPA реєстрації і картографуємо гео, а не будуємо утримання.',
      },
      technical: {
        heading: 'Технічна Реалізація',
        desc: 'Рекламні кампанії згенеровані автоматично через AI-генератор оголошень на базі Google Ads SDK — без ручного написання жодного оголошення. Три кампанії запущені паралельно з різними стратегіями ставок: Clicks Dyn Ad, Leads Dyn Ad, Leads Performance Max.',
      },
      googleAds: {
        heading: 'Дані Google Ads (1 січня – 1 квітня 2026)',
        overall: {
          heading: 'Загальні показники',
          metrics: [
            { label: 'Кліки', value: '14 200' },
            { label: 'Показів', value: '203 000' },
            { label: 'Avg CPC', value: '$1.15' },
            { label: 'Витрачено', value: '$16 400' },
            { label: 'Optimization score', value: '99.9%' },
          ],
        },
        campaigns: {
          heading: 'По кампаніях',
          items: [
            { name: 'Clicks Dyn Ad', spent: '$10 981', clicks: '9 611', ctr: '7.74%' },
            { name: 'Leads Performance Max', spent: '$3 502', clicks: '2 971', ctr: '6.15%' },
            { name: 'Leads Dyn Ad', spent: '$1 900', clicks: '1 659', ctr: '5.50%' },
          ],
        },
        leadFunnel: {
          heading: 'Lead funnel',
          items: [
            { label: 'Interactions', value: '4 630' },
            { label: 'Raw leads', value: '137' },
            { label: 'CPA по raw leads', value: '~$120' },
          ],
        },
        topKeywords: {
          heading: 'Топ ключових слів',
          items: [
            { keyword: 'play games', spent: '$2 946', clicks: '2 109', ctr: '10.01%' },
            { keyword: 'game pc', spent: '$1 417', clicks: '1 165', ctr: '9.68%' },
            { keyword: 'online games online', spent: '$1 014', clicks: '1 366', ctr: '6.41%' },
            { keyword: 'computer games', spent: '$811', clicks: '731', ctr: '6.41%' },
            { keyword: 'free pc games', spent: '$543', clicks: '543', ctr: '7.34%' },
          ],
        },
        searchQueries: {
          heading: 'Пошукові запити аудиторії',
          desc: 'game, juegos, oyunlar, jogos, juegos gratis, game gratis, игры — мультимовна аудиторія підтверджує міжнародний охват органічно, без геотаргетингу.',
        },
      },
      screener: {
        heading: 'Дані Screener (31 березня – 30 квітня 2026)',
        metrics: [
          { label: 'Total sign-ups', value: '227', desc: 'за весь час' },
          { label: '36 реєстрацій', value: 'тиждень 27 квітня', desc: 'пік активності' },
          { label: '37 активних', value: 'тиждень 27 квітня', desc: '' },
          { label: '2 sign-ins', value: 'за тиждень', desc: 'очікувана поведінка для дослідницького етапу' },
          { label: 'Retention 0%', value: 'після 8 тижнів', desc: 'відповідає меті експерименту' },
        ],
      },
      geoInsights: {
        heading: 'Геолокаційні Інсайти',
        bidSignals: {
          heading: 'Top bid signals з Google Ads',
          items: [
            'США + запит "loop lead" — Пн–Пт до 8AM',
            'Туреччина + Desktop — активна ігрова аудиторія, нижчий CPC',
            'Аргентина — Mobile, ігровий трафік з низькою конкуренцією',
            'США — Tablet, Пн–Пт 6AM–6PM',
            'Запит "games download" — Вікенди до 2PM, глобальний сигнал',
          ],
        },
        networks: {
          heading: 'Мережі',
          desc: 'Google Search — 79.1% кліків і 78.9% витрат. Пошуковий ігровий трафік домінує над дисплейною мережею — аудиторія активно шукає, а не пасивно бачить рекламу.',
        },
        demographics: {
          heading: 'Демографія',
          desc: 'Чоловіки 18–34, переважно Desktop (82.3% витрат), мобільний — 12.2%.',
        },
      },
      geoMap: {
        heading: 'Карта Геолокацій: Де Брати Дешевий Ігровий Трафік',
        intro: 'Головний результат експерименту — не реєстрації, а карта ринків:',
        markets: [
          { geo: 'Туреччина', traffic: 'Desktop, ігровий', cpc: 'Нижче середнього', conclusion: '✅ Пріоритет' },
          { geo: 'Аргентина', traffic: 'Mobile, ігровий', cpc: 'Нижче середнього', conclusion: '✅ Пріоритет' },
          { geo: 'Латинська Америка (juegos/jogos)', traffic: 'Іспано/португаломовний', cpc: 'Низький', conclusion: '✅ Масштабувати' },
          { geo: 'США', traffic: 'Tablet + Desktop', cpc: 'Вище середнього', conclusion: 'Дорого, але якісний' },
          { geo: 'Глобальний EN', traffic: 'Всі пристрої', cpc: 'Середній', conclusion: 'Базовий ринок' },
        ],
        keyInsight: 'Ключовий інсайт: іспаномовний і турецький ігровий трафік дає порівнянний CTR 7–10% при значно нижчому CPC, ніж англомовні ринки. Це найдешевший шлях до масштабування реєстрацій у Gaming вертикалі.',
      },
      economics: {
        heading: 'Юніт-економіка',
        current: {
          heading: 'Поточний CPA реєстрації: ~$72',
          desc: '($16 400 / 227 sign-ups) — верхня межа. Частина бюджету йшла на картографування геолокацій і тестування трьох стратегій ставок, а не на чисту конверсію.',
        },
        expected: {
          heading: 'Очікуваний CPA при фокусі на пріоритетних гео',
          desc: '(Туреччина + Аргентина + LatAm):',
          items: [
            'CPC знижується на 30–50% відносно середнього',
            'При тому самому бюджеті: ~350–450 реєстрацій замість 227',
            'Цільовий CPA: $35–50',
          ],
        },
      },
      proven: {
        heading: 'Що Доведено',
        items: [
          {
            title: 'Ігровий трафік масштабується через автогенерацію',
            desc: 'CTR 7–10% на топ-ключах при повністю автоматично згенерованих оголошеннях через Google Ads SDK. Жодного ручного написання — кампанії створені AI-генератором.',
          },
          {
            title: 'Три гео підтверджені для масштабування',
            desc: 'Туреччина, Аргентина, іспаномовна LatAm — низький CPC при прийнятному CTR. Це операційна карта для наступної фази.',
          },
          {
            title: 'AI-генератор оголошень ефективний у Gaming вертикалі',
            desc: 'Автоматично згенеровані кампанії показали CTR 7–10% на реальному бюджеті $16 400 і 14 200 кліках. Підхід валідований без ручного налаштування.',
          },
        ],
      },
      stack: {
        heading: 'Стек',
        items: ['Google Ads SDK', 'AI ads generator', 'Prompt engineering', 'Screener', 'talentedchild.club'],
      },
    },
    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Чому Retention 0% — це нормально?',
          a: 'Мета експерименту — не утримання, а картографування геолокацій з низькою вартістю трафіку. Реєстрація = підтверджений інтерес. Retention будується на наступній фазі після вибору пріоритетних ринків.',
        },
        {
          q: 'Як працював AI-генератор оголошень?',
          a: 'Google Ads SDK + AI для автоматичної генерації оголошень без ручного написання. Три кампанії (Clicks Dyn Ad, Leads Dyn Ad, Leads Performance Max) запущені паралельно. Результат: CTR 7-10% на топ-ключах.',
        },
        {
          q: 'Чому CPA $72 — це верхня межа?',
          a: 'Частина бюджету йшла на картографування геолокацій і тестування трьох стратегій ставок. При фокусі на пріоритетних гео (Туреччина, Аргентина, LatAm) цільовий CPA: $35-50.',
        },
        {
          q: 'Які геолокації найдешевші для ігрового трафіку?',
          a: 'Туреччина (Desktop), Аргентина (Mobile), іспаномовна LatAm. CPC на 30-50% нижче середнього при CTR 7-10%. Це операційна карта для масштабування.',
        },
        {
          q: 'Що таке PerfectSquad?',
          a: 'Продукт з AI-агентами, які симулюють реальних гравців з емпатичною комунікацією. Prompt-tuned агенти відтворюють людську манеру спілкування всередині ігрових сесій. Платформа: talentedchild.club з базою 120k+ Steam-ігор.',
        },
      ],
    },
  },
  en: {
    slug: 'perfectsquad-gaming-traffic-en',
    altSlug: 'perfectsquad-gaming-traffic',
    readingTime: '7 min read',
    seo: {
      title: 'PerfectSquad: Geo-location Research of Gaming Traffic Cost | Case Study',
      description: 'GTM experiment with AI ad generator. 14,200 clicks, 7-10% CTR, $16,400 budget. Geo map for cheap gaming traffic.',
    },
    nav: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'PerfectSquad',
    },
    header: {
      kicker: 'GTM Experiment: talentedchild.club',
      h1: 'PerfectSquad — Geo-location Research of Gaming Traffic Cost',
      subtitle: 'GTM experiment with AI ad generator via Google Ads SDK. Goal: find geos with low gaming traffic cost. Result: market map with $35-50 CPA.',
      date: 'Jan 23, 2026',
    },
    heroMetrics: [
      { value: '14,200', label: 'Clicks' },
      { value: '7-10%', label: 'CTR Top Keywords' },
      { value: '$16,400', label: 'Budget' },
      { value: '227', label: 'Sign-ups' },
      { value: '99.9%', label: 'Optimization Score' },
    ],
    tldr: 'PerfectSquad — product with AI agents simulating real players. Experiment goal: find geos with low gaming traffic cost. Ad campaigns auto-generated via AI generator based on Google Ads SDK. Result: 14,200 clicks, 7-10% CTR, market map (Turkey, Argentina, LatAm) with target CPA $35-50 instead of current $72.',
    sections: {
      what: {
        heading: 'What It Is',
        product: 'PerfectSquad — product with AI agents simulating real players with empathetic communication tuned for gaming context. Prompt-tuned agents reproduce human communication style inside gaming sessions.',
        platform: 'Website: talentedchild.club — platform for gamers with 120k+ Steam games database.',
      },
      goal: {
        heading: 'Experiment Goal',
        intro: 'Not retention and not sales. One question:',
        question: 'In which geos can we get gaming traffic at low conversion cost?',
        explanation: 'Registration = confirmed interest. 0% retention is not a problem, it\'s the right result for research phase. We measure registration CPA and map geos, not build retention.',
      },
      technical: {
        heading: 'Technical Implementation',
        desc: 'Ad campaigns auto-generated via AI ad generator based on Google Ads SDK — without manual writing of any ad. Three campaigns launched in parallel with different bidding strategies: Clicks Dyn Ad, Leads Dyn Ad, Leads Performance Max.',
      },
      googleAds: {
        heading: 'Google Ads Data (January 1 – April 1, 2026)',
        overall: {
          heading: 'Overall Metrics',
          metrics: [
            { label: 'Clicks', value: '14,200' },
            { label: 'Impressions', value: '203,000' },
            { label: 'Avg CPC', value: '$1.15' },
            { label: 'Spent', value: '$16,400' },
            { label: 'Optimization score', value: '99.9%' },
          ],
        },
        campaigns: {
          heading: 'By Campaign',
          items: [
            { name: 'Clicks Dyn Ad', spent: '$10,981', clicks: '9,611', ctr: '7.74%' },
            { name: 'Leads Performance Max', spent: '$3,502', clicks: '2,971', ctr: '6.15%' },
            { name: 'Leads Dyn Ad', spent: '$1,900', clicks: '1,659', ctr: '5.50%' },
          ],
        },
        leadFunnel: {
          heading: 'Lead Funnel',
          items: [
            { label: 'Interactions', value: '4,630' },
            { label: 'Raw leads', value: '137' },
            { label: 'CPA for raw leads', value: '~$120' },
          ],
        },
        topKeywords: {
          heading: 'Top Keywords',
          items: [
            { keyword: 'play games', spent: '$2,946', clicks: '2,109', ctr: '10.01%' },
            { keyword: 'game pc', spent: '$1,417', clicks: '1,165', ctr: '9.68%' },
            { keyword: 'online games online', spent: '$1,014', clicks: '1,366', ctr: '6.41%' },
            { keyword: 'computer games', spent: '$811', clicks: '731', ctr: '6.41%' },
            { keyword: 'free pc games', spent: '$543', clicks: '543', ctr: '7.34%' },
          ],
        },
        searchQueries: {
          heading: 'Audience Search Queries',
          desc: 'game, juegos, oyunlar, jogos, juegos gratis, game gratis, игры — multilingual audience confirms international reach organically, without geo-targeting.',
        },
      },
      screener: {
        heading: 'Screener Data (March 31 – April 30, 2026)',
        metrics: [
          { label: 'Total sign-ups', value: '227', desc: 'all time' },
          { label: '36 registrations', value: 'week of April 27', desc: 'peak activity' },
          { label: '37 active', value: 'week of April 27', desc: '' },
          { label: '2 sign-ins', value: 'per week', desc: 'expected behavior for research stage' },
          { label: 'Retention 0%', value: 'after 8 weeks', desc: 'matches experiment goal' },
        ],
      },
      geoInsights: {
        heading: 'Geo-location Insights',
        bidSignals: {
          heading: 'Top Bid Signals from Google Ads',
          items: [
            'USA + query "loop lead" — Mon–Fri before 8AM',
            'Turkey + Desktop — active gaming audience, lower CPC',
            'Argentina — Mobile, gaming traffic with low competition',
            'USA — Tablet, Mon–Fri 6AM–6PM',
            'Query "games download" — Weekends before 2PM, global signal',
          ],
        },
        networks: {
          heading: 'Networks',
          desc: 'Google Search — 79.1% clicks and 78.9% spend. Search gaming traffic dominates over display network — audience actively searches, not passively sees ads.',
        },
        demographics: {
          heading: 'Demographics',
          desc: 'Males 18–34, mostly Desktop (82.3% spend), mobile — 12.2%.',
        },
      },
      geoMap: {
        heading: 'Geo Map: Where to Get Cheap Gaming Traffic',
        intro: 'Main experiment result — not registrations, but market map:',
        markets: [
          { geo: 'Turkey', traffic: 'Desktop, gaming', cpc: 'Below average', conclusion: '✅ Priority' },
          { geo: 'Argentina', traffic: 'Mobile, gaming', cpc: 'Below average', conclusion: '✅ Priority' },
          { geo: 'Latin America (juegos/jogos)', traffic: 'Spanish/Portuguese', cpc: 'Low', conclusion: '✅ Scale' },
          { geo: 'USA', traffic: 'Tablet + Desktop', cpc: 'Above average', conclusion: 'Expensive but quality' },
          { geo: 'Global EN', traffic: 'All devices', cpc: 'Average', conclusion: 'Base market' },
        ],
        keyInsight: 'Key insight: Spanish-speaking and Turkish gaming traffic gives comparable 7–10% CTR at significantly lower CPC than English-speaking markets. This is the cheapest path to scaling registrations in Gaming vertical.',
      },
      economics: {
        heading: 'Unit Economics',
        current: {
          heading: 'Current registration CPA: ~$72',
          desc: '($16,400 / 227 sign-ups) — upper bound. Part of budget went to geo mapping and testing three bidding strategies, not pure conversion.',
        },
        expected: {
          heading: 'Expected CPA with focus on priority geos',
          desc: '(Turkey + Argentina + LatAm):',
          items: [
            'CPC decreases by 30–50% relative to average',
            'With same budget: ~350–450 registrations instead of 227',
            'Target CPA: $35–50',
          ],
        },
      },
      proven: {
        heading: 'What Was Proven',
        items: [
          {
            title: 'Gaming traffic scales via auto-generation',
            desc: 'CTR 7–10% on top keywords with fully auto-generated ads via Google Ads SDK. No manual writing — campaigns created by AI generator.',
          },
          {
            title: 'Three geos confirmed for scaling',
            desc: 'Turkey, Argentina, Spanish-speaking LatAm — low CPC with acceptable CTR. This is operational map for next phase.',
          },
          {
            title: 'AI ad generator effective in Gaming vertical',
            desc: 'Auto-generated campaigns showed 7–10% CTR on real budget $16,400 and 14,200 clicks. Approach validated without manual tuning.',
          },
        ],
      },
      stack: {
        heading: 'Stack',
        items: ['Google Ads SDK', 'AI ads generator', 'Prompt engineering', 'Screener', 'talentedchild.club'],
      },
    },
    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Why is 0% retention normal?',
          a: 'Experiment goal is not retention, but geo mapping with low traffic cost. Registration = confirmed interest. Retention is built in next phase after choosing priority markets.',
        },
        {
          q: 'How did AI ad generator work?',
          a: 'Google Ads SDK + AI for automatic ad generation without manual writing. Three campaigns (Clicks Dyn Ad, Leads Dyn Ad, Leads Performance Max) launched in parallel. Result: 7-10% CTR on top keywords.',
        },
        {
          q: 'Why is $72 CPA the upper bound?',
          a: 'Part of budget went to geo mapping and testing three bidding strategies. With focus on priority geos (Turkey, Argentina, LatAm) target CPA: $35-50.',
        },
        {
          q: 'Which geos are cheapest for gaming traffic?',
          a: 'Turkey (Desktop), Argentina (Mobile), Spanish-speaking LatAm. CPC 30-50% below average with 7-10% CTR. This is operational map for scaling.',
        },
        {
          q: 'What is PerfectSquad?',
          a: 'Product with AI agents simulating real players with empathetic communication. Prompt-tuned agents reproduce human communication style inside gaming sessions. Platform: talentedchild.club with 120k+ Steam games database.',
        },
      ],
    },
  },
} as const
