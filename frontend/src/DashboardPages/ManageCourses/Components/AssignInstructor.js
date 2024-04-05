import React, { useEffect, useState } from 'react';
import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    useDisclosure,
    useToast,
} from '@chakra-ui/react';
import { BsFillNodePlusFill } from 'react-icons/bs';
import AsyncSelect from 'react-select/async';
import { getFacultyList } from '../../../Api/public_api';
import { assignCourseInstructor } from '../../../Api/api';

const AssignInstructor = ({ course_id, fetchCourses }) => {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedData, setSelectedData] = useState({
        clearData:true
    });
    const [faculties, setFaculties] = useState([])

    const fetchFacultyList = async () => {
        try {
            const data = await getFacultyList();
            const mappedData = data.map(faculty => ({
                label: `${faculty.first_name} ${faculty.last_name}`,
                value: faculty.faculty_id
            }));
            setFaculties(mappedData);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchFacultyList();
    }, [])


    const handleSubmit = async () => {
        try {
            if (!selectedData) {
                toast({
                    title: 'No Instructor Selected',
                    description: 'Please select an instructor.',
                    status: 'warning',
                    duration: 5000,
                    isClosable: true,
                });
                return;
            }

            await assignCourseInstructor(course_id, selectedData.faculty_id, selectedData.clearData);

            toast({
                title: 'Instructor Assigned Successfully',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });

            onClose();
            fetchCourses();
        } catch (error) {
            toast({
                title: 'Error',
                description: 'An error occurred while assigning instructor.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            console.error('Error assigning instructor:', error.message);
        }
    };

    const filterOptions = (inputValue) => {
        return faculties.filter((option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    const loadOptions = (inputValue, callback) => {
        setTimeout(() => {
            callback(filterOptions(inputValue));
        }, 1000);
    };

    return (
        <>
            <Button
                leftIcon={<BsFillNodePlusFill />}
                rounded={0}
                justifyContent={'left'}
                variant={'ghost'}
                size={'sm'}
                onClick={onOpen}
            >
                Instructor
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent rounded={'1.5em'}>
                    <ModalHeader>Assign Instructor</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={6}>
                            <FormControl>
                                <FormLabel>Select Instructor</FormLabel>
                                <AsyncSelect
                                    cacheOptions
                                    defaultOptions
                                    loadOptions={loadOptions}
                                    onChange={(selectedOption) => setSelectedData((prev) => ({
                                        ...prev,
                                        faculty_id: selectedOption.value
                                    }))}
                                />
                            </FormControl>
                            <Checkbox defaultChecked onChange={(e) => setSelectedData((prev) => ({
                                ...prev,
                                clearData: e.target.checked
                            }))}>Clear Course Associated Data</Checkbox>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button rounded={'full'} colorScheme='messenger' mr={3} fontWeight={'normal'} onClick={handleSubmit}>
                            Assign
                        </Button>
                        <Button rounded={'full'} fontWeight={'normal'} onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AssignInstructor;
