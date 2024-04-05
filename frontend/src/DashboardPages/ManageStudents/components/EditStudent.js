import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, VStack, IconButton } from '@chakra-ui/react';
import { MdEdit } from 'react-icons/md';
import { updateStudent } from '../../../Api/api'; // Import the updateStudent API function

const EditStudent = ({ id, data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        name: data.name,
        batch: data.batch,
        email: data.email,
        // Add more fields as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await updateStudent(id, formData); // Call the updateStudent API function
            console.log('Student edited successfully!');
            onClose();
        } catch (error) {
            console.error('Error editing student:', error);
        }
    };

    return (
        <>
            <Button leftIcon={<MdEdit />} rounded={0} justifyContent={'left'} variant={'ghost'} size={'sm'} onClick={onOpen}>Edit</Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent rounded={'1.5em'}>
                    <ModalHeader>Edit Student</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <FormControl>
                                <FormLabel>Name:</FormLabel>
                                <Input type="text" id="name" name="name" variant="flushed" value={formData.name} onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Batch:</FormLabel>
                                <Input type="number" id="batch" name="batch" variant="flushed" value={formData.batch} onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email:</FormLabel>
                                <Input type="email" id="email" name="email" variant="flushed" value={formData.email} onChange={handleChange} />
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

export default EditStudent;
