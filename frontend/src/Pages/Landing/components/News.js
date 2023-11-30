import { Box, GridItem, HStack, Heading, IconButton, Link, SimpleGrid, Spinner, Text, baseTheme, position, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from 'better-react-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

const News = () => {
  const toast = useToast()
  const [news, setNews] = useState(null)
  const [recentPapers, setRecentPapers] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/public/teacherdataview/?type=news')
        setNews(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
        toast({
          title: 'Contact Administrator',
          description: "Failed to fetch News, " + error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    }

    return () => {
      fetchNews()
    }
  }, [])

  useEffect(() => {
    const fetchResearch = async () => {
      const date = new Date();
      // Only get the Research of last 2 years
      const one_year_ago = date.getFullYear() - 1;
      try {
        const response = await axios.get(`/api/public/teacherdataview/?type=research&&research_year=${one_year_ago}`);
        const sortedData = response.data.sort((a, b) => b.date - a.date);
        console.log(sortedData)
        setRecentPapers(sortedData)
      } catch (error) {
        console.error('Error fetching research papers:', error);
        setRecentPapers(null)
      }
    };
    return () => fetchResearch();
  }, []);

  const generateRandomGradient = () => {
    const getRandomColor = () => Math.floor(Math.random() * 256);

    const color1 = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    const color3 = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    const randomAngle = Math.floor(Math.random() * 360);

    return `linear-gradient(${randomAngle}deg, ${color1} , ${color3})`;
  };



  return (
    <SimpleGrid w={'full'} columns={[1, 1, 2, 3]}>
      <GridItem colSpan={2}>
        <Heading fontSize={'1.5em'} mt={8} mb={2} pl={{ md: '20px' }} textAlign={'left'} color={'#192e59'}>Latest News</Heading>
        <Box w={'full'} >
          <Carousel cols={2} rows={1} gap={16} loop={true} showDots={false}
            arrowLeft={
              <IconButton icon={<ChevronLeftIcon />} variant={'solid'} color={'black'} size={'sm'} style={{ position: 'absolute', top: '-40px', right: '60px', }}></IconButton>}
            arrowRight={
              <IconButton icon={<ChevronRightIcon />} variant={'solid'} color={'black'} size={'sm'} style={{ position: 'absolute', top: '-40px', right: '20px', }}></IconButton>}
            containerStyle={{ margin: '0em', }}>


            {

              news ? news.length > 0 ? news.map((item, index) => (<Carousel.Item key={index}>
                <Box w={'full'} rounded={6} bg={'white'}>
                  <Box aspectRatio={4 / 3} bg={'red'} background={`url(${item.image}) no-repeat center center/cover`}></Box>
                  <Box aspectRatio={2 / 1}>
                    <Box fontSize={'0.8em'} p={4}>
                      <Text fontWeight="bold" fontSize="xl" mb={2}>
                        {item.headline}
                      </Text>
                      <Text fontSize="sm" color="gray.500" mb={2}>
                        {item.date}
                      </Text>
                      <Text>{item.content}</Text>
                      {/* <Text mt={4} fontStyle="italic" textAlign="right" color="gray.600">
                        {item.author}
                      </Text> */}
                    </Box>
                  </Box>
                </Box>
              </Carousel.Item>)) : (<Carousel.Item>No News</Carousel.Item>) : (<Box><Spinner /></Box>)
            }
          </Carousel>
        </Box>
      </GridItem>
      <GridItem>
        <Heading fontSize={'1.5em'} mt={8} mb={2} pl={{ md: '20px' }} textAlign={'left'} color={'#192e59'}>Recent Researchs</Heading>
        <Box w={'full'} >
          <Carousel cols={1} rows={1} gap={8} autoplay={6000} loop={true} showDots={false} dotColorActive={'#192e59'}
            arrowLeft={
              <IconButton icon={<ChevronLeftIcon />} variant={'ghost'} colorScheme='whiteAlpha' style={{ position: 'absolute', top: '45%', left: '20px', zIndex: 50 }}></IconButton>}
            arrowRight={
              <IconButton icon={<ChevronRightIcon />} variant={'ghost'} colorScheme='whiteAlpha' style={{ position: 'absolute', top: '45%', right: '20px', zIndex: 50 }}></IconButton>}
            containerStyle={{ margin: '0px', }}>


            {
              recentPapers && recentPapers.map((item, index) => (
                <Carousel.Item key={index}>
                  <Box aspectRatio={1} backgroundImage={generateRandomGradient()} position={'relative'}>
                    <Box w={'full'} h={'full'} position={'absolute'} p={6} color={'white'} textShadow={'0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)'} display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} background={'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))'} >
                      <Heading size={'sm'}>{item.title}</Heading>
                      <Text my={2} fontSize={'14px'}>{item.authors}</Text>
                      <HStack justifyContent={'space-between'}>
                        <Text fontSize={'12px'}>Date: {item.date}</Text>
                        {
                          item.url && <Box as={Link} href={item.url} target='_blank' fontSize={'12px'}>Read More...</Box>

                        }
                      </HStack>
                    </Box>
                  </Box>
                </Carousel.Item>
              ))
            }

            {/* ... */}
          </Carousel>
        </Box>
      </GridItem>
    </SimpleGrid>

  )
}

export default News 