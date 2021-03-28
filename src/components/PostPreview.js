import { VStack, Heading, Text } from '@chakra-ui/react'

import CoverImage from '@components/CoverImage'
import Link from '@components/Link'
import DateFormatter from '@components/DateFormatter'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <VStack align="flex-start">
      <CoverImage slug={slug} title={title} src={coverImage} />
      <Heading as="h3" size="lg">
        <Link nextAs={`/blog/${slug}`} href="/blog/[slug]">
          {title}
        </Link>
      </Heading>
      <DateFormatter dateString={date} />
      <Text>{excerpt}</Text>
    </VStack>
  )
}
