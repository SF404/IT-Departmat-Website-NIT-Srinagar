import React, { useEffect, useState } from 'react';
import { Box, Grid, Text, Image, SimpleGrid, Button, Center, CircularProgress } from '@chakra-ui/react';
import { BsNewspaper } from 'react-icons/bs'
import axios from 'axios';
import './z_style.css'

function LatestNews({ news }) {
  return (
    <Box gridColumn={'span 2'}>

      <div className="h-title">
        <h1 className='h-title-icon'>LATEST NEWS <BsNewspaper /></h1>
      </div>

      <Center>
        <SimpleGrid columns={[1, 2, 3, 4]} gap={{ base: 2, md: 4 }} margin={'1em'} width={'full'}>
          <Box aspectRatio={{ base: 3 / 1, md: 2 / 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} gridColumn={{ md: 'span 2' }} borderRadius={'0.25em'}></Box>
          {/* {
            news?(
            news.map((item, index) => (
              <Box key={index} aspectRatio={{ base: 3 / 1, md: 1 }} bg={'orange'} borderRadius={'0.25em'} overflow={'hidden'}>
                <img src={item.node.display_url} alt="" />
                <p>{item.node.edge_media_to_caption.edges[0].node.text}</p>
              </Box>

            ))):(<CircularProgress isIndeterminate color='#5cc181' />)
          } */}
          
          <Box aspectRatio={{ base: 3 / 1, md: 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} borderRadius={'0.25em'} >
            <img src="https://instagram.fixj1-2.fna.fbcdn.net/v/t51.2885-15/394749371_2638526276316194_2985965087641285819_n.webp?stp=dst-jpg_e35_s1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDExNTIuc2RyIn0&_nc_ht=instagram.fixj1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=sPfb2twPYCoAX-oH2QB&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIyMTE3NTkxOTc2NTY5OTg2Ng%3D%3D.2-ccb7-5&oh=00_AfAwhPy8FC_GJ_8JX_STvq7QfkIFJJrS3qD18ll2IWQRMA&oe=653C459D&_nc_sid=ee9879" alt="" />
          </Box>
          <Box aspectRatio={{ base: 3 / 1, md: 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} borderRadius={'0.25em'} ></Box>
          <Box aspectRatio={{ base: 3 / 1, md: 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} borderRadius={'0.25em'} ></Box>
          <Box aspectRatio={{ base: 3 / 1, md: 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} borderRadius={'0.25em'} ></Box>
          <Box aspectRatio={{ base: 3 / 1, md: 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} borderRadius={'0.25em'} ></Box>
          <Box aspectRatio={{ base: 3 / 1, md: 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} borderRadius={'0.25em'} ></Box>
          <Box aspectRatio={{ base: 3 / 1, md: 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} borderRadius={'0.25em'} ></Box>
          <Box aspectRatio={{ base: 3 / 1, md: 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} borderRadius={'0.25em'} ></Box>
          <Box aspectRatio={{ base: 3 / 1, md: 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} borderRadius={'0.25em'} ></Box>
          <Box aspectRatio={{ base: 3 / 1, md: 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} borderRadius={'0.25em'} ></Box>
        </SimpleGrid>

      </Center>
    </Box>
  );
}

export default LatestNews;
