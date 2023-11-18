import { Box, GridItem, Heading, IconButton, Link, SimpleGrid, Text, position } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from 'better-react-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

const News = () => {
  return (
    <SimpleGrid w={'full'} columns={[1, 1, 2, 3]}>
      <GridItem colSpan={2}>
        <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'left'} ml={'20px'} color={'#192e59'}>Latest News</Heading>
        <Box w={'full'} >
          <Carousel cols={2} rows={1} gap={8} loop={true} showDots={false} dotColorActive={'#192e59'}
            arrowLeft={
              <IconButton icon={<ChevronRightIcon />} variant={'ghost'} colorScheme='whiteAlpha' style={{ position: 'absolute', top: '35%', left: '20px', zIndex: 50 }}></IconButton>}
            arrowRight={
              <IconButton icon={<ChevronLeftIcon />} variant={'ghost'} colorScheme='whiteAlpha' style={{ position: 'absolute', top: '35%', right: '20px', zIndex: 50 }}></IconButton>}
            containerStyle={{ margin: '0em', }}>

            <Carousel.Item >
              <Box w={'full'}>
                <Box  aspectRatio={16/9} bg={'brown'}></Box>
                <Box aspectRatio={16/9} bg={'white'}></Box>
              </Box>

            </Carousel.Item>
            <Carousel.Item >
              <Box w={'full'}>
                <Box  aspectRatio={16/9} bg={'brown'}></Box>
                <Box aspectRatio={16/9} bg={'white'}></Box>
              </Box>

            </Carousel.Item>
            <Carousel.Item >
              <Box w={'full'}>
                <Box  aspectRatio={16/9} bg={'brown'}></Box>
                <Box aspectRatio={16/9} bg={'white'}></Box>
              </Box>

            </Carousel.Item>
            <Carousel.Item >
              <Box w={'full'}>
                <Box  aspectRatio={16/9} bg={'brown'}></Box>
                <Box aspectRatio={16/9} bg={'white'}></Box>
              </Box>

            </Carousel.Item>
            <Carousel.Item >
              <Box w={'full'}>
                <Box  aspectRatio={16/9} bg={'brown'}></Box>
                <Box aspectRatio={16/9} bg={'white'}></Box>
              </Box>

            </Carousel.Item>
           



            {/* ... */}
          </Carousel>
        </Box>
      </GridItem>
      <GridItem>
        <Heading className='' fontSize={'1.5em'} my={'0.5em'} pl={'20px'} textAlign={'left'} color={'#192e59'}>Recent Researchs</Heading>
        <Box w={'full'} >
          <Carousel cols={1} rows={1} gap={8} loop={true} autoPlay={500} showDots={false} dotColorActive={'#192e59'}
            arrowLeft={
              <IconButton icon={<ChevronRightIcon />} variant={'ghost'} colorScheme='whiteAlpha' style={{ position: 'absolute', top: '45%', left: '20px', zIndex: 50 }}></IconButton>}
            arrowRight={
              <IconButton icon={<ChevronLeftIcon />} variant={'ghost'} colorScheme='whiteAlpha' style={{ position: 'absolute', top: '45%', right: '20px', zIndex: 50 }}></IconButton>}
            containerStyle={{ margin: '0em', }}>

            <Carousel.Item >
              <Box aspectRatio={1} bg={'orange'}>
                
              </Box>
            </Carousel.Item>
            <Carousel.Item >
              <Box aspectRatio={1} bg={'green'}>
                
              </Box>
            </Carousel.Item>



            {/* ... */}
          </Carousel>
        </Box>
      </GridItem>
    </SimpleGrid>

  )
}

export default News 