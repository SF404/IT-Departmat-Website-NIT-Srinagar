import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, Center, Divider, Flex, FormControl, FormLabel, HStack, IconButton, Image, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack, Text, Textarea, VStack, textDecoration, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar'
import { FaDownload, FaTrash } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import './Calendar.css';
import illustration_A from './../../assets/images/illustration_A.png'
import illustration_B from './../../assets/images/illustration_B.png'
import illustration_C from './../../assets/images/illustration_C.png'
import { DownloadIcon } from '@chakra-ui/icons'
import ProfileModal from '../Modals/ProfileModal';

function Dashboard() {
  // Model Hooks
  const { isOpen, onOpen, onClose } = useDisclosure()
  // Hooks
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Operating System"
    },
    {
      id: 2,
      name: "Microprocessor"
    },
  ]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [assignment, setAssignment] = useState([]);
  const [notes, setNotes] = useState([{
    title: "Arman, An Untold Story, Based on true events, Somedfnsjfks",
  },
  {
    title: "Suhaib"
  },
  {
    title: "Suhaib"
  },
  {
    title: "Suhaib"
  },
  {
    title: "Suhaib"
  },
  {
    title: "Suhaib"
  },
  ]);

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
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedCourse != null) {
          const assignment = await axios.get(`http://localhost:8000/api/assignments/?id=${selectedCourse}`);
          setAssignment(assignment.data);
          const notes = await axios.get(`http://localhost:8000/api/notes/?id=${selectedCourse}`);
          setNotes(notes.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [selectedCourse]);

  const handleCourseSelect = (id) => {
    console.log(id)
    setSelectedCourse(id);
  }




  const [assignmnetFormData, setAssignmentFormData] = useState({
    title: '',
    description: '',
  });

  const [notesFormData, setNotesFormData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignmentFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAssignmentSubmit = (e) => {
    e.preventDefault();
    // Perform any action with the form data, like sending it to an API
    console.log('Form Data:', assignmnetFormData);
  };
  const handleNotesSubmit = (e) => {
    e.preventDefault();
    // Perform any action with the form data, like sending it to an API
    console.log('Form Data:', assignmnetFormData);
  };



  return (
    <>

      <Flex position={'fixed'} bottom={0} top={110} w={'full'} bg={'whitesmoke'}>
        <Box minW={'64px'} maxW={'64px'} bg={'#d8dcf0'}></Box>
        <VStack minW={250} maxW={250} p={3} bg={'white'}>

          <HStack padding={3} w={'full'} bg={'#ebedf7'} borderRadius={'2xl'}>
            <Popover>
              <PopoverTrigger>
                <Avatar cursor={'pointer'} name={user.name}></Avatar>
              </PopoverTrigger>
              <PopoverContent w={200}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <br />
                  <Button w={'full'} colorScheme='facebook' onClick={onOpen}>My Profile</Button>
                  <ProfileModal isOpen={isOpen} onClose={onClose} user={user}/>
                  <Divider my={2} />
                  <Button w={'full'} colorScheme='telegram'>Logout</Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Text>{user.name}</Text>
          </HStack>

          <Divider borderColor={'blackAlpha.300'} my={1} />

          {
            courses.map((item) => (
              <Button w={'full'} justifyContent={'flex-start'} flexWrap={'wrap'} overflow={'hidden'} borderRadius={'full'} activeStyle={{ color: "red", border: "2px solid red" }}
                key={item.id} onClick={() => handleCourseSelect(item.cid)}>
                {item.name}
              </Button>))
          }

          <Divider borderColor={'blackAlpha.300'} my={1} />

          <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} activeStyle={{ color: "red" }}>Announcements</Button>
          <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} activeStyle={{ color: "red" }}>Alert Messages</Button>
          <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} activeStyle={{ color: "red" }}>Manage Events</Button>
          <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} activeStyle={{ color: "red" }}>List Students</Button>
          <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} activeStyle={{ color: "red" }}>Manage Tutorials</Button>

        </VStack>
        <Flex flexGrow={1} position={'relative'}>

          <Flex flexGrow={1} justify={'space-evenly'} gap={'24px'} p={'16px'} overflowY={'scroll'} fontFamily={'sans-serif'}>
            {/* <Box>
                <Image src={illustration_A} opacity={1} />
                <Text textAlign={'justify'} mt={-10} bg={'#ebedf7'} fontSize={14} p={3} borderRadius={10}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, autem!
                  Lorem ipsum dolor sit ame
                </Text>

              </Box>

              <Box>
                <Image src={illustration_B} opacity={1} />
                <Text textAlign={'justify'} mt={-10} bg={'#ebedf7'} fontSize={14} p={3} borderRadius={10}>
                  autem!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aspernatur.
                </Text>

              </Box>
              <Box>
                <Image src={illustration_C} opacity={1} />
                <Text textAlign={'justify'} mt={-10} bg={'#ebedf7'} fontSize={14} p={3} borderRadius={10}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elitt amet consectetur adipisicing elit. Illo, aspernatur.
                </Text>

              </Box> */}

            <Box w={'full'} textAlign={'center'}>
              <Text bg={'#c5cae8'} p={2} fontWeight={'semibold'} borderRadius={6}>Notes</Text>
              <Divider my={2} />
              <VStack>

                {/* <Accordion allowToggle w={'full'}>
                  {
                    notes.map((item) => (


                      <AccordionItem key={item.id}>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                              {item.title}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <Button>Download</Button>
                        </AccordionPanel>
                      </AccordionItem>
                    ))
                  }
                </Accordion> */}

                {
                  notes.map((item) => (

                    <Flex w={'full'} bg={'#cbeae7'} p={2} borderRadius={4} justifyContent={'space-between'} alignItems={'center'} key={item.id} fontSize={14}>
                      <Text as={Link} textAlign={'left'} pr={2} to={'https://react-icons.github.io/react-icons/icons?name=fa6'} _hover={{ textDecoration: 'underline' }}>
                        {item.title}

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
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton bg={'#d2eafc'}>
                      <Box as="span" flex='1' textAlign='left'>
                        Upload Notes
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>

                    <form onSubmit={handleNotesSubmit}>
                      <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input
                          type="text"
                          name="title"
                          value={notesFormData.title}
                          onChange={handleChange}
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
                          onChange={handleChange}
                          display={'none'}
                        />
                      </FormControl>

                      <Button type="submit" colorScheme="facebook" mt={4} w={'full'} >
                        Upload
                      </Button>
                    </form>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

            </Box>

            <Box w={'full'} textAlign={'center'}>
              <Text bg={'#c5cae8'} p={2} fontWeight={'semibold'} borderRadius={6}>Assignment</Text>
              <Divider my={2} />
              <VStack>

              </VStack>
              <Divider my={2} />

              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton bg={'#d2eafc'}>
                      <Box as="span" flex='1' textAlign='left'>
                        Add New Assignment
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>



                    <form onSubmit={handleAssignmentSubmit}>
                      <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input
                          type="text"
                          name="title"
                          value={assignmnetFormData.title}
                          onChange={handleChange}
                          placeholder="Enter title"
                        />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Textarea
                          name="description"
                          value={assignmnetFormData.description}
                          onChange={handleChange}
                          placeholder="Enter description"
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel>Deadline</FormLabel>
                        <Input
                          type="text"
                          name="title"
                          value={assignmnetFormData.deadline}
                          onChange={handleChange}
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
                          onChange={handleChange}
                          display={'none'}
                        />
                      </FormControl>

                      <Button type="submit" colorScheme="facebook" mt={4} w={'full'} >
                        Submit
                      </Button>
                    </form>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>

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
