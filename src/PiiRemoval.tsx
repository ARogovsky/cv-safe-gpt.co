import { type PiiRemovalLang as Lang } from './pii-removal-i18n'
import { buildJsonLdFromRegistry } from './articles/json-ld'
import { useArticleSeo } from './articles/use-article-seo'
import {
  ArticleLayout,
  ArticleHeader,
  ArticleFooter,
  FaqSection,
  MetricsGrid,
} from './articles/components'
import {
  H2,
  H3,
  Prose,
  Callout,
  CardStack,
  DataTable,
  StackGrid,
  FloatingToc,
} from './articles/content-types'
import { piiRemovalContent } from './pii-removal-i18n'

// ---------------------------------------------------------------------------
// buildJsonLd
// ---------------------------------------------------------------------------
function buildJsonLd(lang: Lang) {
  return buildJsonLdFromRegistry('pii-removal', lang, piiRemovalContent[lang])
}

// ===========================================================================
// MAIN COMPONENT
// ===========================================================================
export default function PiiRemoval({ lang = 'uk' }: { lang?: Lang }) {
  const t = piiRemovalContent[lang]

  useArticleSeo({
    lang,
    slug: t.slug,
    altSlug: t.altSlug,
    title: t.seo.title,
    description: t.seo.description,
    image: 'https://esupport.org.ua/pii-removal/og-pii-removal.webp',
    publishedTime: '2026-04-20',
    modifiedTime: '2026-04-28',
    articleTags: 'PII removal,RoBERTa,PyTorch,NER,Ukrainian NLP,knowledge distillation,MLOps',
    jsonLd: buildJsonLd(lang),
    xDefaultSlug: 'pii-removal-roberta-ukrainska',
  })

  const s = t.sections

  return (
    <ArticleLayout lang={lang}>
      <FloatingToc />
      <ArticleHeader
        lang={lang}
        kicker={t.header.kicker}
        h1={t.header.h1}
        subtitle={t.header.subtitle}
        date={t.header.date}
        dateISO="2026-04-20"
        dateModifiedISO="2026-04-28"
        readingTime={t.readingTime}
      />

      <MetricsGrid items={t.heroMetrics} columns={5} compact />
      <Callout className="bg-accent/10 border-accent/40">{t.tldr}</Callout>

      <article className="prose-custom">
        {/* ================================================================ */}
        {/*  CONTEXT                                                         */}
        {/* ================================================================ */}
        <H2 id="context">{s.context.heading}</H2>
        <Prose>{s.context.problem}</Prose>
        <Prose>{s.context.reason}</Prose>
        <Callout>{s.context.task}</Callout>

        {/* ================================================================ */}
        {/*  ROLE                                                            */}
        {/* ================================================================ */}
        <H2 id="role">{s.role.heading}</H2>
        <Prose>{s.role.intro}</Prose>

        <CardStack
          items={s.role.responsibilities.map(r => ({
            title: `${r.percentage} — ${r.title}`,
            body: r.desc,
          }))}
        />

        {/* ================================================================ */}
        {/*  TECHNICAL SOLUTION                                              */}
        {/* ================================================================ */}
        <H2 id="technical">{s.technical.heading}</H2>

        {s.technical.approaches.map((approach, i) => (
          <div key={i} className="mb-6">
            <H3>{approach.title}</H3>
            <Prose>{approach.desc}</Prose>
          </div>
        ))}

        {/* ================================================================ */}
        {/*  BENCHMARK RESULTS                                               */}
        {/* ================================================================ */}
        <H2 id="benchmark">{s.benchmark.heading}</H2>
        <Prose>{s.benchmark.intro}</Prose>

        <DataTable
          headers={[lang === 'uk' ? 'Категорія' : 'Category', lang === 'uk' ? 'Точність' : 'Accuracy']}
          rows={s.benchmark.categories.map(cat => [cat.name, cat.accuracy])}
          className="mb-6"
        />

        <Callout className="bg-primary/10 border-primary/40 font-semibold">
          {s.benchmark.overall}
        </Callout>

        <H3>{s.benchmark.comparison.heading}</H3>
        <DataTable
          headers={[lang === 'uk' ? 'Інструмент' : 'Tool', lang === 'uk' ? 'Точність' : 'Accuracy']}
          rows={s.benchmark.comparison.tools.map(tool => [tool.name, tool.accuracy])}
          className="mb-4"
        />
        <Callout className="bg-accent/10 border-accent/40">
          {s.benchmark.comparison.result}
        </Callout>

        {/* ================================================================ */}
        {/*  GAPS                                                            */}
        {/* ================================================================ */}
        <H2 id="gaps">{s.gaps.heading}</H2>

        {s.gaps.issues.map((issue, i) => (
          <div key={i} className="mb-6">
            <H3>{issue.title}</H3>
            <Prose>{issue.desc}</Prose>
          </div>
        ))}

        <Callout className="bg-primary/10 border-primary/40">
          {s.gaps.future}
        </Callout>

        {/* ================================================================ */}
        {/*  NEXT STEPS                                                      */}
        {/* ================================================================ */}
        <H2 id="next">{s.next.heading}</H2>
        <ul className="space-y-2 mb-8">
          {s.next.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* ================================================================ */}
        {/*  STACK                                                           */}
        {/* ================================================================ */}
        <H2 id="stack">{s.stack.heading}</H2>
        <StackGrid items={s.stack.items} />

        {/* ================================================================ */}
        {/*  FAQ                                                             */}
        {/* ================================================================ */}
        <FaqSection heading={t.faq.heading} items={t.faq.items} />
      </article>

      <ArticleFooter lang={lang} utmCampaign="pii-removal" />
    </ArticleLayout>
  )
}
