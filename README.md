# pablorocha.me

![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=pablorocha-me)

Pablo Rocha's personal website.

Example blog post, goes in `src/pages/blog/name-of-file.mdx`:

```mdx
import { ArticleLayout } from '@/components/ArticleLayout'
import Image from 'next/future/image'
import coverImage from './cover-800-400.jpg'

export const meta = {
  author: 'Pablo Rocha',
  date: '2020-10-15',
  title: 'Come on, man!',
  description: 'Tralalalala',
}

export default (props) => <ArticleLayout meta={meta} {...props} />

<Image src={coverImage} alt="alt goes here" />

> This is a blockquote.

## Let's Get Started... Again

### Hello, Subtext Here

We will visit this [cool website](https://pablorocha.me) when we are bored.
```
