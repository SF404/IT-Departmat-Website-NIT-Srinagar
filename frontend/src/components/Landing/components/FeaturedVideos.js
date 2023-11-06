import { Box, Heading, Link, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'

function FeaturedVideos() {
    const [urls, setUrls] = useState([
        'https://www.youtube.com/watch?v=HsN7vF7M7rA',
        'https://www.youtube.com/watch?v=xEkUrqU3yCs&t',
        'https://www.youtube.com/watch?v=vJk_8DFp3Yo&t=578s&pp=ygUjbml0IHNyaW5hZ2FyIGluZm9ybWF0aW9uIGRlcGFydG1lbnQ%3D',
        'https://www.youtube.com/watch?v=LSIrG0QnEJ8'


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
            <Box>
                <Carousel cols={3} rows={1} gap={16} loop showDots={true} dotColorActive={'darkblue'}>

                    {
                        uniqueVideos.map((item, index) => (
                            <Carousel.Item key={index}>
                                <Box w={'full'}  my={4} border={'1px solid gray'} borderRadius={'0.54em'}>
                                    <Box aspectRatio={16 / 9} width={'100%'} borderTopRadius={'0.5em'} background={`url(${item.thumbnail_url}) no-repeat center center/cover`}></Box>
                                    <Box bg={'white'} h={'200px'} p={4} borderBottomRadius={'0.5em'}>
                                        <Text fontWeight={'semibold'} as={Link} href={getLink(item.html)}>
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