import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Footer from "./footer"
import { Global } from "@emotion/core"
import globalStyles, { layoutStyles, container } from "./styles/global-styles"

export default function Layout({
  // location,
  // title,
  children,
  className,
  // pageContext,
}) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Global styles={globalStyles} />
      <Helmet
        htmlAttributes={{ lang: `en` }}
        meta={[
          {
            name: `description`,
            content: data.site.siteMetadata.description,
          },
        ]}
        title={data.site.siteMetadata.title}
      />

      <div css={layoutStyles}>
        <div className="container" css={container}>
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}
