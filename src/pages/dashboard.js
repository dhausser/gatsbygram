import React from "react"

import { Flex, Stack } from "@chakra-ui/core"
import Container from "../components/container"

const Dashboard = () => (
  <Container>
    <Stack
      as="main"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 4rem auto"
      maxWidth="700px"
    >
      <Flex>Dashboard</Flex>
    </Stack>
  </Container>
)

export default Dashboard
