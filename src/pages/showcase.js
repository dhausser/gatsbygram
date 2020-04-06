import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import ShowcaseView from "../views/showcase"

const ShowcasePage = ({ data, location }) => {
  console.log(data)
  return (
    <div
      styles={css`
        display: flex;
      `}
    >
      <ShowcaseView data={data} location={location} />
    </div>
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
