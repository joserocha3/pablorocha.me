import { Avatar, VStack, Heading, Text } from '@chakra-ui/core'

import Container from '@components/Container'

const Intro = () => {
  return (
    <Container textAlign="center">
      <VStack spacing={3} py={16}>
        <Avatar
          size="2xl"
          src="/assets/img/headshot-512.jpg"
          objectFit="cover"
        />
        <Heading as="h1" fontWeight="black" size="2xl">
          Pablo Rocha
        </Heading>
        <Heading as="h2" fontWeight="normal" size="md" color="gray.500">
          Developer & Tech Enthusiast
        </Heading>
      </VStack>
      <Container mb={6}>
        <Text maxW={500} fontSize="lg" mx="auto">
          For over a decade I have been working for large enterprises and small
          businesses. Within my various roles I have managed developers and
          implemented projects from conception to development to deployment.
        </Text>
        <br />
        <Text maxW={500} fontSize="lg" mx="auto">
          I am very passionate about getting the job done, and getting it done
          right. Software should always be robust, well-constructed and
          maintainable.
        </Text>
      </Container>
    </Container>
  )
}

export default Intro
