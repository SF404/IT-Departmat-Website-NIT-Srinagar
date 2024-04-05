import React, { useState, useEffect } from 'react';
import { deleteEducation, deleteProject, deleteResearch, getMyEducations, getMyProfile, getMyProjects, getMyResearchs } from '../../Api/api';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, Center, DarkMode, Divider, Flex, HStack, IconButton, Input, Link, LinkBox, SimpleGrid, Stack, Table, Tag, Tbody, Td, Text, Textarea, Th, Thead, Tr, VStack, useDisclosure } from '@chakra-ui/react';
import { PiKeyBold, PiNewspaperClippingDuotone, PiSealQuestionDuotone } from "react-icons/pi";
import { PiShapesDuotone } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import AddEducation from './components/AddEducation';
import AddProject from './components/AddProject';
import AddResearch from './components/AddResearch';
import DeleteConfirmationModal from '../../Components/DeleteConfirmation';
import EditEducation from './components/EditEducation';
import EditProject from './components/EditProject';
import EditResearch from './components/EditResearch';
import MyInfo from './components/MyInfo';
import OptionsPopover from '../../Components/OptionsPopover';
import { color } from 'framer-motion';



const MyProfile = () => {
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()
  const [targetDelete, settargetDelete] = useState('')

  const [profileData, setProfileData] = useState(null);
  const [educations, setEducations] = useState([]);
  const [projects, setProjects] = useState([]);
  const [researchs, setResearchs] = useState([]);

  const fetchProfile = async () => {
    try {
      const data = await getMyProfile();
      setProfileData(data);
    } catch (error) {
      console.log(error)
      console.error('Error fetching profile:', error.message);
    }
  };

  const fetchEducations = async () => {
    try {
      const fetchedEducations = await getMyEducations();
      setEducations(fetchedEducations);
      console.log(fetchedEducations)
    } catch (error) {
      console.error('Error fetching educations:', error);
    }
  };

  const fetchProjects = async () => {
    try {
      const data = await getMyProjects();
      setProjects(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching educations:', error);
    }
  };

  const fetchResearchs = async () => {
    try {
      const data = await getMyResearchs();
      setResearchs(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching educations:', error);
    }
  };

  useEffect(() => {

    fetchEducations();
    fetchProjects();
    fetchResearchs();
    fetchProfile();

  }, []);




  const handleDeleteClick = (id, title, itemType) => {
    settargetDelete({
      id, title, itemType
    })
    onOpenDelete();
  }

  const handleDelete = async () => {
    try {
      switch (targetDelete.itemType) {
        case "education":
          await deleteEducation(targetDelete.id);
          setEducations(prevEducations => prevEducations.filter(education => education.education_id !== targetDelete.id));
          break;
        case "research":
          await deleteResearch(targetDelete.id);
          setResearchs(prevResearchs => prevResearchs.filter(research => research.research_id !== targetDelete.id));
          break;
        case "project":
          await deleteProject(targetDelete.id);
          setProjects(prevProjects => prevProjects.filter(project => project.project_id !== targetDelete.id));
          break;
        default:
          console.error("Invalid item type:", targetDelete.itemType);
      }
      onCloseDelete();
    } catch (error) {
      console.error('Error deleting item:', error.message);
    }
  };

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Box>
      <Flex alignItems={'center'} p={2} fontFamily={'exo'} fontWeight={'bold'} gap={4}>
        <Text fontSize={'large'}>My Profile</Text>
      </Flex>
      {profileData ? (
        <Box gap={4} display={{ base: 'block', md: 'flex' }}>
          <Stack w={'full'}>
            <MyInfo profileData={profileData} fetchProfile={fetchProfile} />
            <Box>
              <Accordion allowMultiple as={Stack}>
                <AccordionItem bg={'white'} rounded={16}>
                  <AccordionButton p={4} rounded={16}>
                    <Flex alignItems={'center'} fontFamily={'exo'} fontWeight={'bold'} gap={4} w={'full'} justifyContent={'space-between'} mr={3}>
                      <Text fontSize={'large'}>My Education</Text>
                      <AddEducation fetchEducation={fetchEducations} />
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
                  <Divider />
                  <AccordionPanel p={0}>
                    <Box pb={4}>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th>Degree</Th>
                            <Th>Institution</Th>
                            <Th>Year</Th>
                            <Th></Th>
                          </Tr>
                        </Thead>
                        <Tbody fontSize={'14px'}>
                          {educations.map((item) => (
                            <Tr key={item.education_id}>
                              <Td>{item.degree}</Td>
                              <Td>{item.institution}</Td>
                              <Td>{item.graduation_year}</Td>
                              <Td textAlign={'right'}>
                                <Flex gap={2} opacity={1} justifyContent={'right'}>
                                  <OptionsPopover>
                                    <EditEducation id={item.education_id} data={item} fetchEducation={fetchEducations} />
                                    <Button
                                      leftIcon={<MdDelete />}
                                      variant={'ghost'}
                                      size={'sm'}
                                      justifyContent={'left'}
                                      rounded={0}
                                      onClick={() => handleDeleteClick(item.education_id, item.degree, "education")}
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


                <AccordionItem bg={'white'} rounded={16}>
                  <AccordionButton p={4} rounded={16}>
                    <Flex alignItems={'center'} fontFamily={'exo'} fontWeight={'bold'} gap={4} w={'full'} mr={3} justifyContent={'space-between'}>
                      <Text fontSize={'large'}>My Research</Text>
                      <AddResearch fetchResearches={fetchResearchs} />
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
                  <Divider />
                  <AccordionPanel p={0}>
                    <VStack w={'full'} rounded={16} bg={'white'} p={4} gap={6}>
                      {
                        researchs.map((item) => (
                          <>
                            <Flex w={'full'} gap={2} >
                              <Flex key={item.research_id} w={'full'} gap={4}>
                                <PiNewspaperClippingDuotone fontSize={'20px'} />
                                <Box w={'full'}>
                                  <Text fontSize={'lg'} mt={-0.5}>{item.title}</Text>
                                  <Text fontSize={'14px'}>{item.description}</Text>
                                  <HStack mt={1}>
                                    {
                                      item.url &&
                                      <Button variant={'outline'} size={'xs'} colorScheme='facebook' rounded={'full'} onClick={() => handleDownload(item.url)}>Link</Button>
                                    }
                                    {
                                      item.attachment &&
                                      <Button variant={'outline'} size={'xs'} colorScheme='facebook' rounded={'full'} onClick={() => handleDownload(item.attachment)}>Download</Button>
                                    }
                                  </HStack>
                                </Box>
                              </Flex>

                              <Flex gap={2} justifyContent={'right'}>
                                <OptionsPopover>
                                  <EditResearch id={item.research_id} data={item} fetchResearches={fetchResearchs} />
                                  <Button
                                    leftIcon={<MdDelete />}
                                    variant={'ghost'}
                                    size={'sm'}
                                    justifyContent={'left'}
                                    rounded={0}
                                    onClick={() => handleDeleteClick(item.research_id, item.title, "research")}
                                  >Delete</Button>
                                </OptionsPopover>
                              </Flex>


                            </Flex>
                          </>
                        ))
                      }
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>


                <AccordionItem bg={'white'} rounded={16}>
                  <AccordionButton p={4} rounded={16}>
                    <Flex alignItems={'center'} fontFamily={'exo'} fontWeight={'bold'} gap={4} w={'full'} mr={3} justifyContent={'space-between'}>
                      <Text fontSize={'large'}>My Projects</Text>
                      <AddProject fetchProjects={fetchProjects} />
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
                  <Divider />
                  <AccordionPanel p={0}>
                    <VStack w={'full'} rounded={16} bg={'white'} p={4} gap={6}>
                      {
                        projects.map((item) => (
                          <>
                            <Flex w={'full'} gap={2} >
                              <Flex key={item.research_id} w={'full'} gap={4}>
                                <PiShapesDuotone fontSize={'20px'} />
                                <Box w={'full'}>
                                  <Text fontSize={'lg'} mt={-0.5}>{item.title}</Text>
                                  <Text fontSize={'14px'}>{item.description}</Text>
                                  <HStack mt={1}>
                                    {
                                      item.url &&
                                      <Button variant={'outline'} size={'xs'} colorScheme='facebook' rounded={'full'} onClick={() => handleDownload(item.url)}>Link</Button>
                                    }
                                    {
                                      item.attachment &&
                                      <Button variant={'outline'} size={'xs'} colorScheme='facebook' rounded={'full'} onClick={() => handleDownload(item.attachment)}>Download</Button>
                                    }
                                  </HStack>
                                </Box>
                              </Flex>

                              <Flex gap={2} justifyContent={'right'}>
                                <OptionsPopover>
                                  <EditProject id={item.project_id} data={item} fetchProjects={fetchProjects} />
                                  <Button
                                    leftIcon={<MdDelete />}
                                    variant={'ghost'}
                                    size={'sm'}
                                    justifyContent={'left'}
                                    rounded={0}
                                    onClick={() => handleDeleteClick(item.project_id, item.title, "project")}
                                  >Delete</Button>
                                </OptionsPopover>
                              </Flex>


                            </Flex>
                          </>
                        ))
                      }
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>

          </Stack>
          <Stack maxW={'300px'} minW={'250px'} spacing={4}>
            <Box w={'full'} width={'250px'} bg={'white'} rounded={15} p={4}>
              <Stack justifyContent={'center'} alignItems={'center'} >
                <Text fontWeight={'semibold'} color='gray'>Password</Text>
                <PiKeyBold fontSize={'30px'} color='gray' />
                <Text fontSize={'xs'} textAlign={'center'}>Make your password stronger, or change if someone else knows it.</Text>
                <DarkMode>
                  <Link w={'full'} href="/forget-password">
                    <Button rounded={0} size={'sm'} colorScheme='facebook' w={'full'}>Change Password</Button>
                  </Link>
                </DarkMode>
              </Stack>
            </Box>
            <Box w={'full'} width={'250px'} bg={'white'} rounded={15} p={4}>
              <Stack justifyContent={'center'} alignItems={'center'}>
                <PiSealQuestionDuotone fontSize={'30px'} color='gray' />

                <Text fontSize={'xs'} textAlign={'center'}>If you are facing any issue, please do the following</Text>
                <HStack>
                  <Text fontSize={'xs'} textAlign={'center'} as={Link} _hover={{ color: 'blue' }}>feedback</Text>
                  <Text>|</Text>
                  <Text fontSize={'xs'} textAlign={'center'} as={Link} _hover={{ color: 'blue' }}>report issue</Text>
                </HStack>
                <Text fontSize={'xs'} textAlign={'center'} as={Link} _hover={{ color: 'blue' }}>Contact Developers</Text>

                <DarkMode>
                  <Button rounded={0} size={'sm'} colorScheme='facebook' w={'full'}>Get Help</Button>
                </DarkMode>


              </Stack>
            </Box>          </Stack>
        </Box>
      ) : (
        <p>Loading profile...</p>
      )}

      <DeleteConfirmationModal isOpen={isOpenDelete} onClose={onCloseDelete} itemName={targetDelete.title} onDelete={handleDelete} />
    </Box>
  );
};

export default MyProfile;
