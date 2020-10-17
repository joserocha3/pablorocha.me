import { Heading, Wrap } from '@chakra-ui/core'

import Container from '@components/Container'
import InfoSquare from '@components/InfoSquare'

const data = [
  {
    href: 'https://www.whiterabbitpress.com/japanesegradedreaders',
    title: 'Japanese Graded Readers',
    description:
      'React Native app powered by an admin dashboard. Uses Firebase for authentication, storage and notifications.',
    lightColor: '#F0F8FC',
    darkColor: '#AAB7BD',
  },
  {
    href: 'https://www.pawsomedogs.net',
    title: 'Pawsome Dogs Training & Behavior',
    description:
      'Static website designed for a well-known Chicago dog trainer. Built using Gatsby and styled with styled-components.',
    lightColor: '#F6F1E7',
    darkColor: '#E0B255',
  },
  {
    href: 'https://www.lospinoshardware.com',
    title: 'Los Pinos Hardware Co.',
    description:
      'Static website hosted for a growing hardware business. This is a static website with vanilla HTML and CSS.',
    lightColor: '#F0FCF1',
    darkColor: '#7DA180',
  },
  {
    href: 'https://www.cagesum.com',
    title: 'Cagesum',
    description:
      "The world's first Nicolas Cage text placeholder generator. Created with Next.js on the front-end Hasura as a backend and hosted via Vercel",
    lightColor: '#BBC8DB',
    darkColor: '#5C89D2',
  },
]

const Projects = () => {
  return (
    <Container mb={6}>
      <Heading as="h3" mb={4}>
        Projects
      </Heading>
      <Wrap as="h3" spacing={6}>
        {data.map(({ title, description, ...rest }) => (
          <InfoSquare title={title} description={description} {...rest} />
        ))}
      </Wrap>
    </Container>
  )
}

export default Projects
