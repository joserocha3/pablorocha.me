const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

const generateSitemap = async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc')

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'src/pages/**/*{.js,.mdx}',
    '!src/pages/_*.js',
    '!src/pages/blog/[slug].js',
  ])

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('src/pages', '')
              .replace('.js', '')
              .replace('.mdx', '')
            const route = path.replace('/index', '')
            return `
                  <url>
                    <loc>${`https://pablorocha.me${route}`}</loc>
                  </url>
                `
          })
          .join('')}
    </urlset>
  `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
}

generateSitemap()
