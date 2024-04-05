import React, { useEffect, useState } from 'react';
import { Box, Flex, IconButton, Text, Table, Thead, Tbody, Tr, Th, Td, DarkMode, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Divider, Button, TableContainer } from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import AddAlumni from './components/AddAlumni';
import EditAlumni from './components/EditAlumni';
import { deleteAlumni, getAllAlumni } from '../../Api/api';
import DeleteConfirmationModal from '../../Components/DeleteConfirmation';
import OptionsPopover from '../../Components/OptionsPopover';
import ImportAlumni from './components/ImportAlumni';

const ManageAlumni = () => {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [targetDelete, setTargetDelete] = useState('');
    const [alumni, setAlumni] = useState([]);

    const fetchAlumni = async () => {
        try {
            const fetchedAlumni = await getAllAlumni();
            setAlumni(fetchedAlumni);
        } catch (error) {
            console.error('Error fetching Alumni:', error);
        }
    };
    useEffect(() => {

        fetchAlumni();
    }, []);

    const handleDeleteClick = (id, name) => {
        setTargetDelete({ id, name });
        setIsOpenDelete(true);
    };

    const handleDelete = async () => {
        try {
            await deleteAlumni(targetDelete.id);
            const updatedAlumni = alumni.filter(item => item.alumni_id !== targetDelete.id);
            setAlumni(updatedAlumni);
            setIsOpenDelete(false);
        } catch (error) {
            console.error('Error deleting Alumni:', error);
        }
    };

    return (
        <Box w={'full'}>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem bg={'white'} rounded={16}>
                    <AccordionButton p={4} rounded={16}>
                        <Flex alignItems={'center'} fontFamily={'exo'} fontWeight={'bold'} gap={4} justifyContent={'space-between'} w={'full'}>
                            <Text fontSize={'large'}>Alumni</Text>
                            <Flex gap={2} onClick={(event)=>event.stopPropagation()}>
                                <ImportAlumni fetchAlumni={fetchAlumni}/>
                                <AddAlumni fetchAlumni={fetchAlumni} />
                            </Flex>
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>
                    <Divider />
                    <AccordionPanel p={0} pb={4} overflowX={'auto'}>
                        <Table variant="striped" colorScheme='blackAlpha'>
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Graduation Year</Th>
                                    <Th>Present Job</Th>
                                    <Th>Previous Job(s)</Th>
                                    <Th>Achievements</Th>
                                    <Th>Email</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody fontSize={'14px'}>
                                {alumni.map((item) => (
                                    <Tr key={item.alumni_id} fontWeight={'semibold'}>
                                        <Td>{item.name}</Td>
                                        <Td>{item.graduation_year}</Td>
                                        <Td>{item.present_job}</Td>
                                        <Td>{item.previous_jobs}</Td>
                                        <Td>{item.achievements}</Td>
                                        <Td>{item.email}</Td>
                                        <Td>
                                            <Flex gap={2} opacity={1} justifyContent={'right'}>
                                                <OptionsPopover>
                                                    <EditAlumni id={item.alumni_id} data={item} fetchAlumni={fetchAlumni} />
                                                    <Button
                                                        leftIcon={<MdDelete />}
                                                        variant={'ghost'}
                                                        size={'sm'}
                                                        justifyContent={'left'}
                                                        onClick={() => handleDeleteClick(item.alumni_id, item.name)}
                                                    >Delete</Button>
                                                </OptionsPopover>
                                            </Flex>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <DeleteConfirmationModal
                isOpen={isOpenDelete}
                onClose={() => setIsOpenDelete(false)}
                itemName={targetDelete.name}
                onDelete={handleDelete}
            />
        </Box>
    );
};

export default ManageAlumni;
