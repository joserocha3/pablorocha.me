import unified from 'unified'
import remarkParse from 'remark-parse'
import externalLinks from 'remark-external-links'
import remarkRehype from 'remark-rehype'
import rehypePrism from '@mapbox/rehype-prism'
import html from 'rehype-stringify'

const markdownToHtml = async (markdown) => {
  const result = await unified()
    .use(remarkParse)
    .use(externalLinks)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(html)
    .process(markdown)
  return result.toString()
}

export default markdownToHtml
