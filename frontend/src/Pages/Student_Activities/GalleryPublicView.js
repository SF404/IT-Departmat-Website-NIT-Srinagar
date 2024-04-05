import React, { useEffect, useState } from 'react';
import { Box, Image, SimpleGrid, Button, Flex, Text, IconButton } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { getGalleryImagesList } from '../../Api/public_api';
import Masonry from 'react-layout-masonry';

const GalleryPublicView = () => {
    const [gallery, setGallery] = useState([]);
    const { id } = useParams();

    const fetchImagesData = async () => {
        try {
            const data = await getGalleryImagesList(id);
            console.log(data)
            setGallery(data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    useEffect(() => {
        fetchImagesData();
    }, []);


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric', };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <Box w={'full'} bg={'white'} minH={'100vh'}>
            <Box w={{ base: 'full', md: '90%' }} mx={'auto'} p={4}>
                <Flex mb={4}>
                    <Box>
                        <Text fontWeight={'bold'}>{gallery.title} - Gallery</Text>
                        <Text fontSize={'14px'}>{gallery.description}</Text>
                        <Text fontSize={'14px'}>{formatDate(gallery.created_at)}</Text>
                    </Box>
                </Flex>

                <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 3 }} gap={16}>
                    {gallery.images?.map((item) => (
                        <Box key={item.id} overflow="hidden" textAlign={'right'}>
                            <a href={item.image} download={`Image_${item.id}`} target="_blank" rel="noopener noreferrer">
                                <Image src={item.image} alt={`Image ${item.id}`} /></a>
                        </Box>
                    ))}
                </Masonry>
            </Box>
        </Box>
    );
};

export default GalleryPublicView;
