import { Container as ChakraContainer } from '@chakra-ui/react'

const Container = ({ children, ...rest }) => {
  return (
    <ChakraContainer maxW={1080} p={3} {...rest}>
      {children}
    </ChakraContainer>
  )
}

export default Container
