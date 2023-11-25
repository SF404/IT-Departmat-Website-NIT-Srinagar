import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaDownload, FaTrash } from "react-icons/fa6";

function Announcements({ email }) {
  const [announcements, setannouncements] = useState(null);
  const [deleteInfo, setDeleteInfo] = useState({ name: "", id: "" });
  const [formData, setFormData] = useState({
    description: "",
    link: "",
  });
  const cancelRef = useRef();
  const {
    isOpen: openAnnouncementModel,
    onOpen: addAnnouncement,
    onClose: closeAnnouncementModel,
  } = useDisclosure();
  const {
    isOpen: openDeleteAlert,
    onOpen: showDeleteAlert,
    onClose: closeDeleteAlert,
  } = useDisclosure();

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        `/api/public/teacherdataview/?type=announcement&email=${email}`
      );
      setannouncements(response.data);
      console.log("announcements", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (formData.description == "") return;
      const response = await axios.post(
        `/api/postpublicdata/?email=${email}&type=announcement`,
        formData,
        get_token()
      );
      if (response) fetchAnnouncements();
      console.log(response);
      console.log("Form data submitted:", formData);
      closeAnnouncementModel();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (delete_id) => {
    console.log(delete_id);
    try {
      const response = await axios.delete(`/api/delete/${delete_id}/?type=announcement`, get_token());
      closeDeleteAlert();
      if (response.status === 204) {
        await fetchAnnouncements();
        console.log("Successfully deleted");
      }
    } catch (error) {
      console.error("File Cannot be deleted", error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <>
      <Box
        width={"full"}
        bg={"white"}
        h={"full"}
        borderRadius={8}
        boxShadow={"0 2px 8px rgba(0,0,0,0.05)"}
        position={"relative"}
      >
        <Box
          bg={"#d8dcf0"}
          p={4}
          borderTopRadius={8}
          fontWeight={"semibold"}
          color={"#192e59"}
          textAlign={"center"}
        >
          Announcements
        </Box>
        {announcements ? (
          <VStack p={4} fontSize={"14px"} className="family-1">
            {announcements && announcements.length !== 0 ? (
              announcements.map((item, index) => (
                <>
                  <HStack
                    justifyContent={"space-between"}
                    w={"full"}
                    overflow={"hidden"}
                    key={index}
                  >
                    <Text as={Link} top={item.link} color={"blue"}>
                      {item.description}
                    </Text>
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
                  </HStack>
                  <Divider borderColor={"blackAlpha.300"} />
                </>
              ))
            ) : (
              <>
                <Text>Empty...</Text>
                <Divider borderColor={"blackAlpha.300"} />
              </>
            )}
          </VStack>
        ) : (
          <Box textAlign={"center"}>
            <Spinner mt={4} />
            <Text>Loading...</Text>
          </Box>
        )}
        <Box w={"full"} textAlign={"right"} position={"absolute"} bottom={0}>
          <Button m={4} colorScheme="teal" onClick={addAnnouncement}>
            {" "}
            Add{" "}
          </Button>
        </Box>
      </Box>

      <Modal
        closeOnOverlayClick={false}
        isCentered
        isOpen={openAnnouncementModel}
        size={"3xl"}
        onClose={closeAnnouncementModel}
      >
        <ModalOverlay />
        <ModalContent m={4}>
          <ModalHeader>Add Announcement</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} fontSize={"12px"}>
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              method="POST"
            >
              <FormControl>
                <FormLabel>Announcement</FormLabel>
                <Input
                  type="text"
                  name="description"
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Announcement"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel> URL {"(if Any)"}</FormLabel>
                <Input
                  type="url"
                  name="link"
                  color={"blue"}
                  onChange={handleInputChange}
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

export default Announcements;
