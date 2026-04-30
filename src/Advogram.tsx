import {
  ChevronRight, Target, Globe, Users, TrendingUp, DollarSign, BarChart3, Calendar, MapPin, Lightbulb,
} from 'lucide-react'
import { type AdvogramLang as Lang } from './advogram-i18n'
import { buildJsonLdFromRegistry } from './articles/json-ld'
import { useArticleSeo } from './articles/use-article-seo'

import {
  ArticleLayout,
  ArticleHeader,
  ArticleFooter,
  FaqSection,
  ResourcesList,
  MetricsGrid,
  StatusBadge,
  CaseStudyCta,
} from './articles/components'
import {
  H2, H3, Prose, Callout, BulletList, StepList, CardStack, CardGrid, StackGrid,
  Photo1, Photo2, DataTable, Accordion, Timeline, StoryBridge, FloatingToc,
} from './articles/content-types'
import { advogramContent } from './advogram-i18n'

function buildJsonLd(lang: Lang) {
  return buildJsonLdFromRegistry('advogram', lang, advogramContent[lang])
}

export default function Advogram({ lang = 'en' }: { lang?: Lang }) {
  const t = advogramContent[lang]

  useArticleSeo({
    lang,
    slug: t.slug,
    altSlug: t.altSlug,
    title: t.seo.title,
    description: t.seo.description,
    image: 'https://esupport.org.ua/advogram/og-advogram-gtm.webp',
    publishedTime: '2026-04-27',
    modifiedTime: '2026-04-27',
    articleTags: 'GTM,market validation,ATS,CPA,Google Ads,unit economics,freemium,SaaS',
    jsonLd: buildJsonLd(lang),
    xDefaultSlug: 'advogram-gtm-case-study',
  })

  return (
    <ArticleLayout lang={lang}>
      <FloatingToc />
      <ArticleHeader
        editorId="hero-header"
        lang={lang}
        kicker={t.header.kicker}
        h1={t.header.h1}
        subtitle={t.header.subtitle}
        date={t.header.date}
        dateISO="2026-04-27"
        dateModifiedISO="2026-04-27"
        readingTime={t.readingTime}
      />

      {'badge' in t.header && (
        <StatusBadge editorId="experiment-badge" text={(t.header as any).badge} />
      )}
      <MetricsGrid editorId="hero-metrics" items={t.heroMetrics} columns={5} compact />

      <article className="prose-custom">
        {/* Intro */}
        <Prose variant="hook" editorId="intro-hook">{t.intro.hook}</Prose>
        <Prose editorId="intro-body">{t.intro.body}</Prose>
        <Callout editorId="tldr-callout">{t.tldr}</Callout>

        {/* Day in Life — What the Experiment Was Designed to Answer */}
        <H2 id="day-in-life">{t.sections.dayInLife.heading}</H2>
        <Prose editorId="day-body">{t.sections.dayInLife.body}</Prose>
        <StepList
          editorId="day-steps"
          items={t.sections.dayInLife.steps.map((step: { emoji: string; text: string }) => step.text)}
        />
        <CaseStudyCta
          heading={t.sections.dayInLife.jacoboCta.heading}
          body={t.sections.dayInLife.jacoboCta.body}
          ctaLabel={t.sections.dayInLife.jacoboCta.label}
          ctaHref="#e2e-flows"
        />
        <CaseStudyCta
          heading={t.sections.dayInLife.pseoCta.heading}
          body={t.sections.dayInLife.pseoCta.body}
          ctaLabel={t.sections.dayInLife.pseoCta.label}
          ctaHref="#cross-cutting"
        />

        {/* Why Not Just Build and See What Happens */}
        <H2 id="why-custom">{t.sections.whyCustom.heading}</H2>
        <Prose editorId="why-body">{t.sections.whyCustom.body}</Prose>
        <CardStack
          editorId="why-reasons"
          items={t.sections.whyCustom.reasons.map((r) => ({ title: r.tool, detail: r.issue }))}
        />
        <Callout editorId="why-punchline">{t.sections.whyCustom.punchline}</Callout>

        {/* Experiment Setup */}
        <H2 id="overview">{t.sections.overview.heading}</H2>
        <Prose editorId="overview-body">{t.sections.overview.body}</Prose>
        <MetricsGrid items={t.sections.overview.stats} />

        {/* Setup Details */}
        {(() => {
          const baseIcons = [
            <Target className="w-5 h-5 text-primary" />,
            <BarChart3 className="w-5 h-5 text-primary" />,
            <Calendar className="w-5 h-5 text-primary" />,
            <MapPin className="w-5 h-5 text-primary" />,
            <DollarSign className="w-5 h-5 text-primary" />,
            <TrendingUp className="w-5 h-5 text-primary" />,
          ]
          return (
            <StackGrid
              editorId="overview-bases"
              columns={2}
              align="left"
              items={t.sections.overview.bases.map((base: { name: string; desc: string }, i: number) => ({
                icon: baseIcons[i],
                name: base.name,
                desc: base.desc,
              }))}
            />
          )
        })()}

        {/* What the Data Showed */}
        <H2 id="e2e-flows">{t.sections.e2eFlows.heading}</H2>
        <Prose editorId="e2e-body">{t.sections.e2eFlows.body}</Prose>
        <div className="space-y-8 mb-8">
          {t.sections.e2eFlows.items.map((flow, idx) => {
            const flowIds = ['finding-1', 'finding-2', 'finding-3', 'finding-4']
            const flowIcons = [
              <Target className="w-5 h-5 text-primary" />,
              <Globe className="w-5 h-5 text-primary" />,
              <Users className="w-5 h-5 text-primary" />,
              <TrendingUp className="w-5 h-5 text-primary" />,
            ]
            return (
              <div key={flow.name} className="scroll-mt-20">
                <H3 id={flowIds[idx]} icon={flowIcons[idx]}>{flow.name}</H3>
                <Prose editorId={`e2e-${idx}-summary`}>{flow.summary}</Prose>

                {/* Trigger line */}
                <div className="flex items-center gap-2 text-sm text-primary mb-3">
                  <span>&#9889;</span>
                  <span className="font-medium">{flow.trigger}</span>
                </div>

                {/* Bases touched as pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {flow.basesTouched.map((base: string) => (
                    <span key={base} className="bg-primary/10 text-primary text-xs rounded-full px-2.5 py-0.5 font-medium">{base}</span>
                  ))}
                </div>

                <BulletList editorId={`e2e-${idx}-details`} items={flow.details as readonly string[]} />
              </div>
            )
          })}
        </div>

        {/* Unit Economics Model */}
        <H2 id="cross-cutting">{t.sections.crossCutting.heading}</H2>
        <Prose editorId="cross-body">{t.sections.crossCutting.body}</Prose>
        <div className="space-y-8 mb-8">
          {t.sections.crossCutting.items.map((cap, idx) => {
            const capIds = ['cpa-benchmark', 'scaling-scenarios', 'conditions', 'next-steps']
            const capIcons = [
              <BarChart3 className="w-5 h-5 text-primary" />,
              <TrendingUp className="w-5 h-5 text-primary" />,
              <Target className="w-5 h-5 text-primary" />,
              <Lightbulb className="w-5 h-5 text-primary" />,
            ]
            return (
              <div key={cap.name} className="scroll-mt-20">
                <H3 id={capIds[idx]} icon={capIcons[idx]}>{cap.name}</H3>
                <Prose editorId={`cc-${idx}-summary`}>{cap.summary}</Prose>
                <BulletList editorId={`cc-${idx}-details`} items={cap.details as readonly string[]} />
              </div>
            )
          })}
        </div>

        {/* What $3,430 Bought */}
        <H2 id="impact">{t.sections.impact.heading}</H2>
        <Prose editorId="impact-body">{t.sections.impact.body}</Prose>
        <DataTable
          editorId="impact-table"
          headers={[
            lang === 'uk' ? 'Модуль' : 'Module',
            lang === 'uk' ? 'До' : 'Before',
            lang === 'uk' ? 'Після' : 'After',
            lang === 'uk' ? 'Щомісяця' : 'Monthly',
          ]}
          rows={[
            ...t.sections.impact.savings.map((row) => [row.module, row.before, row.after, row.monthly] as const),
            ['Total', '', '', t.sections.impact.total],
          ]}
          highlightColumn={3}
          className="mb-4"
        />
        <Callout editorId="impact-punchline" className="mb-8">{t.sections.impact.punchline}</Callout>

        {/* Before vs After the Experiment */}
        <H2 id="before-after">{t.sections.beforeAfter.heading}</H2>
        <CardGrid
          editorId="before-after-cards"
          items={t.sections.beforeAfter.items as readonly { area: string; before: string; after: string }[]}
          columns={1}
          className="mb-8"
          renderItem={(item) => (
            <div key={item.area} className="bg-card border border-border rounded-lg p-5 hover:border-primary/20 transition-colors">
              <p className="font-display font-semibold text-foreground text-sm mb-3">{item.area}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 text-xs shrink-0">&#10005;</span>
                  <p className="text-sm text-muted-foreground">{item.before}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5 text-xs shrink-0">&#10003;</span>
                  <p className="text-sm text-muted-foreground">{item.after}</p>
                </div>
              </div>
            </div>
          )}
        />

        {/* Decision Log */}
        <H2 id="decisions">{t.sections.decisions.heading}</H2>
        <Prose editorId="decisions-body">{t.sections.decisions.body}</Prose>
        <Accordion editorId="decisions-accordion" items={t.sections.decisions.items} />

        {/* Takeaways */}
        <H2 id="lessons">{t.sections.lessons.heading}</H2>
        <StepList
          editorId="lessons-steps"
          items={t.sections.lessons.items.map((l: { title: string; detail: string }) => ({ label: l.title, detail: l.detail }))}
        />

        {/* Experiment Timeline */}
        <H2 id="platform-evolution">{t.sections.platformEvolution.heading}</H2>
        <Prose editorId="evolution-tagline" className="italic">{t.sections.platformEvolution.tagline}</Prose>
        <Timeline
          editorId="evolution-timeline"
          items={t.sections.platformEvolution.steps as readonly { year: string; event: string; detail: string; punchline?: string }[]}
        />
        <StoryBridge editorId="evolution-bridge" lines={t.sections.platformEvolution.bridge as readonly string[]} />

        {/* Transferable Methodology */}
        <H2 id="replicability">{t.sections.replicability.heading}</H2>
        <Prose editorId="replicability-body">{t.sections.replicability.body}</Prose>
        <CardStack
          editorId="replicability-cards"
          items={t.sections.replicability.examples.map((ex: { domain: string; detail: string }) => ({ title: ex.domain, detail: ex.detail }))}
        />
        <Prose editorId="replicability-closing" className="mb-8">{t.sections.replicability.closing}</Prose>

        {/* CTA */}
        <CaseStudyCta
          heading={t.cta.heading}
          body={t.cta.body}
          ctaLabel={t.cta.label}
          ctaHref="mailto:esupport@esupport.org.ua?subject=Advogram GTM Experiment"
        />

        {/* FAQ */}
        <FaqSection heading={t.faq.heading} items={t.faq.items} />

        {/* Resources */}
        <ResourcesList heading={t.resources.heading} items={t.resources.items} />
      </article>

      <ArticleFooter lang={lang} utmCampaign="advogram-gtm" />
    </ArticleLayout>
  )
}
