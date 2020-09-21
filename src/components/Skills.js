import { Heading, Wrap, Tag } from '@chakra-ui/core'

import Container from '@components/Container'

const data = [
  'JavaScript',
  'React',
  'React Native',
  'Flutter',
  'Next.js',
  'Vue.js',
  'Firebase',
  'Node.js',
  'Heroku',
  'Hasura',
  'PostgreSQL',
  'MongoDB',
  'GraphQL',
  'Git',
  'style-components',
  'HTML and CSS',
  'Netlify',
  'D3.js',
]

const Skills = () => {
  return (
    <Container mb={6}>
      <Heading as="h3" mb={4}>
        Skills
      </Heading>
      <Wrap as="h3" spacing={6}>
        {data.map((skill, index) => (
          <Tag key={index} size="lg" p={3}>
            {skill}
          </Tag>
        ))}
      </Wrap>
    </Container>
  )
}

export default Skills
