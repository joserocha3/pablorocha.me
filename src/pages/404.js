import { Heading, Image, Text, VStack } from '@chakra-ui/core'

import Container from '@components/Container'
import Layout from '@components/Layout'
import Link from '@components/Link'

const NotFound = () => (
  <Layout
    showHeader={false}
    showFooter={false}
    title="Page not found | Pablo Rocha's Technology, Blog and Portfolio"
  >
    <Container py={24} maxW={700}>
      <VStack spacing={10}>
        <Image src="/assets/img/404.svg" h={200} />
        <Heading size="2xl" fontWeight="extrabold">
          &nbsp;Page not found
        </Heading>
        <Text fontSize="2xl">Oops, this URL does not exist.</Text>
        <Link href="/" fontSize="xl" color="pink.600">
          Go back home
        </Link>
      </VStack>
    </Container>
  </Layout>
)

export default NotFound
