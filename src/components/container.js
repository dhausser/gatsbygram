import React from "react"
import { Link } from "gatsby"
import { useColorMode, Button, Flex, Box, IconButton } from "@chakra-ui/core"
import styled from "@emotion/styled"

import Footer from "./footer"

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        as="nav"
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === `dark` ? `sun` : `moon`}
          onClick={toggleColorMode}
        />
        <Box>
          <Link to="/dashboard">
            <Button as="a" variant="ghost" p={[1, 4]}>
              Dashboard
            </Button>
          </Link>
          <Link to="/blog">
            <Button as="a" variant="ghost" p={[1, 4]}>
              Blog
            </Button>
          </Link>
          <Link to="/about">
            <Button as="a" variant="ghost" p={[1, 4]}>
              About
            </Button>
          </Link>
          <Link to="/">
            <Button as="a" variant="ghost" p={[1, 4]}>
              Home
            </Button>
          </Link>
        </Box>
      </StickyNav>
      <Flex as="main" justifyContent="center" flexDirection="column" px={8}>
        {children}
        <Footer />
      </Flex>
    </>
  )
}

export default Container
