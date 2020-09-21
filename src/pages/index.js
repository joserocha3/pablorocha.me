import Head from 'next/head'

import Intro from '@components/Intro'
import Layout from '@components/Layout'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Home | Pablo Rocha's Technology, Blog and Portfolio</title>
        </Head>
        <Intro />
      </Layout>
    </>
  )
}

export default Index
