export type SmartCoursesLang = 'uk' | 'en'

export const smartCoursesContent = {
  uk: {
    slug: 'smartcourses-edtech-platforma',
    altSlug: 'smartcourses-edtech-platform',
    readingTime: '8 хв читання',
    seo: {
      title: 'SmartCourses: EdTech платформа для підвищення кваліфікації вчителів | Case Study',
      description: 'EdTech платформа з університетською акредитацією. 502 реєстрації, 500 бажаючих купити, CTR 13-17%. AI-driven GTM і автоматизований sales pipeline.',
    },
    nav: {
      breadcrumbHome: 'Головна',
      breadcrumbCurrent: 'SmartCourses',
    },
    header: {
      kicker: 'Case Study: eij.com.ua',
      h1: 'SmartCourses — EdTech платформа для підвищення кваліфікації вчителів',
      subtitle: 'EdTech платформа з акредитованими сертифікатами від університету, AI-driven outreach і повністю автоматизованим sales pipeline. 502 реєстрації, 500 бажаючих купити, CTR 13-17%.',
      date: 'eij.com.ua',
    },
    heroMetrics: [
      { value: '502', label: 'Реєстрації' },
      { value: '500', label: 'Бажаючих купити' },
      { value: '13-17%', label: 'CTR Google Ads' },
      { value: '22', label: 'Пілотні продажі' },
      { value: '13 100₴', label: 'Авансові надходження' },
    ],
    tldr: 'Українські вчителі зобов\'язані регулярно проходити курси підвищення кваліфікації. Після 2022 року офлайн-формат став проблематичним. SmartCourses — EdTech платформа з акредитованими сертифікатами від Тернопільського національного педагогічного університету, AI-driven outreach і повністю автоматизованим sales pipeline. Результат: 502 реєстрації, 500 бажаючих купити, CTR 13-17%, 22 пілотні продажі. Масштабування зупинилось через масові відключення електроенергії в Україні.',
    sections: {
      context: {
        heading: 'Контекст',
        problem: 'Українські вчителі зобов\'язані регулярно проходити курси підвищення кваліфікації. Після 2022 року офлайн-формат став проблематичним — переміщення, безпека, логістика. Онлайн-альтернативи або дорогі, або не мають університетської акредитації.',
        idea: 'Ідея: побудувати EdTech платформу з акредитованими сертифікатами від університету, AI-driven outreach і повністю автоматизованим sales pipeline.',
      },
      role: {
        heading: 'Моя Роль',
        intro: 'Я виступав як Product Lead, GTM-інженер і BizDev.',
        responsibilities: [
          {
            title: 'Стратегія і BizDev',
            desc: 'Знайшов і закрив партнерство з Тернопільським національним педагогічним університетом. Університетська акредитація означає, що сертифікати SmartCourses юридично зараховуються вчителям як офіційне підвищення кваліфікації — це конкурентна перевага, яку потрібно домовитись, а не купити.',
          },
          {
            title: 'GTM і технічна реалізація',
            desc: 'Написав генератор рекламних кампаній через Google Ads SDK з використанням AI для підбору ключових слів і генерації оголошень. Система автоматично формувала рекламні матеріали під конкретні сегменти аудиторії без ручного написання кожного оголошення. Паралельно побудував AI-driven outreach і sales pipeline повністю на prompt engineering. Менеджер з продажів працював у рамках процесів, які я побудував.',
          },
          {
            title: 'Продукт',
            desc: 'Сайт eij.com.ua створений через AI. Уся операційна модель — від залучення до закриття продажу — автоматизована.',
          },
        ],
      },
      numbers: {
        heading: 'Що Показали Цифри',
        googleAds: {
          heading: 'Google Ads (серпень–листопад 2025)',
          metrics: [
            { label: 'Кліки', value: '220' },
            { label: 'Покази', value: '1 590' },
            { label: 'CTR', value: '13.83%' },
            { label: 'Avg CPC', value: '$5.34' },
            { label: 'Витрачено', value: '$1 180' },
            { label: 'CPA', value: '~$12' },
            { label: 'Конверсії', value: '98' },
          ],
          topSegments: [
            { segment: 'курси для вчителів', ctr: '14.30%', clicks: '193' },
            { segment: 'підвищення кваліфікації', ctr: '17.39%', clicks: '-' },
          ],
        },
        audience: {
          heading: 'Аудиторія',
          items: [
            'Вчителі 35–54 роки',
            'Mobile-first (97% витрат — мобільні)',
            'Активність: Пн–Пт, 12:00–18:00',
            'Гео: вся Україна',
          ],
        },
        registrations: {
          heading: 'Реєстрації та попит',
          items: [
            { label: '502 реєстрації', desc: 'на платформі' },
            { label: '500 бажаючих купити', desc: 'підтверджений намір, люди були готові платити' },
          ],
        },
        sales: {
          heading: 'Пілотні продажі',
          items: [
            { label: '22 транзакції', desc: 'успішно завершені — перші авансові платежі пілоту підтверджені' },
            { label: '500 не завершили', desc: 'через відключення світла — форс-мажор, не відмова від продукту' },
            { label: '13 100 грн', desc: 'авансові надходження пілоту — реальні гроші, не тестові транзакції' },
          ],
        },
      },
      whyStopped: {
        heading: 'Чому Масштабування Зупинилось',
        intro: 'Не провал продукту і не провал GTM. Масові відключення електроенергії в Україні зробили неможливим три речі одночасно:',
        reasons: [
          {
            title: 'Стабільне проведення онлайн-уроків',
            desc: 'Вчителі і учні без світла не можуть підключитись',
          },
          {
            title: 'Завершення оплати',
            desc: '500 бажаючих не могли пройти платіжну форму під час відключень',
          },
          {
            title: 'Операційна робота',
            desc: 'Sales pipeline потребує стабільного з\'єднання',
          },
        ],
        conclusion: 'Продукт, партнерство і попит були доведені. Зовнішні обставини зупинили масштабування.',
      },
      proven: {
        heading: 'Що Доведено',
        items: [
          {
            title: 'Ніша підтверджена',
            desc: 'CTR 13–17% — виняткові показники для EdTech. Вчителі активно шукають онлайн-курси.',
          },
          {
            title: 'Попит підтверджений',
            desc: '500 людей, готових платити — це не ліди, це покупці, яким завадили інфраструктурні проблеми, а не якість продукту.',
          },
          {
            title: 'Партнерська модель працює',
            desc: 'Університет закриває головне заперечення — легітимність сертифікату. Це те, що неможливо відтворити без інституційного партнерства.',
          },
          {
            title: 'AI ads generator — ефективний',
            desc: 'Google Ads SDK + AI для підбору ключів і генерації оголошень дав CTR 13–17% без ручного написання кампаній. Це відтворюваний підхід для будь-якого EdTech продукту.',
          },
          {
            title: 'AI sales pipeline — масштабований',
            desc: 'Побудований на prompt engineering, без дорогих CRM-систем. Від outreach до закриття угоди — автоматизовано.',
          },
        ],
      },
      potential: {
        heading: 'Потенціал При Стабільній Інфраструктурі',
        intro: 'При стабільному електропостачанні і бюджеті $329/день:',
        items: [
          '500 бажаючих → ~400–450 завершених продажів за той самий період',
          'CPA $12 при LTV курсу — окупність з першої транзакції',
          'Партнерська модель з університетами — відтворювана в інших регіонах і країнах',
        ],
      },
      stack: {
        heading: 'Стек',
        items: [
          { name: 'Google Ads SDK', role: 'Платформа реклами' },
          { name: 'AI (prompt engineering)', role: 'Генерація контенту' },
          { name: 'Screener', role: 'Аналіз даних' },
          { name: 'Партнерство з університетом', role: 'Акредитація' },
          { name: 'eij.com.ua', role: 'Платформа' },
        ],
      },
    },
    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Чому вчителі не могли завершити оплату?',
          a: 'Масові відключення електроенергії в Україні. 500 бажаючих купити не могли пройти платіжну форму під час відключень. Це не відмова від продукту, а інфраструктурна проблема.',
        },
        {
          q: 'Чому університетська акредитація важлива?',
          a: 'Сертифікати SmartCourses юридично зараховуються вчителям як офіційне підвищення кваліфікації. Це конкурентна перевага, яку неможливо відтворити без інституційного партнерства з університетом.',
        },
        {
          q: 'Як працював AI ads generator?',
          a: 'Google Ads SDK + AI для підбору ключових слів і генерації оголошень. Система автоматично формувала рекламні матеріали під конкретні сегменти аудиторії без ручного написання кожного оголошення. Результат: CTR 13-17%.',
        },
        {
          q: 'Що таке AI sales pipeline?',
          a: 'Повністю автоматизований процес від outreach до закриття угоди, побудований на prompt engineering без дорогих CRM-систем. Менеджер з продажів працював у рамках процесів, які я побудував.',
        },
        {
          q: 'Чому CTR 13-17% — це виняткові показники?',
          a: 'Середній CTR для EdTech кампаній — 2-5%. CTR 13-17% означає, що оголошення резонують з аудиторією і вчителі активно шукають онлайн-курси підвищення кваліфікації.',
        },
      ],
    },
  },
  en: {
    slug: 'smartcourses-edtech-platform',
    altSlug: 'smartcourses-edtech-platforma',
    readingTime: '8 min read',
    seo: {
      title: 'SmartCourses: EdTech Platform for Teacher Professional Development | Case Study',
      description: 'EdTech platform with university accreditation. 502 registrations, 500 willing to buy, 13-17% CTR. AI-driven GTM and automated sales pipeline.',
    },
    nav: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'SmartCourses',
    },
    header: {
      kicker: 'Case Study: eij.com.ua',
      h1: 'SmartCourses — EdTech Platform for Teacher Professional Development',
      subtitle: 'EdTech platform with accredited certificates from university, AI-driven outreach and fully automated sales pipeline. 502 registrations, 500 willing to buy, 13-17% CTR.',
      date: 'eij.com.ua',
    },
    heroMetrics: [
      { value: '502', label: 'Registrations' },
      { value: '500', label: 'Willing to Buy' },
      { value: '13-17%', label: 'CTR Google Ads' },
      { value: '22', label: 'Pilot Sales' },
      { value: '₴13,100', label: 'Advance Payments' },
    ],
    tldr: 'Ukrainian teachers are required to regularly complete professional development courses. After 2022, offline format became problematic. SmartCourses — EdTech platform with accredited certificates from Ternopil National Pedagogical University, AI-driven outreach and fully automated sales pipeline. Result: 502 registrations, 500 willing to buy, 13-17% CTR, 22 pilot sales. Scaling stopped due to massive power outages in Ukraine.',
    sections: {
      context: {
        heading: 'Context',
        problem: 'Ukrainian teachers are required to regularly complete professional development courses. After 2022, offline format became problematic — relocation, safety, logistics. Online alternatives are either expensive or lack university accreditation.',
        idea: 'Idea: build an EdTech platform with accredited certificates from university, AI-driven outreach and fully automated sales pipeline.',
      },
      role: {
        heading: 'My Role',
        intro: 'I acted as Product Lead, GTM engineer and BizDev.',
        responsibilities: [
          {
            title: 'Strategy & BizDev',
            desc: 'Found and closed partnership with Ternopil National Pedagogical University. University accreditation means SmartCourses certificates are legally counted as official professional development — this is a competitive advantage you need to negotiate, not buy.',
          },
          {
            title: 'GTM & Technical Implementation',
            desc: 'Built ad campaign generator via Google Ads SDK using AI for keyword selection and ad generation. System automatically created ad materials for specific audience segments without manual writing of each ad. In parallel, built AI-driven outreach and sales pipeline entirely on prompt engineering. Sales manager worked within processes I built.',
          },
          {
            title: 'Product',
            desc: 'Website eij.com.ua created via AI. Entire operational model — from acquisition to closing sale — automated.',
          },
        ],
      },
      numbers: {
        heading: 'What the Numbers Showed',
        googleAds: {
          heading: 'Google Ads (August–November 2025)',
          metrics: [
            { label: 'Clicks', value: '220' },
            { label: 'Impressions', value: '1,590' },
            { label: 'CTR', value: '13.83%' },
            { label: 'Avg CPC', value: '$5.34' },
            { label: 'Spent', value: '$1,180' },
            { label: 'CPA', value: '~$12' },
            { label: 'Conversions', value: '98' },
          ],
          topSegments: [
            { segment: 'courses for teachers', ctr: '14.30%', clicks: '193' },
            { segment: 'professional development', ctr: '17.39%', clicks: '-' },
          ],
        },
        audience: {
          heading: 'Audience',
          items: [
            'Teachers 35–54 years old',
            'Mobile-first (97% spend — mobile)',
            'Activity: Mon–Fri, 12:00–18:00',
            'Geo: all Ukraine',
          ],
        },
        registrations: {
          heading: 'Registrations and Demand',
          items: [
            { label: '502 registrations', desc: 'on platform' },
            { label: '500 willing to buy', desc: 'confirmed intent, people were ready to pay' },
          ],
        },
        sales: {
          heading: 'Pilot Sales',
          items: [
            { label: '22 transactions', desc: 'successfully completed — first advance payments of pilot confirmed' },
            { label: '500 didn\'t complete', desc: 'due to power outages — force majeure, not product rejection' },
            { label: '₴13,100', desc: 'pilot advance payments — real money, not test transactions' },
          ],
        },
      },
      whyStopped: {
        heading: 'Why Scaling Stopped',
        intro: 'Not product failure and not GTM failure. Massive power outages in Ukraine made three things impossible simultaneously:',
        reasons: [
          {
            title: 'Stable online lessons',
            desc: 'Teachers and students without power can\'t connect',
          },
          {
            title: 'Payment completion',
            desc: '500 willing buyers couldn\'t complete payment form during outages',
          },
          {
            title: 'Operational work',
            desc: 'Sales pipeline requires stable connection',
          },
        ],
        conclusion: 'Product, partnership and demand were proven. External circumstances stopped scaling.',
      },
      proven: {
        heading: 'What Was Proven',
        items: [
          {
            title: 'Niche confirmed',
            desc: 'CTR 13–17% — exceptional metrics for EdTech. Teachers actively search for online courses.',
          },
          {
            title: 'Demand confirmed',
            desc: '500 people ready to pay — these are not leads, these are buyers hindered by infrastructure problems, not product quality.',
          },
          {
            title: 'Partnership model works',
            desc: 'University closes main objection — certificate legitimacy. This is something impossible to replicate without institutional partnership.',
          },
          {
            title: 'AI ads generator — effective',
            desc: 'Google Ads SDK + AI for keyword selection and ad generation gave 13–17% CTR without manual campaign writing. This is a reproducible approach for any EdTech product.',
          },
          {
            title: 'AI sales pipeline — scalable',
            desc: 'Built on prompt engineering, without expensive CRM systems. From outreach to closing deal — automated.',
          },
        ],
      },
      potential: {
        heading: 'Potential With Stable Infrastructure',
        intro: 'With stable power supply and $329/day budget:',
        items: [
          '500 willing → ~400–450 completed sales in same period',
          'CPA $12 with course LTV — payback from first transaction',
          'Partnership model with universities — reproducible in other regions and countries',
        ],
      },
      stack: {
        heading: 'Stack',
        items: [
          { name: 'Google Ads SDK', role: 'Advertising platform' },
          { name: 'AI (prompt engineering)', role: 'Content generation' },
          { name: 'Screener', role: 'Data analysis' },
          { name: 'University Partnership', role: 'Accreditation' },
          { name: 'eij.com.ua', role: 'Platform' },
        ],
      },
    },
    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Why couldn\'t teachers complete payment?',
          a: 'Massive power outages in Ukraine. 500 willing buyers couldn\'t complete payment form during outages. This is not product rejection, but infrastructure problem.',
        },
        {
          q: 'Why is university accreditation important?',
          a: 'SmartCourses certificates are legally counted as official professional development. This is a competitive advantage impossible to replicate without institutional partnership with university.',
        },
        {
          q: 'How did AI ads generator work?',
          a: 'Google Ads SDK + AI for keyword selection and ad generation. System automatically created ad materials for specific audience segments without manual writing of each ad. Result: 13-17% CTR.',
        },
        {
          q: 'What is AI sales pipeline?',
          a: 'Fully automated process from outreach to closing deal, built on prompt engineering without expensive CRM systems. Sales manager worked within processes I built.',
        },
        {
          q: 'Why is 13-17% CTR exceptional?',
          a: 'Average CTR for EdTech campaigns is 2-5%. CTR 13-17% means ads resonate with audience and teachers actively search for online professional development courses.',
        },
      ],
    },
  },
} as const
