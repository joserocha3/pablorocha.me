import Link from 'next/link'
import { VStack, Heading, Image, Text } from '@chakra-ui/core'

const CoverImage = ({ title, src, slug }) => {
  const image = <img src={src} alt={`Cover Image for ${title}`} />

  return (
    <div>
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
