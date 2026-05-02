import { type PerfectSquadLang as Lang } from './perfectsquad-i18n'
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
  DataTable,
  StackGrid,
  FloatingToc,
} from './articles/content-types'
import { perfectSquadContent } from './perfectsquad-i18n'

// ---------------------------------------------------------------------------
// buildJsonLd
// ---------------------------------------------------------------------------
function buildJsonLd(lang: Lang) {
  return buildJsonLdFromRegistry('perfectsquad', lang, perfectSquadContent[lang])
}

// ===========================================================================
// MAIN COMPONENT
// ===========================================================================
export default function PerfectSquad({ lang = 'uk' }: { lang?: Lang }) {
  const t = perfectSquadContent[lang]

  useArticleSeo({
    lang,
    slug: t.slug,
    altSlug: t.altSlug,
    title: t.seo.title,
    description: t.seo.description,
    image: 'https://esupport.org.ua/perfectsquad/og-perfectsquad.webp',
    publishedTime: '2026-01-23',
    modifiedTime: '2026-04-28',
    articleTags: 'Gaming,Google Ads,AI,GTM,geo-targeting,CPA optimization,ad generator',
    jsonLd: buildJsonLd(lang),
    xDefaultSlug: 'perfectsquad-gaming-traffic',
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
        dateISO="2026-01-23"
        dateModifiedISO="2026-04-28"
        readingTime={t.readingTime}
      />

      <MetricsGrid items={t.heroMetrics} columns={5} compact />
      <Callout className="bg-accent/10 border-accent/40">{t.tldr}</Callout>

      <article className="prose-custom">
        {/* ================================================================ */}
        {/*  WHAT                                                            */}
        {/* ================================================================ */}
        <H2 id="what">{s.what.heading}</H2>
        <Prose>{s.what.product}</Prose>
        <Prose>{s.what.platform}</Prose>

        {/* ================================================================ */}
        {/*  GOAL                                                            */}
        {/* ================================================================ */}
        <H2 id="goal">{s.goal.heading}</H2>
        <Prose>{s.goal.intro}</Prose>
        <Callout className="bg-primary/10 border-primary/40 font-semibold">
          {s.goal.question}
        </Callout>
        <Prose>{s.goal.explanation}</Prose>

        {/* ================================================================ */}
        {/*  TECHNICAL                                                       */}
        {/* ================================================================ */}
        <H2 id="technical">{s.technical.heading}</H2>
        <Prose>{s.technical.desc}</Prose>

        {/* ================================================================ */}
        {/*  GOOGLE ADS DATA                                                 */}
        {/* ================================================================ */}
        <H2 id="google-ads">{s.googleAds.heading}</H2>

        <H3>{s.googleAds.overall.heading}</H3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {s.googleAds.overall.metrics.map((metric, i) => (
            <div key={i} className="p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        <H3>{s.googleAds.campaigns.heading}</H3>
        <DataTable
          headers={[lang === 'uk' ? 'Кампанія' : 'Campaign', lang === 'uk' ? 'Витрати' : 'Spent', lang === 'uk' ? 'Кліки' : 'Clicks', 'CTR']}
          rows={s.googleAds.campaigns.items.map(c => [c.name, c.spent, c.clicks, c.ctr])}
          className="mb-8"
        />

        <H3>{s.googleAds.leadFunnel.heading}</H3>
        <div className="space-y-3 mb-8">
          {s.googleAds.leadFunnel.items.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
              <span className="font-medium">{item.label}</span>
              <span className="text-primary font-bold">{item.value}</span>
            </div>
          ))}
        </div>

        <H3>{s.googleAds.topKeywords.heading}</H3>
        <DataTable
          headers={[lang === 'uk' ? 'Ключове слово' : 'Keyword', lang === 'uk' ? 'Витрати' : 'Spent', lang === 'uk' ? 'Кліки' : 'Clicks', 'CTR']}
          rows={s.googleAds.topKeywords.items.map(k => [k.keyword, k.spent, k.clicks, k.ctr])}
          className="mb-8"
        />

        <H3>{s.googleAds.searchQueries.heading}</H3>
        <Prose>{s.googleAds.searchQueries.desc}</Prose>

        {/* ================================================================ */}
        {/*  SCREENER DATA                                                   */}
        {/* ================================================================ */}
        <H2 id="screener">{s.screener.heading}</H2>
        <div className="space-y-3 mb-8">
          {s.screener.metrics.map((metric, i) => (
            <div key={i} className="p-4 rounded-lg bg-card border border-border">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-foreground">{metric.label}</span>
                <span className="text-primary font-bold">{metric.value}</span>
              </div>
              {metric.desc && <p className="text-sm text-muted-foreground">{metric.desc}</p>}
            </div>
          ))}
        </div>

        {/* ================================================================ */}
        {/*  GEO INSIGHTS                                                    */}
        {/* ================================================================ */}
        <H2 id="geo-insights">{s.geoInsights.heading}</H2>

        <H3>{s.geoInsights.bidSignals.heading}</H3>
        <ul className="space-y-2 mb-8">
          {s.geoInsights.bidSignals.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <H3>{s.geoInsights.networks.heading}</H3>
        <Prose>{s.geoInsights.networks.desc}</Prose>

        <H3>{s.geoInsights.demographics.heading}</H3>
        <Prose>{s.geoInsights.demographics.desc}</Prose>

        {/* ================================================================ */}
        {/*  GEO MAP                                                         */}
        {/* ================================================================ */}
        <H2 id="geo-map">{s.geoMap.heading}</H2>
        <Prose>{s.geoMap.intro}</Prose>

        <DataTable
          headers={[lang === 'uk' ? 'Геолокація' : 'Geo', lang === 'uk' ? 'Тип трафіку' : 'Traffic Type', lang === 'uk' ? 'Відносний CPC' : 'Relative CPC', lang === 'uk' ? 'Висновок' : 'Conclusion']}
          rows={s.geoMap.markets.map(m => [m.geo, m.traffic, m.cpc, m.conclusion])}
          className="mb-6"
        />

        <Callout className="bg-accent/10 border-accent/40">
          {s.geoMap.keyInsight}
        </Callout>

        {/* ================================================================ */}
        {/*  ECONOMICS                                                       */}
        {/* ================================================================ */}
        <H2 id="economics">{s.economics.heading}</H2>

        <H3>{s.economics.current.heading}</H3>
        <Prose>{s.economics.current.desc}</Prose>

        <H3>{s.economics.expected.heading}</H3>
        <Prose>{s.economics.expected.desc}</Prose>
        <ul className="space-y-2 mb-8">
          {s.economics.expected.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* ================================================================ */}
        {/*  PROVEN                                                          */}
        {/* ================================================================ */}
        <H2 id="proven">{s.proven.heading}</H2>

        {s.proven.items.map((item, i) => (
          <div key={i} className="mb-6">
            <H3>{item.title}</H3>
            <Prose>{item.desc}</Prose>
          </div>
        ))}

        {/* ================================================================ */}
        {/*  STACK                                                           */}
        {/* ================================================================ */}
        <H2 id="stack">{s.stack.heading}</H2>
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
        }))} />

        {/* ================================================================ */}
        {/*  FAQ                                                             */}
        {/* ================================================================ */}
        <FaqSection heading={t.faq.heading} items={t.faq.items} />
      </article>

      <ArticleFooter lang={lang} utmCampaign="perfectsquad" />
    </ArticleLayout>
  )
}
