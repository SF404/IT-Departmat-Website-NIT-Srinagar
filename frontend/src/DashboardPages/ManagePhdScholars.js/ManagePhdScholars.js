import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Table, Thead, Tbody, Tr, Th, Td, Divider, Button, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import { deletePhdScholar, getAllPhdScholars } from '../../Api/api';
import DeleteConfirmationModal from '../../Components/DeleteConfirmation';
import EditPhdScholar from './components/EditPhdScholar';
import OptionsPopover from '../../Components/OptionsPopover';
import AddPhdScholar from './components/AddPhdScholar';

const ManagePhdScholars = () => {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [targetDelete, setTargetDelete] = useState('');
    const [phdScholars, setPhdScholars] = useState([]);

    const fetchPhdScholars = async () => {
        try {
            const fetchedPhdScholars = await getAllPhdScholars();
            setPhdScholars(fetchedPhdScholars);
        } catch (error) {
            console.error('Error fetching Phd Scholars:', error);
        }
    };

    useEffect(() => {
        fetchPhdScholars();
    }, []);

    const handleDeleteClick = (id, name) => {
        setTargetDelete({ id, name });
        setIsOpenDelete(true);
    };

    const handleDelete = async () => {
        try {
            await deletePhdScholar(targetDelete.id);
            const updatedPhdScholars = phdScholars.filter(scholar => scholar.enrollmentNumber !== targetDelete.id);
            setPhdScholars(updatedPhdScholars);
            setIsOpenDelete(false);
        } catch (error) {
            console.error('Error deleting Phd Scholar:', error);
        }
    };

    return (
        <Box w={'full'}>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem bg={'white'} rounded={16}>
                    <AccordionButton p={4} rounded={16}>
                        <Flex alignItems={'center'} fontFamily={'exo'} fontWeight={'bold'} gap={4} justifyContent={'space-between'} w={'full'}>
                            <Text fontSize={'large'}>PhD Scholars</Text>
                            <Flex gap={2}>
                                <AddPhdScholar fetchPhdScholars={fetchPhdScholars} />
                            </Flex>
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>
                    <Divider />
                    <AccordionPanel p={0} pb={4} overflowX={'auto'}>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>S/NO</Th>
                                    <Th>Name</Th>
                                    <Th>Enrollment</Th>
                                    <Th>Supervisor</Th>
                                    <Th>Research Area</Th>
                                    <Th>Email</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody fontSize={'14px'}>
                                {phdScholars.map((item, index) => (
                                    <Tr key={item.enrollmentNumber}>
                                        <Td>{index + 1}</Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.enrollmentNumber.toUpperCase()}</Td>
                                        <Td>{item.supervisor}</Td>
                                        <Td>{item.researchArea}</Td>
                                        <Td>{item.email}</Td>
                                        <Td>
                                            <Flex gap={2} opacity={1} justifyContent={'right'}>
                                                <OptionsPopover>
                                                    <EditPhdScholar id={item.id} data={item} fetchPhdScholars={fetchPhdScholars}/>
                                                    <Button
                                                        leftIcon={<MdDelete />}
                                                        variant={'ghost'}
                                                        size={'sm'}
                                                        justifyContent={'left'}
                                                        rounded={0}
                                                        onClick={() => handleDeleteClick(item.enrollmentNumber, item.enrollmentNumber + " - " + item.name)}
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

export default ManagePhdScholars;
