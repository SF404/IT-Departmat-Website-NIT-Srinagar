import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, VStack, IconButton } from '@chakra-ui/react';
import { MdEdit } from 'react-icons/md';
import { updateGallery } from '../../../Api/api';

const EditGallery = ({ id, data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        title: data.title,
        description: data.description,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await updateGallery(id, formData);
            console.log('Gallery edited successfully!');
            onClose();
        } catch (error) {
            console.error('Error editing gallery:', error);
        }
    };

    return (
        <>
            <Button leftIcon={<MdEdit />} rounded={0} justifyContent={'left'} variant={'ghost'} size={'sm'} onClick={onOpen}>Edit</Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent rounded={'1.5em'}>
                    <ModalHeader>Edit Gallery</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <FormControl>
                                <FormLabel>Title:</FormLabel>
                                <Input type="text" id="title" name="title" variant="flushed" value={formData.title} onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description:</FormLabel>
                                <Input type="text" id="description" name="description" variant="flushed" value={formData.description} onChange={handleChange} />
                            </FormControl>
                            {/* Add more form fields for other gallery data */}
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

export default EditGallery;
