import React, { useState, useEffect } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    DarkMode,
    Select,
    SimpleGrid,
    Stack
} from '@chakra-ui/react';
import { getUser, updateUser } from '../../../Api/api';
import { MdEdit } from 'react-icons/md';

const EditUser = ({ userId, data, fetchUsers }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [user, setUser] = useState({
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        role: data.role,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            await updateUser(userId, user);
            console.log("User updated successfully:", user);
            onClose();
            fetchUsers();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <>
            <Button leftIcon={<MdEdit />} rounded={0} justifyContent={'left'} variant={'ghost'} size={'sm'} onClick={onOpen}>Edit</Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'2xl'} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent rounded={'1.5em'}>
                    <ModalHeader>Edit User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody as={Stack}>
                        <SimpleGrid columns={[1, 2]} gap={8}>
                            <FormControl mb={4}>
                                <FormLabel fontWeight={'bold'} color={'gray.700'}>First Name</FormLabel>
                                <Input type="text" variant={'flushed'} name="first_name" value={user.first_name} onChange={handleChange} />
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel fontWeight={'bold'} color={'gray.700'}>Last Name</FormLabel>
                                <Input type="text" variant={'flushed'} name="last_name" value={user.last_name} onChange={handleChange} />
                            </FormControl>
                        </SimpleGrid>
                        <FormControl mb={4}>
                            <FormLabel fontWeight={'bold'} color={'gray.700'}>Email</FormLabel>
                            <Input type="email" variant={'flushed'} name="username" value={user.username} onChange={handleChange} />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel fontWeight={'bold'} color={'gray.700'}>Role</FormLabel>
                            <Select name="role" variant={'flushed'} value={user.role} onChange={handleChange}>
                                <option value="admin">Admin</option>
                                <option value="faculty">Faculty</option>
                            </Select>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="messenger" mr={3} onClick={handleSubmit} rounded={'full'} fontWeight={'normal'}>
                            Update User
                        </Button>
                        <Button onClick={onClose} rounded={'full'} fontWeight={'normal'}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default EditUser;
