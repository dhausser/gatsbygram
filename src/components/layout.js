import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/core"

import theme from "./styles/theme"
import { prismLightTheme, prismDarkTheme } from "./styles/prism"

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === `light` ? prismLightTheme : prismDarkTheme};

          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === `light` ? `white` : `#171923`};
          }
        `}
      />
      {children}
    </>
  )
}

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
        <GlobalStyle>
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
          {children}
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  )
}
