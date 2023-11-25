import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import placeholder from './../../assets/images/placeholder.svg'


function PlaceHolder() {
  return (
    <Box flexGrow={1}>
      <Image w={'full'} h={'full'} border={0} src={placeholder}></Image>
    </Box>
  )
}

export default PlaceHolder