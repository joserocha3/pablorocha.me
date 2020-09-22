import { Avatar, HStack, VStack, Heading, Text } from '@chakra-ui/core'

import Container from '@components/Container'
import Link from '@components/Link'

const Intro = () => {
  return (
    <Container textAlign="center">
      <VStack spacing={1} py={[8, 16]}>
        <Avatar
          size="2xl"
          src="/assets/img/headshot-512.jpg"
          objectFit="cover"
          name="Pablo Rocha"
        />
        <Heading as="h1" fontWeight="black" size="2xl">
          Pablo Rocha
        </Heading>
        <Heading as="h2" fontWeight="normal" size="md" color="gray.500">
          Developer & Tech Enthusiast
        </Heading>
        <HStack pt={4}>
          <Link
            href="https://github.com/joserocha3"
            isExternal
            color="gray.500"
            _hover={{ color: 'black' }}
            aria-label="github profile"
          >
            <svg
              alt="github profile"
              size="50"
              fill="currentColor"
              viewBox="0 0 24 24"
              height="25"
              width="25"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </Link>
          <Link
            href="https://www.facebook.com/jprocha101"
            isExternal
            color="gray.500"
            _hover={{ color: '#4267B2' }}
            aria-label="facebook profile"
          >
            <svg
              alt="facebook profile"
              fill="currentColor"
              height="25"
              width="25"
              version="1.1"
              viewBox="0 0 9 18"
            >
              <path d="M9,0 L9,3.6 L7.2,3.6 C6.579,3.6 6.3,4.329 6.3,4.95 L6.3,7.2 L9,7.2 L9,10.8 L6.3,10.8 L6.3,18 L2.7,18 L2.7,10.8 L0,10.8 L0,7.2 L2.7,7.2 L2.7,3.6 C2.7,1.6117749 4.3117749,3.99680289e-16 6.3,0 L9,0 Z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jprocha101"
            isExternal
            color="gray.500"
            _hover={{ color: '#0072b1' }}
            aria-label="linkedin profile"
          >
            <svg
              alt="linkedin profile"
              fill="currentColor"
              height="25"
              width="25"
              viewBox="0 0 18 18"
            >
              <path d="M18 18h-4v-6.75c0-1.06-1.19-1.94-2.25-1.94S10 10.19 10 11.25V18H6V6h4v2c.66-1.07 2.36-1.76 3.5-1.76 2.5 0 4.5 2.04 4.5 4.51V18zM4 18H0V6h4v12zM2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path>
            </svg>
          </Link>
        </HStack>
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
        <br />
        <VStack mt={4} spacing={2}>
          <Text textAlign="center">
            ✏️&nbsp;&nbsp;Get in touch via my&nbsp;
            <Link href="/contact" color="gray.500" textDecoration="underline">
              contact form
            </Link>
          </Text>
          <Text textAlign="center">
            📫&nbsp;&nbsp;Email me at&nbsp;
            <Link
              href="mailto:hello@pablorocha.me"
              isExternal
              color="gray.500"
              textDecoration="underline"
            >
              hello@pablorocha.me
            </Link>
          </Text>
          <Text textAlign="center">
            📄&nbsp;&nbsp;
            <Link
              href="assets/files/pablo-rocha-resume.pdf"
              isExternal
              color="gray.500"
              textDecoration="underline"
            >
              Download
            </Link>
            &nbsp;or&nbsp;
            <Link href="/about" color="gray.500" textDecoration="underline">
              view
            </Link>
            &nbsp;my resume
          </Text>
        </VStack>
      </Container>
    </Container>
  )
}

export default Intro
