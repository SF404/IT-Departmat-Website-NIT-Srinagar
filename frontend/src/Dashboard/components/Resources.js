import { useDisclosure, Modal, Link, Box, Tab, TabList, TabPanel, TabPanels, Tabs, extendTheme, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Divider, VStack, HStack, Spinner, Button, Text, IconButton, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter, FormControl, FormLabel, Input, TableContainer, Table, Thead, Tr, Th, Td, Tbody } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { FaTrash } from "react-icons/fa6";
import { PiPlus } from "react-icons/pi";
import { useToast } from '@chakra-ui/react'


function Resources({ user }) {
    console.log(user)
    const toast = useToast()
    const cancelRef = useRef();
    const [research, setResearch] = useState(null)
    const [patent, setPatent] = useState(null)
    const [project, setProject] = useState(null)
    const [education, setEducation] = useState(null)
    const [researchformData, setResearchFormData] = useState({
        research_title: '',
        research_date: '',
        research_authors: '',
        research_url: ''
    });
    const [patentformData, setPatentFormData] = useState({
        patent_patent: '',
        patent_date: '',
        patent_number: '',
    });
    const [projectformData, setProjectFormData] = useState({
        project_title: '',
        project_link: '',
    });
    const [educationformData, setEducationFormData] = useState({
        education_degree: '',
        education_college: '',
        education_year: '',
    });
    const [deleteInfo, setDeleteInfo] = useState({ name: "", id: "", type: "" });
    const {
        isOpen: openResearchModel,
        onOpen: addResearch,
        onClose: closeResearchModel,
    } = useDisclosure();
    const {
        isOpen: openProjectModel,
        onOpen: addProject,
        onClose: closeProjectModel,
    } = useDisclosure();
    const {
        isOpen: openPatentModel,
        onOpen: addPatent,
        onClose: closePatentModel,
    } = useDisclosure();
    const {
        isOpen: openEducationModel,
        onOpen: addEducation,
        onClose: closeEducationModel,
    } = useDisclosure();
    const {
        isOpen: openDeleteAlert,
        onOpen: showDeleteAlert,
        onClose: closeDeleteAlert,
    } = useDisclosure();



    const fetchResearch = async () => {
        try {
            const response = await axios.get(
                `/api/public/teacherdataview/?type=research&email=${user.email}`
            );
            setResearch(response.data);
            console.log("research", response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchPatent = async () => {
        try {
            const response = await axios.get(
                `/api/public/teacherdataview/?type=patent&email=${user.email}`
            );
            setPatent(response.data);
            console.log("patent", response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchProject = async () => {
        try {
            const response = await axios.get(
                `/api/public/teacherdataview/?type=project&email=${user.email}`
            );
            setProject(response.data);
            console.log("project", response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchEducation = async () => {
        try {
            const response = await axios.get(
                `/api/public/teacherdataview/?type=teachereducation&email=${user.email}`
            );
            setEducation(response.data);
            console.log("education", response.data);
        } catch (error) {
            console.log(error);
        }
    };
    function get_token() {
        return {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
                Accept: "application/json",
            },
        };
    }
    const researchInputChange = (e) => {
        const { name, value } = e.target;
        setResearchFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const patentInputChange = (e) => {
        const { name, value } = e.target;
        setPatentFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const projectInputChange = (e) => {
        const { name, value } = e.target;
        setProjectFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const educationInputChange = (e) => {
        const { name, value } = e.target;
        setEducationFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const researchSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(researchformData);
            if (researchformData.research_title == "" || researchformData.research_authors == "" || researchformData.research_date == "") return;
            const response = await axios.put(`/api/profileupdate/${user.id}/?email=${user.email}`,
                researchformData,
                get_token()
            );
            if (response) fetchResearch();
            console.log(response.data);
            closeResearchModel();
        } catch (error) {
            console.log(error);
        }
    };
    const patentSubmit = async (e) => {
        try {
            e.preventDefault();
            if (patentformData.patent_patent == "" || patentformData.patent_date == "" || patentformData.patent_number == "") return;
            const response = await axios.put(`/api/profileupdate/${user.id}/?email=${user.email}`,
                patentformData,
                get_token()
            );
            if (response) fetchPatent();
            console.log(response.data);
            closePatentModel();
        } catch (error) {
            console.log(error);
        }
        closePatentModel();
    };
    const projectSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(projectformData);
            if (projectformData.project_title == "" || projectformData.project_link == "") return;
            const response = await axios.put(`/api/profileupdate/${user.id}/?email=${user.email}`,
                projectformData,
                get_token()
            );
            if (response) fetchProject();
            console.log(response.data);
            closeProjectModel();
        } catch (error) {
            console.log(error);
        }
        closeProjectModel();
    };
    const educationSubmit = async (e) => {
        try {
            e.preventDefault();
            if (educationformData.education_degree == '' ||
                educationformData.education_college == '' ||
                educationformData.education_year == '') return;
            const response = await axios.put(`/api/profileupdate/${user.id}/?email=${user.email}`,
                educationformData,
                get_token()
            );
            if (response) fetchEducation();
            closeEducationModel();
        } catch (error) {
            console.log(error);
        }
        closeEducationModel();
    };

    const handleDelete = async (delete_id, type) => {
        console.log(delete_id);
        try {
            const response = await axios.delete(`/api/delete/${delete_id}/?type=${type}`, get_token());
            closeDeleteAlert();
            if (response.status === 204) {
                switch (type) {
                    case 'research':
                        await fetchResearch();
                        break;
                    case 'patent':
                        await fetchPatent();
                        break;
                    case 'project':
                        await fetchProject();
                        break;
                    case 'teachereducation':
                        await fetchEducation();
                        break;
                }
                console.log("Successfully deleted");
            }
        } catch (error) {
            console.error("File Cannot be deleted", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchResearch();
                await fetchPatent();
                await fetchEducation();
                await fetchProject();
            } catch (error) {
                toast({
                    varient:'left-accent',
                    title: 'Something went Wrong',
                    description: error.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                  })
            }
        }
        return () => fetchData();
    }, []);
    return (
        <Box w={'full'} minH={'80vh'} pb={'100px'}>

            <Tabs align="center" variant="soft-rounded" colorScheme="facebook" w={'full'} p={4}>
                <TabList
                    textAlign={"left"}
                    justifyContent={"flex-start"}
                    my={"0.5em"}
                >
                    <Tab>Researchs</Tab>
                    <Tab>Patents</Tab>
                    <Tab>Projects</Tab>
                    <Tab>Educations</Tab>
                </TabList>
                <Divider />
                <TabPanels p={0} bg={"white"}>
                    <TabPanel marginTop={4} p={0}>
                        <TableContainer>
                            <Table variant={"simple"} colorScheme="facebook">
                                <Thead bg={"#d8dcf0"}>
                                    <Tr>
                                        <Th>Journal</Th>
                                        <Th>Authors</Th>
                                        <Th>Action</Th>
                                    </Tr>
                                </Thead>
                                <Tbody fontSize={"sm"}>
                                    {research && research.length !== 0 ? (
                                        research.map((item, index) => (
                                            <Tr key={index}>
                                                <Td>{item.title}</Td>
                                                <Td>{item.authors}</Td>
                                                <Td><IconButton
                                                    isRound={true}
                                                    variant="outline"
                                                    aria-label="Done"
                                                    icon={<FaTrash />}
                                                    size={"xs"}
                                                    color={"blackAlpha.800"}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setDeleteInfo({
                                                            name: item.title,
                                                            id: item.id,
                                                            type: "research"
                                                        });
                                                        showDeleteAlert();
                                                    }}
                                                /></Td>
                                            </Tr>
                                        ))
                                    ) : (
                                        <>
                                            <Text>Empty...</Text>
                                            <Divider borderColor={"blackAlpha.300"} />
                                        </>
                                    )}
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Box w={"full"} textAlign={"right"} >
                            <Button rounded={'full'} mr={4} mb={4} marginTop={4} colorScheme={'blue'} p={2} onClick={addResearch}>
                                <PiPlus />
                            </Button>
                        </Box>
                    </TabPanel>
                    <TabPanel marginTop={4} p={0}>
                        <TableContainer>
                            <Table variant={"simple"} colorScheme="facebook">
                                <Thead bg={"#d8dcf0"}>
                                    <Tr>
                                        <Th>Patent</Th>
                                        <Th>Number</Th>
                                        <Th>Action</Th>
                                    </Tr>
                                </Thead>
                                <Tbody fontSize={"sm"}>{patent && patent.length !== 0 ? (
                                    patent.map((item, index) => (
                                        <>
                                            <Tr>
                                                <Td>{item.title}</Td>
                                                <Td>{item.number}</Td>
                                                <Td><IconButton
                                                    isRound={true}
                                                    variant="outline"
                                                    aria-label="Done"
                                                    icon={<FaTrash />}
                                                    size={"xs"}
                                                    color={"blackAlpha.800"}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setDeleteInfo({
                                                            name: item.title,
                                                            id: item.id,
                                                            type: "patent"
                                                        });
                                                        showDeleteAlert();
                                                    }}
                                                /></Td>
                                            </Tr>
                                        </>
                                    ))
                                ) : (
                                    <>
                                        <Text>Empty...</Text>
                                        <Divider borderColor={"blackAlpha.300"} />
                                    </>
                                )}
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Box w={"full"} textAlign={"right"} >
                            <Button rounded={'full'} mr={4} mb={4} marginTop={4} colorScheme={'blue'} p={2} onClick={addPatent}>
                                <PiPlus />
                            </Button>
                        </Box>
                    </TabPanel>
                    <TabPanel marginTop={4} p={0}>
                        <TableContainer>
                            <Table variant={"simple"} colorScheme="facebook">
                                <Thead bg={"#d8dcf0"}>
                                    <Tr>
                                        <Th>Title</Th>
                                        <Th>URL</Th>
                                        <Th>Action</Th>
                                    </Tr>
                                </Thead>
                                <Tbody fontSize={"sm"}>{project && project.length !== 0 ? (
                                    project.map((item, index) => (
                                        <>
                                            <Tr>
                                                <Td>{item.title}</Td>
                                                <Td><Link to={item.link}>url</Link></Td>
                                                <Td><IconButton
                                                    isRound={true}
                                                    variant="outline"
                                                    aria-label="Done"
                                                    icon={<FaTrash />}
                                                    size={"xs"}
                                                    color={"blackAlpha.800"}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setDeleteInfo({
                                                            name: item.title,
                                                            id: item.id,
                                                            type: "project"
                                                        });
                                                        showDeleteAlert();
                                                    }}
                                                /></Td>
                                            </Tr>
                                        </>
                                    ))
                                ) : (
                                    <>
                                        <Text>Empty...</Text>
                                        <Divider borderColor={"blackAlpha.300"} />
                                    </>
                                )}
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Box w={"full"} textAlign={"right"} >
                            <Button rounded={'full'} mr={4} mb={4} marginTop={4} colorScheme={'blue'} p={2} onClick={addProject}>
                                <PiPlus />
                            </Button>
                        </Box>
                    </TabPanel>
                    <TabPanel marginTop={4} p={0}>
                        <TableContainer>
                            <Table variant={"simple"} colorScheme="facebook">
                                <Thead bg={"#d8dcf0"}>
                                    <Tr>
                                        <Th>Degree</Th>
                                        <Th>College</Th>
                                        <Th>Year</Th>
                                        <Th>Action</Th>
                                    </Tr>
                                </Thead>
                                <Tbody fontSize={"sm"}>{education && education.length !== 0 ? (
                                    education.map((item, index) => (
                                        <>
                                            <Tr>
                                                <Td>{item.degree}</Td>
                                                <Td>{item.college}</Td>
                                                <Td>{item.year}</Td>
                                                <Td><IconButton
                                                    isRound={true}
                                                    variant="outline"
                                                    aria-label="Done"
                                                    icon={<FaTrash />}
                                                    size={"xs"}
                                                    color={"blackAlpha.800"}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setDeleteInfo({
                                                            name: item.degree,
                                                            id: item.id,
                                                            type: "teachereducation"
                                                        });
                                                        showDeleteAlert();
                                                    }}
                                                /></Td>
                                            </Tr>
                                        </>
                                    ))
                                ) : (
                                    <>
                                        <Text>Empty...</Text>
                                        <Divider borderColor={"blackAlpha.300"} />
                                    </>
                                )}
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Box w={"full"} textAlign={"right"}>
                            <Button rounded={'full'} mr={4} mb={4} marginTop={4} colorScheme={'blue'} p={2} onClick={addEducation}>
                                <PiPlus />
                            </Button>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            {/* Model fo research  */}
            <Modal
                closeOnOverlayClick={false}
                isCentered
                isOpen={openResearchModel}
                size={"3xl"}
                onClose={closeResearchModel}
            >
                <ModalOverlay />
                <ModalContent m={4}>
                    <ModalHeader>Add Research</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} fontSize={"12px"}>
                        <form
                            onSubmit={researchSubmit}
                            encType="multipart/form-data"
                            method="POST"
                        >
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input
                                    type="text"
                                    name="research_title"
                                    onChange={researchInputChange}
                                    required
                                    placeholder="Title"
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Authors</FormLabel>
                                <Input
                                    type="text"
                                    name="research_authors"
                                    onChange={researchInputChange}
                                    required
                                    placeholder="Jason, Chris "
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel> URL {"(if Any)"}</FormLabel>
                                <Input
                                    type="url"
                                    name="research_url"
                                    color={"blue"}
                                    onChange={researchInputChange}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel> Date</FormLabel>
                                <Input
                                    type="text"
                                    name="research_date"
                                    placeholder="2010"
                                    color={"blue"}
                                    onChange={researchInputChange}
                                    required
                                />
                            </FormControl>
                            <Divider my={4} />
                            <Button type="submit" colorScheme="facebook" w={"full"}>
                                Done
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
            {/* model for patent  */}
            <Modal
                closeOnOverlayClick={false}
                isCentered
                isOpen={openPatentModel}
                size={"3xl"}
                onClose={closePatentModel}
            >
                <ModalOverlay />
                <ModalContent m={4}>
                    <ModalHeader>Add Patent</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} fontSize={"12px"}>
                        <form
                            onSubmit={patentSubmit}
                            encType="multipart/form-data"
                            method="POST"
                        >
                            <FormControl>
                                <FormLabel>Patent</FormLabel>
                                <Input
                                    type="text"
                                    name="patent_patent"
                                    onChange={patentInputChange}
                                    required
                                    placeholder="Patent"
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel> Number</FormLabel>
                                <Input
                                    type="number"
                                    name="patent_number"
                                    color={"blue"}
                                    required
                                    onChange={patentInputChange}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel> Date</FormLabel>
                                <Input
                                    type="text"
                                    name="patent_date"
                                    placeholder=" 18 Feb 2020"
                                    color={"blue"}
                                    onChange={patentInputChange}
                                    required
                                />
                            </FormControl>
                            <Divider my={4} />
                            <Button type="submit" colorScheme="facebook" w={"full"}>
                                Done
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
            {/* model for project  */}
            <Modal
                closeOnOverlayClick={false}
                isCentered
                isOpen={openProjectModel}
                size={"3xl"}
                onClose={closeProjectModel}
            >
                <ModalOverlay />
                <ModalContent m={4}>
                    <ModalHeader>Add Project</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} fontSize={"12px"}>
                        <form
                            onSubmit={projectSubmit}
                            encType="multipart/form-data"
                            method="POST"
                        >
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input
                                    type="text"
                                    name="project_title"
                                    onChange={projectInputChange}
                                    required
                                    placeholder="Title"
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel> URL</FormLabel>
                                <Input
                                    type="url"
                                    name="project_link"
                                    color={"blue"}
                                    required
                                    onChange={projectInputChange}
                                />
                            </FormControl>
                            <Divider my={4} />
                            <Button type="submit" colorScheme="facebook" w={"full"}>
                                Done
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
            {/* model for education */}
            <Modal
                closeOnOverlayClick={false}
                isCentered
                isOpen={openEducationModel}
                size={"3xl"}
                onClose={closeEducationModel}
            >
                <ModalOverlay />
                <ModalContent m={4}>
                    <ModalHeader>Add Education</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} fontSize={"12px"}>
                        <form
                            onSubmit={educationSubmit}
                            encType="multipart/form-data"
                            method="POST"
                        >
                            <FormControl>
                                <FormLabel>Degree</FormLabel>
                                <Input
                                    type="text"
                                    name="education_degree"
                                    onChange={educationInputChange}
                                    required
                                    placeholder="Degree"
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel> College</FormLabel>
                                <Input
                                    type="text"
                                    name="education_college"
                                    color={"blue"}
                                    placeholder="NIT Srinagar"
                                    onChange={educationInputChange}
                                    required
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel> Date</FormLabel>
                                <Input
                                    type="text"
                                    name="education_year"
                                    placeholder=" 2015-19"
                                    color={"blue"}
                                    onChange={educationInputChange}
                                    required
                                />
                            </FormControl>
                            <Divider my={4} />
                            <Button type="submit" colorScheme="facebook" w={"full"}>
                                Done
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={closeDeleteAlert}
                isOpen={openDeleteAlert}
                isCentered
            >
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader>Confirm Delete?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure you want to delete "{deleteInfo.name}" "{deleteInfo.type}" ?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={closeDeleteAlert}>
                            No
                        </Button>
                        <Button
                            colorScheme="red"
                            ml={3}
                            onClick={() => handleDelete(deleteInfo.id, deleteInfo.type)}
                        >
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Box>
    );
}



export default Resources