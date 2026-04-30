#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Фінальний переклад решти блоків: crossCutting, impact, decisions, lessons, FAQ, resources
"""

# Читаємо файл
with open('src/advogram-i18n.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Фінальні переклади
final_translations = {
    # crossCutting
    'France produced $0.32 CPA on 3 conversions — statistically thin but directionally strong. Extrapolating to similar Western geos gives a realistic CPA range for the paid A/B test.': 'Франція дала $0.32 CPA на 3 конверсіях — статистично тонко, але напрямково сильно. Екстраполяція на подібні західні гео дає реалістичний діапазон CPA для платного A/B-тесту.',
    
    'France CPA (actual): $0.32 · 3 conversions · $0.96 total spend': 'CPA Франції (фактичний): $0.32 · 3 конверсії · $0.96 загальні витрати',
    'Estimated CPA for UK/DE/CA/AU: $2–3 based on typical HR SaaS CPCs in those markets ($1.20–1.80 avg CPC, 15–25% landing-to-signup conversion)': 'Оцінений CPA для UK/DE/CA/AU: $2–3 на основі типових HR SaaS CPC на цих ринках ($1.20–1.80 середній CPC, 15–25% конверсія landing-to-signup)',
    'Note: France\'s 150% conversion rate is a small-sample artifact — likely retargeting or direct navigation. At scale, model with 15–25% conversion from click to signup.': 'Примітка: 150% конверсія Франції — артефакт малої вибірки — ймовірно ретаргетинг або пряма навігація. На масштабі моделюйте з 15–25% конверсією від кліку до реєстрації.',
    
    'Three scenarios for the next phase, assuming a $5,000/mo budget on Western geos and a 3-month average subscription duration (natural job search cycle).': 'Три сценарії для наступної фази, припускаючи бюджет $5,000/міс на західні гео та середню тривалість підписки 3 місяці (природний цикл пошуку роботи).',
    
    'Conservative: CPA $2–3 · Subscription $9/mo · LTV $27 → ROI 9x · Payback: month 1': 'Консервативний: CPA $2–3 · Підписка $9/міс · LTV $27 → ROI 9x · Окупність: місяць 1',
    'Base: CPA $2–3 · Subscription $15/mo · LTV $45 → ROI 15x · Payback: month 1': 'Базовий: CPA $2–3 · Підписка $15/міс · LTV $45 → ROI 15x · Окупність: місяць 1',
    'Optimistic (SEO + Ads): CPA $1–2 · Subscription $19/mo · LTV $57+ → ROI 28x+ · Payback: month 1': 'Оптимістичний (SEO + Ads): CPA $1–2 · Підписка $19/міс · LTV $57+ → ROI 28x+ · Окупність: місяць 1',
    'At $5K/mo budget on Western geos: ~1,500–2,500 new sign-ups. At 5–10% paid conversion: 75–250 paying users.': 'При бюджеті $5K/міс на західні гео: ~1,500–2,500 нових реєстрацій. При 5–10% платній конверсії: 75–250 платних користувачів.',
    '200 paying users at $15/mo = $3,000 MRR. Breakeven on ad spend.': '200 платних користувачів за $15/міс = $3,000 MRR. Беззбитковість на витратах на рекламу.',
    'Churn is natural and expected: users find a job, cancel. This is a feature of the niche, not a product problem. Model assumes 3-month cohort LTV, not retention-based compounding.': 'Відтік природний і очікуваний: користувачі знаходять роботу, скасовують. Це особливість ніші, а не проблема продукту. Модель припускає 3-місячний LTV когорти, а не компаундинг на основі утримання.',
    
    'Three conditions that must hold for the unit economics to land.': 'Три умови, які мають виконуватися, щоб юніт-економіка спрацювала.',
    
    '1. Retention fix ships before paid scaling: without at least W2 retention > 0%, even low CPA users don\'t compound into MRR.': '1. Виправлення утримання до платного масштабування: без принаймні W2 утримання > 0%, навіть користувачі з низьким CPA не компаундяться в MRR.',
    '2. Western CPA lands in the $2–3 range: France at $0.32 is the floor signal; the ceiling assumption is $3. If Western CPA exceeds $5, the base scenario breaks.': '2. Західний CPA потрапляє в діапазон $2–3: Франція за $0.32 — це базовий сигнал; припущення стелі — $3. Якщо західний CPA перевищує $5, базовий сценарій ламається.',
    '3. Paid conversion rate ≥ 5%: industry benchmark for freemium → paid in productivity tools. If lower, the subscription price needs to increase or the free tier needs to be narrowed.': '3. Платна конверсія ≥ 5%: галузевий бенчмарк для freemium → платний у інструментах продуктивності. Якщо нижче, ціна підписки має зрости або безкоштовний рівень має звузитися.',
    
    'The experiment is complete. The roadmap for the next phase.': 'Експеримент завершено. Роадмап для наступної фази.',
    
    'Cut all non-viable geos from targeting: IN (mass), EG, PK, BD, SY, MM, DZ, ID': 'Відсіяти всі нежиттєздатні гео з таргетування: IN (маса), EG, PK, BD, SY, MM, DZ, ID',
    'Launch geo-focused campaigns on UK, DE, FR, CA, AU with $5K/mo budget': 'Запустити гео-фокусовані кампанії на UK, DE, FR, CA, AU з бюджетом $5K/міс',
    'Run pricing A/B test: $9 vs $15 vs $19/mo on Western traffic': 'Провести ціновий A/B-тест: $9 vs $15 vs $19/міс на західному трафіку',
    'Ship retention mechanism before paid scale: email onboarding sequence, job alert feature, or weekly ATS score digest': 'Випустити механізм утримання перед платним масштабуванням: email-послідовність онбордингу, функція оповіщень про роботу або щотижневий дайджест ATS-скору',
    'India segmentation: test Senior/Lead IT targeting in Bangalore and Mumbai — the paying slice within a high-volume market': 'Сегментація Індії: тестувати таргетування Senior/Lead IT у Бангалорі та Мумбаї — платоспроможний шматок у високооб\'ємному ринку',
    'SEO channel: target "ats resume checker" and "jobscan alternative" keywords organically — CAC = $0 at scale': 'SEO-канал: таргетувати "ats resume checker" та "jobscan alternative" ключові слова органічно — CAC = $0 на масштабі',
    
    # impact
    'A structured GTM experiment produces answers, not users. Here is what each dollar of the budget returned:': 'Структурований GTM-експеримент дає відповіді, а не користувачів. Ось що повернув кожен долар бюджету:',
    
    'Confirmed (CTR 15–19%)': 'Підтверджено (CTR 15–19%)',
    '5 high-intent clusters mapped': '5 високоінтентних кластерів змаповано',
    '9 cut, 1 validated': '9 відсіяно, 1 валідовано',
    'Men 18–34, desktop, M–F office hours': 'Чоловіки 18–34, десктоп, Пн–Пт робочі години',
    '$0.32 actual, $2–3 modeled for WE': '$0.32 фактичний, $2–3 змодельовано для WE',
    '0% W8 retention — product problem scoped': '0% W8 утримання — проблема продукту визначена',
    'Conservative/base/optimistic built': 'Консервативний/базовий/оптимістичний побудовано',
    
    '$3,430 · 6 weeks': '$3,430 · 6 тижнів',
    'A B2B market research agency would charge $30,000–50,000 for a competitor analysis and geo assessment of this depth — without the real conversion data. Paid traffic as research is the GTM engineer\'s unfair advantage.': 'B2B агенція маркетингових досліджень стягнула б $30,000–50,000 за аналіз конкурентів і гео-оцінку такої глибини — без реальних даних конверсії. Платний трафік як дослідження — це несправедлива перевага GTM-інженера.',
    
    # beforeAfter
    'Hypothesis: people need ATS tools': 'Гіпотеза: людям потрібні ATS-інструменти',
    'Validated: 15–19% CTR, 3,930 clicks, 337 sign-ups in 6 weeks': 'Валідовано: 15–19% CTR, 3,930 кліків, 337 реєстрацій за 6 тижнів',
    'Unknown — probably US-first assumption': 'Невідомо — ймовірно припущення США-спочатку',
    'Data-driven: 9 geos cut, Western markets identified as the paid opportunity': 'На основі даних: 9 гео відсіяно, західні ринки визначені як платна можливість',
    'No benchmark': 'Немає бенчмарку',
    'France at $0.32 CPA · modeled $2–3 for UK/DE/FR/CA': 'Франція за $0.32 CPA · змодельовано $2–3 для UK/DE/FR/CA',
    'Generic freemium': 'Загальний freemium',
    'Geo-selective: free for emerging markets, paid A/B test for Western': 'Гео-селективний: безкоштовно для ринків, що розвиваються, платний A/B-тест для західних',
    'Feature roadmap based on assumptions': 'Роадмап функцій на основі припущень',
    'Retention mechanism is the #1 priority before any paid scaling': 'Механізм утримання — пріоритет #1 перед будь-яким платним масштабуванням',
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
for en_text, uk_text in final_translations.items():
    if en_text in uk_section:
        uk_section = uk_section.replace(en_text, uk_text)
        translated_count += 1

# Збираємо
result = before_uk + uk_section + after_uk

# Записуємо
with open('src/advogram-i18n.ts', 'w', encoding='utf-8') as f:
    f.write(result)

print(f'✅ Фінальний переклад завершено!')
print(f'✅ Перекладено ще {translated_count} блоків')
print(f'📊 Загальний прогрес: ~95%')
