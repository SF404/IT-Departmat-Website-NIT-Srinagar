import React, { useEffect, useState } from 'react'
import { getFacultyDetail } from '../../Api/public_api';
import { useParams } from 'react-router-dom';
import { Avatar, Box, Button, Divider, Flex, HStack, Image, Link, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from '@chakra-ui/react';
import { PiNewspaperClippingDuotone, PiShapesDuotone } from 'react-icons/pi';
import mainlogo from './../../Assets/Logos/logo.svg'

const FacultyDetails = () => {
  const { id } = useParams()
  const [facultyDetails, setFacultyDetails] = useState({});

  const fetchFacultyDetails = async () => {
    try {
      const data = await getFacultyDetail(id)
      console.log(data)
      setFacultyDetails(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchFacultyDetails();
  }, [])

  function convertToSemesterString(semester) {
    if (semester === 1) {
      return "1st";
    } else if (semester === 2) {
      return "2nd";
    } else if (semester === 3) {
      return "3rd";
    } else {
      return semester + "th";
    }
  }

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset; // Accurate scroll position

      window.scrollTo({
        top: elementTop - 80,
        behavior: 'smooth', // Smooth scrolling animation
      });
    }
  };


  return (
    <>
      <Box w={'full'} p={4} minH={'100vh'} bg={'gray.200'} >
        <Flex mx={'auto'} w={{ base: 'full', md: '80%' }} h={'full'} gap={2} position={'relative'}>
          <Stack w={'250px'} h={'fit-content'} position={'sticky'} top={'80px'} left={0}>
            <Box bg={'white'} rounded={16} p={4} as={Stack} spacing={4}>
              <Image src={mainlogo} boxSize={'150px'} mx={'auto'}></Image>
              <Text textAlign={'center'} fontSize={'sm'} fontWeight={'bolder'}>National Institute Of Technology, Srinagar</Text>
              <Divider my={2} />
              <Link onClick={() => scrollToSection('profile-section')}>Profile</Link>
              <Link onClick={() => scrollToSection('teaching-now-section')}>Teaching Now</Link>
              <Link onClick={() => scrollToSection('education-section')}>Education</Link>
              <Link onClick={() => scrollToSection('researchs-section')}>Researchs</Link>
              <Link onClick={() => scrollToSection('projects-section')}>Projects</Link>
            </Box>
            <Box bg={'white'} rounded={16} p={4} fontSize={'14px'}>
              <Text fontWeight={'semibold'} fontSize={'12px'}>Phone</Text>
              <Text>{facultyDetails.phone_number}</Text>
              <Text fontWeight={'semibold'} fontSize={'12px'} mt={2}>Email</Text>
              <Text>{facultyDetails.email}</Text>
              <Text fontWeight={'semibold'} fontSize={'12px'} mt={2}>Website</Text>
              <Text>{facultyDetails.website_url}</Text>
            </Box>
          </Stack>
          <Stack flex={1}>
            <Box w={'full'} id='profile-section'>
              <Flex key={facultyDetails.faculty_id} bg={'white'} p={4} rounded={16} gap={6}>
                <Avatar src={facultyDetails.profile_image} size={'2xl'} name={facultyDetails.first_name + " " + facultyDetails.last_name} />
                <Stack flex={1} spacing={1} mt={2}>
                  <Text fontSize={'2xl'} fontWeight={'bolder'} lineHeight={'1em'}>{facultyDetails.first_name + " " + facultyDetails.last_name}</Text>
                  <Text fontSize={'sm'} fontWeight={'bold'}>{facultyDetails.designation} | {facultyDetails.highest_degree}</Text>
                  <Text fontSize={'sm'} fontWeight={'bold'}>Department: {facultyDetails.department}</Text>
                  <Text fontSize={'14px'}>{facultyDetails.bio}</Text>
                  <Flex w={'full'} py={4} fontSize={'14px'} alignItems={'center'} gap={8} flexWrap={'wrap'}>
                    <Box>
                      <Text fontWeight={'semibold'} fontSize={'12px'}>Phone</Text>
                      <Text>{facultyDetails.phone_number}</Text>
                    </Box>
                    <Box>
                      <Text fontWeight={'semibold'} fontSize={'12px'}>Email</Text>
                      <Text>{facultyDetails.email}</Text>
                    </Box>
                    <Box>
                      <Text fontWeight={'semibold'} fontSize={'12px'}>Website</Text>
                      <Text>{facultyDetails.website_url}</Text>
                    </Box>

                  </Flex>
                </Stack>
              </Flex>

            </Box>

            <Box w={'full'} bg={'white'} rounded={16} boxShadow={'sm'} id='teaching-now-section'>
              <Text p={4} fontWeight={'bold'} fontSize={'lg'}>Teaching Now</Text>
              <Divider />
              {
                facultyDetails.courses?.length > 0 &&
                <TableContainer>
                  <Table>
                    <Thead>
                      <Tr>
                        <Th>Course ID</Th>
                        <Th>Course Name</Th>
                        <Th>Semester</Th>
                      </Tr>
                    </Thead>
                    <Tbody fontSize={'14px'} >
                      {
                        facultyDetails.courses?.map((item) => (
                          <Tr>
                            <Td>{item.course_id}</Td>
                            <Td>{item.name}</Td>
                            <Td>{convertToSemesterString(item.semester) + " sem"}</Td>
                          </Tr>
                        ))
                      }
                    </Tbody>
                  </Table>
                </TableContainer>
              }
            </Box>


            <Box w={'full'} bg={'white'} rounded={16} boxShadow={'sm'} id='education-section'>
              <Text p={4} fontWeight={'bold'} fontSize={'lg'}>Education</Text>
              <Divider />
              {
                facultyDetails.education?.length > 0 &&
                <TableContainer>

                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Degree</Th>
                        <Th>Institution</Th>
                        <Th>Year</Th>
                      </Tr>
                    </Thead>
                    <Tbody fontSize={'14px'}>
                      {facultyDetails.education?.map((item) => (
                        <Tr key={item.education_id}>
                          <Td>{item.degree}</Td>
                          <Td>{item.institution}</Td>
                          <Td>{item.graduation_year}</Td>

                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              }
            </Box>

            <Box w={'full'} bg={'white'} rounded={16} boxShadow={'sm'} id='researchs-section'>
              <Text p={4} fontWeight={'bold'} fontSize={'lg'}>Researchs</Text>
              <Divider />
              {
                facultyDetails.research?.length > 0 &&
                <VStack w={'full'} rounded={16} bg={'white'} p={4} gap={6}>
                  {
                    facultyDetails.research?.map((item) => (
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
                        </Flex>
                      </>
                    ))
                  }
                </VStack>
              }
            </Box>


            <Box w={'full'} bg={'white'} rounded={16} boxShadow={'sm'} id='projects-section'>
              <Text p={4} fontWeight={'bold'} fontSize={'lg'}>Projects</Text>
              <Divider />
              {
                facultyDetails.projects?.length > 0 &&
                <VStack w={'full'} rounded={16} bg={'white'} p={4} gap={6}>
                  {
                    facultyDetails.projects?.map((item) => (
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
                        </Flex>
                      </>
                    ))
                  }
                </VStack>
              }
            </Box>


          </Stack>
        </Flex>
      </Box>
    </>
  )
}

export default FacultyDetails