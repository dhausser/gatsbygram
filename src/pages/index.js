import React from "react"
import { graphql } from "gatsby"

import { Flex, Stack } from "@chakra-ui/core"
import Container from "../components/container"

// import ProjectPreview from "../components/project-preview"
// import Instagram from "../components/instagram"
// import {
//   title,
//   description,
//   grid,
//   card,
// } from "../components/styles/global-styles"

export default function Index({ data }) {
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
          Home
          {/* <h1 className="title" css={title}>
            Welcome to <a href="https://davyhausser.com">Gatsbygram!</a>
          </h1>

          <p className="description" css={description}>
            Get started by editing <code>pages/index.js</code>
          </p>

          <div className="grid" css={grid}>
            {data.allProjectsJson.edges.map(({ node: project }, index) => (
              <div
                key={`preview-${project.slug.current}`}
                className="card"
                css={card}
              >
                <ProjectPreview
                  title={project.title}
                  description={project.description}
                  imageData={project.image.childImageSharp.fluid}
                  slug={project.slug}
                  index={index}
                />
              </div>
            ))}
            <a href="https://nextjs.org/docs" className="card" css={card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className="card" css={card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/zeit/next.js/tree/master/examples"
              className="card"
              css={card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://zeit.co/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="card"
              css={card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with ZEIT
                Now.
              </p>
            </a>
            <Instagram />
          </div> */}
        </Flex>
      </Stack>
    </Container>
  )
}

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
