import { Box, Heading, Text, Link, useColorModeValue } from '@chakra-ui/core'

const InfoSquare = ({
  title,
  description,
  href,
  lightColor,
  darkColor,
  ...rest
}) => {
  const bg = useColorModeValue(lightColor, darkColor)
  const borderColor = useColorModeValue(darkColor, lightColor)

  return (
    <Link
      as={Box}
      _hover={{ textDecoration: 'none' }}
      href={href}
      isExternal
      direction="column"
      borderTop="3px solid"
      p={4}
      borderRadius="md"
      fontSize="lg"
      maxW={300}
      bg={bg}
      borderColor={borderColor}
      key={title}
      h="100%"
      {...rest}
    >
      <Heading as="h3" mb={6} fontSize="2xl">
        {title}
      </Heading>
      <Text mb={6}>{description}</Text>
    </Link>
  )
}

export default InfoSquare
