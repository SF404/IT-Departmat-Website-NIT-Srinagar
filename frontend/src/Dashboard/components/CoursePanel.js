import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Badge, Box, Button, DarkMode, Divider, Flex, FormControl, FormLabel, HStack, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Text, Textarea, VStack, flexbox, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import PlaceHolder from './PlaceHolder'
import { FaCircleInfo, FaDownload, FaTrash } from 'react-icons/fa6'
import axios from 'axios';

function CoursePanel({ selectedCourse, notes, assignments, fetchNotes, fetchAssignmnets }) {

    const { isOpen: openDeleteAlert, onOpen: showDeleteAlert, onClose: closeDeleteAlert, } = useDisclosure();
    const { isOpen: openNotesModel, onOpen: addNotes, onClose: closeNotesModel, } = useDisclosure();
    const { isOpen: openAssignmentModel, onOpen: addAssignment, onClose: closeAssignmentModel, } = useDisclosure();
    const { isOpen: openAssignmentInfoModel, onOpen: openAssignmentInfo, onClose: closeAssignmentInfoModel, } = useDisclosure();
    const [deleteInfo, setDeleteInfo] = useState({ name: "", id: "", });
    const [assignmetInfo, setAssignmentInfo] = useState({});
    const cancelRef = useRef();
    const toast = useToast();
    const [assignmnetFormData, setAssignmentFormData] = useState({
        title: "", description: "", validity: "", file: "",
    });

    const [notesFormData, setNotesFormData] = useState({
        title: "", file: "",
    });

    const handleNotesFormChange = (e) => {
        const { name, value, type } = e.target;
        const updatedFormData = { ...notesFormData };
        if (type === "file" && e.target.files.length > 0) {
            const file = e.target.files[0];
            updatedFormData[name] = file;
        } else {
            updatedFormData[name] = value;
        }
        setNotesFormData(updatedFormData);
    };

    const handleAssignmentFormChange = (e) => {
        const { name, value, type } = e.target;
        const updatedFormData = { ...assignmnetFormData };
        if (type === "file" && e.target.files.length > 0) {
            const file = e.target.files[0];
            updatedFormData[name] = file;
        } else {
            updatedFormData[name] = value;
        }
        setAssignmentFormData(updatedFormData);
    };

    const handleNotesSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const formData = new FormData();
        formData.append("title", notesFormData.title);
        formData.append("file", notesFormData.file);
        formData.append("cid", selectedCourse);
        console.log(selectedCourse);
        console.log(notesFormData.file);
        console.log(formData);
        try {
            const response = await axios.post(
                `/api/uploadfiles/?type=notes&cid=${selectedCourse}`,
                formData,
                get_token()
            );
            // openNotesModel=false;
            closeNotesModel();
            await fetchNotes();
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

    const handleAssignmentSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const formData = new FormData();
        formData.append("title", assignmnetFormData.title);
        formData.append("file", assignmnetFormData.file);
        formData.append("description", assignmnetFormData.description);
        formData.append("validity", assignmnetFormData.validity);
        formData.append("cid", selectedCourse);
        try {
            const response = await axios.post(`/api/uploadfiles/?type=assignment&cid=${selectedCourse}`, formData, get_token());
            closeAssignmentModel();
            await fetchAssignmnets();
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


    function get_token() {
        return {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
            },
        };
    }
    const download_notes = async (nid) => {
        try {
            const response = await axios.post(`/api/filedownload/?type=notes&id=${nid}`, { responseType: "blob" });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "notes.pdf");
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading notes:", error);
        }
    };

    const download_assignment = async (aid) => {
        try {
            const response = await axios.post(`/api/filedownload/?type=assignment&id=${aid}`, { responseType: "blob" });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "assignment.pdf");
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading notes:", error);
        }
    };

    const handleDelete = async (delete_id) => {
        console.log(delete_id);
        try {
            const response = await axios.post(`/api/filesdelete/`, delete_id, get_token());
            closeDeleteAlert();
            if (response.status === 204) {
                await fetchAssignmnets();
                await fetchNotes();
                console.log("Successfully deleted");
            }
        } catch (error) {
            console.error("File Cannot be deleted", error);
        }
    };
    return (
        <Box flexGrow={1}>
            {
                selectedCourse ? (
                    <Flex p={3} gap={3} flexFlow={1} flexWrap={'wrap'}>
                        <Box minW={'300px'} flexGrow={1} bg={'white'} height={'fit-content'} borderRadius={8} boxShadow={'0 2px 8px rgba(0,0,0,0.05)'}>
                            <Box bg={'#d8dcf0'} p={4} borderTopRadius={8} fontWeight={'semibold'} color={'#192e59'}>Notes Material </Box>
                            <VStack p={4}>
                                {
                                    (notes && notes.length !== 0) ? (
                                        notes.map((item, index) => (
                                            <>
                                                <HStack justifyContent={'space-between'} w={'full'} overflow={'hidden'} key={index}>
                                                    <Text>{item.name}</Text>
                                                    <Box display={'flex'} gap={2} >
                                                        <IconButton isRound={true} variant="outline" aria-label="Done" size={"xs"} color={"blackAlpha.800"} icon={<FaDownload />}
                                                            onClick={(e) => { e.stopPropagation(); download_notes(item.id); }}
                                                        />
                                                        <IconButton isRound={true} variant="outline" aria-label="Done" icon={<FaTrash />} size={"xs"} color={"blackAlpha.800"}
                                                            onClick={(e) => { e.stopPropagation(); setDeleteInfo({ name: item.name, id: { notes_id: item.id }, }); showDeleteAlert(); }}
                                                        />
                                                    </Box>
                                                </HStack>
                                                <Divider borderColor={"blackAlpha.300"} />
                                            </>
                                        ))
                                    ) : (
                                        <>
                                            <Text>Empty...</Text>
                                            <Divider borderColor={"blackAlpha.300"} />
                                        </>
                                    )
                                }
                            </VStack>
                            <Box w={'full'} textAlign={'right'}>
                                <Button m={4} colorScheme='teal' onClick={addNotes}> Add </Button>
                            </Box>
                        </Box>
                        <Box minW={'300px'} flexGrow={1} bg={'white'} height={'fit-content'} borderRadius={8} boxShadow={'0 2px 8px rgba(0,0,0,0.05)'}>
                            <Box bg={'#d8dcf0'} p={4} borderTopRadius={8} fontWeight={'semibold'} color={'#192e59'}>Assignmets</Box>
                            <VStack p={4} >
                                {
                                    (assignments && assignments.length !== 0) ? (
                                        assignments.map((item, index) => (
                                            <>
                                                <HStack justifyContent={'space-between'} w={'full'} key={index}>
                                                    <Text>{item.name} </Text>
                                                    <Box display={'flex'} gap={2} >
                                                        <Badge px={2} colorScheme='yellow' display={'flex'} alignItems={'center'}>Due: {item.validity}</Badge>
                                                        <IconButton isRound={true} variant="outline" aria-label="Done" size={"xs"} color={"blackAlpha.800"} icon={<FaDownload />}
                                                            onClick={() => { download_assignment(item.id); }}
                                                        />
                                                        <IconButton isRound={true} variant="outline" aria-label="Done" icon={<FaTrash />} size={"xs"} color={"blackAlpha.800"}
                                                            onClick={() => {
                                                                setDeleteInfo({ name: item.name, id: { assignment_id: item.id }, });
                                                                showDeleteAlert();
                                                            }}
                                                        />
                                                        <IconButton isRound={true} variant="outline" aria-label="Done" icon={<FaCircleInfo />} size={"xs"} color={"blackAlpha.800"}
                                                            onClick={() => {
                                                                setAssignmentInfo({ name: item.name, description: item.description, deadline: item.deadline });
                                                                openAssignmentInfo();
                                                            }}
                                                        />
                                                    </Box>
                                                </HStack>
                                                <Divider borderColor={"blackAlpha.300"} />
                                            </>
                                        ))
                                    ) : (
                                        <>
                                            <Text>Empty...</Text>
                                            <Divider borderColor={"blackAlpha.300"} />
                                        </>
                                    )
                                }
                            </VStack>
                            <Box w={'full'} textAlign={'right'}>
                                <Button m={4} colorScheme='teal' onClick={addAssignment}> Add </Button>
                            </Box>
                        </Box>

                    </Flex>
                ) : (<PlaceHolder />)
            }




            <AlertDialog motionPreset="slideInBottom" leastDestructiveRef={cancelRef} onClose={closeDeleteAlert} isOpen={openDeleteAlert} isCentered >
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader>Confirm Delete?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure you want to delete "{deleteInfo.name}" ?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={closeDeleteAlert}>
                            No
                        </Button>
                        <Button
                            colorScheme="red"
                            ml={3}
                            onClick={() => handleDelete(deleteInfo.id)}
                        >
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>



            <Modal closeOnOverlayClick={false} isOpen={openNotesModel} onClose={closeNotesModel}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Study Material</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleNotesSubmit} encType="multipart/form-data"  >
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input type="text" name="title" value={notesFormData.title} onChange={handleNotesFormChange} required placeholder="Enter title" />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel bg={"#e5e5e5"} p={3} borderRadius={"10px"} m={0} > Upload Notes</FormLabel>
                                <Input type="file" name="file" onChange={handleNotesFormChange} display={"none"} required />
                            </FormControl>
                            <Divider my={4} />
                            <Button type="submit" colorScheme="blue" w={"full"}>Upload</Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>





            <Modal closeOnOverlayClick={false} isOpen={openAssignmentModel} onClose={closeAssignmentModel}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Assignment</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleAssignmentSubmit}>
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input type="text" name="title" value={assignmnetFormData.title} onChange={handleAssignmentFormChange} placeholder="Enter title" required />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Textarea name="description" value={assignmnetFormData.description} onChange={handleAssignmentFormChange} placeholder="Enter description" />
                            </FormControl>

                            <FormControl>
                                <FormLabel>validity</FormLabel>
                                <Input type="text" name="validity" value={assignmnetFormData.validity} onChange={handleAssignmentFormChange} placeholder="Submission" required />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel bg={"#e5e5e5"} p={3} borderRadius={"10px"} m={0} > Upload File {/* <DownloadIcon transform="rotate(180deg)"/> */}  </FormLabel>
                                <Input type="file" name="file" onChange={handleAssignmentFormChange} display={"none"} required />
                            </FormControl>
                            <Button type="submit" colorScheme="facebook" mt={4} w={"full"} >Submit</Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>




            <Modal closeOnOverlayClick={false} isOpen={openAssignmentInfoModel} onClose={closeAssignmentInfoModel} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{assignmetInfo.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Box>{assignmetInfo.description}</Box>
                    </ModalBody>
                </ModalContent>
            </Modal>




        </Box>
    )
}

export default CoursePanel