import React from "react"
import { graphql } from "gatsby"

import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid,
} from "@chakra-ui/core"

import ProjectCard from "../components/project-card"
import Instagram from "../components/instagram"
import Card from "../components/card"

export default function Index({ data }) {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: `gray.700`,
    dark: `gray.400`,
  }

  return (
    <Stack
      as="main"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 4rem auto"
      maxWidth="700px"
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
      >
        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
          Dashboard
        </Heading>
        <Text color={secondaryTextColor[colorMode]}>
          This is my personal dashboard, built with Gatsby and Netlify
          serverless functions.
        </Text>
        <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
          {data.allProjectsJson.edges.map(({ node: project }) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              image={project.image}
              slug={project.slug}
              tags={project.tags}
              url={project.url}
            />
          ))}
          <Card />
          <Card />
          <Card />
          <Card />
          <Instagram />
        </SimpleGrid>
      </Flex>
    </Stack>
  )
}

export const allProjectsQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
          tags
          url
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
