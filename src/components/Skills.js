import { Heading, Wrap, WrapItem, Tag } from '@chakra-ui/react'

import Container from '@components/Container'

const data = [
  'JavaScript',
  'React',
  'Flutter',
  'React Native',
  'Next.js',
  'Netlify',
  'Firebase',
  'Node.js',
  'Heroku',
  'Hasura',
  'PostgreSQL',
  'MongoDB',
  'GraphQL',
  'styled-components',
  'emotion',
  'styled-system',
  'HTML',
  'CSS',
  'Git',
  'D3.js',
  'Figma',
]

const Skills = () => {
  return (
    <Container mb={6} id="skills">
      <Heading as="h3" mb={4}>
        Skills
      </Heading>
      <Wrap as="h3" spacing={6}>
        {data.map((skill, index) => (
          <WrapItem as={Tag} key={index} size="lg" p={3}>
            {skill}
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  )
}

export default Skills
