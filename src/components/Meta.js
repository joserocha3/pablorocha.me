import Head from 'next/head'

function makeSchema() {
  return [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: 'Jose Pablo Rocha, Jr.',
        image: 'https://pablorocha.me/headshot.jpg',
        jobTitle: 'Software Engineer',
        gender: 'male',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Edinburg',
          addressRegion: 'TX',
          postalCode: '78539',
          addressCountry: 'United States',
        },
        email: 'hello@pablorocha.me',
        birthDate: '1984-08-16',
        alumniOf: 'University of Texas Pan American',
        birthPlace: 'Illinois',
        sameAs: [
          'https://twitter.com/jprocha101',
          'https://www.facebook.com/jprocha101',
          'https://github.com/joserocha3',
          'https://instagram.com/jprocha101',
          'https://www.linkedin.com/in/jprocha101',
        ],
        url: 'https://pablorocha.me',
      }),
    },
  ]
}

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content="Pablo Rocha is a developer & tech enthusiast."
      />
      <meta
        property="og:image"
        content="https://pablorocha.me/assets/img/headshot.jpg"
      />
      <script
        key="ld+json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(makeSchema()) }}
      />
    </Head>
  )
}
