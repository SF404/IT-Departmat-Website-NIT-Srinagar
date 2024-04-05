// AddAlumni.js
import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, VStack, SimpleGrid } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { addAlumni } from '../../../Api/api'; // Import the addAlumni API function

const AddAlumni = ({fetchAlumni}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        name: '',
        present_job: '',
        previous_jobs: '',
        linkedin_url: '',
        email: '',
        phone: '',
        graduation_year: '',
        achievements: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await addAlumni(formData);
            console.log('Alumni added successfully!');
            setFormData({
                name: '',
                present_job: '',
                previous_jobs: '',
                linkedin_url: '',
                email: '',
                phone: '',
                graduation_year: '',
                achievements: ''
            });
            onClose();
            fetchAlumni();
        } catch (error) {
            console.error('Error adding Alumni:', error);
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
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'2xl'} closeOnOverlayClick={false} scrollBehavior='inside'>
                <ModalOverlay />
                <ModalContent rounded={'1.5em'}>
                    <ModalHeader>Add Alumni</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={6} w={'full'}>
                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'} fontSize={'sm'}>Name:</FormLabel>
                                <Input type="text" name="name" value={formData.name} onChange={handleChange} variant="flushed" />
                            </FormControl>
                            <SimpleGrid columns={[1, 2]} gap={8} w={'full'}>
                                <FormControl isRequired>
                                    <FormLabel fontWeight={'bold'} fontSize={'sm'}>Email:</FormLabel>
                                    <Input type="email" name="email" value={formData.email} onChange={handleChange} variant="flushed" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel fontWeight={'bold'} fontSize={'sm'}>Graduation Year:</FormLabel>
                                    <Input type="text" name="graduation_year" value={formData.graduation_year} onChange={handleChange} variant="flushed" />
                                </FormControl>
                            </SimpleGrid>
                            <FormControl>
                                <FormLabel fontWeight={'bold'} fontSize={'sm'}>Present Job:</FormLabel>
                                <Input type="text" name="present_job" value={formData.present_job} onChange={handleChange} variant="flushed" />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight={'bold'} fontSize={'sm'}>Previous Jobs:</FormLabel>
                                <Input type="text" name="previous_jobs" value={formData.previous_jobs} onChange={handleChange} variant="flushed" />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight={'bold'} fontSize={'sm'}>LinkedIn URL:</FormLabel>
                                <Input type="text" name="linkedin_url" value={formData.linkedin_url} onChange={handleChange} variant="flushed" />
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

export default AddAlumni;
