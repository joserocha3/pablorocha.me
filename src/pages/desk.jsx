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
            <Tool title="14” MacBook Pro, M1 Pro, 32GB RAM (2021)">I was always a PC guy prior to web development. I have now seen the light.</Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">Trusted by me and almost every other developer I know.</Tool>
            <Tool title="iTerm2">I like my terminal to match my style, and iTerm2 makes it happen.</Tool>
            <Tool title="TablePlus">Wonderful database client. Beats having to build admin interfaces for all my projects!</Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Affinity Designer">Perfect, price conscious alternative to Adobe Illustrator.</Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Raycast">Found out about this not too long ago. Immediately replaced Spotlight.</Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
