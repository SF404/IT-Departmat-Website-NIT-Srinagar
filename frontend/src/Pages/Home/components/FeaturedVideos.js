import { Box, Button, DarkMode, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GridCarousel from '../../../Components/Carousel/GridCarousel'

const VideoCard = ({ item }) => {
    return (
        <Box w={'full'} h={'full'}>
            <Image src={item.thumbnail_url} ></Image>
            <Box my={2}>
                <Text fontWeight={'bold'} >
                    {item.title}
                </Text>
                <Text fontSize={'12px'} >{item.author_name}</Text>
            </Box>
        </Box>

    )
}

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
        const oembedURL = `https://www.youtube.com/oembed?url=${videoUrl}&format=json`;

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
                setVideos(data);
                console.log(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }, [urls])


    return (
        <GridCarousel title1={"FEATURED"} title2={"VIDEOS"} GridTile={VideoCard} items={videos} />
    )
}

export default FeaturedVideos