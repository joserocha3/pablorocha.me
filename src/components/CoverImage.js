import NextLink from 'next/link'
import { Image, Link } from '@chakra-ui/react'

const CoverImage = ({ title, src, slug }) => {
  return (
    <NextLink as={`/blog/${slug}`} href="/blog/[slug]">
      <Link aria-label={title}>
        <Image ignoreFallback src={src} alt={`Cover Image for ${title}`} />
      </Link>
    </NextLink>
  )
}

export default CoverImage
