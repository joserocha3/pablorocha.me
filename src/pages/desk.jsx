import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Desk - Pablo Rocha</title>
        <meta name="description" content="Software and other tech you'll find at my desk." />
      </Head>
      <SimpleLayout title="Software and other tech you'll find at my desk." intro="Things that I use when I work (and play), just in case you were wondering.">
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M4 Pro, 48GB RAM (2024)">
              After years on PC, switching to Mac completely transformed my dev workflow. It’s fast, reliable, and just works.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Development Tools">
            <Tool title="Cursor">
              My go-to code editor. AI pair programming, refactoring, and navigation — all supercharged.
            </Tool>
            <Tool title="Warp">
              A modern terminal that actually feels modern. Fast, slick, and fits right into my workflow.
            </Tool>
            <Tool title="TablePlus">
              Clean, powerful database management without the need to spin up custom admin panels.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Design">
            <Tool title="Affinity Designer">
              Lightweight, cost-effective, and handles everything I need for quick UI mockups and branding assets.
            </Tool>
          </ToolsSection>

          <ToolsSection title="AI">
            <Tool title="ChatGPT">
              My daily copilot — from brainstorming ideas to writing copy and debugging weird edge cases.
            </Tool>
            <Tool title="AMP">
              An AI assistant plugin for VS Code/Cursor that helps me build features faster than I normally would solo.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
