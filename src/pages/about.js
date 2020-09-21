import { Heading, Text } from '@chakra-ui/core'

import Layout from '@components/Layout'
import Container from '@components/Container'
import WorkHistory from '@components/WorkHistory'
import Education from '@components/Education'
import Skills from '@components/Skills'
import Ventures from '@components/Ventures'
import Projects from '@components/Projects'

const Contact = () => {
  return (
    <Layout>
      <Container mb={6}>
        <Heading mb={4}>About Me</Heading>
        <Text fontSize="lg">
          I'm currently living in the southern part of Texas right along the
          border. I hop back and forth between working on client projects and
          focusing on a few exciting ventures.
        </Text>
        <br />
        <Text fontSize="lg">
          When I find free time I like jump rope and do some other active
          things. It is not always easy, but I try to stick to a keto diet 🍳
          🥓.
        </Text>
        <br />
        <Text fontSize="lg">
          Even when I am not working, I still catch myself thinking (or
          daydreaming) about how to improve current projects. I keep an open
          mind so I can find ways to take my development and management skills
          to the next level.
        </Text>
      </Container>
      <WorkHistory />
      <Education />
      <Skills />
      <Ventures />
      <Projects />
    </Layout>
  )
}

export default Contact