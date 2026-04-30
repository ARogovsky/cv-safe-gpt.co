#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Повний переклад української версії в advogram-i18n.ts
Перекладає тільки uk секцію, залишає en без змін
"""

import re

# Читаємо файл
with open('src/advogram-i18n.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Словник перекладів (англійська -> українська)
translations = {
    # Основні заголовки та мітки
    "Experiment duration": "Тривалість експерименту",
    "Total ad spend": "Загальні витрати на рекламу",
    "Sign-ups": "Реєстрацій",
    "CPA in France": "CPA у Франції",
    "CTR on ATS keywords": "CTR на ATS-ключах",
    
    # whyCustom
    "Why Not Just Build and See What Happens?": "Чому не просто зробити і подивитися, що станеться?",
    "Three reasons to run a structured experiment before investing in growth:": "Три причини провести структурований експеримент перед інвестуванням у зростання:",
    "Niche validation risk": "Ризик валідації ніші",
    "Geo selection risk": "Ризик вибору гео",
    "Monetization risk": "Ризик монетизації",
    
    # overview
    "Experiment Setup": "Налаштування експерименту",
    "One Google Ads campaign. Unrestricted geo targeting. Conversion event: Advogram Screener sign-up. Six weeks of data collection.": "Одна кампанія Google Ads. Необмежене гео-таргетування. Подія конверсії: реєстрація в Advogram Screener. Шість тижнів збору даних.",
    "Total spend": "Загальні витрати",
    "Impressions": "Покази",
    "Clicks": "Кліки",
    "Conversions": "Конверсії",
    "Campaign": "Кампанія",
    "Keywords": "Ключові слова",
    "Conversion event": "Подія конверсії",
    "Performance window": "Вікно продуктивності",
    "Avg. CPC": "Середній CPC",
    "Optimization score": "Оцінка оптимізації",
    
    # e2eFlows
    "What the Data Showed": "Що показали дані",
    "Four findings, each actionable.": "Чотири висновки, кожен — дієвий.",
    "Finding 1 — The ATS Niche Is Real and Undersupplied": "Висновок 1 — Ніша ATS реальна і недостатньо забезпечена",
    "Finding 2 — 9 of 10 Organic Geos Are Non-Paying Markets": "Висновок 2 — 9 з 10 органічних гео — неплатоспроможні ринки",
    "Finding 3 — Audience Profile": "Висновок 3 — Профіль аудиторії",
    "Finding 4 — Retention Is the Next Problem to Solve": "Висновок 4 — Утримання — наступна проблема для вирішення",
    
    # crossCutting
    "Unit Economics Model": "Модель юніт-економіки",
    "Built from experiment data. Three scenarios for the next phase — paid traffic focused on UK, DE, FR, CA, AU.": "Побудовано на основі даних експерименту. Три сценарії для наступної фази — платний трафік зосереджений на UK, DE, FR, CA, AU.",
    "CPA Benchmark — France as the Floor": "Бенчмарк CPA — Франція як базовий рівень",
    "Scaling Scenarios": "Сценарії масштабування",
    "What Needs to Be True for This to Work": "Що має бути правдою, щоб це спрацювало",
    "Next Steps": "Наступні кроки",
    
    # impact
    "What $3,430 Bought": "Що купили за $3,430",
    "A structured GTM experiment produces answers, not users. Here is what each dollar of the budget returned:": "Структурований GTM-експеримент дає відповіді, а не користувачів. Ось що повернув кожен долар бюджету:",
    "Niche demand validation": "Валідація попиту в ніші",
    "Keyword cluster identification": "Ідентифікація кластерів ключових слів",
    "Geo screening (10 markets)": "Скринінг гео (10 ринків)",
    "Audience profile": "Профіль аудиторії",
    "CPA floor (France)": "Базовий CPA (Франція)",
    "Retention gap identification": "Ідентифікація розриву утримання",
    "Unit economics model": "Модель юніт-економіки",
    "Assumption": "Припущення",
    "Unknown": "Невідомо",
    "Hypothesis": "Гіпотеза",
    "None": "Немає",
    "Priceless": "Безцінно",
    "Shapes SEO roadmap": "Формує SEO-роадмап",
    "Saves wasted ad spend": "Економить марні витрати на рекламу",
    "Targeting precision": "Точність таргетування",
    "Unit econ foundation": "Основа юніт-економіки",
    "Prevents premature scaling": "Запобігає передчасному масштабуванню",
    "Fundraising / partner-ready": "Готово для фандрейзингу / партнерів",
    
    # beforeAfter
    "Before vs After the Experiment": "До і після експерименту",
    "Niche confidence": "Впевненість у ніші",
    "Geo targeting": "Гео-таргетування",
    "CPA model": "Модель CPA",
    "Monetization strategy": "Стратегія монетизації",
    "Product priorities": "Пріоритети продукту",
    
    # decisions
    "Decision Log": "Журнал рішень",
    "Every methodological choice has a rationale.": "Кожен методологічний вибір має обґрунтування.",
    "Why paid traffic instead of organic or cold outreach?": "Чому платний трафік замість органічного чи холодного аутріча?",
    "Why unrestricted geo targeting?": "Чому необмежене гео-таргетування?",
    "Why one campaign instead of multiple A/B tests?": "Чому одна кампанія замість кількох A/B-тестів?",
    "Why is 0% retention not a failure signal?": "Чому 0% утримання — це не сигнал провалу?",
    "Why France at $0.32 CPA and not the other way around?": "Чому Франція з CPA $0.32, а не навпаки?",
    "Why fix retention before scaling paid?": "Чому виправляти утримання перед масштабуванням платного?",
    
    # lessons
    "Takeaways": "Висновки",
    "Use paid traffic as a research tool, not just an acquisition channel.": "Використовуйте платний трафік як інструмент дослідження, а не лише канал залучення.",
    "High CTR is a stronger validation signal than high conversion.": "Високий CTR — сильніший сигнал валідації, ніж висока конверсія.",
    "Volume geos and paying geos are almost never the same.": "Об'ємні гео та платоспроможні гео майже ніколи не збігаються.",
    "Scope the retention problem before writing the growth roadmap.": "Визначте проблему утримання перед написанням роадмапу зростання.",
    
    # platformEvolution
    "Experiment Timeline": "Хронологія експерименту",
    "Six weeks from zero data to a validated GTM hypothesis.": "Шість тижнів від нульових даних до валідованої GTM-гіпотези.",
    "Campaign launch": "Запуск кампанії",
    "Peak sign-up week": "Пікова реєстрація",
    "Churn pattern emerges": "З'являється патерн відтоку",
    "Geo and keyword data matures": "Дані по гео та ключових словах дозрівають",
    "Campaign data cutoff": "Зріз даних кампанії",
    "Analysis complete": "Аналіз завершено",
    
    # replicability
    "Transferable Methodology": "Переносна методологія",
    "Developer tools": "Інструменти для розробників",
    "Productivity / career SaaS": "Продуктивність / кар'єрний SaaS",
    "Vertical B2B SaaS": "Вертикальний B2B SaaS",
    
    # cta
    "Building something and not sure which market to go after first?": "Будуєте щось і не впевнені, на який ринок йти спочатку?",
    "Let's talk": "Поговоримо",
    
    # faq
    "FAQ": "Часті питання",
    "Why not just target the US from the start?": "Чому не таргетувати США з самого початку?",
    "Is $3,430 a realistic budget for a validation experiment?": "Чи $3,430 — реалістичний бюджет для валідаційного експерименту?",
    "What does the 0% retention actually mean?": "Що насправді означає 0% утримання?",
    "Why France and not Germany or the UK?": "Чому Франція, а не Німеччина чи Великобританія?",
    "What is the product actually charging now?": "Скільки насправді коштує продукт зараз?",
    "How does this experiment feed into a fundraising narrative?": "Як цей експеримент вписується в наратив фандрейзингу?",
    
    # resources
    "Resources": "Ресурси",
    "Advogram — Open-source job search tools": "Advogram — Open-source інструменти пошуку роботи",
    "Google Ads — Campaign manager": "Google Ads — Менеджер кампаній",
    "Screener (Screener.so) — Product analytics": "Screener (Screener.so) — Продуктова аналітика",
    "DataForSEO — Keyword research API": "DataForSEO — API для дослідження ключових слів",
}

# Знаходимо uk секцію
uk_start = content.find('uk: {')
en_start = content.find('en: {', uk_start)

if uk_start == -1 or en_start == -1:
    print('❌ Не вдалося знайти uk або en секції')
    exit(1)

# Розділяємо на частини
before_uk = content[:uk_start]
uk_section = content[uk_start:en_start]
after_uk = content[en_start:]

# Застосовуємо переклади до uk секції
for en_text, uk_text in translations.items():
    # Екрануємо спецсимволи для regex
    en_escaped = re.escape(en_text)
    uk_section = re.sub(en_escaped, uk_text, uk_section)

# Збираємо назад
result = before_uk + uk_section + after_uk

# Записуємо
with open('src/advogram-i18n.ts', 'w', encoding='utf-8') as f:
    f.write(result)

print(f'✅ Переклад застосовано!')
print(f'✅ Перекладено {len(translations)} фраз')
print('⚠️  Перевірте файл — деякі довгі тексти потрібно перекласти вручну')
