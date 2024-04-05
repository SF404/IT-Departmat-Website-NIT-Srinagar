import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, FormHelperText, VStack, IconButton, Textarea, Select, Flex } from '@chakra-ui/react';
import { MdEdit } from 'react-icons/md';
import { updateCourse } from '../../../Api/api';

const EditCourse = ({ id, data, fetchCourses }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        name: data.name,
        department: data.department,
        credit: data.credit,
        semester: data.semester,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await updateCourse(id, formData);
            console.log('Course edited successfully!');
            onClose();
            fetchCourses()
        } catch (error) {
            console.error('Error editing course:', error);
        }
    };

    return (
        <>
            <Button leftIcon={<MdEdit />} rounded={0} justifyContent={'left'} variant={'ghost'} size={'sm'} onClick={onOpen}>Edit</Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent rounded={'1.5em'}>
                    <ModalHeader>Edit Course</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={6}>
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

export default EditCourse;
