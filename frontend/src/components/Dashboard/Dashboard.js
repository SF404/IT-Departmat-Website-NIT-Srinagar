import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, Divider, Flex, FormControl, FormLabel, HStack, Image, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom'
import './Calendar.css';
import illustration_A from './../../assets/images/illustration_A.png'
import illustration_B from './../../assets/images/illustration_B.png'
import illustration_C from './../../assets/images/illustration_C.png'
import { DownloadIcon } from '@chakra-ui/icons'

function Dashboard() {
  const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/your-model/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
          };
          console.log(data)

        fetchData();
    }, []);

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
                <Avatar cursor={'pointer'} name='Dr. Janibul Bashir'></Avatar>
              </PopoverTrigger>
              <PopoverContent w={200}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <br />
                  <Button w={'full'} colorScheme='facebook'>My Profile</Button>
                  <Divider my={2} />
                  <Button w={'full'} colorScheme='telegram'>Logout</Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Text>Dr. Janibul Bashir</Text>
          </HStack>

          <Divider borderColor={'blackAlpha.300'} my={1} />
          <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} as={Link} to={'/faculty'} activeStyle={{ color: "red", border: "2px solid red" }}>Operating System</Button>
          <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} as={Link} to={'/microprocessor'} activeStyle={{ color: "red" }}>Microprocessor</Button>
          <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} as={Link} to={'/computer-architecture'} activeStyle={{ color: "red" }}>Computer Architecture</Button>

          <Divider borderColor={'blackAlpha.300'} my={1} />

          <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} as={Link} to={'/announcements'} activeStyle={{ color: "red" }}>Announcements</Button>
          <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} as={Link} to={'/alert-messages'} activeStyle={{ color: "red" }}>Alert Messages</Button>
          <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} as={Link} to={'/manage-events'} activeStyle={{ color: "red" }}>Manage Events</Button>
          <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} as={Link} to={'/manage-events'} activeStyle={{ color: "red" }}>List Students</Button>
          <Button w={'full'} justifyContent={'flex-start'} borderRadius={'full'} as={Link} to={'/manage-tutorials'} activeStyle={{ color: "red" }}>Manage Tutorials</Button>

        </VStack>
        <Flex flexGrow={1} position={'relative'}>

          <Flex flexGrow={1} justify={'space-evenly'} gap={'24px'} p={'16px'}>
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
              <Text bg={'#d8dcf0'} p={2} borderRadius={6}>Notes</Text>
              <Divider my={2} />
              <VStack>

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
              <Text bg={'#d8dcf0'} p={2} borderRadius={6}>Assignment</Text>
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
