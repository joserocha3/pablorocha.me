import {
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useBreakpoint,
} from '@chakra-ui/core'
import { EmailIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'

import Container from '@components/Container'
import Link from '@components/Link'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const breakpoint = useBreakpoint()

  return (
    <Container as={Flex} justify="space-between" py={5} fontWeight="bold">
      <HStack spacing={[4, 8]} align="baseline">
        <Link href="/" fontSize="2xl">
          {['base', 'sm'].includes(breakpoint) ? 'PR' : 'Pablo Rocha'}
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
        />
        <IconButton
          fontSize="xl"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
        />
      </HStack>
    </Container>
  )
}

export default Header
