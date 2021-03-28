import { Box, HStack } from '@chakra-ui/react'

import Container from '@components/Container'
import Link from '@components/Link'

const Footer = () => {
  return (
    <Box as="footer" py={10}>
      <Container>
        <HStack justify="center" spacing={10}>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Get in Touch</Link>
        </HStack>
      </Container>
    </Box>
  )
}

export default Footer
