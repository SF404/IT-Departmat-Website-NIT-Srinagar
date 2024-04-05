import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { addSiteFile } from '../../../Api/api'; // Import the addPlacementBrochure API function

const AddPlacementBrochure = ({fetchSiteFiles}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        title: '',
        file: null,
        year: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const newValue = name === 'file' ? files[0] : value;
        setFormData({ ...formData, [name]: newValue });
    };

    const handleSubmit = async () => {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('title', formData.title);
            formDataToSend.append('category', 'placement_brochure');
            formDataToSend.append('file', formData.file);
            formDataToSend.append('metadata', JSON.stringify({ year: formData.year }));
            
            await addSiteFile(formDataToSend); 
            console.log('Placement Brochure added successfully!');
            setFormData({
                title: '',
                file: null,
                year: '',
            });
            onClose();
            fetchSiteFiles();
        } catch (error) {
            console.error('Error adding Placement Brochure:', error);
        }
    };

    const openModal = (e) => {
        e.stopPropagation();
        onOpen();
    }

    return (
        <>
            <DarkMode>
                <Button rightIcon={<FaPlus />} size={'xs'} rounded={'full'} colorScheme='messenger' onClick={openModal} mr={4}>Add</Button>
            </DarkMode>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false} scrollBehavior='inside'>
                <ModalOverlay />
                <ModalContent rounded={'1.5em'}>
                    <ModalHeader>Add Placement Brochure</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={6}>
                            <FormControl>
                                <FormLabel>Title:</FormLabel>
                                <Input type="text" name="title" value={formData.title} onChange={handleChange} variant="flushed" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>File:</FormLabel>
                                <Input type="file" name="file" onChange={handleChange} variant="flushed" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Year:</FormLabel>
                                <Input type="text" name="year" value={formData.year} onChange={handleChange} variant="flushed" />
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

export default AddPlacementBrochure;
