import {
  List,
  ListItem,
  ListIcon,
  VStack,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Container from '@components/Container'

const InfoCard = ({
  title,
  subtitle,
  name,
  description,
  list = [],
  ...rest
}) => {
  const bg = useColorModeValue('gray.100', 'gray.700')
  const color = useColorModeValue('gray.600', 'gray.200')

  return (
    <Container mb={6} {...rest}>
      {title && (
        <Heading as="h3" mb={4}>
          {title}
        </Heading>
      )}
      {subtitle && (
        <Heading
          as="h4"
          fontSize="3xl"
          fontWeight="normal"
          color={color}
          mb={4}
        >
          {subtitle}
        </Heading>
      )}
      <Flex
        direction="column"
        bg={bg}
        borderTop="3px solid"
        borderColor="gray.200"
        p={4}
        borderRadius="md"
        fontSize="lg"
      >
        <VStack mb={6} spacing={1} align="flex-start">
          {name && (
            <Heading as="h5" fontSize="2xl">
              {name}
            </Heading>
          )}
          {description && <Text>{description}</Text>}
        </VStack>
        <List spacing={2} pl={6}>
          {list.map((item, index) => (
            <ListItem key={index}>
              <ListIcon as={ChevronRightIcon} color="green.500" ml="-26px" />
              {item}
            </ListItem>
          ))}
        </List>
      </Flex>
    </Container>
  )
}

export default InfoCard
