import { useRouter } from 'next/router'

import Container from '@components/Container'
import Layout from '@components/Layout'
import PostTitle from '@components/PostTitle'
import PostHeader from '@components/PostHeader'
import PostBody from '@components/PostBody'

import { getPostBySlug, getAllPosts } from '@lib/api'
import markdownToHtml from '@lib/markdownToHtml'

const Post = ({ post }) => {
  const router = useRouter()

  return (
    <Layout
      image={post.ogImage.url}
      title={`${post.title} | Pablo Rocha`}
      description={post.excerpt?.substring?.(0, 160)}
    >
      <Container maxW={800}>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
            />
            <PostBody content={post.content} />
          </article>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
    'excerpt',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug', 'isPublished'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default Post
