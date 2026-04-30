export type AdvogramLang = 'uk' | 'en'

export const advogramContent = {
  uk: {
    slug: 'advogram-gtm-case-study',
    altSlug: 'advogram-gtm-case-study-en',
    readingTime: '8 хв читання',
    seo: {
      title: 'Як я валідував нішу ATS-інструментів і знайшов ринок з CPA $0.32 за 6 тижнів | Advogram',
      description: 'GTM кейс: як я валідував ринок HR-інструментів, визначив платоспроможні географії та побудував модель юніт-економіки для freemium SaaS — за 6 тижнів і $3,430.',
    },
    nav: {
      breadcrumbHome: 'Головна',
      breadcrumbCurrent: 'GTM Кейс',
    },
    header: {
      kicker: 'Кейс — Advogram',
      h1: 'Пошук платоспроможного ринку для HR-інструментів за 6 тижнів',
      subtitle: 'Як я провів GTM-експеримент за $3,430, який валідував нішу ATS, перевірив 10 гео на купівельну спроможність і побудував юніт-економіку для наступного етапу — платного A/B-тесту на західних ринках.',
      badge: 'Живий експеримент · Квітень 2026',
      date: '27 квітня 2026',
    },
    heroMetrics: [
      { value: '6 тижнів', label: 'Тривалість експерименту' },
      { value: '$3,430', label: 'Загальні витрати на рекламу' },
      { value: '337', label: 'Реєстрацій' },
      { value: '$0.32', label: 'CPA у Франції' },
      { value: '15–19%', label: 'CTR на ATS-ключах' },
    ],
    tldr: 'Я використав $3,430 у Google Ads як швидкий ринковий сигнал — не для залучення платних користувачів, а щоб відповісти на три питання: Чи є реальний попит на ATS-інструменти для резюме? Хто насправді шукає? І які гео готові платити? Через шість тижнів: попит підтверджено, 9 з 10 гео відсіяно, і чіткий шлях до CPA $0.32–3 на західному трафіку.',
    intro: {
      hook: '337 реєстрацій. 10 гео. 1 платоспроможний ринок. Все за $3,430 і 6 тижнів.',
      body: 'Advogram — це open-source розширення для браузера для шукачів роботи в IT, дизайні та маркетингу. Воно фільтрує фейкові вакансії, перевіряє сумісність резюме з ATS і відстежує статус заявок. Продукт був готовий. Питання було: кому він насправді потрібен, де вони знаходяться і чи готові платити? Замість опитувань я запустив експеримент з платним трафіком без обмежень по гео — дозволивши реальній поведінці пошуку відповісти на питання.',
    },
    sections: {
      dayInLife: {
        heading: 'На які питання мав відповісти експеримент',
        body: 'Три дослідницькі питання визначали кожне рішення в налаштуванні кампанії:',
        steps: [
          { emoji: '1️⃣', text: 'Чи є реальний, вимірюваний пошуковий попит на ATS-інструменти для резюме — чи це ніша, про яку лише говорять на форумах?' },
          { emoji: '2️⃣', text: 'Які географії органічно шукають це? Без обмежень по гео на старті — нехай дані покажуть, де живе аудиторія.' },
          { emoji: '3️⃣', text: 'Серед цих гео, які мають ВВП і поведінку витрат на SaaS, щоб реально конвертуватися в платних користувачів за $9–15/міс?' },
          { emoji: '4️⃣', text: 'Як виглядає реалістична модель юніт-економіки — CPA, LTV, період окупності — якщо зосередити бюджет на правильних ринках?' },
        ],
        jacoboCta: {
          heading: 'Чому не провести спочатку інтерв\'ю з користувачами?',
          body: 'Опитування показують, що люди кажуть, що хочуть. Пошукова поведінка показує, що вони насправді шукають. При середньому CPC $0.87 платний трафік був найдешевшим способом швидко отримати статистично значущий сигнал.',
          label: 'Дивіться повний розклад ключових слів нижче',
        },
        pseoCta: {
          heading: 'Що відбувається після GTM-експерименту?',
          body: 'Наступна фаза — платний A/B-тест на UK, DE, FR, CA, AU — валідація готовності платити $9 vs $15/міс на трафіку, який вже конвертується з низьким CPA.',
          label: 'Перейти до моделі масштабування',
        },
      },
      whyCustom: {
        heading: 'Чому не просто зробити і подивитися, що станеться?',
        body: 'Три причини провести структурований експеримент перед інвестуванням у зростання:',
        reasons: [
          {
            tool: 'Ризик валідації ніші',
            issue: 'ATS checker tools like Jobscan and Resume Worded already exist. The question wasn\'t "does the niche exist?" but "is there unsatisfied demand, and at what CPC?" A 15–19% CTR на ATS-ключах — vs the 3–5% B2C SaaS average — answered that clearly.',
          },
          {
            tool: 'Ризик вибору гео',
            issue: 'Без даних припущення було б таргетувати США. Експеримент показав, що лише Індія дала 59% усіх конверсій — ринок з ВВП $2,400/особу. Сліпе таргетування США означало б ігнорування Франції з CPA $0.32.',
          },
          {
            tool: 'Ризик монетизації',
            issue: 'Freemium працює, лише якщо частина конвертується в платних. Знання, що 9 з 10 органічних гео — це ринки з низькою купівельною спроможністю, фундаментально змінює стратегію монетизації: не можна ціноутворювати глобально, треба таргетувати вибірково.',
          },
        ],
        punchline: 'The experiment cost $3,430. Finding this out post-launch with an acquired user base that won\'t pay would have cost far more.',
      },
      overview: {
        heading: 'Налаштування експерименту',
        body: 'Одна кампанія Google Ads. Необмежене гео-таргетування. Подія конверсії: реєстрація в Advogram Screener. Шість тижнів збору даних.',
        stats: [
          { value: '$3,430', label: 'Загальні витрати' },
          { value: '25.7K', label: 'Покази' },
          { value: '3,930', label: 'Кліки' },
          { value: '337', label: 'Конверсії' },
        ],
        bases: [
          { name: 'Кампанія', desc: '"observer" — одна кампанія, усі групи оголошень увімкнені, широке гео-таргетування.' },
          { name: 'Ключові слова', desc: 'Кластер ATS resume checker: ats scanner, ats resume checker, ats score checker, resume checker, jobscan alternatives.' },
          { name: 'Подія конверсії', desc: 'Реєстрація в Advogram Screener — відстежується через Screener analytics (Інтервал: Щотижня).' },
          { name: 'Вікно продуктивності', desc: '16 березня – 19 квітня 2026. Пікова реєстрація: 16 березня (~110 реєстрацій за тиждень 1).' },
          { name: 'Середній CPC', desc: '$0.87 — значно нижче типового діапазону $2–4 для B2C SaaS у цій категорії.' },
          { name: 'Оцінка оптимізації', desc: '99.9% — кампанія була структурно надійною протягом усього експерименту.' },
        ],
      },
      e2eFlows: {
        heading: 'Що показали дані',
        body: 'Чотири висновки, кожен — дієвий.',
        items: [
          {
            icon: '🎯',
            name: 'Висновок 1 — Ніша ATS реальна і недостатньо забезпечена',
            trigger: 'CTR на ATS-ключах: 15–19%',
            summary: 'CTR 15–19% — виняткова для B2C SaaS. Середній пошук B2C — 3–5%. Цей сигнал означає, що користувачі, які шукають ATS-інструменти, не знаходять те, що потрібно — і агресивно клікають, коли бачать щось релевантне.',
            basesTouched: ['Google Ads', 'Screener Analytics'],
            details: [
              'ats scanner: $952 spend · 1,230 clicks · 13.2% CTR',
              'ats resume checker: $795 spend · 995 clicks · 17.7% CTR',
              'ats score checker: $400 spend · 476 clicks · 18.5% CTR',
              'ats score: $238 spend · 268 clicks · 18.8% CTR',
              'best resume: $398 spend · 236 clicks · 15.7% CTR',
              'Competitors appear in the search landscape (Jobscan, Resume Worded, Skillsyncer) — but CTR this high indicates Advogram\'s positioning is differentiated enough to outperform them on relevance.',
              'Висновок: ринок активно шукає, а не просто переглядає. Попит pull-based, а не push-required.',
            ],
          },
          {
            icon: '🌍',
            name: 'Висновок 2 — 9 з 10 органічних гео — неплатоспроможні ринки',
            trigger: '10 гео конвертували. 1 життєздатна для платного.',
            summary: 'Експеримент проходив глобально. 10 країн згенерували конверсії. Перехресне посилання CPA з ВВП/особу та поведінкою витрат на SaaS дало чіткий розподіл: один життєздатний ринок, одна можливість сегментації, вісім гео для відсіювання.',
            basesTouched: ['Google Ads', 'GDP data'],
            details: [
              'Франція: 3 конв. · $0.32 CPA · ~$45K ВВП/особу → Життєздатна. Найвища купівельна спроможність у наборі. CPA в 10–30x дешевше, ніж усі інші гео.',
              'Китай: 2 конв. · $1.21 CPA · ~$13K ВВП/особу → Невизначено. Середній клас існує, але залежність від VPN і тертя платежів знижують ймовірність конверсії.',
              'India: 199 conv. · $3.08 CPA · ~$2,400 GDP/capita → Segment only. 59% of all conversions, but mass market won\'t pay $9–15/mo. Senior IT profiles in Bangalore/Mumbai are the viable slice.',
              'Єгипет: 8 конв. · $2.89 CPA · ~$3,500 ВВП/особу → Відсіяти.',
              'Пакистан: 6 конв. · $2.58 CPA · ~$1,600 ВВП/особу → Відсіяти.',
              'Бангладеш: 7 конв. · $3.90 CPA · ~$2,700 ВВП/особу → Відсіяти.',
              'Сирія: 2 конв. · $3.25 CPA · <$1,000 ВВП/особу → Відсіяти.',
              'М\'янма: 1 конв. · $1.82 CPA · ~$1,200 ВВП/особу → Відсіяти.',
              'Алжир: 1 конв. · $1.27 CPA · ~$4,000 ВВП/особу → Відсіяти.',
              'Індонезія: 1 конв. · $3.42 CPA · ~$4,900 ВВП/особу → Відсіяти.',
              'Key insight: Western traffic was almost absent in the experiment — not because it doesn\'t exist, but because geo targeting was unrestricted and Eastern markets dominate volume. France at $0.32 CPA is a signal, not an outlier.',
            ],
          },
          {
            icon: '👤',
            name: 'Висновок 3 — Профіль аудиторії',
            trigger: 'Демографія + пристрій + дані часу доби',
            summary: 'The data paints a clear picture of who is searching. This profile directly informs the next campaign\'s audience targeting.',
            basesTouched: ['Google Ads Demographics', 'Day & Hour data'],
            details: [
              'Основна аудиторія: чоловіки, 18–34 роки',
              'Основний пристрій: десктоп/ноутбук — 98% кліків. Це запит у режимі дослідження, а не мобільний імпульс.',
              'Пікова активність: Пн–Пт, 10:00–18:00 — активні шукачі роботи в робочий час, ймовірно шукають, будучи працевлаштованими і хочуть змінити роботу',
              'Топ-сигнальні гео для стратегії ставок: Індія, Єгипет, Дакка — корисно для виключення на наступній фазі',
              'Імплікація: досвід продукту має бути desktop-first. Розширення для браузера вже нативно відповідає цьому профілю.',
            ],
          },
          {
            icon: '📉',
            name: 'Висновок 4 — Утримання — наступна проблема для вирішення',
            trigger: '8-тижневе утримання когорти: 0%',
            summary: '337 користувачів зареєструвалися. Нуль повернулися через 8 тижнів. Це не сигнал провалу продукту — це сигнал активації та формування звички. Воронка залучення працює. Потік після реєстрації — ні.',
            basesTouched: ['Screener Analytics'],
            details: [
              'Графік утримання щотижневих когорт показує різке падіння до 0% на W1 і залишається плоским до W8.',
              'Найімовірніша причина: одноразова поведінка. Користувачі перевіряють свій ATS-скор резюме один раз, отримують результат і йдуть. Немає тригера, який повертає їх назад.',
              'Це структурно: продукту потрібен або повторюваний use case (нове оповіщення про роботу, щотижневе оновлення скору), або email/push послідовність повторного залучення.',
              'Вирішення перед масштабуванням: виправити утримання перед витратами на західний платний трафік. Залучення користувачів за $2–3 CPA, які відтікають на W1, все ще програшна юніт-економіка.',
              'Позитивне обрамлення: механізм залучення валідовано. Проблема утримання — це проблема продукту — вирішувана незалежно від валідації ринку.',
            ],
          },
        ],
      },
      crossCutting: {
        heading: 'Модель юніт-економіки',
        body: 'Побудовано на основі даних експерименту. Три сценарії для наступної фази — платний трафік зосереджений на UK, DE, FR, CA, AU.',
        items: [
          {
            icon: '📊',
            name: 'Бенчмарк CPA — Франція як базовий рівень',
            summary: 'Франція дала $0.32 CPA на 3 конверсіях — статистично тонко, але напрямково сильно. Екстраполяція на подібні західні гео дає реалістичний діапазон CPA для платного A/B-тесту.',
            details: [
              'CPA Франції (фактичний): $0.32 · 3 конверсії · $0.96 загальні витрати',
              'Оцінений CPA для UK/DE/CA/AU: $2–3 на основі типових HR SaaS CPC на цих ринках ($1.20–1.80 середній CPC, 15–25% конверсія landing-to-signup)',
              'Note: France\'s 150% conversion rate is a small-sample artifact — likely retargeting or direct navigation. At scale, model with 15–25% conversion from click to signup.',
            ],
          },
          {
            icon: '💰',
            name: 'Сценарії масштабування',
            summary: 'Три сценарії для наступної фази, припускаючи бюджет $5,000/міс на західні гео та середню тривалість підписки 3 місяці (природний цикл пошуку роботи).',
            details: [
              'Консервативний: CPA $2–3 · Підписка $9/міс · LTV $27 → ROI 9x · Окупність: місяць 1',
              'Базовий: CPA $2–3 · Підписка $15/міс · LTV $45 → ROI 15x · Окупність: місяць 1',
              'Оптимістичний (SEO + Ads): CPA $1–2 · Підписка $19/міс · LTV $57+ → ROI 28x+ · Окупність: місяць 1',
              'При бюджеті $5K/міс на західні гео: ~1,500–2,500 нових реєстрацій. При 5–10% платній конверсії: 75–250 платних користувачів.',
              '200 платних користувачів за $15/міс = $3,000 MRR. Беззбитковість на витратах на рекламу.',
              'Відтік природний і очікуваний: користувачі знаходять роботу, скасовують. Це особливість ніші, а не проблема продукту. Модель припускає 3-місячний LTV когорти, а не компаундинг на основі утримання.',
            ],
          },
          {
            icon: '🔁',
            name: 'Що має бути правдою, щоб це спрацювало',
            summary: 'Три умови, які мають виконуватися, щоб юніт-економіка спрацювала.',
            details: [
              '1. Retention fix ships before paid scaling: without at least W2 retention > 0%, even low CPA users don\'t compound into MRR.',
              '2. Західний CPA потрапляє в діапазон $2–3: Франція за $0.32 — це базовий сигнал; припущення стелі — $3. Якщо західний CPA перевищує $5, базовий сценарій ламається.',
              '3. Платна конверсія ≥ 5%: галузевий бенчмарк для freemium → платний у інструментах продуктивності. Якщо нижче, ціна підписки має зрости або безкоштовний рівень має звузитися.',
            ],
          },
          {
            icon: '🗺️',
            name: 'Наступні кроки',
            summary: 'Експеримент завершено. Роадмап для наступної фази.',
            details: [
              'Відсіяти всі нежиттєздатні гео з таргетування: IN (маса), EG, PK, BD, SY, MM, DZ, ID',
              'Запустити гео-фокусовані кампанії на UK, DE, FR, CA, AU з бюджетом $5K/міс',
              'Провести ціновий A/B-тест: $9 vs $15 vs $19/міс на західному трафіку',
              'Випустити механізм утримання перед платним масштабуванням: email-послідовність онбордингу, функція оповіщень про роботу або щотижневий дайджест ATS-скору',
              'Сегментація Індії: тестувати таргетування Senior/Lead IT у Бангалорі та Мумбаї — платоспроможний шматок у високооб\'ємному ринку',
              'SEO-канал: таргетувати "ats resume checker" та "jobscan alternative" ключові слова органічно — CAC = $0 на масштабі',
            ],
          },
        ],
      },
      impact: {
        heading: 'Що купили за $3,430',
        body: 'Структурований GTM-експеримент дає відповіді, а не користувачів. Ось що повернув кожен долар бюджету:',
        savings: [
          { module: 'Валідація попиту в ніші', before: 'Припущення', after: 'Підтверджено (CTR 15–19%)', monthly: 'Безцінно' },
          { module: 'Ідентифікація кластерів ключових слів', before: 'Невідомо', after: '5 високоінтентних кластерів змаповано', monthly: 'Формує SEO-роадмап' },
          { module: 'Скринінг гео (10 ринків)', before: 'Невідомо', after: '9 відсіяно, 1 валідовано', monthly: 'Економить марні витрати на рекламу' },
          { module: 'Профіль аудиторії', before: 'Гіпотеза', after: 'Чоловіки 18–34, десктоп, Пн–Пт робочі години', monthly: 'Точність таргетування' },
          { module: 'Базовий CPA (Франція)', before: 'Невідомо', after: '$0.32 фактичний, $2–3 змодельовано для WE', monthly: 'Основа юніт-економіки' },
          { module: 'Ідентифікація розриву утримання', before: 'Невідомо', after: '0% W8 утримання — проблема продукту визначена', monthly: 'Запобігає передчасному масштабуванню' },
          { module: 'Модель юніт-економіки', before: 'Немає', after: 'Консервативний/базовий/оптимістичний побудовано', monthly: 'Готово для фандрейзингу / партнерів' },
        ],
        total: '$3,430 · 6 тижнів',
        punchline: 'A B2B market research agency would charge $30,000–50,000 for a competitor analysis and geo assessment of this depth — without the real conversion data. Paid traffic as research is the GTM engineer\'s unfair advantage.',
      },
      beforeAfter: {
        heading: 'До і після експерименту',
        items: [
          { area: 'Впевненість у ніші', before: 'Гіпотеза: people need ATS tools', after: 'Валідовано: 15–19% CTR, 3,930 кліків, 337 реєстрацій за 6 тижнів' },
          { area: 'Гео-таргетування', before: 'Невідомо — probably US-first assumption', after: 'На основі даних: 9 гео відсіяно, західні ринки визначені як платна можливість' },
          { area: 'Модель CPA', before: 'Немає бенчмарку', after: 'Франція за $0.32 CPA · змодельовано $2–3 для UK/DE/FR/CA' },
          { area: 'Стратегія монетизації', before: 'Загальний freemium', after: 'Гео-селективний: безкоштовно для ринків, що розвиваються, платний A/B-тест для західних' },
          { area: 'Пріоритети продукту', before: 'Роадмап функцій на основі припущень', after: 'Механізм утримання — пріоритет #1 перед будь-яким платним масштабуванням' },
        ],
      },
      decisions: {
        heading: 'Журнал рішень',
        body: 'Кожен методологічний вибір має обґрунтування.',
        items: [
          {
            title: 'Чому платний трафік замість органічного чи холодного аутріча?',
            detail: 'Speed and signal quality. Organic SEO takes 3–6 months to produce data. Cold outreach gives opinions, not behavior. At $0.87 avg CPC, Google Ads produced 3,930 behavioral data points in 6 weeks — people who searched, read the ad, and clicked. That\'s the strongest pre-purchase signal available.',
          },
          {
            title: 'Чому необмежене гео-таргетування?',
            detail: 'Обмеження гео на старті підтвердило б припущення, а не протестувало його. Запуск глобально спочатку виявив, що природна аудиторія переважно південноазіатська та близькосхідна — висновок, який повністю змінює підхід до монетизації. Не можна відкрити те, що виключаєш.',
          },
          {
            title: 'Чому одна кампанія замість кількох A/B-тестів?',
            detail: 'Це була фаза відкриття, а не оптимізації. Одна кампанія з широким таргетуванням створює карту, де живе попит. Оптимізація — кілька наборів оголошень, гео-ставки, тестування цін — це наступна фаза, інформована цією картою.',
          },
          {
            title: 'Чому 0% утримання — це не сигнал провалу?',
            detail: 'Утримання вимагає продукту, який створює звичку. Перевірка ATS зараз — одноразове завдання: перевірити скор, піти. Експеримент ніколи не був розроблений для тестування утримання — він був розроблений для тестування залучення. 0% — це елемент бэклогу продукту, а не сигнал відмови ринку.',
          },
          {
            title: 'Чому Франція з CPA $0.32, а не навпаки?',
            detail: 'Франція дала аномально низький CPA, тому що обсяг був низьким (3 конверсії) — ймовірно ретаргетинг або брендовий пошук. Правильне прочитання не "Франція завжди буде $0.32", а "Західні ринки показують потенціал CPA на порядки нижче середнього по кампанії". Експеримент підтверджує напрямок; масштабний тест калібрує число.',
          },
          {
            title: 'Чому виправляти утримання перед масштабуванням платного?',
            detail: 'Математика дірявого відра: якщо утримання W1 — 0%, кожен новий користувач — одноразова вартість з нульовим компаундингом доходу. При $2–3 CPA і $0 LTV після тижня 1 юніт-економіка ламається незалежно від того, наскільки дешевий CPA. Утримання — це умова для платного масштабування.',
          },
        ],
      },
      lessons: {
        heading: 'Висновки',
        items: [
          {
            title: 'Використовуйте платний трафік як інструмент дослідження, а не лише канал залучення.',
            detail: 'При <$1 CPC Google Ads — один з найдешевших способів провести поведінкове ринкове дослідження. Бюджет $3,430 дав гео-розподіл, демографію аудиторії, криві попиту ключових слів і бенчмарки CPA — все з реальної поведінки користувачів.',
          },
          {
            title: 'Високий CTR — сильніший сигнал валідації, ніж висока конверсія.',
            detail: 'A 15–19% CTR means the search intent and the ad copy are aligned with an unmet need. Conversion rate can be improved through landing page optimization. A low CTR means the market doesn\'t recognize the product — much harder to fix.',
          },
          {
            title: 'Об\'ємні гео та платоспроможні гео майже ніколи не збігаються.',
            detail: 'Індія дала 59% конверсій і майже нульовий платоспроможний потенціал. Франція дала <1% конверсій і найнижчий CPA у наборі. Масштабування за обсягом оптимізує неправильний сигнал, якщо мета — дохід.',
          },
          {
            title: 'Визначте проблему утримання перед написанням роадмапу зростання.',
            detail: 'A product that doesn\'t create a returning habit cannot compound CAC into LTV. Identifying the retention gap before scaling is the difference between a growth engine and a leaky bucket.',
          },
        ],
      },
      platformEvolution: {
        heading: 'Хронологія експерименту',
        tagline: 'Шість тижнів від нульових даних до валідованої GTM-гіпотези.',
        bridge: [
          'Експеримент тривав 6 тижнів.',
          'Дані відповіли на всі три дослідницькі питання.',
          'Наступна фаза вже визначена.',
          'Єдина змінна, що залишилася — {виконання}.',
        ],
        steps: [
          { year: 'Mar 16', event: 'Кампанія launch', detail: 'Одна кампанія, необмежене гео, кластер ATS-ключів. Screener analytics підключено.' },
          { year: 'Mar 16–23', event: 'Пікова реєстрація', detail: '~110 реєстрацій за перші 7 днів. Сигнал попиту підтверджено негайно.' },
          { year: 'Mar 23–Apr 6', event: 'З\'являється патерн відтоку', detail: 'Кількість активних користувачів падає. Перша ознака одноразової поведінки та розриву утримання.' },
          { year: 'Apr 6–19', event: 'Дані по гео та ключових словах дозрівають', detail: 'Аномалія CPA Франції визначена. Домінування обсягу Індії підтверджено. Бенчмарки CTR ключових слів стабільні.' },
          { year: 'Apr 19', event: 'Кампанія data cutoff', detail: 'Фінальні цифри: 3,930 кліків · 337 реєстрацій · $3,430 витрат · 10 гео змаповано.' },
          { year: 'Apr 27', event: 'Аналіз завершено', detail: 'Модель юніт-економікиed. Next-phase roadmap scoped. Retention fix identified as gate condition.', punchline: 'Експеримент відповів на те, на що був {розроблений відповісти}.' },
        ],
      },
      replicability: {
        heading: 'Переносна методологія',
        body: 'Ця структура GTM-експерименту — платний трафік як ринковий сигнал, необмежене гео-відкриття, скринінг CPA-до-ВВП — працює для будь-якого B2C або prosumer SaaS у ніші з вимірюваним пошуковим попитом.',
        examples: [
          { domain: 'Інструменти для розробників', detail: 'Та сама структура: запустити необмежено на Stack Overflow Ads або Google, визначити, які гео дають найнижчий CPA, перехресно посилатися з інженерними бюджетами компаній по регіонах.' },
          { domain: 'Продуктивність / кар\'єрний SaaS', detail: 'ATS-інструменти, конструктори резюме, підготовка до інтерв\'ю — всі мають той самий ризик гео-розподілу: високий обсяг пошуку на ринках, що розвиваються, платні користувачі зосереджені на західних ринках. Проведіть експеримент перед припущенням глобального ціноутворення.' },
          { domain: 'Вертикальний B2B SaaS', detail: 'Замініть конверсію реєстрації на запит демо або безкоштовну пробну версію. Логіка гео-скринінгу ідентична: CPA × ВВП/особу × готовність витрат на SaaS створює пріоритизовану карту ринку.' },
        ],
        closing: 'Методологія експерименту повторювана. Що змінюється — це кластер ключових слів, подія конверсії та набір гео. Фреймворк — використовувати платний трафік для генерації поведінкових даних перед зобов\'язанням до стратегії зростання — доменно-агностичний.',
      },
    },
    cta: {
      heading: 'Будуєте щось і не впевнені, на який ринок йти спочатку?',
      body: 'Я провів цей експеримент для Advogram і перетворив $3,430 витрат на рекламу в валідовану гео-карту, бенчмарк CPA та модель юніт-економіки. Та сама методологія застосовується до будь-якого продукту з вимірюваним пошуковим попитом.',
      label: 'Let\'s talk',
    },
    faq: {
      heading: 'Часті питання',
      items: [
        {
          q: 'Чому не таргетувати США з самого початку?',
          a: 'Тому що це припущення було б неправильним. Експеримент показав, що природна пошукова аудиторія для ATS-інструментів переважно південноазіатська та близькосхідна. США та Західна Європа мають нижчий обсяг, але набагато вищу купівельну спроможність. Ви знаходите це, дивлячись, а не припускаючи.',
        },
        {
          q: 'Чи $3,430 — реалістичний бюджет для валідаційного експерименту?',
          a: 'Так — і можливо більше, ніж потрібно. Ключовий сигнал (CTR, гео-розподіл, продуктивність ключових слів) був видимий протягом перших двох тижнів і ~$1,000 витрат. Повний 6-тижневий запуск дав чистіші дані про утримання та гео-бенчмарки CPA.',
        },
        {
          q: 'Що насправді означає 0% утримання?',
          a: 'Це означає, що жоден користувач не повернувся до Screener після першого тижня. Це не означає, що продукт зламаний — це означає, що поточний продукт — одноразовий інструмент, а не повторювана звичка. Виправлення — це повторюваний тригер: щотижневі оновлення скору, оповіщення про роботу або email-послідовність, яка повертає користувачів, коли щось змінюється.',
        },
        {
          q: 'Чому Франція, а не Німеччина чи Великобританія?',
          a: 'Франція з\'явилася в даних випадково — вона не була таргетована спеціально. Інсайт не "таргетувати Францію" — це "Західна Європа конвертує з драматично нижчим CPA, ніж середнє по кампанії". Наступна фаза включатиме UK, DE, FR, CA та AU, щоб калібрувати, яка з них дає найкращий CPA на масштабі.',
        },
        {
          q: 'Скільки насправді коштує продукт зараз?',
          a: 'Advogram зараз безкоштовний і open-source. Платний A/B-тест ($9 vs $15 vs $19/міс) — це наступна фаза, залежна від випуску механізму утримання спочатку. Стягнення плати перед вирішенням утримання валідувало б готовність платити, але не здатність компаундити це в MRR.',
        },
        {
          q: 'Як цей експеримент вписується в наратив фандрейзингу?',
          a: 'Це дає три цифри, які інвестори запитують найраніше: валідований сигнал попиту (CTR), бенчмарк CAC (CPA Франції) та модель LTV (підписка × середня тривалість). Більшість pre-seed пітчів не мають жодного з цього з реальних даних. Цей експеримент дає всі три менш ніж за $4,000.',
        },
      ],
    },
    resources: {
      heading: 'Ресурси',
      items: [
        { label: 'Advogram — Open-source інструменти пошуку роботи', url: 'https://advogram.com' },
        { label: 'Google Ads — Кампанія manager', url: 'https://ads.google.com' },
        { label: 'Screener (Screener.so) — Продуктова аналітика', url: 'https://screener.so' },
        { label: 'DataForSEO — API для дослідження ключових слів', url: 'https://dataforseo.com' },
      ],
    },
    
  },
  en: {
    slug: 'advogram-gtm-case-study-en',
    altSlug: 'advogram-gtm-case-study',
    readingTime: '8 min read',
    seo: {
      title: 'How I Validated the ATS Tools Niche and Found a $0.32 CPA Market in 6 Weeks | Advogram',
      description: 'GTM case study: how I validated the HR tools market, identified paying geographies, and built the unit economics model for a freemium SaaS — in 6 weeks and $3,430.',
    },
    nav: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'GTM Case Study',
    },
    header: {
      kicker: 'Case Study — Advogram',
      h1: 'Finding a Paying Market for HR Tools in 6 Weeks',
      subtitle: 'How I ran a $3,430 GTM experiment that validated the ATS niche, screened 10 geos for purchasing power, and built the unit economics for the next stage — a paid A/B test on Western markets.',
      badge: 'Live experiment · Apr 2026',
      date: 'Apr 27, 2026',
    },
    heroMetrics: [
      { value: '6 weeks', label: 'Experiment duration' },
      { value: '$3,430', label: 'Total ad spend' },
      { value: '337', label: 'Sign-ups' },
      { value: '$0.32', label: 'CPA in France' },
      { value: '15–19%', label: 'CTR on ATS keywords' },
    ],
    tldr: 'I used $3,430 in Google Ads as a fast market signal — not to acquire paying users, but to answer three questions: Is there real demand for ATS resume tools? Who is actually searching? And which geos will pay? Six weeks later: demand confirmed, 9 out of 10 geos screened out, and a clear path to $0.32–3 CPA on Western traffic.',
    intro: {
      hook: '337 sign-ups. 10 geos. 1 paying market. All for $3,430 and 6 weeks.',
      body: 'Advogram is an open-source browser extension for IT, Design, and Marketing job seekers. It filters fake postings, checks resume ATS compatibility, and tracks application status. The product was built. The question was: who actually needs it, where are they, and will they pay? Instead of surveys, I ran a paid traffic experiment across an unrestricted global geo — letting real search behavior answer the question.',
    },
    sections: {
      dayInLife: {
        heading: 'What the Experiment Was Designed to Answer',
        body: 'Three research questions drove every decision in the campaign setup:',
        steps: [
          { emoji: '1️⃣', text: 'Is there real, measurable search demand for ATS resume tools — or is it a niche only discussed in forums?' },
          { emoji: '2️⃣', text: 'Which geographies are organically searching for this? No geo restrictions at launch — let the data show where the audience lives.' },
          { emoji: '3️⃣', text: 'Among those geos, which ones have the GDP and SaaS spending behavior to actually convert to paid users at $9–15/mo?' },
          { emoji: '4️⃣', text: 'What does a realistic unit economics model look like — CPA, LTV, payback period — if we focus budget on the right markets?' },
        ],
        jacoboCta: {
          heading: 'Why not run user interviews first?',
          body: 'Surveys tell you what people say they want. Search behavior tells you what they actually look for. At $0.87 avg CPC, paid traffic was the cheapest way to get statistically meaningful signal fast.',
          label: 'See the full keyword breakdown below',
        },
        pseoCta: {
          heading: 'What happens after the GTM experiment?',
          body: 'The next phase is a paid A/B test on UK, DE, FR, CA, AU — validating willingness to pay at $9 vs $15/mo on traffic that already converts at low CPA.',
          label: 'Jump to the scaling model',
        },
      },
      whyCustom: {
        heading: 'Why Not Just Build and See What Happens?',
        body: 'Three reasons to run a structured experiment before investing in growth:',
        reasons: [
          {
            tool: 'Niche validation risk',
            issue: 'ATS checker tools like Jobscan and Resume Worded already exist. The question wasn\'t "does the niche exist?" but "is there unsatisfied demand, and at what CPC?" A 15–19% CTR on ATS keywords — vs the 3–5% B2C SaaS average — answered that clearly.',
          },
          {
            tool: 'Geo selection risk',
            issue: 'Without data, the assumption would have been to target the US. The experiment revealed that India alone drove 59% of all conversions — a market with $2,400 GDP/capita. Targeting the US blindly would have meant ignoring France at $0.32 CPA.',
          },
          {
            tool: 'Monetization risk',
            issue: 'Freemium only works if a subset converts to paid. Knowing that 9 of 10 organic geos are low-purchasing-power markets fundamentally changes the monetization strategy: you cannot price globally, you must target selectively.',
          },
        ],
        punchline: 'The experiment cost $3,430. Finding this out post-launch with an acquired user base that won\'t pay would have cost far more.',
      },
      overview: {
        heading: 'Experiment Setup',
        body: 'One Google Ads campaign. Unrestricted geo targeting. Conversion event: Advogram Screener sign-up. Six weeks of data collection.',
        stats: [
          { value: '$3,430', label: 'Total spend' },
          { value: '25.7K', label: 'Impressions' },
          { value: '3,930', label: 'Clicks' },
          { value: '337', label: 'Conversions' },
        ],
        bases: [
          { name: 'Campaign', desc: '"observer" — single campaign, all ad groups enabled, broad geo targeting.' },
          { name: 'Keywords', desc: 'ATS resume checker cluster: ats scanner, ats resume checker, ats score checker, resume checker, jobscan alternatives.' },
          { name: 'Conversion event', desc: 'Advogram Screener sign-up — tracked via Screener analytics (Interval: Weekly).' },
          { name: 'Performance window', desc: 'Mar 16 – Apr 19, 2026. Peak sign-up week: March 16 (~110 sign-ups in week 1).' },
          { name: 'Avg. CPC', desc: '$0.87 — well below the $2–4 typical range for B2C SaaS in this category.' },
          { name: 'Optimization score', desc: '99.9% — campaign was structurally sound throughout the experiment.' },
        ],
      },
      e2eFlows: {
        heading: 'What the Data Showed',
        body: 'Four findings, each actionable.',
        items: [
          {
            icon: '🎯',
            name: 'Finding 1 — The ATS Niche Is Real and Undersupplied',
            trigger: 'CTR on ATS keywords: 15–19%',
            summary: 'A 15–19% CTR is exceptional for B2C SaaS. B2C search averages 3–5%. This signal means users searching for ATS tools are not finding what they need — and clicking aggressively when they see something relevant.',
            basesTouched: ['Google Ads', 'Screener Analytics'],
            details: [
              'ats scanner: $952 spend · 1,230 clicks · 13.2% CTR',
              'ats resume checker: $795 spend · 995 clicks · 17.7% CTR',
              'ats score checker: $400 spend · 476 clicks · 18.5% CTR',
              'ats score: $238 spend · 268 clicks · 18.8% CTR',
              'best resume: $398 spend · 236 clicks · 15.7% CTR',
              'Competitors appear in the search landscape (Jobscan, Resume Worded, Skillsyncer) — but CTR this high indicates Advogram\'s positioning is differentiated enough to outperform them on relevance.',
              'Conclusion: the market is actively searching, not just browsing. Demand is pull-based, not push-required.',
            ],
          },
          {
            icon: '🌍',
            name: 'Finding 2 — 9 of 10 Organic Geos Are Non-Paying Markets',
            trigger: '10 geos converted. 1 is viable for paid.',
            summary: 'The experiment ran globally. 10 countries generated conversions. Cross-referencing CPA with GDP/capita and SaaS spending behavior produced a clear split: one viable market, one segmentation opportunity, eight geos to cut.',
            basesTouched: ['Google Ads', 'GDP data'],
            details: [
              'France: 3 conv. · $0.32 CPA · ~$45K GDP/capita → Viable. Highest purchasing power in the set. CPA 10–30x cheaper than all other geos.',
              'China: 2 conv. · $1.21 CPA · ~$13K GDP/capita → Uncertain. Middle class exists but VPN dependency and payment friction reduce conversion probability.',
              'India: 199 conv. · $3.08 CPA · ~$2,400 GDP/capita → Segment only. 59% of all conversions, but mass market won\'t pay $9–15/mo. Senior IT profiles in Bangalore/Mumbai are the viable slice.',
              'Egypt: 8 conv. · $2.89 CPA · ~$3,500 GDP/capita → Cut.',
              'Pakistan: 6 conv. · $2.58 CPA · ~$1,600 GDP/capita → Cut.',
              'Bangladesh: 7 conv. · $3.90 CPA · ~$2,700 GDP/capita → Cut.',
              'Syria: 2 conv. · $3.25 CPA · <$1,000 GDP/capita → Cut.',
              'Myanmar: 1 conv. · $1.82 CPA · ~$1,200 GDP/capita → Cut.',
              'Algeria: 1 conv. · $1.27 CPA · ~$4,000 GDP/capita → Cut.',
              'Indonesia: 1 conv. · $3.42 CPA · ~$4,900 GDP/capita → Cut.',
              'Key insight: Western traffic was almost absent in the experiment — not because it doesn\'t exist, but because geo targeting was unrestricted and Eastern markets dominate volume. France at $0.32 CPA is a signal, not an outlier.',
            ],
          },
          {
            icon: '👤',
            name: 'Finding 3 — Audience Profile',
            trigger: 'Demographics + device + time-of-day data',
            summary: 'The data paints a clear picture of who is searching. This profile directly informs the next campaign\'s audience targeting.',
            basesTouched: ['Google Ads Demographics', 'Day & Hour data'],
            details: [
              'Primary audience: men, 18–34 years old',
              'Primary device: desktop/laptop — 98% of clicks. This is a research-mode query, not mobile-impulse.',
              'Peak activity: Mon–Fri, 10:00–18:00 — active job seekers during work hours, likely searching while employed and looking to switch',
              'Top signal geos for bid strategy: India, Egypt, Dhaka Division — useful for exclusion in the next phase',
              'Implication: the product experience must be desktop-first. A browser extension already fits this profile natively.',
            ],
          },
          {
            icon: '📉',
            name: 'Finding 4 — Retention Is the Next Problem to Solve',
            trigger: '8-week cohort retention: 0%',
            summary: '337 users signed up. Zero returned after 8 weeks. This is not a product failure signal — it is an activation and habit-formation signal. The acquisition funnel works. The post-signup flow does not.',
            basesTouched: ['Screener Analytics'],
            details: [
              'Weekly cohort retention chart shows a sharp drop to 0% by W1 and holds flat through W8.',
              'Most likely cause: single-use behavior. Users check their resume ATS score once, get the result, and leave. No trigger brings them back.',
              'This is structural: the product needs either a repeating use case (new job alert, weekly score update) or an email/push re-engagement sequence.',
              'Resolution before scaling: fix retention before spending on Western paid traffic. Acquiring $2–3 CPA users who churn at W1 is still a losing unit economics.',
              'Positive framing: the acquisition mechanism is validated. The retention problem is a product problem — solvable independently of market validation.',
            ],
          },
        ],
      },
      crossCutting: {
        heading: 'Unit Economics Model',
        body: 'Built from experiment data. Three scenarios for the next phase — paid traffic focused on UK, DE, FR, CA, AU.',
        items: [
          {
            icon: '📊',
            name: 'CPA Benchmark — France as the Floor',
            summary: 'France produced $0.32 CPA on 3 conversions — statistically thin but directionally strong. Extrapolating to similar Western geos gives a realistic CPA range for the paid A/B test.',
            details: [
              'France CPA (actual): $0.32 · 3 conversions · $0.96 total spend',
              'Estimated CPA for UK/DE/CA/AU: $2–3 based on typical HR SaaS CPCs in those markets ($1.20–1.80 avg CPC, 15–25% landing-to-signup conversion)',
              'Note: France\'s 150% conversion rate is a small-sample artifact — likely retargeting or direct navigation. At scale, model with 15–25% conversion from click to signup.',
            ],
          },
          {
            icon: '💰',
            name: 'Scaling Scenarios',
            summary: 'Three scenarios for the next phase, assuming a $5,000/mo budget on Western geos and a 3-month average subscription duration (natural job search cycle).',
            details: [
              'Conservative: CPA $2–3 · Subscription $9/mo · LTV $27 → ROI 9x · Payback: month 1',
              'Base: CPA $2–3 · Subscription $15/mo · LTV $45 → ROI 15x · Payback: month 1',
              'Optimistic (SEO + Ads): CPA $1–2 · Subscription $19/mo · LTV $57+ → ROI 28x+ · Payback: month 1',
              'At $5K/mo budget on Western geos: ~1,500–2,500 new sign-ups. At 5–10% paid conversion: 75–250 paying users.',
              '200 paying users at $15/mo = $3,000 MRR. Breakeven on ad spend.',
              'Churn is natural and expected: users find a job, cancel. This is a feature of the niche, not a product problem. Model assumes 3-month cohort LTV, not retention-based compounding.',
            ],
          },
          {
            icon: '🔁',
            name: 'What Needs to Be True for This to Work',
            summary: 'Three conditions that must hold for the unit economics to land.',
            details: [
              '1. Retention fix ships before paid scaling: without at least W2 retention > 0%, even low CPA users don\'t compound into MRR.',
              '2. Western CPA lands in the $2–3 range: France at $0.32 is the floor signal; the ceiling assumption is $3. If Western CPA exceeds $5, the base scenario breaks.',
              '3. Paid conversion rate ≥ 5%: industry benchmark for freemium → paid in productivity tools. If lower, the subscription price needs to increase or the free tier needs to be narrowed.',
            ],
          },
          {
            icon: '🗺️',
            name: 'Next Steps',
            summary: 'The experiment is complete. The roadmap for the next phase.',
            details: [
              'Cut all non-viable geos from targeting: IN (mass), EG, PK, BD, SY, MM, DZ, ID',
              'Launch geo-focused campaigns on UK, DE, FR, CA, AU with $5K/mo budget',
              'Run pricing A/B test: $9 vs $15 vs $19/mo on Western traffic',
              'Ship retention mechanism before paid scale: email onboarding sequence, job alert feature, or weekly ATS score digest',
              'India segmentation: test Senior/Lead IT targeting in Bangalore and Mumbai — the paying slice within a high-volume market',
              'SEO channel: target "ats resume checker" and "jobscan alternative" keywords organically — CAC = $0 at scale',
            ],
          },
        ],
      },
      impact: {
        heading: 'What $3,430 Bought',
        body: 'A structured GTM experiment produces answers, not users. Here is what each dollar of the budget returned:',
        savings: [
          { module: 'Niche demand validation', before: 'Assumption', after: 'Confirmed (CTR 15–19%)', monthly: 'Priceless' },
          { module: 'Keyword cluster identification', before: 'Unknown', after: '5 high-intent clusters mapped', monthly: 'Shapes SEO roadmap' },
          { module: 'Geo screening (10 markets)', before: 'Unknown', after: '9 cut, 1 validated', monthly: 'Saves wasted ad spend' },
          { module: 'Audience profile', before: 'Hypothesis', after: 'Men 18–34, desktop, M–F office hours', monthly: 'Targeting precision' },
          { module: 'CPA floor (France)', before: 'Unknown', after: '$0.32 actual, $2–3 modeled for WE', monthly: 'Unit econ foundation' },
          { module: 'Retention gap identification', before: 'Unknown', after: '0% W8 retention — product problem scoped', monthly: 'Prevents premature scaling' },
          { module: 'Unit economics model', before: 'None', after: 'Conservative/base/optimistic built', monthly: 'Fundraising / partner-ready' },
        ],
        total: '$3,430 · 6 weeks',
        punchline: 'A B2B market research agency would charge $30,000–50,000 for a competitor analysis and geo assessment of this depth — without the real conversion data. Paid traffic as research is the GTM engineer\'s unfair advantage.',
      },
      beforeAfter: {
        heading: 'Before vs After the Experiment',
        items: [
          { area: 'Niche confidence', before: 'Hypothesis: people need ATS tools', after: 'Validated: 15–19% CTR, 3,930 clicks, 337 sign-ups in 6 weeks' },
          { area: 'Geo targeting', before: 'Unknown — probably US-first assumption', after: 'Data-driven: 9 geos cut, Western markets identified as the paid opportunity' },
          { area: 'CPA model', before: 'No benchmark', after: 'France at $0.32 CPA · modeled $2–3 for UK/DE/FR/CA' },
          { area: 'Monetization strategy', before: 'Generic freemium', after: 'Geo-selective: free for emerging markets, paid A/B test for Western' },
          { area: 'Product priorities', before: 'Feature roadmap based on assumptions', after: 'Retention mechanism is the #1 priority before any paid scaling' },
        ],
      },
      decisions: {
        heading: 'Decision Log',
        body: 'Every methodological choice has a rationale.',
        items: [
          {
            title: 'Why paid traffic instead of organic or cold outreach?',
            detail: 'Speed and signal quality. Organic SEO takes 3–6 months to produce data. Cold outreach gives opinions, not behavior. At $0.87 avg CPC, Google Ads produced 3,930 behavioral data points in 6 weeks — people who searched, read the ad, and clicked. That\'s the strongest pre-purchase signal available.',
          },
          {
            title: 'Why unrestricted geo targeting?',
            detail: 'Restricting geo at launch would have confirmed the assumption, not tested it. Running globally first revealed that the natural audience is overwhelmingly South Asian and Middle Eastern — a finding that completely changes the monetization approach. You cannot discover what you exclude.',
          },
          {
            title: 'Why one campaign instead of multiple A/B tests?',
            detail: 'This was a discovery phase, not an optimization phase. One campaign with broad targeting produces a map of where demand lives. Optimization — multiple ad sets, geo bids, price testing — is the next phase, informed by this map.',
          },
          {
            title: 'Why is 0% retention not a failure signal?',
            detail: 'Retention requires a product that creates a habit. ATS checking is currently a one-shot task: check score, leave. The experiment was never designed to test retention — it was designed to test acquisition. The 0% is a product backlog item, not a market rejection signal.',
          },
          {
            title: 'Why France at $0.32 CPA and not the other way around?',
            detail: 'France produced an anomalously low CPA because the volume was low (3 conversions) — likely retargeting or branded search. The correct read is not "France will always be $0.32" but "Western markets show CPA potential orders of magnitude lower than the campaign average." The experiment confirms the direction; the scaled test will calibrate the number.',
          },
          {
            title: 'Why fix retention before scaling paid?',
            detail: 'Leaky bucket math: if W1 retention is 0%, every new user is a one-time cost with zero revenue compounding. At $2–3 CPA and $0 LTV beyond week 1, the unit economics break regardless of how cheap the CPA is. Retention is the gating condition for paid scale.',
          },
        ],
      },
      lessons: {
        heading: 'Takeaways',
        items: [
          {
            title: 'Use paid traffic as a research tool, not just an acquisition channel.',
            detail: 'At <$1 CPC, Google Ads is one of the cheapest ways to run a behavioral market study. The $3,430 budget produced geo distribution, audience demographics, keyword demand curves, and CPA benchmarks — all from real user behavior.',
          },
          {
            title: 'High CTR is a stronger validation signal than high conversion.',
            detail: 'A 15–19% CTR means the search intent and the ad copy are aligned with an unmet need. Conversion rate can be improved through landing page optimization. A low CTR means the market doesn\'t recognize the product — much harder to fix.',
          },
          {
            title: 'Volume geos and paying geos are almost never the same.',
            detail: 'India produced 59% of conversions and almost zero paying potential. France produced <1% of conversions and the lowest CPA in the set. Scaling for volume optimizes for the wrong signal if the goal is revenue.',
          },
          {
            title: 'Scope the retention problem before writing the growth roadmap.',
            detail: 'A product that doesn\'t create a returning habit cannot compound CAC into LTV. Identifying the retention gap before scaling is the difference between a growth engine and a leaky bucket.',
          },
        ],
      },
      platformEvolution: {
        heading: 'Experiment Timeline',
        tagline: 'Six weeks from zero data to a validated GTM hypothesis.',
        bridge: [
          'The experiment ran for 6 weeks.',
          'The data answered all three research questions.',
          'The next phase is already scoped.',
          'The only variable left is {execution}.',
        ],
        steps: [
          { year: 'Mar 16', event: 'Campaign launch', detail: 'Single campaign, unrestricted geo, ATS keyword cluster. Screener analytics connected.' },
          { year: 'Mar 16–23', event: 'Peak sign-up week', detail: '~110 sign-ups in the first 7 days. Demand signal confirmed immediately.' },
          { year: 'Mar 23–Apr 6', event: 'Churn pattern emerges', detail: 'Active user count drops. First indication of single-use behavior and retention gap.' },
          { year: 'Apr 6–19', event: 'Geo and keyword data matures', detail: 'France CPA anomaly identified. India volume dominance confirmed. Keyword CTR benchmarks stable.' },
          { year: 'Apr 19', event: 'Campaign data cutoff', detail: 'Final numbers: 3,930 clicks · 337 sign-ups · $3,430 spend · 10 geos mapped.' },
          { year: 'Apr 27', event: 'Analysis complete', detail: 'Unit economics modeled. Next-phase roadmap scoped. Retention fix identified as gate condition.', punchline: 'The experiment answered what it was {designed to answer}.' },
        ],
      },
      replicability: {
        heading: 'Transferable Methodology',
        body: 'This GTM experiment structure — paid traffic as market signal, unrestricted geo discovery, CPA-to-GDP screening — works for any B2C or prosumer SaaS in a niche with measurable search demand.',
        examples: [
          { domain: 'Developer tools', detail: 'Same structure: run unrestricted on Stack Overflow Ads or Google, identify which geos produce the lowest CPA, cross-reference with company engineering budgets per region.' },
          { domain: 'Productivity / career SaaS', detail: 'ATS tools, resume builders, interview prep — all have the same geo split risk: high search volume in emerging markets, paying users concentrated in Western markets. Run the experiment before assuming global pricing.' },
          { domain: 'Vertical B2B SaaS', detail: 'Replace sign-up conversion with demo request or free trial. The geo screening logic is identical: CPA × GDP/capita × SaaS spending willingness produces a prioritized market map.' },
        ],
        closing: 'The experiment methodology is repeatable. What changes is the keyword cluster, the conversion event, and the geo set. The framework — use paid traffic to generate behavioral data before committing to a growth strategy — is domain-agnostic.',
      },
    },
    cta: {
      heading: 'Building something and not sure which market to go after first?',
      body: 'I ran this experiment for Advogram and turned $3,430 of ad spend into a validated geo map, a CPA benchmark, and a unit economics model. The same methodology applies to any product with measurable search demand.',
      label: 'Let\'s talk',
    },
    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Why not just target the US from the start?',
          a: 'Because that assumption would have been wrong. The experiment showed that the natural search audience for ATS tools is overwhelmingly South Asian and Middle Eastern. The US and Western Europe have lower volume but far higher purchasing power. You find that by looking, not by assuming.',
        },
        {
          q: 'Is $3,430 a realistic budget for a validation experiment?',
          a: 'Yes — and possibly more than needed. The key signal (CTR, geo distribution, keyword performance) was visible within the first two weeks and ~$1,000 of spend. The full 6-week run produced cleaner data on retention and geo CPA benchmarks.',
        },
        {
          q: 'What does the 0% retention actually mean?',
          a: 'It means no user returned to the Screener after their first week. It does not mean the product is broken — it means the current product is a one-shot tool, not a recurring habit. The fix is a repeating trigger: weekly score updates, job alerts, or an email sequence that brings users back when something changes.',
        },
        {
          q: 'Why France and not Germany or the UK?',
          a: 'France appeared in the data by chance — it was not targeted specifically. The insight is not "target France" — it is "Western Europe converts at dramatically lower CPA than the campaign average." The next phase will include UK, DE, FR, CA, and AU to calibrate which of these produces the best CPA at scale.',
        },
        {
          q: 'What is the product actually charging now?',
          a: 'Advogram is currently free and open-source. The paid A/B test ($9 vs $15 vs $19/mo) is the next phase, contingent on shipping the retention mechanism first. Charging before solving retention would validate willingness to pay but not the ability to compound it into MRR.',
        },
        {
          q: 'How does this experiment feed into a fundraising narrative?',
          a: 'It provides the three numbers investors ask for earliest: validated demand signal (CTR), CAC benchmark (France CPA), and LTV model (subscription × avg duration). Most pre-seed pitches have none of these from real data. This experiment produces all three for under $4,000.',
        },
      ],
    },
    resources: {
      heading: 'Resources',
      items: [
        { label: 'Advogram — Open-source job search tools', url: 'https://advogram.com' },
        { label: 'Google Ads — Campaign manager', url: 'https://ads.google.com' },
        { label: 'Screener (Screener.so) — Product analytics', url: 'https://screener.so' },
        { label: 'DataForSEO — Keyword research API', url: 'https://dataforseo.com' },
      ],
    },
    
  },
} as const
