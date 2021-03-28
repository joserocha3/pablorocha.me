import { Box } from '@chakra-ui/react'

import Header from '@components/Header'
import Meta from '@components/Meta'
import Footer from '@components/Footer'

const Layout = ({
  image,
  title,
  description,
  children,
  showHeader = true,
  showFooter = true,
}) => {
  return (
    <>
      {showHeader && <Header />}
      <Meta title={title} description={description} image={image} />
      <Box as="main" minH={200}>
        {children}
      </Box>
      {showFooter && <Footer />}
    </>
  )
}

export default Layout
