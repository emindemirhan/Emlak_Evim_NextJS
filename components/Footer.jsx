import React from 'react'
import {Box} from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box
    p="5"
    textAlign="center"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
    >
2022 Emlak Evim, Made With <a style={{color: 'black' }} href="https://www.emndmrhn.dev"><b>Emin Demirhan</b></a>.
    </Box>
  )
}

export default Footer