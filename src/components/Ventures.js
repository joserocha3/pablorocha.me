import { Heading, Wrap, Tag } from '@chakra-ui/react'

import Container from '@components/Container'
import InfoSquare from '@components/InfoSquare'

const data = [
  {
    href: 'https://www.nomoreanalog.com',
    title: 'NoMoreAnalog',
    description:
      'Mobile and web application development. Making cool apps and keeping clients happy.',
    lightColor: '#AFAEE7',
    darkColor: '#7372A8',
  },
  {
    href: 'https://www.dotdotdata.com',
    title: 'Dot Dot Data',
    description:
      'Startup providing location based web and mobile applications to various clients.',
    lightColor: '#F1A7A7',
    darkColor: '#E96363',
  },
  {
    href: 'https://www.criclick.com',
    title: 'Criclick',
    description:
      'Connecting small businesses & service providers with local consumers.',
    lightColor: '#B2D3FF',
    darkColor: '#2B6DC1',
  },
]

const Ventures = () => {
  return (
    <Container mb={6} id="ventures">
      <Heading as="h3" mb={4}>
        Ventures
      </Heading>
      <Wrap as="h3" spacing={6}>
        {data.map(({ title, description, ...rest }) => (
          <InfoSquare key={title} title={title} description={description} {...rest} />
        ))}
      </Wrap>
    </Container>
  )
}

export default Ventures
