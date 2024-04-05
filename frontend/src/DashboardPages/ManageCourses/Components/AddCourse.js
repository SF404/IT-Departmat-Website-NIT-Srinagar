import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, VStack, Textarea, InputGroup, InputRightAddon, SimpleGrid, Flex, Select } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { addCourse } from '../../../Api/api';

const AddCourse = ({ fetchCourses }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    course_id: '',
    name: '',
    department: '',
    description: '',
    credit: 4,
    semester: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === 'course_id' ? value.toUpperCase() : value;
    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = async () => {
    try {
      const response = await addCourse(formData);
      console.log('Course added successfully!');
      console.log('Response:', response);
      setFormData({
        course_id: '',
        name: '',
        department: '',
        description: '',
        credit: 4,
        semester: 1,
      });
      onClose();
      fetchCourses()
    } catch (error) {
      console.error('Error adding Course:', error);
    }
  };

  return (
    <>
      <DarkMode>
        <Button rightIcon={<FaPlus />} size={'sm'} rounded={'full'} colorScheme='messenger' onClick={onOpen}>Add</Button>
      </DarkMode>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false} scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent rounded={'1.5em'}>
          <ModalHeader>Add Course</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={6}>
              <FormControl>
                <FormLabel fontWeight={'bold'} fontSize={'sm'}>Course ID:</FormLabel>
                <Input type="text" name="course_id" value={formData.course_id} onChange={handleChange} variant="flushed" placeholder='e.g IT201' />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight={'bold'} fontSize={'sm'}>Course Name:</FormLabel>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} variant="flushed" />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight={'bold'} fontSize={'sm'}>Department:</FormLabel>
                <Input type="text" name="department" value={formData.department} onChange={handleChange} variant="flushed" />
              </FormControl>
              <Flex w={'full'} gap={8}>
                <FormControl flex={1}>
                  <FormLabel fontWeight={'bold'} fontSize={'sm'}>Semester:</FormLabel>
                  <Select name="semester" value={formData.semester} onChange={handleChange} variant="flushed">
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                  </Select>
                </FormControl>
                <FormControl w={'fit-content'}>
                  <FormLabel fontWeight={'bold'} fontSize={'sm'}>Credit:</FormLabel>
                  <Input type="number" name="credit" value={formData.credit} max={4} onChange={handleChange} variant="flushed" />
                </FormControl>
              </Flex>
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

export default AddCourse;
