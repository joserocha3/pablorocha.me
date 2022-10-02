import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import Meta from '@/components/Meta'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-66485739-17" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-66485739-17');            
                `,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link rel="alternate" type="application/rss+xml" href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`} />
        <link rel="alternate" type="application/feed+json" href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`} />
        <Meta />
      </Head>
      <body className="flex flex-col h-full bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
