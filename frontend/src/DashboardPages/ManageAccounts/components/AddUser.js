import React, { useState } from 'react';
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
    Stack,
    Box,
    Text
} from '@chakra-ui/react';
import { createUser } from '../../../Api/api';

const AddUser = ({fetchUsers}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        username: "",
        role: "faculty"
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
            const response = await createUser(user);
            console.log("User created successfully:", response.data);
            onClose();
            fetchUsers();
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    const openModal = (e) => {
        e.stopPropagation();
        onOpen();
    }

    return (
        <>
            <DarkMode>
                <Button rounded={'full'} fontFamily={'body'} size={'sm'} colorScheme='messenger' onClick={openModal}>Add User +</Button>
            </DarkMode>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'2xl'} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent rounded={'1.5em'}>
                    <ModalHeader>Add User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody as={Stack} spacing={6}>
                        <Box w={'full'} bg={'green.100'} rounded={10} p={4}>
                            <Text textAlign={'justify'} fontSize={'13px'} fontWeight={'bold'} color={'darkgreen'}>
                                When new Users are added a temporary password is send on their email, they have to reset their password. <br />
                                Faculty Users can Manage their faculty profile and the courses assigned to them. <br />
                                Admin Users can Manage their faculty profile, courses assigned to them, They can manage everything on the website.
                            </Text>
                        </Box>
                        <SimpleGrid columns={[1, 2]} gap={8}>
                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'} fontSize={'sm'}>First Name</FormLabel>
                                <Input type="text" variant={'flushed'} name="first_name" value={user.first_name} onChange={handleChange} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'} fontSize={'sm'}>Last Name</FormLabel>
                                <Input type="text" variant={'flushed'} name="last_name" value={user.last_name} onChange={handleChange} />
                            </FormControl>
                        </SimpleGrid>
                        <FormControl isRequired>
                            <FormLabel fontWeight={'bold'} fontSize={'sm'}>Email</FormLabel>
                            <Input type="email" variant={'flushed'} name="username" value={user.username} onChange={handleChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel fontWeight={'bold'} fontSize={'sm'}>Role</FormLabel>
                            <Select name="role" variant={'flushed'} value={user.role} onChange={handleChange}>
                                <option value="admin">Admin</option>
                                <option value="faculty" selected>Faculty</option>
                            </Select>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="messenger" mr={3} onClick={handleSubmit} rounded={'full'} fontWeight={'normal'}>
                            Add User
                        </Button>
                        <Button onClick={onClose} rounded={'full'} fontWeight={'normal'}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddUser;
