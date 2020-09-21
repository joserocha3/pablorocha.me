import { Box } from '@chakra-ui/core'

import Header from '@components/Header'
import Meta from '@components/Meta'
import Footer from '@components/Footer'

const Layout = ({ preview, children }) => {
  return (
    <>
      <Header />
      <Meta />
      <Box as="main" minH={200}>
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout
