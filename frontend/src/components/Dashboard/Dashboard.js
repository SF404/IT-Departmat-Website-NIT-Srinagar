import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, Center, Divider, Flex, FormControl, FormLabel, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack, Tag, Text, Textarea, VStack, textDecoration, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar'
import { FaDownload, FaTrash } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import './Calendar.css';
import { DownloadIcon } from '@chakra-ui/icons'
import ProfileModal from '../Modals/ProfileModal';
import DashboardPlaceholder from '../Placeholders/DashboardPlaceholder';

function Dashboard() {
  // Form States
  const [assignmnetFormData, setAssignmentFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    file: '',
  });

  const [notesFormData, setNotesFormData] = useState({
    title: '',
    file: '',
  });
  // Model Hooks
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: openNotesModel, onOpen: addNotes, onClose: closeNotesModel } = useDisclosure()
  const { isOpen: openAssignmentModel, onOpen: addAssignment, onClose: closeAssignmentModel } = useDisclosure()
  // Hooks
  const toast = useToast();
  // Page States
  const [user, setUser] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [assignment, setAssignment] = useState([]);
  const [notes, setNotes] = useState([]);

  // On Load Use_effect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getUser = await axios.get(`http://localhost:8000/api/temp/?sid=${1001}`)
        console.log(getUser.data)
        setUser(getUser.data[0]);
        const response = await axios.get(`http://localhost:8000/api/courses/?sid=${1001}`);
        console.log(response.data)
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // On Course Change Use_effect
  const fetchData = async () => {
    try {
      if (selectedCourse != null) {
        const assignment = await axios.get(`http://localhost:8000/api/showassignments/?cid=${selectedCourse}`);
        setAssignment(assignment.data);
        const notes = await axios.get(`http://localhost:8000/api/shownotes/?cid=${selectedCourse}`);
        setNotes(notes.data);

      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [selectedCourse]);

  // Function For changing Selected Course
  const handleCourseSelect = (cid) => {
    setSelectedCourse(cid);
  }

  // Function for writing Assignment form Data
  const handleAssignmentFormChange = (e) => {
    const { name, value } = e.target;
    setAssignmentFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function for writing Notes form Data
  const handleNotesFormChange = (e) => {
    const { name, value } = e.target;
    setNotesFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function for Handling Assignment Submit
  const handleAssignmentSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", assignmnetFormData.title);
    formData.append("file", assignmnetFormData.file);
    formData.append("description", assignmnetFormData.description);
    formData.append("deadline", assignmnetFormData.deadline);
    formData.append("cid", selectedCourse);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/assignmentupload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      closeAssignmentModel();
      await fetchData();

      // Display success toast
      toast({
        title: "Assignment Uploaded",
        description: "Your assignment has been successfully uploaded.",
        status: "success",
        duration: 5000, // Duration in milliseconds
        isClosable: true,
      });

      console.log("Response data assignment:", response.data);
    } catch (error) {
      // Display error toast
      toast({
        title: "Error",
        description: "There was an error uploading the assignment.",
        status: "error",
        duration: 5000, // Duration in milliseconds
        isClosable: true,
      });

      console.error("Error:", error);
    }
    console.log("Form Data:", assignmnetFormData);
  };


  // Function For Handeling Notes Submit
  const handleNotesSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", notesFormData.title);
    formData.append("file", notesFormData.file);
    formData.append("cid", selectedCourse);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/notesupload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // openNotesModel=false;
      closeNotesModel();
      await fetchData();
      // Display success toast
      toast({
        title: "Notes Uploaded",
        description: "Your notes have been successfully uploaded.",
        status: "success",
        duration: 5000, // Duration in milliseconds
        isClosable: true,
      });

      console.log("Response data notes:", response.data);
    } catch (error) {
      // Display error toast
      toast({
        title: "Error",
        description: "There was an error uploading the notes.",
        status: "error",
        duration: 5000, // Duration in milliseconds
        isClosable: true,
      });

      console.error("Error:", error);
    }
  };


  return (
    <>
      <Flex position={'fixed'} bottom={0} top={110} w={'full'} bg={'whitesmoke'}>
        <Box minW={'64px'} maxW={'64px'} bg={'#d8dcf0'}></Box>
        <VStack minW={250} maxW={250} p={3} bg={'white'} userSelect={'none'}>

          <HStack padding={3} w={'full'} bg={'#d8dcf0'} borderRadius={'2xl'} onClick={() => setSelectedCourse(null)}>
            <Popover>
              <PopoverTrigger>
                <Avatar cursor={'pointer'} name={user.name} onClick={(e) => e.stopPropagation()}></Avatar>
              </PopoverTrigger>
              <PopoverContent w={200}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <br />
                  <Button w={'full'} colorScheme='facebook' onClick={onOpen}>My Profile</Button>
                  <ProfileModal isOpen={isOpen} onClose={onClose} user={user} />
                  <Divider my={2} />
                  <Button w={'full'} colorScheme='telegram'>Logout</Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Text>{user.name}</Text>
          </HStack>
          <Divider borderColor={'blackAlpha.300'} my={1} />
          <VStack w={'full'} spacing={1}>

            {
              courses.map((item) => (
                <Button w={'full'} justifyContent={'flex-start'} flexWrap={'wrap'} h={30} overflow={'hidden'} bg={'transparent'} borderRadius={'full'} fontSize={13}
                  key={item.id} onClick={() => handleCourseSelect(item.cid)}
                  {...(selectedCourse === item.cid ? { backgroundColor: '#d8dcf0', _hover: { backgroundColor: '#d8dcf0' } } : {})}
                  {...(selectedCourse !== item.cid ? { _hover: { backgroundColor: '#e5e5e5' }, } : {})}
                  _active={{ color: "darkblue" }}>

                  {item.name}
                </Button>))
            }

          </VStack>

          <Divider borderColor={'blackAlpha.300'} my={1} />

          <VStack w={'full'}>
            <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} fontSize={13} h={30} overflow={'hidden'} bg={'transparent'}>Announcements</Button>
            <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} fontSize={13} h={30} overflow={'hidden'} bg={'transparent'}>Alert Messages</Button>
            <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} fontSize={13} h={30} overflow={'hidden'} bg={'transparent'}>Manage Events</Button>
            <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} fontSize={13} h={30} overflow={'hidden'} bg={'transparent'}>List Students</Button>
            <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} fontSize={13} h={30} overflow={'hidden'} bg={'transparent'}>Manage Tutorials</Button>
          </VStack>

        </VStack>
        <Flex flexGrow={1} position={'relative'}>
          {
            selectedCourse ? (
              <Flex flexGrow={1} justify={'space-evenly'} gap={'24px'} p={'16px'} overflowY={'scroll'} fontFamily={'sans-serif'}>

                <Box w={'full'} textAlign={'center'}>
                  <Text bg={'#c5cae8'} p={2} fontWeight={'semibold'} borderRadius={6}>Notes / Material</Text>
                  <Divider my={2} />
                  <VStack>
                    {
                      notes.map((item) => (

                        <Flex w={'full'} bg={'#cbeae7'} p={2} borderRadius={4} justifyContent={'space-between'} alignItems={'center'} key={item.id} fontSize={14}>
                          <Text as={Link} textAlign={'left'} pr={2} to={`${item.pdf}`} _hover={{ textDecoration: 'underline' }}>
                            {item.name}
                          </Text>

                          <HStack>
                            <IconButton isRound={true} variant='solid' colorScheme='purple' aria-label='Done' icon={<FaDownload />} />
                            <IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Done' icon={<FaTrash />} />

                          </HStack>
                        </Flex>
                      ))
                    }

                  </VStack>
                  <Divider my={2} />

                  <Button onClick={addNotes} w={'full'} colorScheme='green'>Add Notes / Material</Button>

                  <Modal closeOnOverlayClick={false} isOpen={openNotesModel} onClose={closeNotesModel}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Add Study Material</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <form onSubmit={handleNotesSubmit}>
                          <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input
                              type="text"
                              name="title"
                              value={notesFormData.title}
                              onChange={handleNotesFormChange}
                              placeholder="Enter title"
                            />
                          </FormControl>

                          <FormControl mt={4}>
                            <FormLabel bg={'#e5e5e5'} p={3} borderRadius={'10px'} m={0}>
                              Upload Notes
                              {/* <DownloadIcon transform="rotate(180deg)"/> */}
                            </FormLabel>
                            <Input
                              type="file"
                              name="file"
                              onChange={handleNotesFormChange}
                              display={'none'}
                            />
                          </FormControl>
                          <Divider my={4} />

                          <Button type="submit" colorScheme='blue' w={'full'}>
                            Upload
                          </Button>
                        </form>
                      </ModalBody>


                    </ModalContent>
                  </Modal>
                </Box>

                <Box w={'full'} textAlign={'center'}>
                  <Text bg={'#c5cae8'} p={2} fontWeight={'semibold'} borderRadius={6}>Assignment</Text>
                  <Divider my={2} />
                  <VStack w={'full'}>

                    <Accordion allowToggle w={'full'} textAlign={'left'}>
                      {
                        assignment.map((item) => (
                          <AccordionItem w={'full'}>
                            <h2>
                              <AccordionButton  w={'full'}>
                                <Box as="span" flex='1' textAlign='left'>
                                  {item.name}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} w={'full'}>
                              {item.description}
                              <br />
                              <Tag>Deadline: <Text color={'red'}>{item.deadline}</Text></Tag>
                            </AccordionPanel>
                          </AccordionItem>
                        ))
                      }
                    </Accordion>

                  </VStack>
                  <Divider my={2} />

                  <Button onClick={addAssignment} w={'full'} colorScheme='green'>Add New Assignment</Button>

                  <Modal closeOnOverlayClick={false} isOpen={openAssignmentModel} onClose={closeAssignmentModel}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Add Assignment</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <form onSubmit={handleAssignmentSubmit}>
                          <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input
                              type="text"
                              name="title"
                              value={assignmnetFormData.title}
                              onChange={handleAssignmentFormChange}
                              placeholder="Enter title"
                            />
                          </FormControl>

                          <FormControl mt={4}>
                            <FormLabel>Description</FormLabel>
                            <Textarea
                              name="description"
                              value={assignmnetFormData.description}
                              onChange={handleAssignmentFormChange}
                              placeholder="Enter description"
                            />
                          </FormControl>

                          <FormControl>
                            <FormLabel>Deadline</FormLabel>
                            <Input
                              type="text"
                              name="deadline"
                              value={assignmnetFormData.deadline}
                              onChange={handleAssignmentFormChange}
                              placeholder="Deadline"
                            />
                          </FormControl>


                          <FormControl mt={4}>
                            <FormLabel bg={'#e5e5e5'} p={3} borderRadius={'10px'} m={0}>
                              Upload File
                              {/* <DownloadIcon transform="rotate(180deg)"/> */}
                            </FormLabel>
                            <Input
                              type="file"
                              name="file"
                              onChange={handleAssignmentFormChange}
                              display={'none'}
                            />
                          </FormControl>

                          <Button type="submit" colorScheme="facebook" mt={4} w={'full'} >
                            Submit
                          </Button>
                        </form>
                      </ModalBody>


                    </ModalContent>
                  </Modal>
                </Box>
              </Flex>
            ) : (<DashboardPlaceholder />)
          }

          <Divider orientation='vertical' borderColor={'blackAlpha.200'} />

          <VStack h={'full'} minW={300} p={4}>
            <Calendar />
          </VStack>


        </Flex>
      </Flex>
    </>
  )
}

export default Dashboard
