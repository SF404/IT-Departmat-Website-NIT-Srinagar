import { Badge, Box, Heading, Image, SimpleGrid, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getImages } from '../../../Api/public_api'


function Images() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const data = await getImages(12);
                setImages(data)
            } catch (error) {
                console.log(error)
            }
        }
        return () => fetchImages();
    }, [])
    return (
        (
            <Box w={'100%'}>
                <Heading fontSize={'1.5em'} mt={'0.5em'} textAlign={'left'} pt={4} color={'#192e59'}>PHOTO GALLERY</Heading>
                <Badge as={Link} to={'/gallery'} colorScheme='messenger' fontSize={'x-small'} _hover={{ color: 'darkblue' }} textAlign={'left'} mb={2}>view all</Badge>
                <Box w={'full'} >
                    <SimpleGrid gap={1} columns={[4]}>
                        {
                            images.map((item, index) => (
                                <Box bg={'black'} overflow={'hidden'} h={'full'} key={index}>
                                    <a href={item.image} download={`Image_${item.id}`} target="_blank" rel="noopener noreferrer">
                                        <Image key={index} loading='lazy' src={item.image} aspectRatio={3 / 2} objectFit={'cover'} transition={'all 0.1s ease-in'} cursor={'pointer'}
                                            _hover={{ transform: 'scale(1.1)', opacity: 0.8 }} srcSet={`${item.image} 1x, ${item.image2x} 2x`}
                                        />
                                    </a>
                                </Box>
                            ))

                        }
                    </SimpleGrid>
                </Box>
            </Box>
        )
    )
}

export default Images

