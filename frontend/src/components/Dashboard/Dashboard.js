import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Input,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Tag,
  Text,
  Textarea,
  UnorderedList,
  VStack,
  textDecoration,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import { FaDownload, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import "./Calendar.css";
import { DownloadIcon, DragHandleIcon } from "@chakra-ui/icons";
import ProfileModal from "../Modals/ProfileModal";
import DashboardPlaceholder from "../Placeholders/DashboardPlaceholder";

function Dashboard() {
  const navigate = useNavigate();
  // Form States
  const [assignmnetFormData, setAssignmentFormData] = useState({
    title: "",
    description: "",
    validity: "",
    file: "",
  });

  const [notesFormData, setNotesFormData] = useState({
    title: "",
    file: "",
  });
  const [deleteInfo, setDeleteInfo] = useState({
    name: "",
    id: "",
  });

  // Model Hooks
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: openDeleteAlert,
    onOpen: showDeleteAlert,
    onClose: closeDeleteAlert,
  } = useDisclosure();

  const {
    isOpen: openNotesModel,
    onOpen: addNotes,
    onClose: closeNotesModel,
  } = useDisclosure();
  const {
    isOpen: openAssignmentModel,
    onOpen: addAssignment,
    onClose: closeAssignmentModel,
  } = useDisclosure();
  // Hooks
  const toast = useToast();
  const cancelRef = React.useRef();
  // Page States
  const [user, setUser] = useState([]);
  let TokenA, TokenR;
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [assignment, setAssignment] = useState([]);
  const [notes, setNotes] = useState([]);
  const [Holidays, setHolidays] = useState(null);

  function get_token() {
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
      },
    };
  }
  useEffect(() => {
    const fetchData = async () => {
      TokenA = localStorage.getItem("TokenA");
      TokenR = localStorage.getItem("TokenR");
      if (!TokenA || !TokenR) {
        navigate("/login");
        return;
      }
      try {
        const body = {
          refresh_token: TokenR,
        };
        const new_token = await axios.post(
          `http://127.0.0.1:8000/api/auth/refresh-token/`,
          body,
          get_token()
        );
        console.log("Token Refreshed");
        const accessToken = new_token.data.access_token;
        const refreshToken = new_token.data.refresh_token;
        localStorage.setItem("TokenA", accessToken);
        localStorage.setItem("TokenR", refreshToken);
        const getUser = await axios.get(
          "http://localhost:8000/api/auth/getuser/",
          {
            params: {
              refresh_token: localStorage.getItem("TokenR"),
              access_token: localStorage.getItem("TokenA"),
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
            },
          }
        );
        setUser(getUser.data[0]);
        const response = await axios.get(
          "http://localhost:8000/api/courses/",
          {
            params: {
              sid: getUser.data[0].teacher_id,
            },
          },
          get_token()
        );
        console.log(response.data);
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/login");
      }
    };
    fetchData();
  }, []);

  // On Course Change Use_effect
  // On Course Change Use_effect
  const fetchData = async () => {
    console.log(selectedCourse);
    try {
      if (selectedCourse != null) {
        const assignment = await axios.get(
          `http://localhost:8000/api/showassignment/?cid=${selectedCourse}`
        );
        setAssignment(assignment.data);
        const notes = await axios.get(
          `http://localhost:8000/api/shownotes/?cid=${selectedCourse}`
        );
        setNotes(notes.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [selectedCourse]);

  const handleCourseSelect = (id) => {
    console.log(id);
    setSelectedCourse(id);
  };

  // Function for writing Notes form Data
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

  // Function for Handling Assignment Submit
  const handleAssignmentSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData();
    formData.append("title", assignmnetFormData.title);
    formData.append("file", assignmnetFormData.file);
    formData.append("description", assignmnetFormData.description);
    formData.append("validity", assignmnetFormData.validity);
    formData.append("cid", selectedCourse);
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/assignmentupload/",
        formData,
        get_token()
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
        "http://127.0.0.1:8000/api/notesupload/",
        formData,
        get_token()
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

  const Logout = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/logout/",
        {},
        get_token()
      );
      if (response.status === 200) {
        localStorage.removeItem("TokenA");
        localStorage.removeItem("TokenR");
        navigate("/login");
      } else {
        console.log(
          "Senstive Error Occurs Data Breach may be possible! Contact the managing team"
        );
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const download_notes = async (nid) => {
    console.log(nid);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/notesdownload/",
        { nid: nid },
        { responseType: "blob" } // Make sure to set responseType to 'blob'
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "notes.pdf"); // You can set the filename here
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading notes:", error);
    }
  };

  const download_assignment = async (aid) => {
    console.log(aid);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/assignmentdownload/",
        { aid: aid },
        { responseType: "blob" } // Make sure to set responseType to 'blob'
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "assignment.pdf"); // You can set the filename here
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
      const response = await axios.post(
        "http://127.0.0.1:8000/api/filesdelete/",
        delete_id,
        get_token()
      );
      closeDeleteAlert();
      if (response.status === 204) {
        await fetchData();
        console.log("Successfully deleted");
      }
    } catch (error) {
      console.error("File Cannot be deleted", error);
    }
  };

  const handleViewChange = async ({ activeStartDate, view }) => {
    const activeMonth = activeStartDate.getMonth() + 1;
    const activeYear = activeStartDate.getFullYear();
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/listholidays/?activeMonth=${activeMonth}`
      );
      if (response.data.length) setHolidays(response.data);
      else setHolidays(null);
    } catch (error) {
      console.error("Failed to fetch Holidays", error);
    }
  };

  useEffect(() => {
    handleViewChange({ activeStartDate: new Date() });
  }, []);

  // const highlightedDate = new Date("2023-10-15");

  // const tileContent = ({ date, view }) => {
  //   return date.toDateString() === highlightedDate.toDateString() ? (
  //     <div
  //       className="highlighted-date"
  //       style={{ background: "orange", height: "4px", width: "4px", borderRadius:"100%",}}
  //     ></div>
  //   ) : null;
  // };

  return (
    <>
      <Flex
        position={"fixed"}
        bottom={0}
        top={110}
        w={"full"}
        bg={"whitesmoke"}
      >
        <Box minW={"64px"} maxW={"64px"} bg={"#d8dcf0"}></Box>
        <VStack minW={250} maxW={250} p={3} bg={"white"} userSelect={"none"}>
          <HStack
            padding={3}
            w={"full"}
            bg={"#d8dcf0"}
            borderRadius={"2xl"}
            onClick={() => setSelectedCourse(null)}
          >
            <Popover>
              <PopoverTrigger>
                <Avatar
                  cursor={"pointer"}
                  name={user.name}
                  onClick={(e) => e.stopPropagation()}
                ></Avatar>
              </PopoverTrigger>
              <PopoverContent w={200}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <br />
                  <Button w={"full"} colorScheme="facebook" onClick={onOpen}>
                    My Profile
                  </Button>
                  <ProfileModal isOpen={isOpen} onClose={onClose} user={user} />
                  <Divider my={2} />
                  <Button w={"full"} colorScheme="telegram" onClick={Logout}>
                    Logout
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Text>{user.name}</Text>
          </HStack>
          <Divider borderColor={"blackAlpha.300"} my={1} />
          <VStack w={"full"} spacing={1}>
            {courses.map((item) => (
              <Button
                w={"full"}
                justifyContent={"flex-start"}
                flexWrap={"wrap"}
                h={30}
                overflow={"hidden"}
                bg={"transparent"}
                borderRadius={"full"}
                fontSize={13}
                key={item.id}
                onClick={() => handleCourseSelect(item.course_id)}
                {...(selectedCourse === item.course_id
                  ? {
                      backgroundColor: "#d8dcf0",
                      color: "darkblue",
                      _hover: { backgroundColor: "#d8dcf0" },
                    }
                  : {})}
                {...(selectedCourse !== item.course_id
                  ? { _hover: { backgroundColor: "#e5e5e5" } }
                  : {})}
                _active={{ color: "darkblue" }}
              >
                {item.name}
              </Button>
            ))}
          </VStack>

          <Divider borderColor={"blackAlpha.300"} my={1} />

          <VStack w={"full"}>
            <Button
              w={"full"}
              justifyContent={"flex-start"}
              borderRadius={"full"}
              fontSize={13}
              h={30}
              overflow={"hidden"}
              bg={"transparent"}
            >
              Announcements
            </Button>
            <Button
              w={"full"}
              justifyContent={"flex-start"}
              borderRadius={"full"}
              fontSize={13}
              h={30}
              overflow={"hidden"}
              bg={"transparent"}
            >
              Alert Messages
            </Button>
            <Button
              w={"full"}
              justifyContent={"flex-start"}
              borderRadius={"full"}
              fontSize={13}
              h={30}
              overflow={"hidden"}
              bg={"transparent"}
            >
              Manage Events
            </Button>
            <Button
              w={"full"}
              justifyContent={"flex-start"}
              borderRadius={"full"}
              fontSize={13}
              h={30}
              overflow={"hidden"}
              bg={"transparent"}
            >
              List Students
            </Button>
            <Button
              w={"full"}
              justifyContent={"flex-start"}
              borderRadius={"full"}
              fontSize={13}
              h={30}
              overflow={"hidden"}
              bg={"transparent"}
            >
              Manage Tutorials
            </Button>
          </VStack>
        </VStack>
        <Flex flexGrow={1} position={"relative"}>
          {selectedCourse ? (
            <Flex
              flexGrow={1}
              justify={"space-evenly"}
              gap={"24px"}
              p={"16px"}
              overflowY={"scroll"}
              fontFamily={"sans-serif"}
            >
              <Box w={"full"} textAlign={"center"}>
                <Text
                  bg={"#c5cae8"}
                  p={2}
                  fontWeight={"semibold"}
                  borderRadius={6}
                >
                  Notes / Material
                </Text>
                <Divider my={2} />
                <VStack>
                  <Accordion allowToggle w={"full"} textAlign={"left"}>
                    {notes.map((item) => (
                      <AccordionItem w={"full"} key={item.key}>
                        <h2>
                          <AccordionButton w={"full"}>
                            <Box as="span" flex="1" textAlign="left">
                              {item.name}
                            </Box>
                            <HStack justifyContent={"right"}>
                              <IconButton
                                isRound={true}
                                variant="outline"
                                // colorScheme="purple"
                                aria-label="Done"
                                size={"xs"}
                                color={"blackAlpha.800"}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  download_notes(item.notes_id);
                                }}
                                icon={<FaDownload />}
                              />
                              <IconButton
                                isRound={true}
                                variant="outline"
                                // colorScheme="teal"
                                aria-label="Done"
                                icon={<FaTrash />}
                                size={"xs"}
                                color={"blackAlpha.800"}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setDeleteInfo({
                                    name: item.name,
                                    id: { notes_id: item.notes_id },
                                  });
                                  showDeleteAlert();
                                }}
                              />
                            </HStack>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} w={"full"}></AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </VStack>
                <Divider my={2} />

                <Button
                  onClick={addNotes}
                  w={"full"}
                  border={"1px solid rgba(0, 0, 0, 0.1)"}
                  mb={6}
                >
                  Add Notes / Material
                </Button>

                <Modal
                  closeOnOverlayClick={false}
                  isOpen={openNotesModel}
                  onClose={closeNotesModel}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Add Study Material</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <form
                        onSubmit={handleNotesSubmit}
                        encType="multipart/form-data"
                      >
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
                          <FormLabel
                            bg={"#e5e5e5"}
                            p={3}
                            borderRadius={"10px"}
                            m={0}
                          >
                            Upload Notes
                            {/* <DownloadIcon transform="rotate(180deg)"/> */}
                          </FormLabel>
                          <Input
                            type="file"
                            name="file"
                            onChange={handleNotesFormChange}
                            display={"none"}
                          />
                        </FormControl>
                        <Divider my={4} />

                        <Button type="submit" colorScheme="blue" w={"full"}>
                          Upload
                        </Button>
                      </form>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Box>

              <Box w={"full"} textAlign={"center"}>
                <Text
                  bg={"#c5cae8"}
                  p={2}
                  fontWeight={"semibold"}
                  borderRadius={6}
                >
                  Assignment
                </Text>
                <Divider my={2} />
                <VStack w={"full"}>
                  <Accordion allowToggle w={"full"} textAlign={"left"}>
                    {assignment.map((item) => (
                      <AccordionItem w={"full"}>
                        <h2>
                          <AccordionButton w={"full"}>
                            <Box as="span" flex="1" textAlign="left">
                              {item.name}
                            </Box>
                            <HStack justifyContent={"right"}>
                              <IconButton
                                isRound={true}
                                variant="outline"
                                aria-label="Done"
                                size={"xs"}
                                color={"blackAlpha.800"}
                                icon={<FaDownload />}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  download_assignment(item.assignment_id);
                                }}
                              />

                              <IconButton
                                isRound={true}
                                variant="outline"
                                aria-label="Done"
                                icon={<FaTrash />}
                                size={"xs"}
                                color={"blackAlpha.800"}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setDeleteInfo({
                                    name: item.name,
                                    id: { assignment_id: item.assignment_id },
                                  });
                                  showDeleteAlert();
                                }}
                              />
                            </HStack>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} w={"full"}>
                          {item.description}
                          <br />
                          <Badge display={"inline-block"}>
                            <HStack>
                              <Text> Due:</Text>{" "}
                              <Box color={"red"}>{item.validity}</Box>
                            </HStack>
                          </Badge>
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </VStack>
                <Divider my={2} />

                <Button
                  onClick={addAssignment}
                  w={"full"}
                  mb={6}
                  border={"1px solid rgba(0, 0, 0, 0.1)"}
                >
                  Add New Assignment
                </Button>

                <Modal
                  closeOnOverlayClick={false}
                  isOpen={openAssignmentModel}
                  onClose={closeAssignmentModel}
                >
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
                          <FormLabel>validity</FormLabel>
                          <Input
                            type="text"
                            name="validity"
                            value={assignmnetFormData.validity}
                            onChange={handleAssignmentFormChange}
                            placeholder="Submission"
                          />
                        </FormControl>

                        <FormControl mt={4}>
                          <FormLabel
                            bg={"#e5e5e5"}
                            p={3}
                            borderRadius={"10px"}
                            m={0}
                          >
                            Upload File
                            {/* <DownloadIcon transform="rotate(180deg)"/> */}
                          </FormLabel>
                          <Input
                            type="file"
                            name="file"
                            onChange={handleAssignmentFormChange}
                            display={"none"}
                          />
                        </FormControl>
                        <Button
                          type="submit"
                          colorScheme="facebook"
                          mt={4}
                          w={"full"}
                        >
                          Submit
                        </Button>
                      </form>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Box>
            </Flex>
          ) : (
            <DashboardPlaceholder />
          )}

          {/* Delete Alert  */}
          <AlertDialog
            motionPreset="slideInBottom"
            leastDestructiveRef={cancelRef}
            onClose={closeDeleteAlert}
            isOpen={openDeleteAlert}
            isCentered
          >
            <AlertDialogOverlay />

            <AlertDialogContent>
              <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
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

          <VStack h={"full"} minW={300} p={4}>
            <Calendar
              onActiveStartDateChange={handleViewChange}
              showNeighboringMonth={false}
              // tileContent={tileContent}
            />
            {Holidays != null && (
              <Box
                w={"full"}
                border={"1px solid rgba(0,0,0,0.2)"}
                borderRadius={"0.5em"}
                p={2}
                bg={"white"}
              >
                <List>
                  {Holidays.map((item) => (
                    <ListItem key={item.id}>
                      <ListIcon as={DragHandleIcon} color="green.500" />
                      {new Date(item.date)
                        .getDate()
                        .toString()
                        .padStart(2, "0")}{" "}
                      {item.description}
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}
export default Dashboard;
