import { Heading, Text } from '@chakra-ui/core'

import Layout from '@components/Layout'
import Container from '@components/Container'
import MoreStories from '@components/more-stories'

import { getAllPosts } from '@lib/api'

const Blog = ({ allPosts }) => {
  return (
    <Layout>
      <Container>
        <Heading mb={6}>Blog Posts</Heading>
        {allPosts.length > 0 ? (
          <MoreStories posts={allPosts} />
        ) : (
          <>
            <Text>Nothing to see here yet :)</Text>
            <br />
            <Text>
              I am working hard at creating some good content. Check back soon
              for some informative and insightful blog posts.
            </Text>
          </>
        )}
      </Container>
    </Layout>
  )
}
export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

export default Blog
