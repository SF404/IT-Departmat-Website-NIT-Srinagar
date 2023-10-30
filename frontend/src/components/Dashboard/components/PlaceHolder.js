import { Box } from '@chakra-ui/react'
import React from 'react'
import placeholder from './../../../assets/images/panceholder.png'


function PlaceHolder() {
  return (
    <>
      <Box w={'full'} h={'full'} background bg={'orange'} style={{ background: `url(${placeholder}) no-repeat center center/cover` }}></Box>
    </>
  )
}

export default PlaceHolder