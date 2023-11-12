import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Link,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Events({ email }) {
  const [events, setEvents] = useState(null);
  const fetchEvents = async () => {
    try {
      const response = await axios.get(`/api/public/eventsget/?email=${email}`);
      setEvents(response.data);
      console.log("Events", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    date: "",
    location: "",
    link: "",
  });

  // Function to handle changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle image input change
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

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        `/api/postpublicdata/?email=${email}&type=event`,
        formData,
        get_token()
      );
      if (response) fetchEvents();
      console.log(response);
      // Add your logic for form submission using formData
      console.log("Form data submitted:", formData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
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
        Manage Events
      </Box>
      <Box w={"full"} h={"full"} overflowY={"scroll"}>
        <Box p={4}>
          <form method="POST" onSubmit={handleSubmit}>
            <FormControl mt={4}>
              <FormLabel
                bg={"#e5e5e5"}
                borderRadius={"10px"}
                padding={"30px"}
                w={"full"}
                border={"2px dashed gray"}
                textAlign={"center"}
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
                placeholder="Event title..."
                name="title"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <Textarea
                type="text"
                placeholder="Event description..."
                name="description"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <Input
                type="date"
                placeholder="Date..."
                name="date"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <Input
                type="text"
                placeholder="Event location..."
                name="location"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <Input
                type="url"
                placeholder="Event URL... (if Any)"
                name="link"
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
            My Events
          </Text>
          <VStack w={"full"} spacing={"1em"}>
            {events && events.length > 0 ? (
              events.map((item, index) => (
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
                    <Text>Date: {item.date}</Text>
                    <Text>Location: {item.location}</Text>
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
  );
}

export default Events;
