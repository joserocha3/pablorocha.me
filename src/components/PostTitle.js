import { Heading } from '@chakra-ui/core'

const PostTitle = ({ children }) => {
  return (
    <Heading as="h1" size="2xl">
      {children}
    </Heading>
  )
}

export default PostTitle
