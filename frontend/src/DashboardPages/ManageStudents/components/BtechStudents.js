import React, { useEffect, useState } from 'react';
import { Box, Flex, IconButton, Text, Table, Thead, Tbody, Tr, Th, Td, DarkMode, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Divider, Button } from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import { deleteStudent, getAllStudents } from '../../../Api/api';
import DeleteConfirmationModal from '../../../Components/DeleteConfirmation';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import OptionsPopover from '../../../Components/OptionsPopover';
import ImportStudents from './ImportStudents';

const BtechStudents = () => {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [targetDelete, setTargetDelete] = useState('');
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        try {
            const fetchedStudents = await getAllStudents();
            setStudents(fetchedStudents);
        } catch (error) {
            console.error('Error fetching Students:', error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleDeleteClick = (id, name) => {
        setTargetDelete({ id, name });
        setIsOpenDelete(true);
    };

    const handleDelete = async () => {
        try {
            await deleteStudent(targetDelete.id);
            const updatedStudents = students.filter(student => student.student_id !== targetDelete.id);
            setStudents(updatedStudents);
            setIsOpenDelete(false);
        } catch (error) {
            console.error('Error deleting Student:', error);
        }
    };

    return (
        <Box w={'full'}>
            <Accordion allowMultiple>
                <AccordionItem bg={'white'} rounded={16}>
                    <AccordionButton p={4} rounded={16}>
                        <Flex alignItems={'center'} fontFamily={'exo'} fontWeight={'bold'} gap={4} justifyContent={'space-between'} w={'full'}>
                            <Text fontSize={'large'}>B-Tech Students</Text>
                            <Flex gap={2}>
                                <ImportStudents fetchStudents={fetchStudents}/>
                                <AddStudent fetchStudents={fetchStudents}/>
                            </Flex>
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>
                    <Divider />
                    <AccordionPanel p={0} pb={4} overflowX={'auto'}>
                        <Table variant="striped" colorScheme='blackAlpha'>
                            <Thead>
                                <Tr>
                                    <Th>S/NO</Th>
                                    <Th>Name</Th>
                                    <Th>Enrollment</Th>
                                    <Th>Email</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody fontSize={'14px'} fontWeight={'semibold'}>
                                {students.map((item, index) => (
                                    <Tr key={item.index}>
                                        <Td>{index + 1}</Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.enrollment_no.toUpperCase()}</Td>
                                        <Td>{item.email}</Td>
                                        <Td>
                                        <Flex gap={2} opacity={1} justifyContent={'right'}>
                                                <OptionsPopover>
                                                <EditStudent id={item.enrollment_no} data={item} />
                                                    <Button
                                                        leftIcon={<MdDelete />}
                                                        variant={'ghost'}
                                                        size={'sm'}
                                                        justifyContent={'left'}
                                                        rounded={0}
                                                        onClick={() => handleDeleteClick(item.enrollment_no, item.enrollment_no + " - " + item.name)}
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

export default BtechStudents;
