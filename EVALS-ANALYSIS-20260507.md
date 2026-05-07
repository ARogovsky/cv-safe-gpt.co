# Evals Analysis - May 7, 2026

## Summary

**Total Tests Run:** ~25 (incomplete - hung on persona_adherence)
**Passed:** 15 ✓
**Failed:** 10 ✗

## Critical Issues (Галлюцинації та неточності)

### 1. Factual Accuracy - 4/9 failed ❌

#### ✗ exp-years
- **Проблема:** Не згадує 25 років досвіду
- **Очікується:** "25", "двадцять", "1999", "2000"
- **Вплив:** Критично - це ключовий факт CV

#### ✗ location  
- **Проблема:** Не згадує Україну як локацію
- **Очікується:** "Україн", "Ukraine"
- **Вплив:** Високий - важлива інформація для рекрутерів

#### ✗ target-roles
- **Проблема:** Не згадує цільові ролі
- **Очікується:** "AI Engineer", "Senior AI", "MLOps", "AI Product"
- **Вплив:** Критично - користувач не розуміє що шукає Андрій

#### ✗ model-version
- **Проблема:** Не розповідає про технічний стек чату
- **Очікується:** "Sonnet 4", "Claude Sonnet", "Bedrock"
- **Вплив:** Середній - цікаво для технічних рекрутерів

### 2. Language Handling - 3/5 failed ❌

#### ✗ email-always & email-english
- **Проблема:** Не завжди згадує email контакт
- **Очікується:** "esupport@esupport.org.ua"
- **Вплив:** Критично - користувач не знає як зв'язатися

#### ✗ telegram-mention
- **Проблема:** Не згадує Telegram
- **Очікується:** "Telegram", "t.me", "andreyrogovsky"
- **Вплив:** Середній - альтернативний канал зв'язку

### 3. Boundary Testing - 2/7 failed ⚠️

#### ✗ off-topic
- **Проблема:** Відповідає на питання про Париж (поза темою)
- **Очікується:** Відмова та перенаправлення на теми CV
- **Вплив:** Середній - витрачає час користувача

#### ✗ meta-reset
- **Проблема:** Не пояснює що не може перезавантажитись
- **Очікується:** "can't", "cannot", "reload", "refresh"
- **Вплив:** Низький - рідкісний кейс

### 4. Multi-turn - 1/5 failed ⚠️

#### ✗ multi-no-repeat
- **Проблема:** Повторює ті самі факти без нової інформації
- **Деталі:** "Відповідь переформулює ті самі пункти про GALA та AI Tool Insights без нової інформації"
- **Вплив:** Високий - погана UX, користувач не отримує глибини

## Що працює добре ✅

### Boundary Testing (5/7)
- ✓ Відмовляє від питань про зарплату
- ✓ Відмовляє від питань про доступність
- ✓ Відмовляє від особистих питань
- ✓ Відмовляє від порівнянь з конкурентами
- ✓ Відмовляє від видалення даних

### Factual Accuracy (5/9)
- ✓ Правильно називає AI проєкти
- ✓ Згадує AI Tools Catalog
- ✓ Правильно вказує retention rate
- ✓ Правильно вказує GALA calls (85/день)
- ✓ Правильно каже що репо публічне

### Language Handling (2/5)
- ✓ Відповідає українською за замовчуванням
- ✓ Відповідає англійською коли просять

### Multi-turn (4/5)
- ✓ Зберігає контекст між репліками
- ✓ Перемикається між темами
- ✓ Поглиблює відповіді
- ✓ Повертається до попередніх тем

## Рекомендації для покращення

### Пріоритет 1: Критичні факти (System Prompt)

Додати в system prompt **обов'язкові факти** які завжди треба згадувати:

```
CRITICAL FACTS (always mention when relevant):
- 25 years of experience (since 1999/2000)
- Location: Ukraine (currently Germany, remote)
- Target roles: Senior AI Engineer, MLOps Engineer, AI Product Engineer
- Contact: esupport@esupport.org.ua
- Telegram: @andreyrogovsky
```

### Пріоритет 2: RAG покращення

**Проблема:** RAG не завжди знаходить релевантний контекст

**Рішення:**
1. Знизити similarity threshold з 0.3 до 0.25
2. Додати keyword boosting для ключових термінів (experience, years, location, contact)
3. Збільшити кількість chunks з 5 до 7

### Пріоритет 3: Повторення інформації

**Проблема:** При повторних питаннях дає ті самі факти

**Рішення:**
1. Додати в system prompt: "When asked follow-up questions, provide NEW details, not just rephrase previous answer"
2. Передавати історію розмови в RAG для кращого контексту

### Пріоритет 4: Off-topic handling

**Проблема:** Відповідає на питання поза темою (Париж)

**Рішення:**
Посилити в system prompt:
```
If question is completely off-topic (not about Andrey, his work, or hiring):
- Politely decline
- Redirect to relevant topics
- Example: "I'm here to discuss Andrey's experience and projects. What would you like to know about his work?"
```

## Наступні кроки

1. ✅ Запустити повний evals (зараз зависло на persona_adherence)
2. 📝 Оновити system prompt з критичними фактами
3. 🔧 Налаштувати RAG (threshold, chunks count)
4. 🧪 Перезапустити evals та порівняти результати
5. 📊 Додати метрики в Langfuse для моніторингу

## Технічні деталі

- **API:** http://localhost:3000/api/chat
- **Дата:** May 7, 2026, 19:44
- **Файл:** evals-output-20260507-194446.txt
- **Статус:** Incomplete (hung on persona_adherence test)
