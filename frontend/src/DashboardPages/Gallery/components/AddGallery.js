import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { addGallery } from '../../../Api/api';

const AddGallery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    coverImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'coverImage') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async () => {
    try {
      const galleryData = new FormData();
      galleryData.append('title', formData.title);
      galleryData.append('description', formData.description);
      galleryData.append('cover_image', formData.coverImage);

      const response = await addGallery(galleryData);
      console.log('Gallery added successfully!');
      console.log('Response:', response);
      setFormData({
        title: '',
        description: '',
        coverImage: null,
      });
      onClose();
    } catch (error) {
      console.error('Error adding gallery:', error);
    }
  };

  return (
    <>
      <DarkMode>
        <Button rightIcon={<FaPlus />} size={'sm'} rounded={'full'} colorScheme='messenger' onClick={onOpen} mr={4}>New Gallery</Button>
      </DarkMode>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false} scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent rounded={'1.5em'}>
          <ModalHeader>New Gallery</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={6}>
              <FormControl>
                <FormLabel>Title:</FormLabel>
                <Input type="text" name="title" value={formData.title} onChange={handleChange} variant="flushed" />
              </FormControl>
              <FormControl>
                <FormLabel>Description:</FormLabel>
                <Input type="text" name="description" value={formData.description} onChange={handleChange} variant="flushed" />
              </FormControl>
              <FormControl>
                <FormLabel>Cover Image:</FormLabel>
                <Input type="file" name="coverImage" onChange={handleChange} variant="flushed" />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="messenger" mr={3} rounded={'full'} fontWeight={'normal'} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose} rounded={'full'} fontWeight={'normal'}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddGallery;

