import { ChakraProvider } from '@chakra-ui/core'

import theme from '@lib/theme'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
