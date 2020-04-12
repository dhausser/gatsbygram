import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"

import {
  Badge,
  Heading,
  Flex,
  Stack,
  Box,
  Button,
  IconButton,
  Icon,
} from "@chakra-ui/core"
import Container from "../components/container"

const ProjectPage = ({ data }) => {
  const { title, image, description, tags, url, slug } = data.projectsJson

  return (
    <Container>
      <Stack
        // justifyContent="center"
        // alignItems="flex-start"
        // m="0 auto 4rem auto"
        maxWidth="700px"
        spacing="8"
      >
        <Flex flexDirection="column">
          <Heading>{title}</Heading>
          <Image fluid={image.childImageSharp.fluid} alt={title} />
          <Flex>
            <Flex pt="6" pb="6" alignItems="baseline">
              {tags.map(tag => (
                <Box key={tag} px="1">
                  <Badge rounded="full" px="2" variantColor="teal">
                    {tag}
                  </Badge>
                </Box>
              ))}
            </Flex>
            <Flex justifyContent="flex-end" alignItems="baseline">
              <a href={`https://github.com/dhausser/${slug}`}>
                <IconButton
                  aria-label="GitHub"
                  icon="github"
                  size="lg"
                  color="gray.500"
                  variant="ghost"
                >
                  View Code &rarr;
                </IconButton>
              </a>
              <a href={url}>
                <Icon name="external-link" mx={2}>
                  View Online &rarr;
                </Icon>
              </a>
            </Flex>
          </Flex>

          <Flex
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
            pt="6"
            pb="6"
          >
            {description}
          </Flex>

          <Link to="/">
            <Button>&larr; Back to all projects</Button>
          </Link>
        </Flex>
      </Stack>
    </Container>
  )
}

export default ProjectPage
export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      slug
      url
      tags
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
