import { type SmartCoursesLang as Lang } from './smartcourses-i18n'
import { buildJsonLdFromRegistry } from './articles/json-ld'
import { useArticleSeo } from './articles/use-article-seo'
import { getTechIcon } from './tech-icons'
import { getBrandLogo } from './brand-logos'
import {
  ArticleLayout,
  ArticleHeader,
  ArticleFooter,
  FaqSection,
  ResourcesList,
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
import { smartCoursesContent } from './smartcourses-i18n'

// ---------------------------------------------------------------------------
// buildJsonLd
// ---------------------------------------------------------------------------
function buildJsonLd(lang: Lang) {
  return buildJsonLdFromRegistry('smartcourses', lang, smartCoursesContent[lang])
}

// ===========================================================================
// MAIN COMPONENT
// ===========================================================================
export default function SmartCourses({ lang = 'uk' }: { lang?: Lang }) {
  const t = smartCoursesContent[lang]

  useArticleSeo({
    lang,
    slug: t.slug,
    altSlug: t.altSlug,
    title: t.seo.title,
    description: t.seo.description,
    image: 'https://esupport.org.ua/smartcourses/og-smartcourses.webp',
    publishedTime: '2026-04-25',
    modifiedTime: '2026-04-28',
    articleTags: 'EdTech,Google Ads,AI,GTM,sales pipeline,university partnership,teacher training',
    jsonLd: buildJsonLd(lang),
    xDefaultSlug: 'smartcourses-edtech-platforma',
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
        dateISO="2026-04-25"
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
        <Callout>{s.context.idea}</Callout>

        {/* ================================================================ */}
        {/*  ROLE                                                            */}
        {/* ================================================================ */}
        <H2 id="role">{s.role.heading}</H2>
        <Prose>{s.role.intro}</Prose>

        <CardStack
          items={s.role.responsibilities.map(r => ({
            title: r.title,
            detail: r.desc,
          }))}
        />

        {/* ================================================================ */}
        {/*  NUMBERS                                                         */}
        {/* ================================================================ */}
        <H2 id="numbers">{s.numbers.heading}</H2>

        <H3>{s.numbers.googleAds.heading}</H3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {s.numbers.googleAds.metrics.map((metric, i) => (
            <div key={i} className="p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium text-foreground mb-3">
            {lang === 'uk' ? 'Топ-сегменти:' : 'Top segments:'}
          </p>
          {s.numbers.googleAds.topSegments.map((seg, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 mb-2">
              <span className="text-sm">{seg.segment}</span>
              <div className="flex gap-4 text-sm">
                <span className="text-primary font-semibold">CTR {seg.ctr}</span>
                {seg.clicks !== '-' && <span className="text-muted-foreground">{seg.clicks} {lang === 'uk' ? 'кліків' : 'clicks'}</span>}
              </div>
            </div>
          ))}
        </div>

        <H3>{s.numbers.audience.heading}</H3>
        <ul className="space-y-2 mb-8">
          {s.numbers.audience.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <H3>{s.numbers.registrations.heading}</H3>
        <div className="space-y-3 mb-6">
          {s.numbers.registrations.items.map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-card border border-border">
              <p className="font-semibold text-foreground mb-1">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <H3>{s.numbers.sales.heading}</H3>
        <div className="space-y-3 mb-8">
          {s.numbers.sales.items.map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-card border border-border">
              <p className="font-semibold text-foreground mb-1">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ================================================================ */}
        {/*  WHY STOPPED                                                     */}
        {/* ================================================================ */}
        <H2 id="why-stopped">{s.whyStopped.heading}</H2>
        <Prose>{s.whyStopped.intro}</Prose>

        <CardStack
          items={s.whyStopped.reasons.map(r => ({
            title: r.title,
            detail: r.desc,
          }))}
        />

        <Callout className="bg-accent/10 border-accent/40">
          {s.whyStopped.conclusion}
        </Callout>

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
        {/*  POTENTIAL                                                       */}
        {/* ================================================================ */}
        <H2 id="potential">{s.potential.heading}</H2>
        <Prose>{s.potential.intro}</Prose>
        <ul className="space-y-2 mb-8">
          {s.potential.items.map((item, i) => (
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
        <StackGrid items={s.stack.items.map(item => {
          // Special handling for SmartCourses: Google Ads SDK = Google
          let logoName = item.name
          if (item.name === 'Google Ads SDK') logoName = 'Google Ads'
          
          const logoPath = getBrandLogo(logoName)
          return {
            icon: logoPath ? (
              <img src={logoPath} alt={item.name} className="w-12 h-12 object-contain" />
            ) : getTechIcon(item.name) ? (
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor" style={{ color: getTechIcon(item.name)!.color }}>
                <path d={getTechIcon(item.name)!.path} />
              </svg>
            ) : (
              <span className="w-8 h-8 flex items-center justify-center text-lg font-bold text-primary">{item.name[0]}</span>
            ),
            name: item.name,
            desc: item.role,
          }
        })} />

        {/* ================================================================ */}
        {/*  FAQ                                                             */}
        {/* ================================================================ */}
        <FaqSection heading={t.faq.heading} items={t.faq.items} />

        {/* ================================================================ */}
        {/*  RESOURCES                                                       */}
        {/* ================================================================ */}
        <ResourcesList heading={t.sections.resources.heading} items={t.sections.resources.items} />
      </article>

      <ArticleFooter lang={lang} utmCampaign="smartcourses" />
    </ArticleLayout>
  )
}
