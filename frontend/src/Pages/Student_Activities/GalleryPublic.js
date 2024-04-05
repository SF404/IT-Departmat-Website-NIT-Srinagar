import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Heading, Text, Button, useDisclosure, Image, HStack, Flex, DarkMode, IconButton } from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import { FcGallery } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import { getGalleryList } from '../../Api/public_api';
import Masonry from 'react-layout-masonry';
import SmallBanner from '../../Components/SmallBanner';

const GalleryPublic = () => {
  const [galleries, setGalleries] = useState([]);

  const fetchGalleries = async () => {
    try {
      const fetchedGalleries = await getGalleryList();
      setGalleries(fetchedGalleries);
      console.log(fetchedGalleries)
    } catch (error) {
      console.error('Error fetching galleries:', error);
    }
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  return (
    <Box w={'full'} bg={'gray.200'}>
      <SmallBanner heading={'PHOTO GALLERY'} />
      <Box w={{base:'full', md:'90%'}} p={4} mx={'auto'}>
        <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 4 }} gap={12}>
          {galleries.map((item, index) => {
            return (
              <Box key={index} rounded={16} overflow="hidden" bg={'white'} px={2} boxShadow={'md'} cursor={'pointer'} border={'1px solid transparent'}
                _hover={{ border: '1px solid gray' }} transition={'all 0.1s ease-in'}>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                  <HStack p={2}>
                    <FcGallery fontSize={'20px'} />
                    <Text color={'blackAlpha.600'} fontWeight={'bold'} fontSize={'14px'}>{item.title}</Text>
                  </HStack>
                </Flex>
                <NavLink to={`${item.id}/`} key={item.id} >

                  <Image src={item.cover_image} rounded={8} />
                  <Box p={2} py={4}>
                    <Text color="gray.600" fontSize={'12px'}>
                      {item.description}
                    </Text>
                  </Box>
                </NavLink>
              </Box>
            );
          })}
        </Masonry>
      </Box>
    </Box>
  );
};

export default GalleryPublic;
