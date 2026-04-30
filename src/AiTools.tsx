import { type AiToolsLang as Lang } from './aitools-i18n'
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
import { aiToolsContent } from './aitools-i18n'

// ---------------------------------------------------------------------------
// buildJsonLd
// ---------------------------------------------------------------------------
function buildJsonLd(lang: Lang) {
  return buildJsonLdFromRegistry('ai-tools', lang, aiToolsContent[lang])
}

// ===========================================================================
// MAIN COMPONENT
// ===========================================================================
export default function AiTools({ lang = 'uk' }: { lang?: Lang }) {
  const t = aiToolsContent[lang]

  useArticleSeo({
    lang,
    slug: t.slug,
    altSlug: t.altSlug,
    title: t.seo.title,
    description: t.seo.description,
    image: 'https://esupport.org.ua/aitools/og-aitools.webp',
    publishedTime: '2026-03-30',
    modifiedTime: '2026-04-28',
    articleTags: 'AI tools,catalog,market research,Google Ads,Clerk,retention,AI development,GTM',
    jsonLd: buildJsonLd(lang),
    xDefaultSlug: 'ai-tools-katalog-doslidzhennia',
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
        dateISO="2026-03-30"
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
        <Prose>{s.what.tech}</Prose>

        {/* ================================================================ */}
        {/*  ROLE                                                            */}
        {/* ================================================================ */}
        <H2 id="role">{s.role.heading}</H2>
        <Prose>{s.role.description}</Prose>

        {/* ================================================================ */}
        {/*  GOAL                                                            */}
        {/* ================================================================ */}
        <H2 id="goal">{s.goal.heading}</H2>
        <Prose>{s.goal.intro}</Prose>

        {s.goal.objectives.map((obj, i) => (
          <div key={i} className="mb-6">
            <H3>{obj.title}</H3>
            <Prose>{obj.detail}</Prose>
          </div>
        ))}

        {/* ================================================================ */}
        {/*  TECHNICAL                                                       */}
        {/* ================================================================ */}
        <H2 id="technical">{s.technical.heading}</H2>

        {s.technical.items.map((item, i) => (
          <div key={i} className="mb-6">
            <H3>{item.title}</H3>
            <Prose>{item.detail}</Prose>
          </div>
        ))}

        {/* ================================================================ */}
        {/*  GOOGLE ADS DATA                                                 */}
        {/* ================================================================ */}
        <H2 id="google-ads">{s.googleAds.heading}</H2>
        <Prose className="text-muted-foreground italic">{s.googleAds.duration}</Prose>

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
        <div className="space-y-3 mb-8">
          {s.googleAds.topKeywords.items.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
              <span className="font-medium">{item.keyword}</span>
              <span className="text-primary font-bold">CTR {item.ctr}</span>
            </div>
          ))}
        </div>

        <H3>{s.googleAds.searchQueries.heading}</H3>
        <Prose>{s.googleAds.searchQueries.description}</Prose>
        <Callout className="bg-primary/10 border-primary/40">
          {s.googleAds.searchQueries.insight}
        </Callout>

        <H3>{s.googleAds.devices.heading}</H3>
        <Prose>{s.googleAds.devices.description}</Prose>

        <H3>{s.googleAds.demographics.heading}</H3>
        <Prose>{s.googleAds.demographics.description}</Prose>

        {/* ================================================================ */}
        {/*  SCREENER DATA                                                   */}
        {/* ================================================================ */}
        <H2 id="screener">{s.screener.heading}</H2>
        <div className="space-y-3 mb-6">
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

        <Callout className="bg-accent/10 border-accent/40">
          {s.screener.retentionInsight}
        </Callout>

        {/* ================================================================ */}
        {/*  ECONOMICS                                                       */}
        {/* ================================================================ */}
        <H2 id="economics">{s.economics.heading}</H2>

        <H3>{s.economics.cpa.heading}</H3>
        <Prose>{s.economics.cpa.calculation}</Prose>
        <Prose>{s.economics.cpa.realistic}</Prose>

        <H3>{s.economics.monetization.heading}</H3>
        <ul className="space-y-2 mb-8">
          {s.economics.monetization.items.map((item, i) => (
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
        {/*  NEXT STEPS                                                      */}
        {/* ================================================================ */}
        <H2 id="next">{s.nextSteps.heading}</H2>

        <H3>{s.nextSteps.claiming.title}</H3>
        <Prose>{s.nextSteps.claiming.detail}</Prose>

        <H3>{s.nextSteps.insights.title}</H3>
        <Prose>{s.nextSteps.insights.detail}</Prose>

        <H3>{s.nextSteps.revenue.title}</H3>
        <Prose>{s.nextSteps.revenue.detail}</Prose>

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

      <ArticleFooter lang={lang} utmCampaign="aitools" />
    </ArticleLayout>
  )
}
