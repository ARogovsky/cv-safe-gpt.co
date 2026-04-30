export type PiiRemovalLang = 'uk' | 'en'

export const piiRemovalContent = {
  uk: {
    slug: 'pii-removal-roberta-ukrainska',
    altSlug: 'pii-removal-roberta-ukrainian',
    readingTime: '10 хв читання',
    seo: {
      title: 'PII Removal: Fine-tuned RoBERTa для українських персональних даних | Case Study',
      description: 'Fine-tuned RoBERTa модель для видалення персональних даних з українських текстів. 76-87% точність vs 14% AWS і 37% Azure. Knowledge distillation від OpenAI.',
    },
    nav: {
      breadcrumbHome: 'Головна',
      breadcrumbCurrent: 'PII Removal',
    },
    header: {
      kicker: 'Case Study: CTO & Tech Lead',
      h1: 'PII Removal — Fine-tuned RoBERTa для українських персональних даних',
      subtitle: 'Модель для видалення персональних даних з українських текстів. Навчена на реальних витоках даних з підтримкою кирилиці, транслітерації (до і після 2010) та українських ідентифікаторів.',
      date: 'pii.it-sprout.org.ua',
    },
    heroMetrics: [
      { value: '76-87%', label: 'Загальна точність' },
      { value: '+450%', label: 'vs AWS Comprehend' },
      { value: '+105%', label: 'vs Azure AI Language' },
      { value: '100%', label: 'ПІБ кирилицею' },
      { value: '10', label: 'Категорій PII' },
    ],
    tldr: 'Стандартні хмарні рішення (AWS Comprehend, Azure AI Language) показують 14% і 37% точності на українських текстах. Причина: відсутність навчальних даних з кирилицею, підтримки транслітерації та розуміння українських ідентифікаторів (РНОКПП, ЄДРПОУ). Рішення: fine-tuned RoBERTa модель, навчена на реальних витоках українських даних з knowledge distillation від OpenAI. Результат: 76-87% точність — +105% до Azure, +450% до AWS.',
    sections: {
      context: {
        heading: 'Контекст',
        problem: 'Стандартні хмарні рішення для видалення персональних даних — AWS Comprehend і Azure AI Language — показують 14% і 37% точності на українських текстах.',
        reason: 'Причина проста: обидва сервіси не мають ні навчальних даних з кирилицею, ні підтримки транслітерації за українськими правилами, ні розуміння специфічних ідентифікаторів — РНОКПП, ЄДРПОУ, серій паспортів.',
        task: 'Завдання: побудувати модель, яка працює з реальними українськими даними — кирилицею, транслітерацією (сучасною і до 2010 року), змішаними текстами, юридичними особами і медичними записами.',
      },
      role: {
        heading: 'Моя Роль',
        intro: 'Я працював як CTO і технічний лід команди з двох інтернів.',
        responsibilities: [
          {
            percentage: '60%',
            title: 'Менеджмент і архітектура',
            desc: 'Визначав технічну стратегію: вибір підходу knowledge distillation від OpenAI замість навчання з нуля, архітектуру пайплайну, пріоритети розробки. Ставив задачі інтернам, ревʼювив код і результати тренувань, приймав архітектурні рішення.',
          },
          {
            percentage: '30%',
            title: 'Hands-on',
            desc: 'Особисто відповідав за MLOps інфраструктуру і деплой у продакшн. Налаштовував середовище тренування, CI/CD для моделей, моніторинг і інференс у проді. Також особисто розробляв правила транслітерації — критична частина, яку інтерни не могли зробити самостійно.',
          },
          {
            percentage: '10%',
            title: 'Менторинг',
            desc: 'Пояснював інтернам принципи fine-tuning трансформерів, code review, розбір помилок у тренуванні.',
          },
        ],
      },
      technical: {
        heading: 'Технічне Рішення',
        approaches: [
          {
            title: 'Knowledge distillation від OpenAI',
            desc: 'Замість ручної розмітки всього датасету — використали OpenAI як "вчителя" для генерації розмічених прикладів. Це прискорило підготовку навчальних даних і підвищило якість розмітки порівняно з ручним процесом.',
          },
          {
            title: 'Датасет — реальні витоки',
            desc: 'Модель навчалась на реальному датасеті витоків українських персональних даних. Це критично: синтетичні дані не відображають реальну варіативність — помилки у іменах, нестандартні формати телефонів, змішані кирилично-латинські тексти.',
          },
          {
            title: 'Правила транслітерації по роках',
            desc: 'Окремий компонент для обробки транслітерації. Правила різняться до і після 2010 року (постанова КМУ №55): Volodimir/Volodymyr, Irina/Iryna, Tkachenko/Tkachenko — модель розпізнає обидва варіанти. Це розроблено особисто мною.',
          },
          {
            title: 'RoBERTa fine-tuned на PyTorch',
            desc: 'Базова архітектура — roberta-base, fine-tuning для NER задачі з класами: Person, PhoneNumber, Location, SocialMedia, DocumentID.',
          },
          {
            title: 'MLOps і деплой — особисто',
            desc: 'Інфраструктура тренування, версіонування моделей, деплой API у продакшн — моя відповідальність від початку до кінця.',
          },
        ],
      },
      benchmark: {
        heading: 'Результати Бенчмарку',
        intro: 'Тестував на власному датасеті з 10 категорій, 64 PII-сутності — кирилиця, транслітерація, змішані тексти, фінансові дані, медичні записи, юридичні особи.',
        categories: [
          { name: 'ПІБ кирилицею', accuracy: '100%' },
          { name: 'Транслітерація сучасна (post-2010)', accuracy: '100%' },
          { name: 'Транслітерація стара (pre-2010)', accuracy: '100%' },
          { name: 'Телефони + email', accuracy: '90%' },
          { name: 'Складний змішаний текст', accuracy: '90%' },
          { name: 'Фінансові дані (IBAN, картки)', accuracy: '80%' },
          { name: 'Юридичні особи + директор', accuracy: '80%' },
          { name: 'Медичні дані', accuracy: '80%' },
          { name: 'Документи (паспорт, РНОКПП)', accuracy: '86%' },
          { name: 'Адреси', accuracy: '67%' },
        ],
        overall: 'Загальна точність: ~76–87%',
        comparison: {
          heading: 'Порівняння з конкурентами на українських даних',
          tools: [
            { name: 'AWS Comprehend', accuracy: '14%' },
            { name: 'Azure AI Language', accuracy: '37%' },
            { name: 'PII Removal (наша модель)', accuracy: '76–87%' },
          ],
          result: 'Результат: +105% до Azure, +450% до AWS на українських текстах.',
        },
      },
      gaps: {
        heading: 'Що Відомо Про Прогалини',
        issues: [
          {
            title: 'Boundary clipping',
            desc: 'Модель обрізає краї токенів на початку і кінці сутностей. Проявляється у коротких текстах без контексту. У PDF-тесті з довшими фрагментами проблема зменшується: контекст допомагає.',
          },
          {
            title: 'Адреси (67%)',
            desc: 'Назви вулиць без слова "вул." пропускаються. Потребує окремого класу і додаткових прикладів.',
          },
          {
            title: 'ЄДРПОУ і номери паспортів',
            desc: 'За ЗУ "Про захист персональних даних" паспортні дані фізособи є персональними. ЄДРПОУ — публічний реєстр держави. Модель поки не розрізняє ці два класи явно — наступна ітерація.',
          },
        ],
        future: 'При фіксі boundary clipping і розширенні класифікатора для документів — модель виходить на 90%+.',
      },
      next: {
        heading: 'Що Далі',
        items: [
          'Фікс boundary clipping через донавчання на граничних кейсах',
          'Окремий клас для DocumentID з підтипами: паспорт, РНОКПП, ЄДРПОУ, ІПН',
          'Розширення датасету для адрес — без явних маркерів типу "вул."',
          'Підтримка PDF з кирилицею без втрати encoding (поточний артефакт nnn)',
        ],
      },
      stack: {
        heading: 'Стек',
        items: ['Python', 'PyTorch', 'RoBERTa', 'Knowledge Distillation', 'OpenAI API', 'FastAPI', 'Docker', 'MLOps'],
      },
    },
    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Чому не використали готові рішення AWS або Azure?',
          a: 'AWS Comprehend показує 14% точності на українських текстах, Azure AI Language — 37%. Обидва не мають навчальних даних з кирилицею і не розуміють українські ідентифікатори (РНОКПП, ЄДРПОУ). Наша модель досягає 76-87% точності.',
        },
        {
          q: 'Чому RoBERTa, а не GPT?',
          a: 'RoBERTa — спеціалізована модель для NER задач з швидким інференсом (50-100ms CPU). GPT — генеративна модель, яка потребує більше ресурсів і менш передбачувана для класифікації. Для production PII removal потрібна швидкість і точність, а не генерація тексту.',
        },
        {
          q: 'Що таке knowledge distillation від OpenAI?',
          a: 'Замість ручної розмітки тисяч прикладів ми використали OpenAI як "вчителя" для генерації розмічених даних. Це прискорило підготовку датасету і підвищило якість розмітки порівняно з ручним процесом.',
        },
        {
          q: 'Чому модель навчалась на реальних витоках даних?',
          a: 'Синтетичні дані не відображають реальну варіативність: помилки у іменах, нестандартні формати телефонів, змішані кирилично-латинські тексти. Реальні витоки дають модель розуміння того, як виглядають дані в продакшені.',
        },
        {
          q: 'Що з boundary clipping?',
          a: 'Модель іноді обрізає краї токенів на початку і кінці сутностей. Це проявляється у коротких текстах без контексту. Фікс — донавчання на граничних кейсах. У довших текстах (PDF) проблема менш помітна.',
        },
      ],
    },
  },
  en: {
    slug: 'pii-removal-roberta-ukrainian',
    altSlug: 'pii-removal-roberta-ukrainska',
    readingTime: '10 min read',
    seo: {
      title: 'PII Removal: Fine-tuned RoBERTa for Ukrainian Personal Data | Case Study',
      description: 'Fine-tuned RoBERTa model for removing personal data from Ukrainian texts. 76-87% accuracy vs 14% AWS and 37% Azure. Knowledge distillation from OpenAI.',
    },
    nav: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'PII Removal',
    },
    header: {
      kicker: 'Case Study: CTO & Tech Lead',
      h1: 'PII Removal — Fine-tuned RoBERTa for Ukrainian Personal Data',
      subtitle: 'Model for removing personal data from Ukrainian texts. Trained on real data leaks with support for Cyrillic, transliteration (pre/post-2010), and Ukrainian identifiers.',
      date: 'pii.it-sprout.org.ua',
    },
    heroMetrics: [
      { value: '76-87%', label: 'Overall Accuracy' },
      { value: '+450%', label: 'vs AWS Comprehend' },
      { value: '+105%', label: 'vs Azure AI Language' },
      { value: '100%', label: 'Names in Cyrillic' },
      { value: '10', label: 'PII Categories' },
    ],
    tldr: 'Standard cloud solutions (AWS Comprehend, Azure AI Language) show 14% and 37% accuracy on Ukrainian texts. Reason: no training data with Cyrillic, no transliteration support, no understanding of Ukrainian identifiers (RNOKPP, EDRPOU). Solution: fine-tuned RoBERTa model trained on real Ukrainian data leaks with knowledge distillation from OpenAI. Result: 76-87% accuracy — +105% vs Azure, +450% vs AWS.',
    sections: {
      context: {
        heading: 'Context',
        problem: 'Standard cloud solutions for PII removal — AWS Comprehend and Azure AI Language — show 14% and 37% accuracy on Ukrainian texts.',
        reason: 'Simple reason: both services lack training data with Cyrillic, transliteration support per Ukrainian rules, and understanding of specific identifiers — RNOKPP, EDRPOU, passport series.',
        task: 'Task: build a model that works with real Ukrainian data — Cyrillic, transliteration (modern and pre-2010), mixed texts, legal entities, and medical records.',
      },
      role: {
        heading: 'My Role',
        intro: 'I worked as CTO and tech lead of a team with two interns.',
        responsibilities: [
          {
            percentage: '60%',
            title: 'Management & Architecture',
            desc: 'Defined technical strategy: choosing knowledge distillation from OpenAI instead of training from scratch, pipeline architecture, development priorities. Assigned tasks to interns, reviewed code and training results, made architectural decisions.',
          },
          {
            percentage: '30%',
            title: 'Hands-on',
            desc: 'Personally responsible for MLOps infrastructure and production deployment. Set up training environment, CI/CD for models, monitoring and inference in prod. Also personally developed transliteration rules — critical part that interns couldn\'t do independently.',
          },
          {
            percentage: '10%',
            title: 'Mentoring',
            desc: 'Explained transformer fine-tuning principles to interns, code review, analysis of training errors.',
          },
        ],
      },
      technical: {
        heading: 'Technical Solution',
        approaches: [
          {
            title: 'Knowledge distillation from OpenAI',
            desc: 'Instead of manual annotation of the entire dataset — used OpenAI as a "teacher" to generate labeled examples. This accelerated training data preparation and improved annotation quality compared to manual process.',
          },
          {
            title: 'Dataset — real leaks',
            desc: 'Model trained on real dataset of Ukrainian personal data leaks. This is critical: synthetic data doesn\'t reflect real variability — name typos, non-standard phone formats, mixed Cyrillic-Latin texts.',
          },
          {
            title: 'Transliteration rules by year',
            desc: 'Separate component for transliteration processing. Rules differ before and after 2010 (CMU resolution №55): Volodimir/Volodymyr, Irina/Iryna, Tkachenko/Tkachenko — model recognizes both variants. Developed personally by me.',
          },
          {
            title: 'RoBERTa fine-tuned on PyTorch',
            desc: 'Base architecture — roberta-base, fine-tuning for NER task with classes: Person, PhoneNumber, Location, SocialMedia, DocumentID.',
          },
          {
            title: 'MLOps & deployment — personally',
            desc: 'Training infrastructure, model versioning, production API deployment — my responsibility from start to finish.',
          },
        ],
      },
      benchmark: {
        heading: 'Benchmark Results',
        intro: 'Tested on own dataset with 10 categories, 64 PII entities — Cyrillic, transliteration, mixed texts, financial data, medical records, legal entities.',
        categories: [
          { name: 'Names in Cyrillic', accuracy: '100%' },
          { name: 'Modern transliteration (post-2010)', accuracy: '100%' },
          { name: 'Old transliteration (pre-2010)', accuracy: '100%' },
          { name: 'Phones + email', accuracy: '90%' },
          { name: 'Complex mixed text', accuracy: '90%' },
          { name: 'Financial data (IBAN, cards)', accuracy: '80%' },
          { name: 'Legal entities + director', accuracy: '80%' },
          { name: 'Medical data', accuracy: '80%' },
          { name: 'Documents (passport, RNOKPP)', accuracy: '86%' },
          { name: 'Addresses', accuracy: '67%' },
        ],
        overall: 'Overall accuracy: ~76–87%',
        comparison: {
          heading: 'Comparison with competitors on Ukrainian data',
          tools: [
            { name: 'AWS Comprehend', accuracy: '14%' },
            { name: 'Azure AI Language', accuracy: '37%' },
            { name: 'PII Removal (our model)', accuracy: '76–87%' },
          ],
          result: 'Result: +105% vs Azure, +450% vs AWS on Ukrainian texts.',
        },
      },
      gaps: {
        heading: 'Known Gaps',
        issues: [
          {
            title: 'Boundary clipping',
            desc: 'Model clips token edges at the beginning and end of entities. Appears in short texts without context. In PDF tests with longer fragments, the problem decreases: context helps.',
          },
          {
            title: 'Addresses (67%)',
            desc: 'Street names without the word "street" are missed. Requires separate class and additional examples.',
          },
          {
            title: 'EDRPOU and passport numbers',
            desc: 'Per Law "On Personal Data Protection", passport data of individuals is personal. EDRPOU is a public state registry. Model doesn\'t explicitly distinguish these two classes yet — next iteration.',
          },
        ],
        future: 'With boundary clipping fix and expanded document classifier — model reaches 90%+.',
      },
      next: {
        heading: 'What\'s Next',
        items: [
          'Fix boundary clipping through retraining on edge cases',
          'Separate class for DocumentID with subtypes: passport, RNOKPP, EDRPOU, IPN',
          'Dataset expansion for addresses — without explicit markers like "street"',
          'PDF support with Cyrillic without encoding loss (current artifact nnn)',
        ],
      },
      stack: {
        heading: 'Stack',
        items: ['Python', 'PyTorch', 'RoBERTa', 'Knowledge Distillation', 'OpenAI API', 'FastAPI', 'Docker', 'MLOps'],
      },
    },
    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Why not use ready-made AWS or Azure solutions?',
          a: 'AWS Comprehend shows 14% accuracy on Ukrainian texts, Azure AI Language — 37%. Both lack training data with Cyrillic and don\'t understand Ukrainian identifiers (RNOKPP, EDRPOU). Our model achieves 76-87% accuracy.',
        },
        {
          q: 'Why RoBERTa and not GPT?',
          a: 'RoBERTa is a specialized model for NER tasks with fast inference (50-100ms CPU). GPT is a generative model that requires more resources and is less predictable for classification. For production PII removal, we need speed and accuracy, not text generation.',
        },
        {
          q: 'What is knowledge distillation from OpenAI?',
          a: 'Instead of manually annotating thousands of examples, we used OpenAI as a "teacher" to generate labeled data. This accelerated dataset preparation and improved annotation quality compared to manual process.',
        },
        {
          q: 'Why train on real data leaks?',
          a: 'Synthetic data doesn\'t reflect real variability: name typos, non-standard phone formats, mixed Cyrillic-Latin texts. Real leaks give the model understanding of what data looks like in production.',
        },
        {
          q: 'What about boundary clipping?',
          a: 'Model sometimes clips token edges at the beginning and end of entities. This appears in short texts without context. Fix — retraining on edge cases. In longer texts (PDF), the problem is less noticeable.',
        },
      ],
    },
  },
} as const
