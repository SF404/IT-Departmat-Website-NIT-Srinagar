import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, FormHelperText, VStack, Select, Textarea } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { addEvent } from './../../../Api/api';

const AddEvent = ({fetchEvents}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    start_date: '',
    end_date: '',
    category: '',
    registration_link: '',
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
      const response = await addEvent(formData);
      console.log('Event added successfully!');
      console.log('Response:', response);
      setFormData({
        title: '',
        description: '',
        location: '',
        start_date: '',
        end_date: '',
        category: '',
        registration_link: '',
        attachment: null,
      });
      fetchEvents();
      onClose();
    } catch (error) {
      console.error('Error adding event:', error);
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
          <ModalHeader>Add Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={6}>
              <FormControl>
                <FormLabel>Title:</FormLabel>
                <Input type="text" name="title" value={formData.title} onChange={handleChange} variant="flushed" />
                <FormHelperText>Enter the title of the event</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Description:</FormLabel>
                <Textarea name="description" value={formData.description} onChange={handleChange} variant="flushed" />
                <FormHelperText>Enter a brief description of the event</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Location:</FormLabel>
                <Input type="text" name="location" value={formData.location} onChange={handleChange} variant="flushed" />
                <FormHelperText>Enter the location of the event</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Start Date and Time:</FormLabel>
                <Input type="datetime-local" name="start_date" value={formData.start_date} onChange={handleChange} variant="flushed" />
                <FormHelperText>Select the start date and time of the event</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>End Date and Time:</FormLabel>
                <Input type="datetime-local" name="end_date" value={formData.end_date} onChange={handleChange} variant="flushed" />
                <FormHelperText>Select the end date and time of the event</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Category:</FormLabel>
                <Select name="category" value={formData.category} onChange={handleChange} placeholder="Select category" variant="flushed">
                  <option value="academic">Academic</option>
                  <option value="social">Social</option>
                  <option value="cultural">Cultural</option>
                  <option value="sports">Sports</option>
                  <option value="other">Other</option>
                </Select>
                <FormHelperText>Select the category of the event</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Registration Link:</FormLabel>
                <Input type="text" name="registration_link" value={formData.registration_link} onChange={handleChange} variant="flushed" />
                <FormHelperText>Enter the registration link for the event</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Attachment:</FormLabel>
                <Input type="file" name="attachment" onChange={handleFileChange} variant="flushed" />
                <FormHelperText>Upload an attachment for the event (if any)</FormHelperText>
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

export default AddEvent;
