import { EmailIcon, ExternalLinkIcon, PhoneIcon } from '@chakra-ui/icons'
import { Avatar, Badge, Box, Center, DarkMode, Divider, Heading, Icon, Image, ListItem, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tooltip, Tr, UnorderedList, VStack, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function FacultyDetails() {
    const { id } = useParams()
    console.log(id)
    const [FacultyDetails, setFacultyDetails] = useState(null)
    async function fetchfacultyDetails() {
        const response = await axios.get(`/api/public/getteacher/?Id=${id}`)
        console.log(response.data[0])
        setFacultyDetails(response.data[0])
    }
    useEffect(() => {
        fetchfacultyDetails();
    }, [])

    const toast = useToast();
    const handleClick = async (data) => {
        try {
            await navigator.clipboard.writeText(data);
            toast({
                title: "copied!",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        } catch (err) {
            console.error("Unable to copy to clipboard", err);
            toast({
                title: "Failed to copy",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    };




    // data 
    const [education, setEducation] = useState([
        {
            "degree": "Bachelor of Science in Computer Science",
            "school": "Example University",
            "location": "Cityville, State",
            "graduation_year": 2020
        },
        {
            "degree": "Master of Science in Data Science",
            "school": "Data Science Institute",
            "location": "Techtown, State",
            "graduation_year": 2022
        }
    ])

    const [researchs, setResearchs] = useState(
        [
            {
                "date": "FEB 2019",
                "authors": "Rajib Ghosh, Janibul Bashir, Smruti R. Sarangi, and Anuj Dhawan",
                "url": '',
                "title": "SpliESR: Tunable Power Splitter Based on an Electro-Optic Slotted Ring Resonator"
            },
            {
                "date": "JUL 2017",
                "authors": "Eldhose Peter, Janibul Bashir, Akriti Bagaria, and Smruti R. Sarangi",
                "url": '',
                "title": "Optical Overlay NUCA : A high-speed substrate for shared L2 caches"
            },
            {
                "date": "JUL 2020",
                "authors": "Janibul Bashir and Smruti R. Sarangi",
                "url": '',
                "title": "GPUOPT: Power Efficient Photonic Network-on-Chip for a Scalable GPU"
            },
            {
                "date": "JUL 2021",
                "authors": "Omais Shafi and Janibul Bashir",
                "url": '',
                "title": "FreqCounter: Efficient cacheability of encryption and integrity tree counters in secure processors"
            },
            {
                "date": "JUN 2021",
                "authors": "Ishfaq Hussain and Janibul Bashir",
                "url": '',
                "title": "Dynamic MTU: A smaller path MTU size technique to reduce packet drops in IPv6"
            },
            {
                "date": "NOV 2018",
                "authors": "Janibul Bashir, Eldhose Peter, and Smruti R. Sarangi",
                "url": '',
                "title": "A Survey of On-chip Optical Interconnects"
            },
            {
                "date": "NOV 2018",
                "authors": "Janibul Bashir, Eldhose Peter, and Smruti R. Sarangi",
                "url": '',
                "title": "BigBus: A Scalable Optical Interconnect"
            },
            {
                "date": "OCT 2019",
                "authors": "Janibul Bashir, Smruti R. Sarangi",
                "url": '',
                "title": "Predict, Share, and Recycle your Way to Low Power Nanophotonic Networks"
            }
        ]
    )


    const [patents, setPatents] = useState(
        [
            {
                "patent": "Process and System for Using Unused Optical Power in Photonic On-Chip Networks",
                "date": "18/02/2020",
                "number": "202011006878"
            },
            {
                "patent": "A Graphics Processor Unit (GPU) System with Photonics based On-chip Network",
                "date": "November 19th, 2019",
                "number": "201911047168"
            }
        ]
    )


    return (
        <>
            {
                FacultyDetails ? (
                    <Center>
                        <VStack w={{ base: 'full', md: '80%' }} spacing={3} p={4} className='family-1'>
                            <Stack direction={{ base: "column", md: "row" }} w={"full"} bg={"white"} p={4} borderRadius={'1em'} boxShadow={'rgba(0, 0, 0, 0.05) 0px 1px 12px;'} mt={6}>
                                <Box>
                                    <Image borderRadius={'0.5em'} name={FacultyDetails.name} src={FacultyDetails.profile_photo} minW={'200px'} minH={'200px'} maxW={'200px'}></Image>
                                    <Box mt={4} fontSize={'0.9em'}>
                                        <Tooltip hasArrow label='copy' bg='gray.300' color='black' placement="right-end">
                                            <Text cursor={"pointer"} width={"fit-content"} onClick={() => handleClick(`${FacultyDetails.phone}`)}>
                                                <Icon as={PhoneIcon} mr={2} color="gray.600" />{FacultyDetails.phone}
                                            </Text>
                                        </Tooltip>

                                        <Tooltip hasArrow label='copy' bg='gray.300' color='black' placement="right-end">
                                            <Text cursor={"pointer"} width={"fit-content"} onClick={() => handleClick(`${FacultyDetails.email}`)}>
                                                <Icon as={EmailIcon} mr={2} color="gray.600" />{FacultyDetails.email}
                                            </Text>
                                        </Tooltip>

                                        <Text as={Link} cursor={"pointer"} _hover={{ color: 'darkblue', textDecoration: 'underline' }} to={FacultyDetails.website || '/faculty/' + FacultyDetails.teacher_id} target="_blank">
                                            <Icon as={ExternalLinkIcon} mr={2} color="gray.600" />{FacultyDetails.website || "website"}
                                        </Text>
                                    </Box>

                                </Box>
                                <Box h={"full"} ml={4} >
                                    <Heading fontSize={'1.5em'} color={"darkblue"}>{FacultyDetails.name}</Heading>
                                    <Badge colorScheme="messenger" fontFamily={'body'}>{FacultyDetails.description}</Badge>
                                    <br />
                                    <Badge>{FacultyDetails.education || 'PHD'}</Badge>
                                    <Text fontSize={'14px'}>{FacultyDetails.research_field}</Text>
                                    <Box mt={4} >
                                        <Heading size={'sm'}>ABOUT</Heading>
                                        <Box fontSize={'14px'}>
                                            <Text>I am working as Assistant Professor at the Department of Information Technology, National Institute of Technology Srinagar. My research interests include:</Text>
                                            <UnorderedList>
                                                <ListItem>Efficient on-chip communication.</ListItem>
                                                <ListItem>On-chip security.</ListItem>
                                                <ListItem>Parallel and intelligent architectures.</ListItem>
                                                <ListItem>Emerging technologies such as photonic on-chip networks, neuromorphic chips etc.</ListItem>
                                                <ListItem>Machine Learning </ListItem>
                                            </UnorderedList>
                                            <Text>
                                            Currently I direct the GAASH research group at NIT Srinagar which primary focuses on system and architecture research. Our research group investigates the effect of new architectural features on the performance of the system. We focus on reducing the power consumption without effecting the performance of the system.  Additionally, the group works on enhancing the security of current complex hardware structures. We also work in the field of emerging on-chip technologies such as photonic on-chip networks, and wireless on-chip networks.
                                            </Text>
                                        </Box>
                                    </Box>

                                </Box>
                            </Stack>

                            {education && <Stack direction={'column'} w={"full"} bg={"white"} p={4} borderRadius={'1em'} boxShadow={'rgba(0, 0, 0, 0.05) 0px 1px 12px;'}>
                                <Heading size={'md'} color={'darkblue'}>Education</Heading>
                                <Box>
                                    <TableContainer >
                                        <Table variant='simple' colorScheme='facebook'>
                                            <Thead bg={'#d8dcf0'}>
                                                <Tr>
                                                    <Th>Degree</Th>
                                                    <Th>School</Th>
                                                    <Th>Location</Th>
                                                    <Th>Graduation</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody fontSize={'sm'}>
                                                {
                                                    education.map((item, index) => (
                                                        <Tr>
                                                            <Td>{item.degree}</Td>
                                                            <Td>{item.school}</Td>
                                                            <Td>{item.location}</Td>
                                                            <Td>{item.graduation_year}</Td>
                                                        </Tr>
                                                    ))
                                                }
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </Box>

                            </Stack>}

                            {researchs && <Stack direction={'column'} w={"full"} bg={"white"} p={4} borderRadius={'1em'} boxShadow={'rgba(0, 0, 0, 0.05) 0px 1px 12px;'}>
                                <Heading size={'md'} color={'darkblue'}>Researchs</Heading>
                                <Box>
                                    <TableContainer>
                                        <Table variant={'simple'}>
                                            <Thead bg={'#d8dcf0'}>
                                                <Tr>
                                                    <Th>SNO.</Th>
                                                    <Th>Date</Th>
                                                    <Th>Journal</Th>
                                                    <Th>Authors</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody fontSize={'sm'}>
                                                {
                                                    researchs.sort((a, b) => {
                                                        const aDate = new Date(a.date);
                                                        const bDate = new Date(b.date);
                                                        return bDate - aDate;
                                                    }).map((item, index) => (
                                                        <Tr>
                                                            <Td>{index + 1}</Td>
                                                            <Td>{item.date}</Td>
                                                            <Td>{item.title}</Td>
                                                            <Td>{item.authors}</Td>
                                                        </Tr>

                                                    ))
                                                }
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </Box>

                            </Stack>}

                            <Stack direction={'column'} w={"full"} bg={"white"} p={4} borderRadius={'1em'} boxShadow={'rgba(0, 0, 0, 0.05) 0px 1px 12px;'}>
                                <Heading size={'md'} color={'darkblue'}>Patents</Heading>
                                <Box>
                                    <TableContainer>
                                        <Table colorScheme="facebook">
                                            <Thead bg={'#d8dcf0'}>
                                                <Tr>
                                                    <Th>Date</Th>
                                                    <Th>Patent</Th>
                                                    <Th>Number</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody fontSize={'sm'}>
                                                {
                                                    patents.map((item, index) => (
                                                        <Tr key={index}>
                                                            <Td>{item.date}</Td>
                                                            <Td>{item.patent}</Td>
                                                            <Td>{item.number}</Td>
                                                        </Tr>

                                                    ))
                                                }
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </Box>

                            </Stack>

                            <Stack direction={'column'} w={"full"} bg={"white"} p={4} borderRadius={'1em'} boxShadow={'rgba(0, 0, 0, 0.05) 0px 1px 12px;'}>
                                <Heading size={'md'} color={'darkblue'}>Projects</Heading> 
                                                

                            </Stack>

                        </VStack>
                    </Center>
                ) : (<Text>Not Found ...</Text>)
            }
        </>
    )
}

export default FacultyDetails