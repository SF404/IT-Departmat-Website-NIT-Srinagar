import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import { Box, Divider, SimpleGrid, VStack } from '@chakra-ui/react'
import QuickButtons from './components/QuickButtons'
import './style.css'
import FromHod from './components/FromHod'
import Announcements from './components/Announcements'
import Events from './components/Events'
import Holidays from './components/Holidays'
import Stats from './components/Stats'
import Faqs from './components/Faqs'
import Images from './components/Images'
import RecentResearches from './components/RecentResearches'
import FeaturedVideos from './components/FeaturedVideos'
import RecentProjects from './components/RecentProjects'

const items = [
  {
    "image": "https://via.placeholder.com/300",
    "alt": "Image 1"
  },
  {
    "image": "https://via.placeholder.com/300",
    "alt": "Image 2"
  },
  {
    "image": "https://via.placeholder.com/300",
    "alt": "Image 3"
  },
  {
    "image": "https://via.placeholder.com/300",
    "alt": "Image 4"
  },
  {
    "image": "https://via.placeholder.com/300",
    "alt": "Image 5"
  }
]


const Home = () => {
  return (
    <Box w={'full'} bg={'white'}>
      <Carousel />
      <VStack width={{ base: 'full', md: '80%' }} mx={'auto'} px={4}>
        <QuickButtons />
        <FromHod />
        <Divider my={4} />
        <Announcements />
        <Divider my={4} />
        <SimpleGrid columns={{ base: 1, lg: 2 }} w={'full'} gap={[4, 6, 8]}>
          <Events />
          <Holidays />
        </SimpleGrid>
        <Divider my={4}></Divider>
        <FeaturedVideos />
        {/* <GridCarousel items={items} GridTile={GridTile}/> */}
        <RecentResearches />
        <RecentProjects />
      </VStack>
      <Divider my={10} />
      <Stats />
      <VStack width={{ base: 'full', md: '80%' }} mx={'auto'} px={4}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} w={'full'} gap={[4, 6, 8]} >
          <Faqs />
          <Images />
        </SimpleGrid>
      </VStack>
      <Box height={'200px'}></Box>
    </Box>
  )
}

export default Home