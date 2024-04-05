import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, VStack, Select, DarkMode } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { addStudyMaterial } from './../../../Api/api';

const AddStudyMaterial = ({ courseId, fetchMaterials }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        type: '',
        title: '',
        attachment: null,
    });

    console.log(courseId)

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
            const formDataToSend = new FormData();
            formDataToSend.append('course_id', courseId);
            formDataToSend.append('type', formData.type);
            formDataToSend.append('title', formData.title);
            formDataToSend.append('attachment', formData.attachment);

            const response = await addStudyMaterial(courseId, formDataToSend);
            console.log('Study material added successfully!');
            console.log('Response:', response);
            setFormData({
                type: '',
                title: '',
                attachment: null,
            });
            fetchMaterials();
            onClose();
        } catch (error) {
            console.error('Error adding study material:', error);
        }
    };

    return (
        <>
        <DarkMode>
            <Button rightIcon={<FaPlus />} size={'sm'} rounded={'full'} colorScheme='messenger' fontFamily={'exo'} onClick={onOpen}>Add Material</Button>
        </DarkMode>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false} scrollBehavior='inside'>
                <ModalOverlay />
                <ModalContent rounded={'1.5em'}>
                    <ModalHeader>Add Study Material</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={6}>
                            <FormControl>
                                <FormLabel>Type:</FormLabel>
                                <Select name="type" value={formData.type} onChange={handleChange} placeholder="Select type" variant="flushed">
                                    <option value="lecture_notes">Lecture Notes</option>
                                    <option value="assignment">Assignment</option>
                                    <option value="textbook">Textbook</option>
                                    <option value="lab_manual">Lab Manual</option>
                                    <option value="question_papers">Question Papers</option>
                                    <option value="solutions">Solutions</option>
                                    <option value="project_guidelines">Project Guidelines</option>
                                    <option value="other">Other</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Title:</FormLabel>
                                <Input type="text" name="title" value={formData.title} onChange={handleChange} variant="flushed" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Attachment:</FormLabel>
                                <Input type="file" name="attachment" onChange={handleFileChange} variant="flushed" />
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

export default AddStudyMaterial;
