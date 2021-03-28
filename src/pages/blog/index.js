import { Heading } from '@chakra-ui/react'

import Layout from '@components/Layout'
import Container from '@components/Container'
import AllPosts from '@components/AllPosts'

import { getAllPosts } from '@lib/api'

const Blog = ({ allPosts }) => {
  return (
    <Layout title="Blog | Pablo Rocha's Technology, Blog and Portfolio">
      <Container>
        <Heading mb={6}>Some Light Reading</Heading>
        <AllPosts posts={allPosts} />
      </Container>
    </Layout>
  )
}
export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
    'isPublished',
    'isHidden',
  ])

  return {
    props: { allPosts },
  }
}

export default Blog
