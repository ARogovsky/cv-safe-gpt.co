import { type GalaLang as Lang } from './gala-i18n'
import { buildJsonLdFromRegistry } from './articles/json-ld'
import { useArticleSeo } from './articles/use-article-seo'
import { getTechIcon } from './tech-icons'
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
  StepList,
  DataTable,
  StackGrid,
  FloatingToc,
} from './articles/content-types'
import { galaContent } from './gala-i18n'

// ---------------------------------------------------------------------------
// buildJsonLd
// ---------------------------------------------------------------------------
function buildJsonLd(lang: Lang) {
  return buildJsonLdFromRegistry('gala', lang, galaContent[lang])
}

// ===========================================================================
// MAIN COMPONENT
// ===========================================================================
export default function Gala({ lang = 'uk' }: { lang?: Lang }) {
  const t = galaContent[lang]

  useArticleSeo({
    lang,
    slug: t.slug,
    altSlug: t.altSlug,
    title: t.seo.title,
    description: t.seo.description,
    image: 'https://esupport.org.ua/gala/og-gala.webp',
    publishedTime: '2026-04-16',
    modifiedTime: '2026-04-28',
    articleTags: 'B2B lead generation,RoBERTa,PyTorch,autonomous agent,form filling,Playwright',
    jsonLd: buildJsonLd(lang),
    xDefaultSlug: 'gala-b2b-lidogeneratsiya',
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
        dateISO="2026-04-16"
        dateModifiedISO="2026-04-28"
        readingTime={t.readingTime}
      />

      <MetricsGrid items={t.heroMetrics} columns={5} compact />
      <Callout className="bg-accent/10 border-accent/40">{t.tldr}</Callout>

      <article className="prose-custom">
        {/* ================================================================ */}
        {/*  INTRO                                                           */}
        {/* ================================================================ */}
        <Prose variant="hook">{s.intro.hook}</Prose>
        <Prose>{s.intro.body}</Prose>

        {/* ================================================================ */}
        {/*  MAIN RESULT                                                     */}
        {/* ================================================================ */}
        <H2 id="main-result">{s.mainResult.heading}</H2>
        <Prose>{s.mainResult.body}</Prose>
        <MetricsGrid items={s.mainResult.metrics} columns={4} />

        {/* ================================================================ */}
        {/*  GA4 DATA                                                        */}
        {/* ================================================================ */}
        <H2 id="ga4-data">{s.ga4Data.heading}</H2>
        <Prose>{s.ga4Data.body}</Prose>

        <H3>{s.ga4Data.traffic.heading}</H3>
        <StepList items={s.ga4Data.traffic.items.map(item => ({
          label: item.source,
          detail: `${item.value} — ${item.desc}`,
        }))} />

        <H3>{s.ga4Data.geo.heading}</H3>
        <Prose>{s.ga4Data.geo.body}</Prose>

        <H3>{s.ga4Data.pages.heading}</H3>
        <div className="space-y-3 mb-6">
          {s.ga4Data.pages.items.map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-card border border-border">
              <p className="font-medium text-foreground mb-2">{item.page}</p>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>{item.users} users</span>
                {'events' in item && <span>{item.events} events</span>}
                <span>bounce: {item.bounce}</span>
              </div>
              {'note' in item && item.note && <p className="text-sm text-muted-foreground italic mt-2">{item.note}</p>}
            </div>
          ))}
        </div>

        {/* ================================================================ */}
        {/*  RETENTION                                                       */}
        {/* ================================================================ */}
        <H2 id="retention">{s.retention.heading}</H2>
        <Prose>{s.retention.body}</Prose>
        <Callout>{s.retention.callout}</Callout>

        {/* ================================================================ */}
        {/*  ECONOMICS                                                       */}
        {/* ================================================================ */}
        <H2 id="economics">{s.economics.heading}</H2>
        <Prose>{s.economics.body}</Prose>
        <DataTable
          headers={[...s.economics.comparison.headers]}
          rows={s.economics.comparison.rows.map(r => [...r])}
          highlightColumn={2}
        />

        {/* ================================================================ */}
        {/*  TECHNICAL                                                       */}
        {/* ================================================================ */}
        <H2 id="technical">{s.technical.heading}</H2>
        <Prose>{s.technical.body}</Prose>
        <CardStack items={s.technical.classes.map(c => ({
          title: c.name,
          detail: c.desc,
        }))} />
        <Callout>{s.technical.result}</Callout>

        {/* ================================================================ */}
        {/*  MONETIZATION                                                    */}
        {/* ================================================================ */}
        <H2 id="monetization">{s.monetization.heading}</H2>
        <StepList items={s.monetization.tiers.map(tier => ({
          label: tier.name,
          detail: tier.price,
        }))} />

        {/* ================================================================ */}
        {/*  NEXT                                                            */}
        {/* ================================================================ */}
        <H2 id="next">{s.next.heading}</H2>
        <ul className="space-y-2 mb-6">
          {s.next.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-primary mt-1">→</span>
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>

        {/* ================================================================ */}
        {/*  STACK                                                           */}
        {/* ================================================================ */}
        <H3>{s.stack.heading}</H3>
        <StackGrid items={s.stack.items.map(item => ({
          icon: getTechIcon(item.name) ? (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor" style={{ color: getTechIcon(item.name)!.color }}>
              <path d={getTechIcon(item.name)!.path} />
            </svg>
          ) : (
            <span className="w-8 h-8 flex items-center justify-center text-lg font-bold text-primary">{item.name[0]}</span>
          ),
          name: item.name,
          desc: item.role,
        }))} columns={3} />

        {/* ================================================================ */}
        {/*  FAQ                                                             */}
        {/* ================================================================ */}
        <FaqSection heading={t.faq.heading} items={t.faq.items} />
      </article>

      <ArticleFooter lang={lang} utmCampaign="gala" />
    </ArticleLayout>
  )
}
