import { Box, Heading, IconButton, Image, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import axios from 'axios'


function Images() {

    const [images, setImages] = useState({
        data: [],
        loadedCount: 12, // Number of images to load initially
        totalCount: 0,  // Total number of images
      });

    const fetchImages = async () => {
        try {
            const response = await axios.get(`/api/public/galleryget/`);
            console.log(response.data);

            setImages((prevImages) => ({
                ...prevImages,
                data: response.data,
                totalCount: response.data.length,
            }));
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchImages();
    }, [])
    return (
        (
            <Box w={'100%'}>
                <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'left'} p={4} color={'darkblue'}>PHOTO GALLERY</Heading>
                <Box w={'full'} >
                    <Carousel cols={4} rows={3} loop={true} showDots={false} dotColorActive={'darkblue'}
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
                                        <Image key={index} src={item.image} alt="" style={{ width: '100%', height: '100%', display: 'block', transition: '0.2s ease-in', }} cursor={'pointer'}
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

