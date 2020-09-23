import { useRouter } from 'next/router'
import Head from 'next/head'

import Container from '@components/Container'
import Layout from '@components/Layout'
import PostTitle from '@components/PostTitle'
import PostHeader from '@components/PostHeader'
import PostBody from '@components/PostBody'

import { getPostBySlug, getAllPosts } from '@lib/api'

import markdownToHtml from '@lib/markdownToHtml'

const Post = ({ post, preview }) => {
  const router = useRouter()

  return (
    <Layout
      preview={preview}
      title="Blog | Pablo Rocha's Technology, Blog and Portfolio"
    >
      <Container maxW={800}>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | Pablo Rocha</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
            </article>
          </>
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
  const posts = getAllPosts(['slug'])

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
