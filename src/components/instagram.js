import React, { useState, useEffect } from "react"
import Card from "./card"
import { Box } from "@chakra-ui/core"

function useInstagram() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`/.netlify/functions/instagram`)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])
  return posts
}

export default function Instagram() {
  const gramz = useInstagram()
  return (
    <Box>
      {gramz.map(gram => (
        <a href={gram.url} key={gram.id}>
          <Card imageUrl={gram.thumbnail} imageAlt={gram.caption} />
        </a>
      ))}
    </Box>
  )
}
