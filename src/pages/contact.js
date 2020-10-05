import { Input, Heading, Textarea, VStack, Button, Text } from '@chakra-ui/core'

import Layout from '@components/Layout'
import Container from '@components/Container'
import Link from '@components/Link'

const Contact = () => {
  return (
    <Layout title="Contact | Pablo Rocha's Technology, Blog and Portfolio">
      <Container textAlign="center">
        <VStack spacing={3} py={16}>
          <Heading as="h1" fontWeight="black" size="2xl">
            Let's Collaborate
          </Heading>
          <Heading as="h2" fontWeight="normal" size="md" color="gray.500">
            I am available for contract work or to simply talk tech
          </Heading>
        </VStack>

        <VStack
          as="form"
          spacing={8}
          py={6}
          maxW={500}
          mx="auto"
          action="https://formspree.io/hello@pablorocha.me"
          method="POST"
        >
          <Input
            variant="filled"
            type="name"
            placeholder="Your name"
            fontSize="lg"
            isRequired
            py={6}
          />
          <Input
            variant="filled"
            type="email"
            placeholder="Your email address"
            fontSize="lg"
            isRequired
            py={6}
          />
          <Textarea
            variant="filled"
            type="message"
            placeholder="Tell me how I can help"
            h={200}
            fontSize="lg"
            isRequired
            py={6}
          />
          <Button type="submit" colorScheme="blue" size="lg">
            Send
          </Button>
        </VStack>

        <Text textAlign="center" my={6}>
          or email me at{' '}
          <Link href="mailto:hello@pablorocha.me" isExternal>
            hello@pablorocha.me
          </Link>
        </Text>
      </Container>
    </Layout>
  )
}

export default Contact
