import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import Carousel from 'better-react-carousel'
import autumn from './../../../assets/images/autumn.webp'
import spring from './../../../assets/images/spring.webp'
import { Link } from 'react-router-dom'


function Highlights() {
    return (
        <Box w={'full'}>
            <Heading fontSize={'1.5em'} my={'1em'} textAlign={'center'} color={'#192e59'}>EXPLORE</Heading>
            <Box>
                <Carousel cols={2} rows={1} gap={16} loop autoplay={5000} arrowLeft={<></>} arrowRight={<></>}>
                    <Carousel.Item>
                        <Box aspectRatio={4 / 3} width={'100%'} height={'100%'} borderRadius={4} background={`url(${autumn}) no-repeat center center/cover`} position={'relative'} >
                            <Box position={'absolute'} bottom={'0em'} right={'0em'} p={4} borderRadius={'0.5em'} width={'100%'} bgGradient={'linear(to-b, rgba(0,0,0,0), rgba(0,0,0,0.5))'} color={'white'} textShadow={'0 0 12px black'} textAlign={'right'} >
                                <Heading fontWeight={'semibold'} size={'lg'}>Research & Labs</Heading>
                                <Button mt={2} size={'sm'} colorScheme='whiteAlpha' as={Link} to={'labs'}>Explore</Button>
                            </Box>
                        </Box>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Box aspectRatio={4 / 3} width={'100%'} height={'100%'} borderRadius={4} background={`url(${spring}) no-repeat center center/cover`} position={'relative'} >
                            <Box position={'absolute'} bottom={'0em'} left={0} p={4} borderRadius={'0.5em'} width={'100%'} bgGradient={'linear(to-b, rgba(0,0,0,0), rgba(0,0,0,0.5))'} color={'white'} textShadow={'0 0 12px black'} textAlign={'right'} >
                                <Heading fontWeight={'semibold'} size={'lg'}>Awards & Achivements</Heading>
                                <Button mt={2} size={'sm'} colorScheme='whiteAlpha' as={Link} to={'awards'}>Explore</Button>
                            </Box>
                        </Box>
                    </Carousel.Item>




                    {/* ... */}
                </Carousel>
            </Box>
        </Box>
    )
}

export default Highlights