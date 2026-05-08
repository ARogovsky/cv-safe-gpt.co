import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Download, Copy, Check, ExternalLink, Clock } from 'lucide-react'
import { EditorModeProvider, EditorLabel, H2, StepList, Accordion } from './content-types'

// ---------------------------------------------------------------------------
// Inline utilities
// ---------------------------------------------------------------------------

export function CopyButton({ text, copyLabel, copiedLabel }: { text: string; copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? copiedLabel : copyLabel}
    </button>
  )
}

export function DownloadButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors font-medium text-foreground"
    >
      <Download className="w-4 h-4 text-primary" />
      {label}
    </a>
  )
}

// AnchorHeading → H2 (re-exported from content-types for backwards compat)
export { H2 as AnchorHeading } from './content-types'

// ---------------------------------------------------------------------------
// Layout shells
// ---------------------------------------------------------------------------

export function ArticleLayout({ lang, children }: { lang?: 'es' | 'en' | 'uk'; children: React.ReactNode }) {
  useEffect(() => {
    if (lang) document.documentElement.lang = lang
  }, [lang])

  return (
    <EditorModeProvider>
      <div className="min-h-screen bg-background text-foreground bg-[length:24px_24px] [background-image:radial-gradient(circle,hsl(var(--dot-grid))_1px,transparent_1px)]">
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {children}
        </main>
      </div>
    </EditorModeProvider>
  )
}

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

interface ArticleHeaderProps {
  kicker: string
  kickerLink?: string
  h1: string
  subtitle: string
  date: string
  /** ISO 8601 date for <time> element (e.g. '2026-03-11') */
  dateISO?: string
  /** ISO 8601 last-updated date. If set AND different from dateISO, renders a visible "Updated: …" line. */
  dateModifiedISO?: string
  readingTime: string
  authorName?: string
  authorUrl?: string
  authorBio?: string
  avatarSrc?: string
  lang?: 'es' | 'en' | 'uk'
  editorId?: string
}

const MONTHS_ES = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic']
const MONTHS_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const MONTHS_UK = ['січ','лют','бер','кві','тра','чер','лип','сер','вер','жов','лис','гру']
function formatDateHuman(iso: string, lang: 'es' | 'en' | 'uk'): string {
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return iso
  const month = (lang === 'es' ? MONTHS_ES : lang === 'uk' ? MONTHS_UK : MONTHS_EN)[m - 1]
  return lang === 'es' ? `${d} ${month} ${y}` : lang === 'uk' ? `${d} ${month} ${y}` : `${month} ${d}, ${y}`
}

