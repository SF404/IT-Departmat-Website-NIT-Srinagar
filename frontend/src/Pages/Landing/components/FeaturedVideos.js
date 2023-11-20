import { Box, Heading, IconButton, Link, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from 'better-react-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

function FeaturedVideos() {
    const [urls, setUrls] = useState([
        'https://www.youtube.com/watch?v=HsN7vF7M7rA',
        'https://www.youtube.com/watch?v=4lcKj0xnXkg&list=PLUbapHgKkROnP9It2FQiDfR1DBoSpIshT',
        'https://www.youtube.com/watch?v=xEkUrqU3yCs&t',
        'https://www.youtube.com/shorts/Z3yAN7Y2LH4',
        'https://www.youtube.com/watch?v=vJk_8DFp3Yo&t=578s&pp=ygUjbml0IHNyaW5hZ2FyIGluZm9ybWF0aW9uIGRlcGFydG1lbnQ%3D',
        'https://www.youtube.com/watch?v=LSIrG0QnEJ8',
        'https://www.youtube.com/watch?v=5aMIM-qGLK0&list=PLUbapHgKkROk_CAo6OJEmQuzQKfraDFKM',
    ])
    const [videos, setVideos] = useState([])

    async function fetchYouTubeData(videoUrl) {
        const oembedURL = `http://www.youtube.com/oembed?url=${videoUrl}&format=json`;

        try {
            const response = await axios.get(oembedURL);

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Failed to fetch YouTube data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        const fetchPromises = urls.map((url) => fetchYouTubeData(url));
        return () => Promise.all(fetchPromises)
            .then((data) => {
                setVideos((prevData) => [...prevData, ...data]);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }, [urls])

    function getLink(html) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;

        // Find the iframe element within the div
        const iframe = tempDiv.querySelector("iframe");

        // Extract the src attribute
        if (iframe) {
            const src = iframe.getAttribute("src").toString();
            return src
        }
    }


    const MyDot = ({ isActive }) => (
        <span
            style={{
                transition: 'all 0.3s ease-in-out',
                marginTop: '20px',
                display: 'inline-block',
                height: isActive ? '8px' : '8px',
                width: isActive ? '20px' : '8px',
                borderRadius: '8px',
                background: '#d8dcf0'
            }}
        ></span>
    )


    return (
        <Box w={'full'} mt={'1em'}>
            <Heading fontSize={'1.5em'} textAlign={'left'} ml={{ base: '0', md: '20px' }} mb={-1} color={'#192e59'}>Featured Videos</Heading>
            <Box w={'full'} >
                <Carousel cols={4} rows={1} gap={16} loop={true} scrollSnap={true} responsiveLayout={[
                    {
                        breakpoint: 1200,
                        cols: 3,
                        gap: 10,
                    },
                    {
                        breakpoint: 900,
                        cols: 2,
                    },

                ]}

                    dot={MyDot}
                    showDots={true}
                    dotColorActive={'#192e59'}
                    arrowLeft={
                        <IconButton icon={<ChevronRightIcon />}
                            variant={'ghost'}
                            bg={'white'}
                            position={'absolute'}
                            top={'-30px'}
                            right={'20px'}
                            color={'black'}
                            size={'sm'}
                            borderRadius={'full'}
                            boxShadow={'sm'}
                        ></IconButton>}
                    arrowRight={
                        <IconButton icon={<ChevronLeftIcon />}
                            variant={'ghost'}
                            bg={'white'}
                            position={'absolute'}
                            top={'-30px'}
                            right={'65px'}
                            color={'black'}
                            size={'sm'}
                            borderRadius={'full'}
                            boxShadow={'sm'}
                        ></IconButton>}
                    containerStyle={{ margin: '0', }}>

                    {
                        videos.map((item, index) => (
                            <Carousel.Item key={index}>
                                <Box w={'full'} as={Link} href={getLink(item.html)} _hover={{ textDecoration: 'none' }} >
                                    <Box aspectRatio={16 / 9} mt={4} width={'100%'} borderTopRadius={6} _hover={{ borderRadius: '0' }} transition={'all 0.3s ease-in-out'} background={`url(${item.thumbnail_url}) no-repeat center center/cover`}></Box>
                                    <Box aspectRatio={16 / 7} pt={2} pb={4} borderBottomRadius={6} p={2} bg={'white'} overflow={'hidden'} border={'1px solid rgba(0,0,0,0.06)'}>
                                        <Text fontSize={'14px'} fontWeight={'700'} >
                                            {item.title}
                                        </Text>
                                        <Text fontSize={'12px'} >{item.author_name}</Text>
                                    </Box>
                                </Box>
                            </Carousel.Item>
                        ))

                    }


                    {/* ... */}
                </Carousel>
            </Box>
        </Box>
    )
}

export default FeaturedVideos