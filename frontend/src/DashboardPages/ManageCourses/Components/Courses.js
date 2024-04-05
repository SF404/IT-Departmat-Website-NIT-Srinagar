import React, { useEffect, useState } from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Divider, Box, Flex, IconButton, Text, Table, Thead, Tbody, Tr, Th, Td, DarkMode, Button } from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import { deleteCourse, getAllCourses } from '../../../Api/api';
import DeleteConfirmationModal from '../../../Components/DeleteConfirmation';
import AddCourse from './AddCourse';
import EditCourse from './EditCourse';
import ImportCourses from './ImportCourses';
import OptionsPopover from '../../../Components/OptionsPopover';
import AssignInstructor from './AssignInstructor';


const Courses = () => {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [targetDelete, setTargetDelete] = useState('');
    const [courses, setCourses] = useState([]);

    const fetchCourses = async () => {
        try {
            const fetchedCourses = await getAllCourses();
            setCourses(fetchedCourses);
            console.log(fetchedCourses)
        } catch (error) {
            console.error('Error fetching Courses:', error);
        }
    };
    useEffect(() => {
        fetchCourses();
    }, []);

    const handleDeleteClick = (id, title) => {
        setTargetDelete({ id, title });
        setIsOpenDelete(true);
    };

    const handleDelete = async () => {
        try {
            await deleteCourse(targetDelete.id);
            const updatedCourses = courses.filter(course => course.course_id !== targetDelete.id);
            setCourses(updatedCourses);
            setIsOpenDelete(false);
        } catch (error) {
            console.error('Error deleting Course:', error);
        }
    };

    function renderOrdinal(semester) {
        const suffixes = ['st', 'nd', 'rd'];
        const lastDigit = semester % 10;
        const suffix = lastDigit >= 1 && lastDigit <= 3 ? suffixes[lastDigit - 1] : 'th';
        return `${semester}${suffix}`;
    }


    return (
        <Box w={'full'}>

            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem bg={'white'} rounded={16}>
                    <AccordionButton p={4} rounded={16}>
                        <Flex alignItems={'center'} fontFamily={'exo'} fontWeight={'bold'} gap={4} justifyContent={'space-between'} w={'full'} mr={3}>
                            <Text fontSize={'large'}>All Courses</Text>
                            <Flex gap={2} onClick={(event => event.stopPropagation())}>
                                <ImportCourses fetchCourses={fetchCourses}/>
                                <AddCourse fetchCourses={fetchCourses} />
                            </Flex>
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>
                    <Divider />
                    <AccordionPanel p={0} pb={4} overflowX={'auto'}>
                        <Table variant="striped" colorScheme='blackAlpha'>
                            <Thead>
                                <Tr>
                                    <Th>Course ID</Th>
                                    <Th>Course Name</Th>
                                    <Th>Department</Th>
                                    <Th>Credit</Th>
                                    <Th>Semester</Th>
                                    <Th>Instructor</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody fontSize={'14px'} fontWeight={'semibold'}>
                                {courses.map((item) => (
                                    <Tr key={item.course_id}>
                                        <Td>{item.course_id}</Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.department}</Td>
                                        <Td>{item.credit}</Td>
                                        <Td>{renderOrdinal(item.semester)}</Td>
                                        <Td>{item.instructor?.first_name} {item.instructor?.last_name}</Td>
                                        <Td>
                                            <Flex gap={2} opacity={1} justifyContent={'right'}>
                                                <OptionsPopover>
                                                    <AssignInstructor course_id={item.course_id} data={item} fetchCourses={fetchCourses} />
                                                    <EditCourse id={item.course_id} data={item} fetchCourses={fetchCourses} />
                                                    <Button
                                                        leftIcon={<MdDelete />}
                                                        variant={'ghost'}
                                                        size={'sm'}
                                                        justifyContent={'left'}
                                                        rounded={0}
                                                        onClick={() => handleDeleteClick(item.course_id, item.name)}
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
                itemName={targetDelete.title}
                onDelete={handleDelete}
            />
        </Box>
    );
};

export default Courses;
