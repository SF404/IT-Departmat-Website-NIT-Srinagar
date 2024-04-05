import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, FormHelperText, VStack } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { addEducation } from './../../../Api/api';

const AddEducation = ({ fetchEducation }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    institution: '',
    degree: '',
    graduation_year: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await addEducation(formData);
      console.log('Education added successfully!');
      setFormData({
        institution: '',
        degree: '',
        graduation_year: ''
      });
      onClose();
      fetchEducation();
    } catch (error) {
      console.error('Error adding education:', error);
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
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent rounded={'1.5em'}>
          <ModalHeader>Add Education</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>

              <FormControl>
                <FormLabel>Institution:</FormLabel>
                <Input type="text" id="institution" name="institution" variant="flushed" value={formData.institution} onChange={handleChange} />
                <FormHelperText opacity={0.8}>University, College Name e.g 'NIT Srinagar', 'IIT Delhi'</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Degree:</FormLabel>
                <Input type="text" id="degree" name="degree" variant="flushed" value={formData.degree} onChange={handleChange} />
                <FormHelperText opacity={0.8}>eg. Bachelor of Science in ______</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Graduation Year:</FormLabel>
                <Input type="text" id="graduation_year" name="graduation_year" variant="flushed" value={formData.graduation_year} onChange={handleChange} />
                <FormHelperText opacity={0.8}>eg. 2024</FormHelperText>
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

export default AddEducation;
