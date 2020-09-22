import { Flex, HStack, IconButton, useColorMode } from '@chakra-ui/core'
import { EmailIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'

import Container from '@components/Container'
import Link from '@components/Link'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container as={Flex} justify="space-between" py={5} fontWeight="bold">
      <HStack spacing={[4, 8]} align="baseline">
        <Link
          href="/"
          fontSize="2xl"
          display={['block', 'none']}
          aria-label="home logo"
        >
          PR
        </Link>
        <Link
          href="/"
          fontSize="2xl"
          display={['none', 'block']}
          aria-label="home logo"
        >
          Pablo Rocha
        </Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </HStack>

      <HStack spacing={[4, 8]}>
        <IconButton
          as={Link}
          fontSize="xl"
          href="/contact"
          icon={<EmailIcon />}
          aria-label="contact"
        />
        <IconButton
          fontSize="xl"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          aria-label="toggle theme"
        />
      </HStack>
    </Container>
  )
}

export default Header
import { Flex, HStack, IconButton, useColorMode } from '@chakra-ui/core'
import { EmailIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'

import Container from '@components/Container'
import Link from '@components/Link'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container as={Flex} justify="space-between" py={5} fontWeight="bold">
      <HStack spacing={[4, 8]} align="baseline">
        <Link
          href="/"
          fontSize="2xl"
          display={['block', 'none']}
          aria-label="home logo"
        >
          PR
        </Link>
        <Link
          href="/"
          fontSize="2xl"
          display={['none', 'block']}
          aria-label="home logo"
        >
          Pablo Rocha
        </Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </HStack>

      <HStack spacing={[4, 8]}>
        <IconButton
          as={Link}
          fontSize="xl"
          href="/contact"
          icon={<EmailIcon />}
          aria-label="contact"
        />
        <IconButton
          fontSize="xl"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          aria-label="toggle theme"
        />
      </HStack>
    </Container>
  )
}

export default Header
