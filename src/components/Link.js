import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/core'

const Link = ({ href, nextAs, ...rest }) => {
  return (
    <NextLink href={href} as={nextAs} passHref>
      <ChakraLink {...rest} />
    </NextLink>
  )
}

export default Link
