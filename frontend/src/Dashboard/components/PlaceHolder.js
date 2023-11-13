import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import placeholder from './../../assets/images/panceholder.webp'


function PlaceHolder() {
  return (
    <Box flexGrow={1}>
      <Image w={'full'} h={'full'} bg={'orange'} border={'none'} style={{ background: `url(${placeholder}) no-repeat center center/cover` }}></Image>
    </Box>
  )
}

export default PlaceHolder