export function ArticleHeader({
  kicker,
  kickerLink,
  h1,
  subtitle,
  date,
  dateISO,
  dateModifiedISO,
  readingTime,
  authorName = 'Andrey Rogovsky',
  authorUrl,
  authorBio,
  avatarSrc = '/foto-avatar-sm.webp',
  lang,
}: ArticleHeaderProps) {
  const resolvedAuthorUrl = authorUrl ?? (lang === 'uk' ? '/about' : lang === 'en' ? '/about-en' : '/about')
  return (
    <header className="mb-10">
      <p className="text-primary font-medium text-sm mb-3 tracking-wide uppercase">
        {kickerLink ? (
          kicker.split(/<a>|<\/a>/).map((part, i) =>
            i === 1 ? (
              <a key={i} href={kickerLink} target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">{part}</a>
            ) : (
              <span key={i}>{part}</span>
            )
          )
        ) : kicker}
      </p>
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
        {h1}
      </h1>
      <p className="text-xl text-muted-foreground leading-relaxed mb-6">
        {subtitle}
      </p>
      <div className="flex items-center gap-3 pb-6 border-b border-border">
        <img
          src={avatarSrc}
          alt={authorName}
          className="w-10 h-10 rounded-full"
          width={40}
          height={40}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <a
              href={resolvedAuthorUrl}
              rel="author"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              {authorName}
            </a>
          </div>
          {authorBio && <p className="text-xs text-muted-foreground">{authorBio}</p>}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            {dateISO ? <time dateTime={dateISO}>{date}</time> : <span>{date}</span>}
            <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{readingTime}</span>
            {dateModifiedISO && dateModifiedISO !== dateISO && (
              <span className="text-xs text-muted-foreground/80">
                · {lang === 'es' ? 'Actualizado' : 'Updated'} <time dateTime={dateModifiedISO}>{formatDateHuman(dateModifiedISO, lang ?? 'es')}</time>
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

interface ArticleFooterProps {
  lang: 'es' | 'en' | 'uk'
  utmCampaign: string
  editorId?: string
}

const FOOTER_I18N = {
  es: {
    name: 'Andrey Rogovsky',
    role: 'Senior AI Engineer · GenAI · MLOps · Cloud',
    bio: '25 años de infraestructura. Ahora construyo AI que sobrevive en producción con MCP + RAG + K8S.',
    aboutLink: 'Más sobre el autor →',
    copyright: 'Todos los derechos reservados.',
  },
  en: {
    name: 'Andrey Rogovsky',
    role: 'Senior AI Engineer · GenAI · MLOps · Cloud',
    bio: '25 years of infrastructure. Now I build AI that survives production with MCP + RAG + K8S.',
    aboutLink: 'More about the author →',
    copyright: 'All rights reserved.',
  },
  uk: {
    name: 'Андрій Роговський',
    role: 'Senior AI Engineer · GenAI · MLOps · Cloud',
    bio: '25 років інфраструктури. Зараз будую AI, що виживає в production з MCP + RAG + K8S.',
    aboutLink: 'Більше про автора →',
    copyright: 'Всі права захищені.',
  },
} as const

export function ArticleFooter({ lang }: ArticleFooterProps) {
  const f = FOOTER_I18N[lang]
  return (
    <footer className="mt-16 pt-8 border-t border-border">
      <div className="flex items-start gap-3 mb-6">
        <img
          src="/foto-avatar-sm.webp"
          alt={f.name}
          className="w-12 h-12 rounded-full shrink-0"
          width={48}
          height={48}
        />
        <div>
          <p className="font-medium text-foreground">{f.name}</p>
          <p className="text-sm text-muted-foreground">{f.role}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-1">{f.bio}</p>
      <Link
        to={lang === 'uk' ? '/about' : lang === 'en' ? '/about-en' : '/about'}
        className="inline-block text-sm text-primary hover:underline transition-colors mb-6"
      >
        {f.aboutLink}
      </Link>
      <div className="flex flex-wrap gap-3 mb-8">
        <a 
          href="mailto:esupport@esupport.org.ua"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          Email
        </a>
        <a 
          href="https://t.me/andreyrogovsky" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0088cc]/10 border border-[#0088cc]/20 text-sm font-medium text-[#0088cc] hover:bg-[#0088cc]/20 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z"/>
          </svg>
          Telegram
        </a>
      </div>
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} {f.name}. {f.copyright}</span>
        <span className="text-border">|</span>
        <Link to={lang === 'es' ? '/privacidad' : '/privacy'} className="hover:text-primary transition-colors">
          {lang === 'es' ? 'Privacidad' : 'Privacy'}
        </Link>
      </div>
    </footer>
  )
}

// ---------------------------------------------------------------------------
// FAQ Section
// ---------------------------------------------------------------------------

interface FaqItem {
  q: string
  a: string
}

export function FaqSection({ heading, items, editorId }: { heading: string; items: readonly FaqItem[]; editorId?: string }) {
  return (
    <>
      <H2 id="faq">{heading}</H2>
      <Accordion
        editorId={editorId}
        items={items.map((item) => ({ title: item.q, detail: item.a }))}
      />
    </>
  )
}

// ---------------------------------------------------------------------------
// Resources List
// ---------------------------------------------------------------------------

interface ResourceItem {
  label: string
  url: string
}

export function ResourcesList({ heading, items }: { heading: string; items: readonly ResourceItem[]; editorId?: string }) {
  return (
    <>
      <H2 id="resources">{heading}</H2>
      <ul className="space-y-2 text-muted-foreground mb-8">
        {items.map((item) => (
          <li key={item.url} className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-primary shrink-0" />
            <a href={item.url} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-primary transition-colors">{item.label}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

// ---------------------------------------------------------------------------
// Lessons Section
// ---------------------------------------------------------------------------

interface LessonItem {
  title: string
  detail: string
}

export function LessonsSection({ heading, items, editorId }: { heading: string; items: readonly LessonItem[]; editorId?: string }) {
  return (
    <>
      <H2 id="lessons">{heading}</H2>
      <StepList
        editorId={editorId}
        items={items.map((lesson) => ({ label: lesson.title, detail: lesson.detail }))}
      />
    </>
  )
}

// ---------------------------------------------------------------------------
// Metrics Grid (for case studies)
// ---------------------------------------------------------------------------

interface MetricCard {
  value: string
  label: string
  detail?: string
}

const metricsColsMap = {
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
} as const

export function MetricsGrid({ items, columns = 3, compact, editorId }: { items: readonly MetricCard[]; columns?: 3 | 4 | 5; compact?: boolean; editorId?: string }) {
  return (
    <EditorLabel name="MetricsGrid" id={editorId}>
      <div className={`grid ${metricsColsMap[columns]} gap-4 mb-8`}>
        {items.map((item) => (
          <div key={item.label} className={`bg-card border border-border rounded-lg ${compact ? 'p-2.5 sm:p-3' : 'p-5'} text-center`}>
            <p className={`${compact ? 'text-lg sm:text-xl' : 'text-3xl'} font-bold text-primary mb-1`}>{item.value}</p>
            <p className={`font-medium text-foreground ${compact ? 'text-xs' : 'text-sm'}`}>{item.label}</p>
            {item.detail && <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>}
          </div>
        ))}
      </div>
    </EditorLabel>
  )
}

// ---------------------------------------------------------------------------
// Status Badge (proof of exit / production badge with pulse dot)
// ---------------------------------------------------------------------------

export function StatusBadge({ text, editorId }: { text: string; editorId?: string }) {
  return (
    <EditorLabel name="StatusBadge" id={editorId}>
      <div className="flex items-center gap-2 mb-6 -mt-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {text}
        </span>
      </div>
    </EditorLabel>
  )
}

// ---------------------------------------------------------------------------
// Case Study CTA
// ---------------------------------------------------------------------------

interface CaseStudyCtaProps {
  heading: string
  body: string
  ctaLabel: string
  ctaHref: string
  external?: boolean
  secondaryLabel?: string
  secondaryHref?: string
  editorId?: string
}

export function CaseStudyCta({ heading, body, ctaLabel, ctaHref, external, secondaryLabel, secondaryHref }: CaseStudyCtaProps) {
  return (
    <EditorLabel name="CaseStudyCta">
      <div className="my-10 relative rounded-2xl p-[1.5px] bg-gradient-theme">
        <div className="p-6 sm:p-8 rounded-[calc(1rem-1.5px)] bg-card">
          <p className="font-display font-semibold text-foreground text-lg mb-2">{heading}</p>
          {body && <p className="text-muted-foreground leading-relaxed mb-4">{body}</p>}
          <div className="flex gap-3">
            {external ? (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                {ctaLabel}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : ctaHref.startsWith('#') ? (
              <a
                href={ctaHref}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.hash = ctaHref
                  window.dispatchEvent(new HashChangeEvent('hashchange'))
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-sm cursor-pointer"
              >
                {ctaLabel}
              </a>
            ) : (
              <Link
                to={ctaHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                {ctaLabel}
              </Link>
            )}
            {secondaryHref && secondaryLabel && (
              <a
                href={secondaryHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              >
                {secondaryLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </EditorLabel>
  )
}

// ---------------------------------------------------------------------------
// Article Figure (reusable image with caption)
// ---------------------------------------------------------------------------

interface ArticleFigureProps {
  src: string
  alt: string
  title?: string
  caption: string
  width?: number
  height?: number
  priority?: boolean
}

export function ArticleFigure({ src, alt, title, caption, width = 1200, height = 675, priority = false }: ArticleFigureProps) {
  return (
    <figure className="rounded-lg overflow-hidden border border-border mb-6">
      <img
        src={src}
        alt={alt}
        title={title}
        className="w-full h-auto"
        width={width}
        height={height}
        loading={priority ? undefined : 'lazy'}
      />
      <figcaption className="text-xs text-muted-foreground text-center py-2 bg-muted/20">
        {caption}
      </figcaption>
    </figure>
  )
}

// ---------------------------------------------------------------------------
// Workflow Download Components
// ---------------------------------------------------------------------------

export function InlineWorkflowDownload({ href, label, fileSize }: { href: string; label: string; fileSize: string }) {
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : { download: true })}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-6 text-xs font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
    >
      {isExternal ? <ExternalLink className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
      {label}
      <span className="text-primary/60">({fileSize})</span>
    </a>
  )
}

interface WorkflowDownloadCardProps {
  icon: React.ReactNode
  name: string
  subtitle: string
  description: string
  href: string
  fileSize: string
  nodes?: string
  llm?: string
  downloadLabel: string
}

export function WorkflowDownloadCard({ icon, name, subtitle, description, href, fileSize, nodes, llm, downloadLabel }: WorkflowDownloadCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-5 flex flex-col">
      <div className="flex items-start gap-3 mb-3">
        <span className="shrink-0 text-primary">{icon}</span>
        <div className="min-w-0">
          <p className="font-display font-semibold text-foreground text-base leading-tight">{name}</p>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {nodes && <span className="text-xs px-2 py-0.5 rounded-full bg-muted/30 text-muted-foreground">{nodes}</span>}
        {llm && <span className="text-xs px-2 py-0.5 rounded-full bg-muted/30 text-muted-foreground">{llm}</span>}
        <span className="text-xs px-2 py-0.5 rounded-full bg-muted/30 text-muted-foreground">{fileSize}</span>
      </div>
      <a
        href={href}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : { download: true })}
        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors text-sm font-medium text-foreground"
      >
        {href.startsWith('http') ? <ExternalLink className="w-4 h-4 text-primary" /> : <Download className="w-4 h-4 text-primary" />}
        {downloadLabel}
      </a>
    </div>
  )
}

// ---------------------------------------------------------------------------
// WorkflowGrid — grid of WorkflowDownloadCards with icon resolver
// ---------------------------------------------------------------------------

interface WorkflowGridProps {
  workflows: readonly { id: string; icon: string; name: string; subtitle: string; description: string; href: string; fileSize: string; nodes?: string; llm?: string }[]
  iconMap: Record<string, React.ComponentType<{ className?: string }>>
  fallbackIcon: React.ComponentType<{ className?: string }>
  downloadLabel: string
  editorId?: string
}

export function WorkflowGrid({ workflows, iconMap, fallbackIcon: Fallback, downloadLabel, editorId }: WorkflowGridProps) {
  return (
    <EditorLabel name="WorkflowGrid" id={editorId}>
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {workflows.map(wf => {
          const Icon = iconMap[wf.icon] ?? Fallback
          return (
            <WorkflowDownloadCard
              key={wf.id}
              icon={<Icon className="w-5 h-5" />}
              name={wf.name}
              subtitle={wf.subtitle}
              description={wf.description}
              href={wf.href}
              fileSize={wf.fileSize}
              nodes={wf.nodes}
              llm={wf.llm}
              downloadLabel={downloadLabel}
            />
          )
        })}
      </div>
    </EditorLabel>
  )
}

// ---------------------------------------------------------------------------
// DownloadAllButton — prominent CTA for bulk download
// ---------------------------------------------------------------------------

interface DownloadAllButtonProps {
  href: string
  label: string
  fileSize: string
  editorId?: string
}

export function DownloadAllButton({ href, label, fileSize, editorId }: DownloadAllButtonProps) {
  return (
    <EditorLabel name="DownloadAllButton" id={editorId}>
      <div className="flex justify-center mb-8">
        <a
          href={href}
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-sm"
        >
          <Download className="w-4 h-4" />
          {label} <span className="text-primary-foreground/70">{fileSize}</span>
        </a>
      </div>
    </EditorLabel>
  )
}

// ---------------------------------------------------------------------------
// GitHub Repo Badge — stars + forks + link
// ---------------------------------------------------------------------------

interface GitHubRepoBadgeProps {
  repo: string
  stars: string
  forks: string
  lang: 'es' | 'en' | 'uk'
}

export function GitHubRepoBadge({ repo, stars, forks, lang }: GitHubRepoBadgeProps) {
  return (
    <a
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-4 mb-6 py-3 px-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors group"
    >
      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        <span className="font-medium text-foreground">{stars}</span> stars
      </span>
      <span className="w-px h-4 bg-border/50" />
      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7259C13.1823 10.3824 12.77 9.72292 12.77 8.96667C12.77 7.86667 13.6654 6.97333 14.77 6.97333C15.8746 6.97333 16.77 7.86667 16.77 8.96667C16.77 9.72292 16.3577 10.3824 15.7485 10.7259V12.0396C15.7485 14.2241 13.976 15.9966 11.7915 15.9966H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.40221 17.6134 8 17.2676V6.73244C7.40221 6.38663 7 5.74028 7 5Z" /></svg>
        <span className="font-medium text-foreground">{forks}</span> forks
      </span>
      <span className="w-px h-4 bg-border/50" />
      <span className="text-sm text-primary group-hover:underline flex items-center gap-1">
        {lang === 'es' ? 'Ver en GitHub' : 'View on GitHub'}
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
      </span>
    </a>
  )
}
