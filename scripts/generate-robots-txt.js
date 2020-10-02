const fs = require('fs')

const generateRobotsTxt = () => {
  const robotsTxt =
    process.env.ALLOW_ROBOTS === 'true'
      ? `User-agent: *
Allow: /
Sitemap: https://pablorocha.me/sitemap.xml`
      : `User-agent: *
Disallow: /`

  fs.writeFileSync('public/robots.txt', robotsTxt)
}

generateRobotsTxt()
