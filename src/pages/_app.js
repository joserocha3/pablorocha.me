import { ChakraProvider } from '@chakra-ui/core'
import '@styles/index.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
