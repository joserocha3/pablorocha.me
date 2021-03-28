import { VStack } from '@chakra-ui/react'
import DateFormatter from '@components/DateFormatter'
import CoverImage from '@components/CoverImage'
import PostTitle from '@components/PostTitle'

const PostHeader = ({ title, coverImage, date }) => {
  return (
    <VStack spacing={6} mb={12}>
      <PostTitle>{title}</PostTitle>
      <CoverImage title={title} src={coverImage} />
      <DateFormatter dateString={date} />
    </VStack>
  )
}

export default PostHeader
