const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')
const matter = require('gray-matter')

const generateSitemap = async () => {
  const pages = await globby([
    'src/pages/**/*.js',
    '_posts/**/*.md',
    '!src/pages/_*.js',
    '!src/pages/blog/[slug].js',
  ])

  const paths = []

  pages.forEach((page) => {
    if (page.includes('_posts')) {
      const fileContents = fs.readFileSync(page, 'utf8')
      const { data } = matter(fileContents)

      if (!data.isPublished) {
        return
      }
    }

    const path = page
      .replace('src/pages', '')
      .replace('/index', '')
      .replace('.js', '')
      .replace('_posts', '/blog')
      .replace('.md', '')

    paths.push(`
      <url>
        <loc>${`https://pablorocha.me${path}`}</loc>
      </url>
    `)
  })

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${paths.join('')}
    </urlset>
  `

  const prettierConfig = await prettier.resolveConfig('./.prettierrc')

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
}

generateSitemap()
