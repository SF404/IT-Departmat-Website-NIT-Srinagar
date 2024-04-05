// EditAlumni.js
import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, VStack, SimpleGrid } from '@chakra-ui/react';
import { MdEdit } from 'react-icons/md';
import { updateAlumni } from '../../../Api/api';

const EditAlumni = ({ id, data, fetchAlumni }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        name: data.name,
        present_job: data.present_job,
        previous_jobs: data.previous_jobs,
        linkedin_url: data.linkedin_url,
        email: data.email,
        graduation_year: data.graduation_year,
        achievements: data.achievements,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await updateAlumni(id, formData);
            console.log('Alumni edited successfully!');
            onClose();
            fetchAlumni();
        } catch (error) {
            console.error('Error editing alumni:', error);
        }
    };

    return (
        <>
            <Button leftIcon={<MdEdit />} rounded={0} justifyContent={'left'} variant={'ghost'} size={'sm'} onClick={onOpen}>Edit</Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'2xl'} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent rounded={'1.5em'}>
                    <ModalHeader>Edit Alumni</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack w={'full'} spacing={6}>
                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'} fontSize={'sm'}>Name:</FormLabel>
                                <Input type="text" name="name" variant="flushed" value={formData.name} onChange={handleChange} />
                            </FormControl>
                            <SimpleGrid columns={[1, 2]} w={'full'} gap={8}>
                                <FormControl isRequired>
                                    <FormLabel fontWeight={'bold'} fontSize={'sm'}>Email:</FormLabel>
                                    <Input type="email" name="email" variant="flushed" value={formData.email} onChange={handleChange} />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel fontWeight={'bold'} fontSize={'sm'}>Graduation Year:</FormLabel>
                                    <Input type="text" name="graduation_year" variant="flushed" value={formData.graduation_year} onChange={handleChange} />
                                </FormControl>
                            </SimpleGrid>
                            <FormControl>
                                <FormLabel fontWeight={'bold'} fontSize={'sm'}>Present Job:</FormLabel>
                                <Input type="text" name="present_job" variant="flushed" value={formData.present_job} onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight={'bold'} fontSize={'sm'}>Previous Jobs:</FormLabel>
                                <Input type="text" name="previous_jobs" variant="flushed" value={formData.previous_jobs} onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight={'bold'} fontSize={'sm'}>Achievements:</FormLabel>
                                <Input type="text" name="achievements" variant="flushed" value={formData.achievements} onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight={'bold'} fontSize={'sm'}>LinkedIn URL:</FormLabel>
                                <Input type="text" name="linkedin_url" variant="flushed" value={formData.linkedin_url} onChange={handleChange} />
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

export default EditAlumni;
