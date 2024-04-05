import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Heading, Text, Button, useDisclosure, Image, HStack, Flex, DarkMode, IconButton } from '@chakra-ui/react';
import { getAllGalleries, deleteGallery } from '../../Api/api';
import { MdDelete } from 'react-icons/md';
import OptionsPopover from '../../Components/OptionsPopover';
import EditGallery from './components/EditGallery';
import DeleteConfirmationModal from '../../Components/DeleteConfirmation';
import AddGallery from './components/AddGallery';
import { FcGallery } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import Masonry from 'react-layout-masonry';

const Gallery = () => {
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();
  const [targetDelete, setTargetDelete] = useState('');
  const [galleries, setGalleries] = useState([]);

  const fetchGalleries = async () => {
    try {
      const fetchedGalleries = await getAllGalleries();
      setGalleries(fetchedGalleries);
      console.log(fetchedGalleries)
    } catch (error) {
      console.error('Error fetching galleries:', error);
    }
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  const handleDeleteClick = (id, title) => {
    setTargetDelete({ id, title });
    onOpenDelete();
  };

  const handleDelete = async () => {
    try {
      await deleteGallery(targetDelete.id);
      fetchGalleries();
      onCloseDelete();
    } catch (error) {
      console.error('Error deleting gallery:', error);
    }
  };

  const galleryTheme = [
    'gray.100',
    'red.50',
    'orange.50',
    'yellow.50',
    'green.50',
    'teal.50',
    'blue.50',
    'cyan.50',
    'purple.50',
    'pink.50',
  ];

  return (
    <Box w={'full'} rounded={16}>
      <AddGallery />
      <Box w={'full'} mt={4}>
      <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 4 }} gap={16}>
        {galleries.map((gallery, index) => (
          <Box rounded={16} overflow="hidden" bg={galleryTheme[index % 10]} px={2} boxShadow={'md'} cursor={'pointer'} border={'1px solid transparent'}
            _hover={{ border: '1px solid gray' }} transition={'all 0.1s ease-in'}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              <HStack p={2}>
                <FcGallery fontSize={'20px'} />
                <Text color={'blackAlpha.600'} fontWeight={'bold'} fontSize={'14px'}>{gallery.title}</Text>
              </HStack>

              <Flex gap={2} opacity={1} justifyContent={'right'}>
                <OptionsPopover>
                  <EditGallery id={gallery.id} data={gallery} fetchGalleries={fetchGalleries} />
                  <Button
                    leftIcon={<MdDelete />}
                    variant={'ghost'}
                    size={'sm'}
                    justifyContent={'left'} 
                    rounded={0}
                    onClick={() => handleDeleteClick(gallery.id, gallery.title)}
                  >Delete</Button>
                </OptionsPopover>
              </Flex>
            </Flex>
            <NavLink to={`${gallery.id}/`} key={gallery.id} >

              <Image src={gallery.cover_image} rounded={8} />
              <Box p={2} py={4}>
                <Text color="gray.600" fontSize={'12px'}>
                  {gallery.description}
                </Text>
              </Box>
            </NavLink>
          </Box>
        ))}
    </Masonry>
    </Box>
      <DeleteConfirmationModal isOpen={isOpenDelete} onClose={onCloseDelete} itemName={targetDelete.title} onDelete={handleDelete} />
    </Box>
  );
};

export default Gallery;
