import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { addStudent } from '../../../Api/api';

const AddStudent = ({fetchStudents}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    enrollment_no: '',
    name: '',
    batch: 0,
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await addStudent(formData);
      console.log('Student added successfully!');
      console.log('Response:', response);
      setFormData({
        enrollment_no: '',
        name: '',
        batch: 0,
        email: '',
      });
      onClose();
      fetchStudents();
    } catch (error) {
      console.error('Error adding Student:', error);
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
          <ModalHeader>Add Student</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={6}>
              <FormControl>
                <FormLabel>Enrollment No:</FormLabel>
                <Input type="text" name="enrollment_no" value={formData.enrollment_no} onChange={handleChange} variant="flushed" />
              </FormControl>
              <FormControl>
                <FormLabel>Name:</FormLabel>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} variant="flushed" />
              </FormControl>
              <FormControl>
                <FormLabel>Batch:</FormLabel>
                <Input type="number" name="batch" value={formData.batch} onChange={handleChange} variant="flushed" />
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

export default AddStudent;
