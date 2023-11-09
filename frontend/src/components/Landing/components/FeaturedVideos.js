import { Box, Heading, IconButton, Link, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'
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
        Promise.all(fetchPromises)
            .then((data) => {
                console.log('Video Data:', data);
                setVideos((prevData) => [...prevData, ...data]);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }, [urls])

    const uniqueVideos = [...new Set(videos.map(item => item.title))].map(title => {
        return videos.find(video => video.title === title);
    });

    function getLink(html) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;

        // Find the iframe element within the div
        const iframe = tempDiv.querySelector("iframe");

        // Extract the src attribute
        if (iframe) {
            const src = iframe.getAttribute("src").toString();
            console.log(src)
            return src
        }
    }


    return (
        <Box w={'full'}>
            <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'center'} color={'darkblue'}>FEATURED VIDEOS</Heading>
            <Box w={'full'} >
                <Carousel cols={4} rows={1} gap={16} loop={true} showDots={false} dotColorActive={'darkblue'}
                    arrowLeft={
                        <IconButton icon={<ChevronRightIcon />}
                            variant={'outline'}
                            bg={'white'}
                            position={'absolute'}
                            top={'-30px'}
                            right={'20px'}
                            color={'black'}
                            size={'sm'}
                            boxShadow={'sm'}
                        ></IconButton>}
                    arrowRight={
                        <IconButton icon={<ChevronLeftIcon />}
                            variant={'outline'}
                            bg={'white'}
                            position={'absolute'}
                            top={'-30px'}
                            right={'65px'}
                            color={'black'}
                            size={'sm'}
                            boxShadow={'sm'}
                        ></IconButton>}
                    containerStyle={{ margin: '0em',}}>

                    {
                        uniqueVideos.map((item, index) => (
                            <Carousel.Item key={index}>
                                <Box w={'full'} as={Link} href={getLink(item.html)}>
                                    <Box aspectRatio={16 / 9} mt={4} width={'100%'} borderRadius={'0.75em'} background={`url(${item.thumbnail_url}) no-repeat center center/cover`}></Box>
                                    <Box pt={2} pb={4} borderBottomRadius={'0.5em'}>
                                        <Text fontSize={'12px'} fontWeight={'semibold'} as={Link} href={getLink(item.html)}>
                                            {item.title}
                                        </Text>
                                        <Text fontSize={'12px'}>{item.author_name}</Text>
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