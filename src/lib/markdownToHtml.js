import remark from 'remark'
import html from 'remark-html'
import externalLinks from 'remark-external-links'

const markdownToHtml = async (markdown) => {
  const result = await remark().use(externalLinks).use(html).process(markdown)
  return result.toString()
}

export default markdownToHtml
