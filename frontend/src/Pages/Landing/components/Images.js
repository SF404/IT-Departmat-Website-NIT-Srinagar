import { Badge, Box, Heading, IconButton, Image, Text, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Carousel from 'better-react-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Images() {

    const [images, setImages] = useState({
        data: [],
        loadedCount: 12, // Number of images to load initially
        totalCount: 0,  // Total number of images
    });


    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`/api/public/galleryget/`);
                setImages((prevImages) => ({
                    ...prevImages,
                    data: response.data,
                    totalCount: response.data.length,
                }));
            } catch (error) {
                console.log(error)
            }
        }
        return () => fetchImages();
    }, [])
    return (
        (
            <Box w={'100%'}>
                <Heading fontSize={'1.5em'} mt={'0.5em'} textAlign={'left'} px={5} pt={4} color={'#192e59'}>PHOTO GALLERY</Heading>
                <Badge as={Link} to={'/gallery'} colorScheme='red' fontSize={'x-small'} _hover={{ color: 'red' }} textAlign={'left'} mx={5} mb={2}>view all</Badge>

                <Box w={'full'} >
                    <Carousel cols={4} rows={3} loop={true} showDots={false} mobileBreakpoint={0} dotColorActive={'#192e59'}
                        arrowLeft={
                            <IconButton icon={<ChevronRightIcon />}
                                position={'absolute'}
                                bottom={0}
                                right={4}

                            ></IconButton>}
                        arrowRight={
                            <IconButton icon={<ChevronLeftIcon />}
                                position={'absolute'}
                                bottom={0}
                                left={4}
                            ></IconButton>}
                        containerStyle={{ margin: '0em', position: 'relative', padding: '0 0 50px 0' }}>

                        {
                            images.data.slice(0, images.loadedCount).map((item, index) => (
                                <Carousel.Item key={index}>
                                    <Box bg={'black'} overflow={'hidden'} h={'full'} borderRadius={{ base: '0.5em', lg: '0em' }}>
                                        <Image key={index} loading='lazy' src={item.image} alt="" style={{ width: '100%', height: '100%', display: 'block', transition: '0.2s ease-in', }} width={'100px'} height={'100px'}  cursor={'pointer'}
                                            _hover={{ transform: 'scale(1.1)' }}
                                        />
                                    </Box>

                                </Carousel.Item>
                            ))

                        }


                        {/* ... */}
                    </Carousel>
                </Box>
            </Box>
        )
    )
}

export default Images

