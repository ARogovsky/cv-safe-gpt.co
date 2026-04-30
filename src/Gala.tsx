import { type GalaLang as Lang } from './gala-i18n'
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
  StepList,
  DataTable,
  StackGrid,
  FloatingToc,
} from './articles/content-types'
import { galaContent } from './gala-i18n'

// ---------------------------------------------------------------------------
// Stack icons
// ---------------------------------------------------------------------------
const stackIcons: Record<string, React.ReactNode> = {
  Python: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path fill="#3776AB" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>
  ),
  PyTorch: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#EE4C2C"><path d="M12.005 0L4.952 7.053c-3.57 3.57-3.57 9.36 0 12.93 3.57 3.57 9.36 3.57 12.93 0 3.57-3.57 3.57-9.36 0-12.93l-1.06 1.06c3.02 3.02 3.02 7.91 0 10.93-3.02 3.02-7.91 3.02-10.93 0-3.02-3.02-3.02-7.91 0-10.93L12.005 2v8.5a3.5 3.5 0 1 0 1 0V0zm-.5 14a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
  ),
  RoBERTa: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><circle cx="12" cy="12" r="10" fill="#FF6F00"/><path fill="#FFF" d="M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V6zm0 12a6 6 0 0 0 6-6h-2a4 4 0 0 1-4 4v2z"/></svg>
  ),
  Playwright: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M23.996 7.462c-.056.837-.257 2.135-.716 3.85c-.995 3.715-4.27 10.874-10.42 9.227c-6.15-1.65-5.407-9.487-4.412-13.201c.46-1.716.934-2.94 1.305-3.694c.42-.853.846-.289 1.815.523c.684.573 2.41 1.791 5.011 2.488s4.706.506 5.583.352c1.245-.219 1.897-.494 1.834.455m-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539l-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354c.677.118 2.3.261 4.308-.28a11.3 11.3 0 0 0 2.41-.956q-.087.295-.17.61c-.433 1.618-.827 4.055-.632 6.426c-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z"/></svg>
  ),
  Zadarma: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#00A651"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
  ),
  Astro: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path fill="#FF5D01" d="M16.074 16.86c-.72.616-2.157.769-3.567.769-1.938 0-3.781-.37-4.864-1.14-.514-.37-.77-.86-.77-1.42 0-.6.308-1.22.924-1.68.616-.46 1.477-.77 2.462-.77 1.139 0 2.157.37 2.927 1.01.77.64 1.232 1.54 1.232 2.54 0 .37-.077.73-.231 1.06-.077.17-.154.31-.231.44-.077.13-.154.24-.231.34zm-4.402-8.78l-1.694-5.04C9.747 2.37 9.208 2 8.516 2c-.693 0-1.232.37-1.463 1.04l-4.79 14.32c-.154.46-.231.92-.231 1.38 0 1.54 1.232 2.77 2.771 2.77.924 0 1.771-.46 2.31-1.23l6.16-9.23z"/><path fill="#FF5D01" d="M21.714 17.2c-.77-.77-2.002-1.23-3.474-1.23-1.54 0-2.925.46-3.858 1.23-.924.77-1.463 1.77-1.463 2.77 0 .77.308 1.54.924 2.08.616.54 1.54.92 2.617.92 1.54 0 2.925-.46 3.858-1.23.924-.77 1.463-1.77 1.463-2.77 0-.77-.308-1.54-.924-2.08z"/></svg>
  ),
  'Google Ads': (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#4285F4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
  ),
}

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
          icon: stackIcons[item.name] ?? <span className="w-8 h-8 flex items-center justify-center text-lg font-bold text-primary">{item.name[0]}</span>,
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
