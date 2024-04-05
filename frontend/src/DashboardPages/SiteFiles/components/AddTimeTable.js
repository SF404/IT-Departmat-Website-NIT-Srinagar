import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, VStack, FormHelperText } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { addSiteFile } from '../../../Api/api'; // Import the addTimeTable API function

const AddTimeTable = ({fetchSiteFiles}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        title: '',
        file: null,
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
            formDataToSend.append('category', 'time_tables');
            formDataToSend.append('file', formData.file);

            await addSiteFile(formDataToSend);
            console.log('Time Table added successfully!');
            setFormData({
                title: '',
                file: null,
            });
            onClose();
            fetchSiteFiles();
        } catch (error) {
            console.error('Error adding Time Table:', error);
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
                    <ModalHeader>Add Time Table</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={6}>
                            <FormControl>
                                <FormLabel>Title:</FormLabel>
                                <Input type="text" name="title" value={formData.title} onChange={handleChange} variant="flushed" />
                                <FormHelperText>e.g Spring 2024</FormHelperText>
                            </FormControl>
                            <FormControl>
                                <FormLabel>File:</FormLabel>
                                <Input type="file" name="file" onChange={handleChange} variant="flushed" />
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

export default AddTimeTable;
