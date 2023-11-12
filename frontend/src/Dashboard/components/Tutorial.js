import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Input,
  Link,
  Select,
  Text,
  Textarea,
  VStack,
  useDisclosure,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import axios from "axios";
import { FaTrash } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";
import { PiTelegramLogoDuotone } from "react-icons/pi";

function Tutorial({ email }) {
  const [deleteInfo, setDeleteInfo] = useState({ name: "", id: "" });
  const {
    isOpen: openDeleteAlert,
    onOpen: showDeleteAlert,
    onClose: closeDeleteAlert,
  } = useDisclosure();
  const cancelRef = useRef();
  const [tutorials, setTutorials] = useState(null);
  const fetchTutorials = async () => {
    try {
      const response = await axios.get(
        `/api/public/tutorialsget/?email=${email}`
      );
      setTutorials(response.data);
      console.log("Tutorials", response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    selection: "video",
    link: "",
    tags: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData };
    const file = e.target.files[0];
    updatedFormData[name] = file;
    setFormData(updatedFormData);
    console.log(formData);
  };

  function get_token() {
    return {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
      },
    };
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (formData.title == "" || formData.link == "") return;
      const response = await axios.post(
        `/api/postpublicdata/?email=${email}&type=tutorial`,
        formData,
        get_token()
      );
      if (response) fetchTutorials();
      console.log(response);
      console.log("Form data submitted:", formData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (delete_id) => {
    console.log(delete_id);
    try {
      if (formData.title == "" || formData.link == "") return;
      const response = await axios.delete(
        `/api/delete/${delete_id}/?type=tutorial`,
        get_token()
      );
      closeDeleteAlert();
      if (response.status === 204) {
        await fetchTutorials();
        console.log("Successfully deleted");
      }
    } catch (error) {
      console.error("File Cannot be deleted", error);
    }
  };

  useEffect(() => {
    fetchTutorials();
  }, []);

  return (
    <>
      <Box
        w={"full"}
        height={"full"}
        bg={"white"}
        textAlign={"center"}
        borderRadius={"0.5em"}
        position={"relative"}
        boxShadow={"0 2px 8px rgba(0,0,0,0.05)"}
        overflow={"hidden"}
      >
        <Box
          bg={"#d8dcf0"}
          p={4}
          borderTopRadius={8}
          fontWeight={"semibold"}
          color={"darkblue"}
        >
          My Tutorials
        </Box>
        <Box w={"full"} h={"full"} overflowY={"scroll"}>
          <Box p={4}>
            <form method="POST" onSubmit={handleSubmit}>
              <FormControl mt={4}>
                <FormLabel
                  bg={"#e5e5e5"}
                  borderRadius={"10px"}
                  padding={"30px"}
                  border={"2px dashed gray"}
                  textAlign={"center"}
                  w={"full"}
                >
                  Image <br />{" "}
                  <Text fontSize={"12px"} fontWeight={"normal"}>
                    {formData.file ? formData.file.name : ""}
                  </Text>
                </FormLabel>
                <Input
                  type="file"
                  name="image"
                  display={"none"}
                  onChange={handleFileChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <Input
                  type="text"
                  placeholder="Title..."
                  name="title"
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
              <FormControl mt={4}>
                <Textarea
                  type="text"
                  placeholder="Description..."
                  name="description"
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <Select
                  type="text"
                  placeholder="Tutorial type..."
                  name="selection"
                  onChange={handleInputChange}
                >
                  <option value="video" selected>
                    YouTube Video
                  </option>
                  <option value="blog">Blog</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <Input
                  type="text"
                  placeholder="URL..."
                  name="link"
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
              <FormControl mt={4}>
                <Input
                  type="text"
                  placeholder="Tags..."
                  name="tags"
                  onChange={handleInputChange}
                />
              </FormControl>

              <Divider my={4} />
              <Button type="submit" colorScheme="facebook" w={"full"}>
                Upload
              </Button>
            </form>
          </Box>

          <Box p={4} pb={"100px"}>
            <Text
              textAlign={"left"}
              fontWeight={"semibold"}
              my={2}
              color={"darkblue"}
            >
              My Tutorials
            </Text>
            <VStack w={"full"} spacing={"1em"}>
              {tutorials && tutorials.length > 0 ? (
                tutorials.map((item, index) => (
                  <Box key={index} w={"full"} height={"full"}>
                    <Box
                      w={"full"}
                      aspectRatio={16 / 9}
                      border={"1px"}
                      borderColor={"lightsteelblue"}
                      borderRadius={"0.25em"}
                      style={{
                        background: `url(${item.image}) no-repeat center center/cover`,
                      }}
                    ></Box>
                    <Box
                      w={"full"}
                      h={"full"}
                      textAlign={"left"}
                      py={2}
                      fontSize={"12px"}
                    >
                      <Text as={Link} to={item.link} fontWeight={"semibold"}>
                        {item.title}
                      </Text>
                      <Text>{item.description}</Text>
                    </Box>
                    <Box display={"flex"} gap={2}>
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
                            name: item.description,
                            id: item.id,
                          });
                          showDeleteAlert();
                        }}
                      />
                    </Box>
                  </Box>
                ))
              ) : (
                <Text>Empty...</Text>
              )}
            </VStack>
          </Box>
        </Box>
      </Box>
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
    </>
  );
}

export default Tutorial;
