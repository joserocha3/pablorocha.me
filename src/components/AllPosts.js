import { Box, SimpleGrid } from '@chakra-ui/core'

import PostPreview from '@components/PostPreview'

const AllPosts = ({ posts }) => {
  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={16}>
      {posts.map((post) => (
        <Box w="100%" key={post.slug}>
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default AllPosts
