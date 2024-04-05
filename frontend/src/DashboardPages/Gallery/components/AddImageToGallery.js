import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, DarkMode } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { addImageToGallery } from '../../../Api/api';

const AddImageToGallery = ({ galleryId, fetchImagesData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      if (!image) {
        console.error('Please select an image');
        return;
      }

      const imageData = new FormData();
      imageData.append('image', image);

      await addImageToGallery(galleryId, imageData);
      console.log('Image added successfully!');
      fetchImagesData();
      setImage(null);
      onClose();
    } catch (error) {
      console.error('Error adding image to gallery:', error);
    }
  };

  return (
    <>
    <DarkMode>
      <Button rightIcon={<FaPlus />} size={'sm'} mt={4} rounded={'full'} colorScheme='messenger' onClick={onOpen} mr={4}>Add Image</Button>
    </DarkMode>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false} scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent rounded={'1.5em'}>
          <ModalHeader>Add Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Image:</FormLabel>
              <Input type="file" onChange={handleChange} variant="flushed" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="messenger" mr={3} rounded={'full'} fontWeight={'normal'} onClick={handleSubmit}>
              Add
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

export default AddImageToGallery;
