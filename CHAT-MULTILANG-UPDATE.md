# Chat Multilingual Support

## Зміни

### Автоматичне визначення мови чату по URL

Чат тепер автоматично визначає мову на основі URL сторінки:

- **Українська** (`uk`) - для всіх сторінок за замовчуванням:
  - `/` - головна
  - `/about` - про мене
  - `/perfectsquad-gaming-traffic` - проєкти українською
  - `/privacidad` - політика конфіденційності
  
- **Англійська** (`en`) - для сторінок з `-en` суфіксом або `/en`:
  - `/en` - головна англійською
  - `/about-en` - про мене англійською
  - `/perfectsquad-gaming-traffic-en` - проєкти англійською
  - `/privacy` - privacy policy

### Технічна реалізація

**Файл:** `src/main.tsx`

```typescript
function GlobalChat() {
  const { pathname } = useLocation()
  
  // Determine chat language from URL:
  // - /en or /-en suffix → English
  // - All other pages → Ukrainian
  const lang: 'uk' | 'en' = pathname === '/en' || pathname.endsWith('-en') || pathname.startsWith('/en/') 
    ? 'en' 
    : 'uk'

  return (
    <ChatErrorBoundary>
      <Suspense fallback={null}>
        <FloatingChat lang={lang} />
      </Suspense>
    </ChatErrorBoundary>
  )
}
```

### Переклади

Всі переклади чату знаходяться в `src/i18n.ts`:

**Українська (`translations.uk.chat`):**
- Привітання: "Привіт! Я **@esupport**. Запитуйте що завгодно..."
- Placeholder: "Напишіть ваше запитання..."
- Підказки: "Досвід з AI", "Топ проєкти", "Чому найняти його?", "Контакт"
- Голосовий режим: "Поговорити з Santi", "Слухаю...", "Думаю...", тощо

**Англійська (`translations.en.chat`):**
- Greeting: "Hi! I'm **@esupport**. Ask me anything..."
- Placeholder: "Type your question..."
- Prompts: "AI Experience", "Top Projects", "Why hire him?", "Contact"
- Voice mode: "Talk to Santi", "Listening...", "Thinking...", etc.

### API

Backend (`/api/chat`) отримує параметр `lang` і використовує його для:

1. **System prompt** - інструкція моделі відповідати відповідною мовою
2. **Помилки** - повідомлення про помилки відповідною мовою
3. **RAG** - пошук в базі даних з урахуванням мови

### Тестування

**Локально:**
```bash
# Відкрити http://localhost:3000/ - чат українською
# Відкрити http://localhost:3000/en - чат англійською
# Відкрити http://localhost:3000/perfectsquad-gaming-traffic - українською
# Відкрити http://localhost:3000/perfectsquad-gaming-traffic-en - англійською
```

**Production:**
```bash
# https://cv-safe-gpt-co.vercel.app/ - українською
# https://cv-safe-gpt-co.vercel.app/en - англійською
```

### Майбутні покращення (опціонально)

Якщо потрібно більше контролю:

1. **Кнопка перемикання мови** в header чату
2. **Збереження вибору** в localStorage
3. **Можливість змінити мову** незалежно від URL

Поки що автоматичне визначення по URL покриває 95% use cases.

## Commit

```bash
git add src/main.tsx
git commit -m "Add multilingual chat support based on URL

- Ukrainian (uk) for default pages (/, /about, /project-name)
- English (en) for -en suffix pages (/en, /about-en, /project-name-en)
- Automatic language detection from pathname
- All translations already exist in src/i18n.ts"
```
