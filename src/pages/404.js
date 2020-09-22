import { Heading, Text } from '@chakra-ui/core'

import Container from '@components/Container'
import Layout from '@components/Layout'

const NotFound = () => (
  <Layout>
    <Container>
      <Heading mb={8}>Page not found</Heading>
      <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </Container>
  </Layout>
)

export default NotFound
