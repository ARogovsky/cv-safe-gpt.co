import { type OffzmiLang as Lang } from './offzmi-i18n'
import { buildJsonLdFromRegistry } from './articles/json-ld'
import { useArticleSeo } from './articles/use-article-seo'
import {
  ArticleLayout,
  ArticleHeader,
  ArticleFooter,
  FaqSection,
  LessonsSection,
  MetricsGrid,
  StatusBadge,
  CaseStudyCta,
} from './articles/components'
import {
  H2,
  H3,
  Prose,
  Callout,
  CardStack,
  StepList,
  CodeBlock,
  DataTable,
  Timeline,
  FloatingToc,
} from './articles/content-types'
import { offzmiContent } from './offzmi-i18n'

function buildJsonLd(lang: Lang) {
  return buildJsonLdFromRegistry('offzmi', lang, offzmiContent[lang])
}

export default function Offzmi({ lang = 'uk' }: { lang?: Lang }) {
  const t = offzmiContent[lang]

  useArticleSeo({
    lang,
    slug: t.slug,
    altSlug: t.altSlug,
    title: t.seo.title,
    description: t.seo.description,
    image: 'https://esupport.org.ua/offzmi/og-offzmi-gtm.webp',
    publishedTime: '2026-04-27',
    modifiedTime: '2026-04-27',
    articleTags: 'GTM,AI,MCP-browser,niche discovery,Google Ads,unit economics,offzmi',
    jsonLd: buildJsonLd(lang),
    xDefaultSlug: 'offzmi-gtm-doslidzhennia',
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
        dateISO="2026-04-27"
        dateModifiedISO="2026-04-27"
        readingTime={t.readingTime}
      />

      <StatusBadge text={t.header.badge} />
      <MetricsGrid items={t.heroMetrics} columns={5} compact />
      <Callout className="bg-accent/10 border-accent/40">{t.tldr}</Callout>

      <Prose>{t.intro.hook}</Prose>
      <Prose>{t.intro.body}</Prose>

      {/* Genesis */}
      <H2 id="genesis">{s.genesis.heading}</H2>
      <Callout>{s.genesis.hook}</Callout>
      <Prose>{s.genesis.firstCommit}</Prose>
      <CodeBlock code={s.genesis.code} caption={s.genesis.codeCaption} />
      <Callout>{s.genesis.punchline}</Callout>

      {/* Evolution */}
      <H2 id="evolution">{s.evolution.heading}</H2>
      <Timeline items={s.evolution.timeline} />
      <Callout>{s.evolution.callout}</Callout>
      
      <H3 id="before-after">{s.evolution.beforeAfter.heading}</H3>
      <DataTable
        headers={s.evolution.beforeAfter.headers}
        rows={s.evolution.beforeAfter.rows}
      />

      {/* Architecture */}
      <H2 id="architecture">{s.architecture.heading}</H2>
      <Prose>{s.architecture.body}</Prose>
      <CardStack items={s.architecture.layers} />
      
      <H3 id="lifecycle">{s.architecture.lifecycleHeading}</H3>
      <DataTable
        headers={s.architecture.lifecycle.headers}
        rows={s.architecture.lifecycle.rows}
      />

      {/* How It Was Built */}
      <H2 id="how-it-was-built">{s.howItWasBuilt.heading}</H2>
      <Prose>{s.howItWasBuilt.intro}</Prose>
      <Prose>{s.howItWasBuilt.narrative}</Prose>
      {s.howItWasBuilt.phases.map((phase, i) => (
        <div key={i}>
          <H3 id={`phase-${i + 1}`}>{phase.title}</H3>
          <Prose className="text-muted-foreground italic">{phase.subtitle}</Prose>
          <StepList items={phase.items} />
        </div>
      ))}

      {/* E2E Flows / Findings */}
      <H2 id="findings">{s.e2eFlows.heading}</H2>
      <Prose>{s.e2eFlows.body}</Prose>
      <CardStack items={s.e2eFlows.items} />

      {/* Unit Economics */}
      <H2 id="unit-economics">{s.crossCutting.heading}</H2>
      <Prose>{s.crossCutting.body}</Prose>
      <CardStack items={s.crossCutting.items} />

      {/* Impact */}
      <H2 id="impact">{s.impact.heading}</H2>
      <Prose>{s.impact.body}</Prose>
      <DataTable
        headers={[lang === 'uk' ? 'Модуль' : 'Module', lang === 'uk' ? 'До' : 'Before', lang === 'uk' ? 'Після' : 'After', lang === 'uk' ? 'Вплив' : 'Impact']}
        rows={s.impact.savings.map(item => [item.module, item.before, item.after, item.monthly])}
      />
      <Callout className="text-center font-semibold">{s.impact.total}</Callout>
      <Callout>{s.impact.punchline}</Callout>

      {/* Before/After Summary */}
      <H2 id="before-after-summary">{s.beforeAfter.heading}</H2>
      <DataTable
        headers={[lang === 'uk' ? 'Область' : 'Area', lang === 'uk' ? 'До' : 'Before', lang === 'uk' ? 'Після' : 'After']}
        rows={s.beforeAfter.items.map(item => [item.area, item.before, item.after])}
      />

      {/* Decisions */}
      <H2 id="decisions">{s.decisions.heading}</H2>
      <Prose>{s.decisions.body}</Prose>
      <CardStack items={s.decisions.items.map(item => ({ name: item.title, summary: item.detail }))} />

      {/* Lessons */}
      <LessonsSection heading={s.lessons.heading} items={s.lessons.items} />

      {/* Timeline */}
      <H2 id="timeline">{s.platformEvolution.heading}</H2>
      <Prose className="text-lg text-muted-foreground italic">{s.platformEvolution.tagline}</Prose>
      {s.platformEvolution.bridge.map((line, i) => (
        <Prose key={i} dangerouslySetInnerHTML={{ __html: line }} />
      ))}
      <Timeline items={s.platformEvolution.steps} />

      {/* Replicability */}
      <H2 id="replicability">{s.replicability.heading}</H2>
      <Prose>{s.replicability.body}</Prose>
      <CardStack items={s.replicability.examples.map(ex => ({ name: ex.domain, summary: ex.detail }))} />
      <Prose>{s.replicability.closing}</Prose>

      {/* CTA */}
      <CaseStudyCta
        heading={t.cta.heading}
        body={t.cta.body}
        ctaLabel={t.cta.label}
        ctaHref="mailto:esupport@esupport.org.ua?subject=offzmi GTM Experiment"
      />

      {/* FAQ */}
      <FaqSection heading={t.faq.heading} items={t.faq.items} />

      {/* Resources */}
      <H2 id="resources">{t.resources.heading}</H2>
      <ul className="space-y-2">
        {t.resources.items.map((item, i) => (
          <li key={i}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              {item.label} →
            </a>
          </li>
        ))}
      </ul>

      <ArticleFooter lang={lang} utmCampaign="offzmi-gtm" />
    </ArticleLayout>
  )
}
