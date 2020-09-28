import { extendTheme } from '@chakra-ui/core'
import { mode } from '@chakra-ui/theme-tools'

const markdown = (props) => ({
  px: [2, 0],
  '*': {
    marginBottom: '16px',
  },

  img: {
    m: 'auto',
    w: ['90%', '100%'],
    maxW: 500,
    my: 10,
  },
  p: {
    fontSize: '1.2rem',
    lineHeight: 1.8,
  },
  a: {
    textDecoration: 'underline',
  },
  h2: {
    fontWeight: 'bold',
    fontSize: '32px',
    mt: '48px',
    borderBottom: 'solid 1px #dadada',
  },
  h3: {
    fontWeight: 'bold',
    fontSize: '24px',
    mt: '32px',
  },
  ul: {
    ml: 8,
  },
  blockquote: {
    fontStyle: 'italic',
    mb: 8,
    p: {
      bg: mode('azure', '#013C3C')(props),
      p: 4,
      borderLeft: '4px solid #62dafc',
    },
  },
})

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', '#0E141B')(props),
        color: mode('#2A2C2D', 'white')(props),
        fontSize: 16,
      },
      '.markdown': markdown(props),
    }),
  },
})

export default theme
