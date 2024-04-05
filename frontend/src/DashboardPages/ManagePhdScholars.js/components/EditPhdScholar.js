import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { MdEdit } from 'react-icons/md';
import { updatePhdScholar } from '../../../Api/api';

const EditPhdScholar = ({ id, data, fetchPhdScholars }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        name: data.name,
        enrollmentNumber: data.enrollmentNumber,
        supervisor: data.supervisor,
        researchArea: data.researchArea,
        email: data.email,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await updatePhdScholar(id, formData);
            console.log('Phd scholar edited successfully!');
            onClose();
            fetchPhdScholars()
        } catch (error) {
            console.error('Error editing Phd scholar:', error);
        }
    };

    return (
        <>
            <Button leftIcon={<MdEdit />} rounded={0} justifyContent={'left'} variant={'ghost'} size={'sm'} onClick={onOpen}>Edit</Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent rounded={'1.5em'}>
                    <ModalHeader>Edit Phd Scholar</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <FormControl>
                                <FormLabel>Name:</FormLabel>
                                <Input type="text" id="name" name="name" variant="flushed" value={formData.name} onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Enrollment Number:</FormLabel>
                                <Input type="text" id="enrollmentNumber" name="enrollmentNumber" variant="flushed" value={formData.enrollmentNumber} onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Supervisor:</FormLabel>
                                <Input type="text" id="supervisor" name="supervisor" variant="flushed" value={formData.supervisor} onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Research Area:</FormLabel>
                                <Input type="text" id="researchArea" name="researchArea" variant="flushed" value={formData.researchArea} onChange={handleChange} />
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

export default EditPhdScholar;
