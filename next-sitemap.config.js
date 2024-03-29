/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: process.env.ALLOW_ROBOTS ? '/' : '', disallow: process.env.ALLOW_ROBOTS ? '' : '/' }],
    includeNonIndexSitemaps: true,
  },
  generateIndexSitemap: false,
  outDir: 'out',
}
