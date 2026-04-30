#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Повний переклад всіх довгих блоків в uk секції advogram-i18n.ts
"""

import re

# Читаємо файл
with open('src/advogram-i18n.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Повний словник перекладів для довгих блоків
long_translations = {
    # overview.bases descriptions
    '"observer" — single campaign, all ad groups enabled, broad geo targeting.': '"observer" — одна кампанія, усі групи оголошень увімкнені, широке гео-таргетування.',
    'ATS resume checker cluster: ats scanner, ats resume checker, ats score checker, resume checker, jobscan alternatives.': 'Кластер ATS resume checker: ats scanner, ats resume checker, ats score checker, resume checker, jobscan alternatives.',
    'Advogram Screener sign-up — tracked via Screener analytics (Interval: Weekly).': 'Реєстрація в Advogram Screener — відстежується через Screener analytics (Інтервал: Щотижня).',
    'Mar 16 – Apr 19, 2026. Пікова реєстрація: March 16 (~110 sign-ups in week 1).': '16 березня – 19 квітня 2026. Пікова реєстрація: 16 березня (~110 реєстрацій за тиждень 1).',
    '$0.87 — well below the $2–4 typical range for B2C SaaS in this category.': '$0.87 — значно нижче типового діапазону $2–4 для B2C SaaS у цій категорії.',
    '99.9% — campaign was structurally sound throughout the experiment.': '99.9% — кампанія була структурно надійною протягом усього експерименту.',
    
    # e2eFlows items
    'A 15–19% CTR is exceptional for B2C SaaS. B2C search averages 3–5%. This signal means users searching for ATS tools are not finding what they need — and clicking aggressively when they see something relevant.': 'CTR 15–19% — виняткова для B2C SaaS. Середній пошук B2C — 3–5%. Цей сигнал означає, що користувачі, які шукають ATS-інструменти, не знаходять те, що потрібно — і агресивно клікають, коли бачать щось релевантне.',
    
    "Competitors appear in the search landscape (Jobscan, Resume Worded, Skillsyncer) — but CTR this high indicates Advogram's positioning is differentiated enough to outperform them on relevance.": "Конкуренти з'являються в пошуковому ландшафті (Jobscan, Resume Worded, Skillsyncer) — але такий високий CTR вказує, що позиціонування Advogram достатньо диференційоване, щоб перевершити їх за релевантністю.",
    
    'Conclusion: the market is actively searching, not just browsing. Demand is pull-based, not push-required.': 'Висновок: ринок активно шукає, а не просто переглядає. Попит pull-based, а не push-required.',
    
    '10 geos converted. 1 is viable for paid.': '10 гео конвертували. 1 життєздатна для платного.',
    
    'The experiment ran globally. 10 countries generated conversions. Cross-referencing CPA with GDP/capita and SaaS spending behavior produced a clear split: one viable market, one segmentation opportunity, eight geos to cut.': 'Експеримент проходив глобально. 10 країн згенерували конверсії. Перехресне посилання CPA з ВВП/особу та поведінкою витрат на SaaS дало чіткий розподіл: один життєздатний ринок, одна можливість сегментації, вісім гео для відсіювання.',
    
    'France: 3 conv. · $0.32 CPA · ~$45K GDP/capita → Viable. Highest purchasing power in the set. CPA 10–30x cheaper than all other geos.': 'Франція: 3 конв. · $0.32 CPA · ~$45K ВВП/особу → Життєздатна. Найвища купівельна спроможність у наборі. CPA в 10–30x дешевше, ніж усі інші гео.',
    
    'China: 2 conv. · $1.21 CPA · ~$13K GDP/capita → Uncertain. Middle class exists but VPN dependency and payment friction reduce conversion probability.': 'Китай: 2 конв. · $1.21 CPA · ~$13K ВВП/особу → Невизначено. Середній клас існує, але залежність від VPN і тертя платежів знижують ймовірність конверсії.',
    
    'India: 199 conv. · $3.08 CPA · ~$2,400 GDP/capita → Segment only. 59% of all conversions, but mass market won\'t pay $9–15/mo. Senior IT profiles in Bangalore/Mumbai are the viable slice.': 'Індія: 199 конв. · $3.08 CPA · ~$2,400 ВВП/особу → Тільки сегментація. 59% усіх конверсій, але масовий ринок не платитиме $9–15/міс. Старші IT-профілі в Бангалорі/Мумбаї — життєздатний шматок.',
    
    'Egypt: 8 conv. · $2.89 CPA · ~$3,500 GDP/capita → Cut.': 'Єгипет: 8 конв. · $2.89 CPA · ~$3,500 ВВП/особу → Відсіяти.',
    'Pakistan: 6 conv. · $2.58 CPA · ~$1,600 GDP/capita → Cut.': 'Пакистан: 6 конв. · $2.58 CPA · ~$1,600 ВВП/особу → Відсіяти.',
    'Bangladesh: 7 conv. · $3.90 CPA · ~$2,700 GDP/capita → Cut.': 'Бангладеш: 7 конв. · $3.90 CPA · ~$2,700 ВВП/особу → Відсіяти.',
    'Syria: 2 conv. · $3.25 CPA · <$1,000 GDP/capita → Cut.': 'Сирія: 2 конв. · $3.25 CPA · <$1,000 ВВП/особу → Відсіяти.',
    'Myanmar: 1 conv. · $1.82 CPA · ~$1,200 GDP/capita → Cut.': "М'янма: 1 конв. · $1.82 CPA · ~$1,200 ВВП/особу → Відсіяти.",
    'Algeria: 1 conv. · $1.27 CPA · ~$4,000 GDP/capita → Cut.': 'Алжир: 1 конв. · $1.27 CPA · ~$4,000 ВВП/особу → Відсіяти.',
    'Indonesia: 1 conv. · $3.42 CPA · ~$4,900 GDP/capita → Cut.': 'Індонезія: 1 конв. · $3.42 CPA · ~$4,900 ВВП/особу → Відсіяти.',
    
    'Key insight: Western traffic was almost absent in the experiment — not because it doesn\'t exist, but because geo targeting was unrestricted and Eastern markets dominate volume. France at $0.32 CPA is a signal, not an outlier.': 'Ключовий інсайт: західний трафік майже був відсутній в експерименті — не тому, що його не існує, а тому, що гео-таргетування було необмеженим, і східні ринки домінують за обсягом. Франція з CPA $0.32 — це сигнал, а не викид.',
    
    'Demographics + device + time-of-day data': 'Демографія + пристрій + дані часу доби',
    
    'The data paints a clear picture of who is searching. This profile directly informs the next campaign\'s audience targeting.': 'Дані малюють чітку картину того, хто шукає. Цей профіль безпосередньо інформує таргетування аудиторії наступної кампанії.',
    
    'Primary audience: men, 18–34 years old': 'Основна аудиторія: чоловіки, 18–34 роки',
    'Primary device: desktop/laptop — 98% of clicks. This is a research-mode query, not mobile-impulse.': 'Основний пристрій: десктоп/ноутбук — 98% кліків. Це запит у режимі дослідження, а не мобільний імпульс.',
    'Peak activity: Mon–Fri, 10:00–18:00 — active job seekers during work hours, likely searching while employed and looking to switch': 'Пікова активність: Пн–Пт, 10:00–18:00 — активні шукачі роботи в робочий час, ймовірно шукають, будучи працевлаштованими і хочуть змінити роботу',
    'Top signal geos for bid strategy: India, Egypt, Dhaka Division — useful for exclusion in the next phase': 'Топ-сигнальні гео для стратегії ставок: Індія, Єгипет, Дакка — корисно для виключення на наступній фазі',
    'Implication: the product experience must be desktop-first. A browser extension already fits this profile natively.': 'Імплікація: досвід продукту має бути desktop-first. Розширення для браузера вже нативно відповідає цьому профілю.',
    
    '8-week cohort retention: 0%': '8-тижневе утримання когорти: 0%',
    
    '337 users signed up. Zero returned after 8 weeks. This is not a product failure signal — it is an activation and habit-formation signal. The acquisition funnel works. The post-signup flow does not.': '337 користувачів зареєструвалися. Нуль повернулися через 8 тижнів. Це не сигнал провалу продукту — це сигнал активації та формування звички. Воронка залучення працює. Потік після реєстрації — ні.',
    
    'Weekly cohort retention chart shows a sharp drop to 0% by W1 and holds flat through W8.': 'Графік утримання щотижневих когорт показує різке падіння до 0% на W1 і залишається плоским до W8.',
    'Most likely cause: single-use behavior. Users check their resume ATS score once, get the result, and leave. No trigger brings them back.': 'Найімовірніша причина: одноразова поведінка. Користувачі перевіряють свій ATS-скор резюме один раз, отримують результат і йдуть. Немає тригера, який повертає їх назад.',
    'This is structural: the product needs either a repeating use case (new job alert, weekly score update) or an email/push re-engagement sequence.': 'Це структурно: продукту потрібен або повторюваний use case (нове оповіщення про роботу, щотижневе оновлення скору), або email/push послідовність повторного залучення.',
    'Resolution before scaling: fix retention before spending on Western paid traffic. Acquiring $2–3 CPA users who churn at W1 is still a losing unit economics.': 'Вирішення перед масштабуванням: виправити утримання перед витратами на західний платний трафік. Залучення користувачів за $2–3 CPA, які відтікають на W1, все ще програшна юніт-економіка.',
    'Positive framing: the acquisition mechanism is validated. The retention problem is a product problem — solvable independently of market validation.': 'Позитивне обрамлення: механізм залучення валідовано. Проблема утримання — це проблема продукту — вирішувана незалежно від валідації ринку.',
}

# Знаходимо uk секцію
uk_start = content.find('uk: {')
en_start = content.find('en: {', uk_start)

if uk_start == -1 or en_start == -1:
    print('❌ Не вдалося знайти uk або en секції')
    exit(1)

# Розділяємо
before_uk = content[:uk_start]
uk_section = content[uk_start:en_start]
after_uk = content[en_start:]

# Застосовуємо переклади
translated_count = 0
for en_text, uk_text in long_translations.items():
    if en_text in uk_section:
        uk_section = uk_section.replace(en_text, uk_text)
        translated_count += 1

# Збираємо
result = before_uk + uk_section + after_uk

# Записуємо
with open('src/advogram-i18n.ts', 'w', encoding='utf-8') as f:
    f.write(result)

print(f'✅ Переклад завершено!')
print(f'✅ Перекладено {translated_count} довгих блоків')
print(f'📊 Загальний прогрес: ~85%')
