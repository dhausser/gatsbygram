import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"
import theme from "./styles/theme"
import Container from "../components/container"

export default function Layout({ children }) {
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
    <ThemeProvider theme={theme}>
      <ColorModeProvider value="light">
        <CSSReset />
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
        <Container>{children}</Container>
      </ColorModeProvider>
    </ThemeProvider>
  )
}
