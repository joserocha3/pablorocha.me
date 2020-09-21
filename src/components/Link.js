import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/core'

const Link = ({ href, nextAs, isExternal, ...rest }) => {
  return isExternal ? (
    <ChakraLink href={href} isExternal {...rest} />
  ) : (
    <NextLink href={href} as={nextAs} passHref>
      <ChakraLink {...rest} />
    </NextLink>
  )
}

export default Link
