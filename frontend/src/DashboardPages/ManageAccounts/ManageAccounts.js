import React, { useState, useEffect } from 'react';
import { deleteUser, getAllUsers } from '../../Api/api';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Divider, Flex, HStack, SimpleGrid, Table, Tag, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import ImportUsers from './components/ImportUsers';
import AddUser from './components/AddUser';
import { MdDelete } from 'react-icons/md';
import OptionsPopover from '../../Components/OptionsPopover';
import DeleteConfirmationModal from '../../Components/DeleteConfirmation';
import EditUser from './components/EditUser';

const ManageAccounts = () => {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [targetDelete, setTargetDelete] = useState('');
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const data = await getAllUsers();
            setUsers(data);
            console.log(data)
        } catch (error) {
            console.error('Error fetching users:', error.message);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDeleteClick = (id, name) => {
        setTargetDelete({ id, name });
        setIsOpenDelete(true);
    };

    const handleDelete = async () => {
        try {
            await deleteUser(targetDelete.id);
            const updatedUsers = users.filter(item => item.id !== targetDelete.id);
            setUsers(updatedUsers);
            setIsOpenDelete(false);
        } catch (error) {
            console.error('Error deleting Alumni:', error);
        }
    };

    return (
        <div>

            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem bg={'white'} rounded={16}>
                    <AccordionButton p={4} rounded={16}>
                        <Flex alignItems={'center'} fontFamily={'exo'} fontWeight={'bold'} gap={4} w={'full'} justifyContent={'space-between'} mr={3}>
                            <Text fontSize={'large'}>User Accounts</Text>
                            <HStack onClick={(event) => event.stopPropagation()}>
                                <AddUser fetchUsers={fetchUsers}/>
                                <ImportUsers fetchUsers={fetchUsers}/>
                            </HStack>
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>
                    <Divider />
                    <AccordionPanel p={0} pb={4} overflowX={'auto'}>
                        <Box>
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        <Th>Name</Th>
                                        <Th>Username</Th>
                                        <Th textAlign={'center'}>LogedIn</Th>
                                        <Th>Role</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody fontSize={'14px'} >
                                    {users.map((item, index) => (
                                        <Tr key={item.id} _hover={{ bg: 'yellow.50' }} rounded={10}>
                                            <Td>{item.first_name} {item.last_name}</Td>
                                            <Td>{item.username}</Td>
                                            <Td textAlign={'center'}>
                                                {
                                                    item.is_active?
                                                    <Tag colorScheme={'green'} fontSize={'12px'}>Active</Tag>:<Tag colorScheme='yellow' fontSize={'12px'}>Inactive</Tag>
                                                }
                                            </Td>
                                            <Td>{item.role}</Td>
                                            <Td>
                                                <Flex gap={2} opacity={1} justifyContent={'right'} display={index===0?'none':'block'}>
                                                    <OptionsPopover>
                                                        <EditUser userId={item.id} data={item} fetchUsers={fetchUsers} />

                                                        <Button
                                                            leftIcon={<MdDelete />}
                                                            variant={'ghost'}
                                                            size={'sm'}
                                                            justifyContent={'left'}
                                                            onClick={() => handleDeleteClick(item.id, item.first_name)}
                                                        >Delete</Button>
                                                    </OptionsPopover>
                                                </Flex>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>

                        </Box>

                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <DeleteConfirmationModal
                isOpen={isOpenDelete}
                onClose={() => setIsOpenDelete(false)}
                itemName={" user - " + targetDelete.name}
                onDelete={handleDelete}
            />


        </div>
    );
};

export default ManageAccounts;
