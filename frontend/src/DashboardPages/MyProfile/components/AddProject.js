import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, FormHelperText, VStack, Textarea, Flex, Stack, SimpleGrid } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { addProject } from '../../../Api/api';

const AddProject = ({fetchProjects}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    url: '',
    attachment: null
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'file' ? e.target.files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async () => {
    try {
      await addProject(formData);
      console.log('Research added successfully!');
      setFormData({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        url: '',
        attachment: null
      });
      onClose();
      fetchProjects();
    } catch (error) {
      console.error('Error adding research:', error);
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
          <ModalHeader>Add Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>

              <FormControl>
                <FormLabel>Title:</FormLabel>
                <Input type="text" id="title" name="title" variant="flushed" value={formData.title} onChange={handleChange} />
                <FormHelperText opacity={0.8}>e.g. "Building a Mobile Application"</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Description:</FormLabel>
                <Textarea id="description" name="description" variant="flushed" value={formData.description} onChange={handleChange} />
                <FormHelperText opacity={0.8}>e.g. "Describe the project in detail"</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Start Date:</FormLabel>
                <Input type="date" id="start_date" name="start_date" variant="flushed" value={formData.start_date} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>End Date:</FormLabel>
                <Input type="date" id="end_date" name="end_date" variant="flushed" value={formData.end_date} onChange={handleChange} />
              </FormControl>

              <FormControl>
                <FormLabel>URL:</FormLabel>
                <Input type="text" id="url" name="url" variant="flushed" value={formData.url} onChange={handleChange} />
                <FormHelperText opacity={0.8}>e.g. "https://example.com"</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Attachment:</FormLabel>
                <Input type="file" id="attachment" name="attachment" variant="flushed" onChange={handleChange} />
                <FormHelperText opacity={0.8}>Attach any relevant file (optional)</FormHelperText>
              </FormControl>

            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="messenger" mr={3} rounded={'full'} fontWeight={'normal'} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose} rounded={'full'} fontWeight={'normal'}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal >
    </>
  );
};

export default AddProject;
