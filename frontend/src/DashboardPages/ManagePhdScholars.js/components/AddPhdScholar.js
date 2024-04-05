import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, VStack, DarkMode } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { addPhdScholar } from '../../../Api/api';

const AddPhdScholar = ({fetchPhdScholars}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    enrollmentNumber: '',
    name: '',
    supervisor: '',
    researchArea: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await addPhdScholar(formData);
      console.log('Phd scholar added successfully!');
      console.log('Response:', response);
      setFormData({
        enrollmentNumber: '',
        name: '',
        supervisor: '',
        researchArea: '',
        email: '',
      });
      onClose();
      fetchPhdScholars();
    } catch (error) {
      console.error('Error adding Phd scholar:', error);
    }
  };

  const openModal = (e) => {
    e.stopPropagation();
    onOpen();
  }

  return (
    <>
      <DarkMode>
        <Button rightIcon={<FaPlus />} size={'sm'} rounded={'full'} colorScheme='messenger' onClick={openModal} mr={4}>Add</Button>
      </DarkMode>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false} scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent rounded={'1.5em'}>
          <ModalHeader>Add Phd Scholar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={6}>
              <FormControl>
                <FormLabel>Enrollment Number:</FormLabel>
                <Input type="text" name="enrollmentNumber" value={formData.enrollmentNumber} onChange={handleChange} variant="flushed" />
              </FormControl>
              <FormControl>
                <FormLabel>Name:</FormLabel>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} variant="flushed" />
              </FormControl>
              <FormControl>
                <FormLabel>Supervisor:</FormLabel>
                <Input type="text" name="supervisor" value={formData.supervisor} onChange={handleChange} variant="flushed" />
              </FormControl>
              <FormControl>
                <FormLabel>Research Area:</FormLabel>
                <Input type="text" name="researchArea" value={formData.researchArea} onChange={handleChange} variant="flushed" />
              </FormControl>
              <FormControl>
                <FormLabel>Email:</FormLabel>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} variant="flushed" />
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

export default AddPhdScholar;
