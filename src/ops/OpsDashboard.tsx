import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react'
import OpsAuth from './OpsAuth'
import TabNav from './components/TabNav'
import KpiCard from './components/KpiCard'
import MetricChart from './components/MetricChart'
import { useOpsApi } from './hooks/useOpsApi'
import type { OpsStats, TabProps } from './types'

// Lazy-load tab panels (all except Overview which is inline)
const ConversationsTab = lazy(() => import('./tabs/ConversationsTab'))
const CostsTab = lazy(() => import('./tabs/CostsTab'))
const RagTab = lazy(() => import('./tabs/RagTab'))
const SecurityTab = lazy(() => import('./tabs/SecurityTab'))
const EvalsTab = lazy(() => import('./tabs/EvalsTab'))
const VoiceTab = lazy(() => import('./tabs/VoiceTab'))
const SystemTab = lazy(() => import('./tabs/SystemTab'))

const TABS = ['Overview', 'Conversations', 'Costs', 'RAG', 'Security', 'Evals', 'Voice', 'System']
const DAYS_OPTIONS = [1, 7, 30] as const

const TOKEN_KEY = 'ops_token'

export default function OpsDashboard() {
  const [authed, setAuthed] = useState(() => !!sessionStorage.getItem(TOKEN_KEY))
  const [activeTab, setActiveTab] = useState('Overview')
  const [days, setDays] = useState(7)
  const [includeEvals, setIncludeEvals] = useState(false)

  // Meta noindex + force dark mode
  useEffect(() => {
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement
    if (!robots) {
      robots = document.createElement('meta')
      robots.name = 'robots'
      document.head.appendChild(robots)
    }
    robots.content = 'noindex, nofollow'
    document.title = 'LLMOps Dashboard | esupport.org.ua'
    // Force dark mode via CSS variables (works regardless of OS preference)
    const style = document.createElement('style')
    style.id = 'ops-dark-theme'
    style.textContent = `
      :root {
        --background: 240 6% 10% !important;
        --foreground: 0 0% 98% !important;
        --card: 240 5% 12% !important;
        --card-foreground: 0 0% 98% !important;
        --muted-foreground: 240 5% 65% !important;
        --primary: 24 94% 53% !important;
        --primary-foreground: 0 0% 9% !important;
        --accent: 187 75% 55% !important;
        color-scheme: dark;
      }
    `
    document.head.appendChild(style)
    return () => {
      robots.content = 'index, follow'
      document.getElementById('ops-dark-theme')?.remove()
    }
  }, [])

  const params = useMemo(() => {
    const p: Record<string, string> = { days: String(days) }
    if (includeEvals) p.includeEvals = 'true'
    return p
  }, [days, includeEvals])
  const { data: stats, loading } = useOpsApi<OpsStats>({
    endpoint: 'stats',
    params,
    enabled: authed,
  })

  if (!authed) {
    return <OpsAuth onAuth={() => setAuthed(true)} />
  }

  const tabProps: TabProps = { stats, loading }

  const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY)
    // Clear all cached ops data
    const keysToRemove: string[] = []
    for (let i = 0; i < sessionStorage.length; i++) {
      const k = sessionStorage.key(i)
      if (k?.startsWith('ops_cache_')) keysToRemove.push(k)
    }
    keysToRemove.forEach(k => sessionStorage.removeItem(k))
    setAuthed(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-white/[0.06] px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
          <div className="flex items-center justify-between sm:block">
            <div>
              <h1 className="text-lg sm:text-xl font-display font-bold text-foreground">LLMOps Dashboard</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">esupport.org.ua</p>
            </div>
            <button
              onClick={logout}
              className="sm:hidden text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Logout
            </button>
          </div>
          <div className="flex items-center gap-3">
            {/* Include evals toggle */}
            <label className="hidden sm:flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={includeEvals}
                onChange={e => setIncludeEvals(e.target.checked)}
                className="rounded border-white/20 bg-white/5 text-primary focus:ring-primary/30 w-3.5 h-3.5"
              />
              <span className="text-[11px] text-muted-foreground">Test traffic</span>
            </label>
            {/* Days selector */}
            <div className="flex gap-0.5 bg-card border border-white/[0.06] rounded-lg p-0.5">
              {DAYS_OPTIONS.map(d => (
                <button
                  key={d}
                  onClick={() => setDays(d)}
                  className={`px-2.5 py-1 text-xs sm:text-sm rounded-md transition-colors ${
                    days === d
                      ? 'bg-primary/20 text-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {d}d
                </button>
              ))}
            </div>
            <button
              onClick={logout}
              className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Tab nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 sm:pt-4 border-b border-white/[0.06]">
        <TabNav tabs={TABS} active={activeTab} onChange={setActiveTab} />
      </div>

      {/* Tab content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <Suspense fallback={<TabSkeleton />}>
          {activeTab === 'Overview' && <OverviewTab {...tabProps} />}
          {activeTab === 'Conversations' && <ConversationsTab {...tabProps} />}
          {activeTab === 'Costs' && <CostsTab {...tabProps} />}
          {activeTab === 'RAG' && <RagTab {...tabProps} />}
          {activeTab === 'Security' && <SecurityTab {...tabProps} />}
          {activeTab === 'Evals' && <EvalsTab {...tabProps} />}
          {activeTab === 'Voice' && <VoiceTab {...tabProps} />}
          {activeTab === 'System' && <SystemTab {...tabProps} />}
        </Suspense>
      </main>
    </div>
  )
}

// ─── Overview Tab (inline) ───

function OverviewTab({ stats, loading }: TabProps) {
  const [testResults, setTestResults] = React.useState<any>(null)
  const [testing, setTesting] = React.useState(false)

  const runRouterTest = async () => {
    setTesting(true)
    try {
      const token = sessionStorage.getItem('ops_token')
      const response = await fetch('/api/ops/router-test', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      })
      
      if (!response.ok) {
        const text = await response.text()
        setTestResults({ error: `HTTP ${response.status}: ${text}` })
        return
      }
      
      const data = await response.json()
      setTestResults(data)
    } catch (error) {
      setTestResults({ error: error instanceof Error ? error.message : String(error) })
    } finally {
      setTesting(false)
    }
  }

  // Show router test section even when loading
  const routerTestSection = (
    <div className="bg-card border border-white/[0.06] rounded-lg p-3 sm:p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[11px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">Model Router Test</h3>
        <button
          onClick={runRouterTest}
          disabled={testing}
          className="px-3 py-1.5 text-xs sm:text-sm bg-primary/20 hover:bg-primary/30 text-primary rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {testing ? 'Testing...' : 'Run Test'}
        </button>
      </div>
      
      {testResults && (
        <div className="space-y-2">
          {testResults.error ? (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-xs text-red-400">
              Error: {testResults.error}
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-muted-foreground">Status:</span>
                <span className={testResults.overallStatus === 'success' ? 'text-green-400' : 'text-yellow-400'}>
                  {testResults.overallStatus === 'success' ? '✓ All tests passed' : '⚠ Some tests failed'}
                </span>
                <span className="text-muted-foreground ml-auto">{new Date(testResults.timestamp).toLocaleTimeString()}</span>
              </div>
              
              <div className="space-y-2">
                {testResults.tests.map((test: any, idx: number) => (
                  <div key={idx} className="p-3 bg-white/[0.02] border border-white/[0.06] rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-medium ${test.status === 'success' ? 'text-green-400' : test.status === 'error' ? 'text-red-400' : 'text-yellow-400'}`}>
                        {test.status === 'success' ? '✓' : test.status === 'error' ? '✗' : '○'} {test.name}
                      </span>
                    </div>
                    
                    {test.error && (
                      <div className="text-xs text-red-400 font-mono">{test.error}</div>
                    )}
                    
                    {test.details && (
                      <div className="text-xs text-muted-foreground space-y-1 font-mono">
                        {Object.entries(test.details).map(([key, value]) => (
                          <div key={key} className="flex gap-2">
                            <span className="text-white/40">{key}:</span>
                            <span className="text-white/60">{typeof value === 'object' ? JSON.stringify(value) : String(value)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )

  if (loading || !stats) {
    return (
      <div className="space-y-4 sm:space-y-6">
        {routerTestSection}
        <TabSkeleton />
      </div>
    )
  }

  const { totals, daily, distributions } = stats

  // Prepare donut data
  const modeData = [
    { name: 'Text', value: totals.textConversations },
    { name: 'Voice', value: totals.voiceConversations },
  ]
  const langData = Object.entries(distributions.languages).map(([name, value]) => ({ name, value }))
  const ragData = [
    { name: 'RAG', value: distributions.ragActivation.yes },
    { name: 'No RAG', value: distributions.ragActivation.no },
  ]

  // Intent bar chart
  const intentData = Object.entries(distributions.intents)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([intent, count]) => ({ intent, count }))

  // Cost timeline
  const costTimeline = daily.map(d => ({
    date: d.date.slice(5), // MM-DD
    'Tool Decision': d.cost.toolDecision,
    Embedding: d.cost.embedding,
    Reranking: d.cost.reranking,
    Generation: d.cost.generation,
    Voice: d.cost.voice,
  }))

  // Conversations timeline
  const convTimeline = daily.map(d => ({
    date: d.date.slice(5),
    conversations: d.conversations,
  }))

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Router Test Section */}
      {routerTestSection}

      {/* KPI row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-4">
        <KpiCard label="Conversations" value={totals.conversations} format="number" />
        <KpiCard label="Total Cost" value={totals.totalCost} format="currency" />
        <KpiCard label="Avg Latency" value={totals.avgLatencyMs} format="ms" />
        <KpiCard label="Eval Pass Rate" value={totals.evalPassRate} format="percent" />
        <KpiCard label="Avg Safety" value={totals.avgSafetyScore != null ? totals.avgSafetyScore : '—'} format={totals.avgSafetyScore != null ? 'percent' : undefined} />
      </div>

      {/* Timeline charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4">
        <ChartCard title="Conversations / day">
          <MetricChart
            data={convTimeline}
            type="area"
            xKey="date"
            series={[{ key: 'conversations', color: 'hsl(var(--primary))', label: 'Conversations' }]}
          />
        </ChartCard>
        <ChartCard title="Cost / day">
          <MetricChart
            data={costTimeline}
            type="area"
            xKey="date"
            stacked
            series={[
              { key: 'Tool Decision', color: 'hsl(var(--primary))', label: 'Tool Decision' },
              { key: 'Embedding', color: '#eab308', label: 'Embedding' },
              { key: 'Reranking', color: '#8b5cf6', label: 'Reranking' },
              { key: 'Generation', color: '#22c55e', label: 'Generation' },
              { key: 'Voice', color: 'hsl(var(--accent))', label: 'Voice' },
            ]}
          />
        </ChartCard>
      </div>

      {/* Donuts row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4">
        <ChartCard title="Mode">
          <MetricChart
            data={modeData}
            type="donut"
            xKey="name"
            series={[
              { key: 'value', color: 'hsl(var(--primary))', label: 'Text' },
              { key: 'value', color: 'hsl(var(--accent))', label: 'Voice' },
            ]}
            height={200}
          />
        </ChartCard>
        <ChartCard title="Language">
          <MetricChart
            data={langData}
            type="donut"
            xKey="name"
            series={[
              { key: 'value', color: 'hsl(var(--primary))', label: 'ES' },
              { key: 'value', color: '#eab308', label: 'EN' },
            ]}
            height={200}
          />
        </ChartCard>
        <ChartCard title="RAG Activation">
          <MetricChart
            data={ragData}
            type="donut"
            xKey="name"
            series={[
              { key: 'value', color: '#22c55e', label: 'RAG' },
              { key: 'value', color: '#6b7280', label: 'No RAG' },
            ]}
            height={200}
          />
        </ChartCard>
      </div>

      {/* Intent distribution */}
      <ChartCard title="Intent Distribution">
        <MetricChart
          data={intentData}
          type="bar"
          xKey="intent"
          series={[{ key: 'count', color: 'hsl(var(--primary))', label: 'Count' }]}
          height={Math.max(200, intentData.length * 32)}
        />
      </ChartCard>
    </div>
  )
}

// ─── Shared helpers ───

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-white/[0.06] rounded-lg p-3 sm:p-4">
      <h3 className="text-[11px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3">{title}</h3>
      {children}
    </div>
  )
}

function TabSkeleton() {
  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-16 sm:h-20 bg-card border border-white/[0.06] rounded-lg animate-pulse" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4">
        <div className="h-48 sm:h-64 bg-card border border-white/[0.06] rounded-lg animate-pulse" />
        <div className="h-48 sm:h-64 bg-card border border-white/[0.06] rounded-lg animate-pulse" />
      </div>
    </div>
  )
}
