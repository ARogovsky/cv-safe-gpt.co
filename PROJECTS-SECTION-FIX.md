# Исправление секции Projects в App.tsx

## Проблема
Секция Projects Grid (строки 2071-2412 в App.tsx) пытается отобразить проекты Santiago, которых больше нет в i18n.ts. Это вызывает ошибку:
```
Cannot read properties of undefined (reading 'name')
```

## Решение
Закомментировать всю секцию Projects Grid в App.tsx

### Шаг 1: Найти начало секции
Строка **2071**: `{/* Projects Grid with Dependency Lines */}`

### Шаг 2: Найти конец секции  
Строка **2412**: `})()}` (перед комментарием `{/* Claude Code Power User */}`)

### Шаг 3: Закомментировать
Заменить строки 2071-2412 на:

```tsx
{/* [PLACEHOLDER-FOR-REPLACE] Projects Grid with Dependency Lines */}
{/* COMMENTED OUT: This section displays Santiago's projects with dependency graph.
     Replace with Andrey's projects or create a simpler project list.
     
     Current projects in i18n.ts are ready:
     1. AI Tool Insights
     2. PerfectSquad  
     3. SmartCourses
     4. PII Removal
     5. offzmi
     6. GALA
     7. Advogram
     8. E-lli.com
     9. [PLACEHOLDER-FOR-REPLACE] Project 9
     
     To enable: uncomment this section and update project references below
*/}
```

## Что уже сделано

✅ **src/i18n.ts** - проекты Андрея добавлены:
- 8 проектов готовы с полными данными
- 1 placeholder для 9-го проекта
- agentInfra помечен как [PLACEHOLDER-FOR-REPLACE]
- saPlaybook помечен как [PLACEHOLDER-FOR-REPLACE]
- githubLink помечен как [PLACEHOLDER-FOR-REPLACE]

✅ **App.tsx строки 1985-2063** - секция AI Agent Infrastructure закомментирована

❌ **App.tsx строки 2071-2412** - секция Projects Grid НЕ закомментирована (слишком большая для strReplace)

## Альтернативное решение

Можно создать простой список проектов вместо сложного графа:

```tsx
{/* Simple Projects List */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {t.projects.items
    .filter(p => !p.title.includes('[PLACEHOLDER-FOR-REPLACE]'))
    .map((project, i) => (
      <AnimatedSection key={i} delay={0.1 + i * 0.05}>
        <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-200 h-full flex flex-col">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h4 className="font-display font-bold text-lg">{project.title}</h4>
            <span className="badge px-2 py-0.5 bg-primary/10 text-primary text-xs shrink-0">
              {project.badge}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-4 flex-1">{project.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t, j) => (
              <span key={j} className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-[10px]">
                {t}
              </span>
            ))}
          </div>
          {project.caseStudyUrl && (
            <Link
              to={project.caseStudyUrl}
              className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline mt-auto"
            >
              <FileText className="w-3.5 h-3.5" />
              {project.caseStudyLabel}
            </Link>
          )}
        </div>
      </AnimatedSection>
    ))}
</div>
```

## Статус

🔴 **ТРЕБУЕТСЯ РУЧНОЕ ИСПРАВЛЕНИЕ**

Файл App.tsx слишком большой для автоматической замены через strReplace.
Нужно вручную закомментировать строки 2071-2412 или заменить на простой список проектов.
