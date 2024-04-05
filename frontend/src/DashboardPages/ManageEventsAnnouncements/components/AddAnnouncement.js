import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, FormHelperText, VStack, Textarea } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { addAnnouncement } from './../../../Api/api'; // Import your API function for adding announcements

const AddAnnouncement = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, attachment: file });
  };

  const handleSubmit = async () => {
    try {
      const response = await addAnnouncement(formData);
      console.log('Announcement added successfully!');
      console.log('Response:', response);
      setFormData({
        title: '',
        url: '',
        attachment: null,
      });
      onClose();
    } catch (error) {
      console.error('Error adding announcement:', error);
    }
  };

  const openModal = (e) => {
    e.stopPropagation();
    onOpen();
  }

  return (
    <>
      <DarkMode>
        <Button rightIcon={<FaPlus />} size={'sm'} rounded={'full'} colorScheme='messenger' onClick={openModal}>Add</Button>
      </DarkMode>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false} scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent rounded={'1.5em'}>
          <ModalHeader>Add Announcement</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={6}>
              <FormControl>
                <FormLabel>Title:</FormLabel>
                <Input type="text" name="title" value={formData.title} onChange={handleChange} variant="flushed" />
                <FormHelperText>Enter the title of the announcement</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>URL:</FormLabel>
                <Input type="text" name="url" value={formData.url} onChange={handleChange} variant="flushed" />
                <FormHelperText>Enter the URL (if any)</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Attachment:</FormLabel>
                <Input type="file" name="attachment" onChange={handleFileChange} variant="flushed" />
                <FormHelperText>Upload an attachment for the announcement (if any)</FormHelperText>
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

export default AddAnnouncement;
