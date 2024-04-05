import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, FormHelperText, VStack, IconButton } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { addEducation, editEducation } from './../../../Api/api';
import { MdEdit } from 'react-icons/md';

const EditEducation = ({ id, data, fetchEducation }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        institution: data.institution,
        degree: data.degree,
        graduation_year: data.graduation_year
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await editEducation(id, formData);
            console.log('Education added successfully!');
            setFormData({
                institution: '',
                degree: '',
                graduation_year: ''
            });
            fetchEducation();
            onClose();
        } catch (error) {
            console.error('Error adding education:', error);
        }
    };

    return (
        <>
            <Button leftIcon={<MdEdit />} rounded={0} justifyContent={'left'} variant={'ghost'} size={'sm'} onClick={onOpen}>Edit</Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent rounded={'1.5em'}>
                    <ModalHeader>Edit Education</ModalHeader>
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

export default EditEducation;
