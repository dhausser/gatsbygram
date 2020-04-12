import React from "react"
import { graphql } from "gatsby"

import { Flex, Stack } from "@chakra-ui/core"
import Container from "../components/container"

const ShowcasePage = ({ data, location }) => {
  console.log(data)
  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex>
          <h1>Showcase</h1>
        </Flex>
      </Stack>
    </Container>
  )
}

export default ShowcasePage

export const showcaseQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
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
