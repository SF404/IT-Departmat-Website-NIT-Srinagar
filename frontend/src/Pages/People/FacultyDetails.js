import { EmailIcon, ExternalLinkIcon, Icon, PhoneIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Center,
  Heading,
  Image,
  ListItem,
  Spinner,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  UnorderedList,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function FacultyDetails() {
  const [researchFields, setResearchFields] = useState(null);
  const { id } = useParams();
  const [FacultyDetails, setFacultyDetails] = useState(null);
  const [currentTeachingCourses, setCurrentTeachingCourses] = useState(null);
  const [projects, setProjects] = useState(null);
  const [education, setEducation] = useState(null);
  const [researchs, setResearchs] = useState(null);
  const [patents, setPatents] = useState(null);

  async function fetchfacultyDetails() {
    try {
      // teacher
      const teacher = await axios.get(`/api/public/getteacher/?Id=${id}`);
      // couses
      const courses = await axios.get(
        `/api/courses?sid=${teacher.data[0].email}`
      );
      setCurrentTeachingCourses(courses.data);
      const education = await axios.get(`/api/public/teachereducationget`, {
        params: {
          email: teacher.data[0].email,
        },
      });
      setEducation(education.data);
      // research
      const research = await axios.get(`/api/public/researchget`, {
        params: {
          email: teacher.data[0].email,
        },
      });
      setResearchs(research.data);

      //patents
      const patents = await axios.get(`/api/public/patentget`, {
        params: {
          email: teacher.data[0].email,
        },
      });
      setPatents(patents.data);
      //projects
      const projects = await axios.get(`/api/public/projectget`, {
        params: {
          email: teacher.data[0].email,
        },
      });
      setProjects(projects.data);
      // set faculty details at last
      setFacultyDetails(teacher.data[0]);
      setResearchFields(
        teacher.data[0].research_field
          .split(",")
          .map((field) => ({ field: field.trim() }))
      );
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchfacultyDetails();
  }, []);

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
  return (
    <Center>
      {FacultyDetails ? (
        <VStack
          w={{ base: "full", md: "80%" }}
          spacing={3}
          p={4}
          className="family-1"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            w={"full"}
            bg={"white"}
            p={4}
            borderRadius={"1em"}
            boxShadow={"rgba(0, 0, 0, 0.05) 0px 1px 12px;"}
            mt={6}
          >
            <Box>
              <Image
                borderRadius={"0.5em"}
                name={FacultyDetails.name}
                src={FacultyDetails.profile_photo}
                minW={"200px"}
                minH={"200px"}
                maxW={"200px"}
              ></Image>
              <Box mt={4} fontSize={"0.9em"}>
                <Tooltip
                  hasArrow
                  label="copy"
                  bg="gray.300"
                  color="black"
                  placement="right-end"
                >
                  <Text
                    cursor={"pointer"}
                    width={"fit-content"}
                    onClick={() => handleClick(`${FacultyDetails.phone}`)}
                  >
                    <Icon as={PhoneIcon} mr={2} color="gray.600" />
                    {FacultyDetails.phone}
                  </Text>
                </Tooltip>

                <Tooltip
                  hasArrow
                  label="copy"
                  bg="gray.300"
                  color="black"
                  placement="right-end"
                >
                  <Text
                    cursor={"pointer"}
                    width={"fit-content"}
                    onClick={() => handleClick(`${FacultyDetails.email}`)}
                  >
                    <Icon as={EmailIcon} mr={2} color="gray.600" />
                    {FacultyDetails.email}
                  </Text>
                </Tooltip>

                <Text
                  as={Link}
                  cursor={"pointer"}
                  _hover={{ color: "darkblue", textDecoration: "underline" }}
                  to={
                    FacultyDetails.website ||
                    "/faculty/" + FacultyDetails.teacher_id
                  }
                  target="_blank"
                >
                  <Icon as={ExternalLinkIcon} mr={2} color="gray.600" />
                  {FacultyDetails.website || "website"}
                </Text>
              </Box>
            </Box>
            <Box h={"full"} ml={4}>
              <Heading fontSize={"1.5em"} color={"darkblue"}>
                {FacultyDetails.name}
              </Heading>
              <Badge colorScheme="messenger" fontFamily={"body"}>
                {FacultyDetails.description}
              </Badge>
              <br />
              <Badge>{FacultyDetails.education || "PHD"}</Badge>
              <Text fontSize={"14px"}>{FacultyDetails.research_field}</Text>
              <Box mt={4}>
                <Heading size={"sm"}>ABOUT</Heading>
                <Box fontSize={"14px"}>
                  <Text>
                    I am working as {FacultyDetails.description} at the
                    Department of Information Technology, National Institute of
                    Technology Srinagar.
                  </Text>
                  <Text>My research interests include:</Text>
                  {researchFields && (
                    <UnorderedList>
                      {researchFields.map((item, index) => (
                        <ListItem key={index}>{item.field}</ListItem>
                      ))}
                    </UnorderedList>
                  )}

                  <Text>{FacultyDetails.about}</Text>
                </Box>
              </Box>
            </Box>
          </Stack>

          {education && education.length > 0 && (
            <Stack
              direction={"column"}
              w={"full"}
              bg={"white"}
              p={4}
              borderRadius={"1em"}
              boxShadow={"rgba(0, 0, 0, 0.05) 0px 1px 12px;"}
            >
              <Heading size={"md"} color={"darkblue"}>
                Education
              </Heading>
              <Box>
                <TableContainer>
                  <Table variant="simple" colorScheme="facebook">
                    <Thead bg={"#d8dcf0"}>
                      <Tr>
                        <Th>Degree</Th>
                        <Th>College</Th>
                        <Th>Location</Th>
                        <Th textAlign={"center"}>Graduation</Th>
                      </Tr>
                    </Thead>
                    <Tbody fontSize={"sm"}>
                      {education.map((item, index) => (
                        <Tr>
                          <Td>{item.degree}</Td>
                          <Td>{item.college}</Td>
                          <Td>{item.location}</Td>
                          <Td textAlign={"center"}>{item.Year}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Stack>
          )}

          {currentTeachingCourses && currentTeachingCourses.length > 0 && (
            <Stack
              direction={"column"}
              w={"full"}
              bg={"white"}
              p={4}
              borderRadius={"1em"}
              boxShadow={"rgba(0, 0, 0, 0.05) 0px 1px 12px;"}
            >
              <Heading size={"md"} color={"darkblue"}>
                Teaching
              </Heading>
              <Box>
                <TableContainer>
                  <Table variant="simple" colorScheme="facebook">
                    <Thead bg={"#d8dcf0"}>
                      <Tr>
                        <Th>Course ID</Th>
                        <Th>Name</Th>
                        <Th textAlign={"center"}>Semester</Th>
                        <Th textAlign={"center"}>Credit</Th>
                      </Tr>
                    </Thead>
                    <Tbody fontSize={"sm"}>
                      {currentTeachingCourses.map((item, index) => (
                        <Tr>
                          <Td>{item.course_id}</Td>
                          <Td>{item.name}</Td>
                          <Td textAlign={"center"}>
                            {item.semester}
                            {item.semester > 2
                              ? "th"
                              : item.semester == 1
                              ? "st"
                              : item.semester == 2
                              ? "nd"
                              : "rd"}
                          </Td>
                          <Td textAlign={"center"}>{item.credit}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Stack>
          )}

          {researchs && researchs.length > 0 && (
            <Stack
              direction={"column"}
              w={"full"}
              bg={"white"}
              p={4}
              borderRadius={"1em"}
              boxShadow={"rgba(0, 0, 0, 0.05) 0px 1px 12px;"}
            >
              <Heading size={"md"} color={"darkblue"}>
                Researchs
              </Heading>
              <Box>
                <TableContainer>
                  <Table variant={"simple"} colorScheme="facebook">
                    <Thead bg={"#d8dcf0"}>
                      <Tr>
                        <Th>SNO.</Th>
                        <Th>Date</Th>
                        <Th>Journal</Th>
                        <Th>Authors</Th>
                      </Tr>
                    </Thead>
                    <Tbody fontSize={"sm"}>
                      {researchs
                        .sort((a, b) => {
                          const aDate = new Date(a.date);
                          const bDate = new Date(b.date);
                          return bDate - aDate;
                        })
                        .map((item, index) => (
                          <Tr>
                            <Td>{index + 1}</Td>
                            <Td>{item.date}</Td>
                            <Td>{item.title}</Td>
                            <Td>{item.authors}</Td>
                          </Tr>
                        ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Stack>
          )}

          {patents && patents.length > 0 && (
            <Stack
              direction={"column"}
              w={"full"}
              bg={"white"}
              p={4}
              borderRadius={"1em"}
              boxShadow={"rgba(0, 0, 0, 0.05) 0px 1px 12px;"}
            >
              <Heading size={"md"} color={"darkblue"}>
                Patents
              </Heading>
              <Box>
                <TableContainer>
                  <Table colorScheme="facebook">
                    <Thead bg={"#d8dcf0"}>
                      <Tr>
                        <Th>Date</Th>
                        <Th>Patent</Th>
                        <Th>Number</Th>
                      </Tr>
                    </Thead>
                    <Tbody fontSize={"sm"}>
                      {patents.map((item, index) => (
                        <Tr key={index}>
                          <Td>{item.date}</Td>
                          <Td>{item.patent}</Td>
                          <Td>{item.number}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Stack>
          )}

          {projects && projects.length > 0 && (
            <Stack
              direction={"column"}
              w={"full"}
              bg={"white"}
              p={4}
              borderRadius={"1em"}
              boxShadow={"rgba(0, 0, 0, 0.05) 0px 1px 12px;"}
            >
              <Heading size={"md"} color={"darkblue"}>
                Projects
              </Heading>
              <Box>
                <TableContainer>
                  <Table colorScheme="facebook">
                    <Thead bg={"#d8dcf0"}>
                      <Tr>
                        <Th>Title</Th>
                        <Th>Link</Th>
                      </Tr>
                    </Thead>
                    <Tbody fontSize={"sm"}>
                      {projects.map((item, index) => (
                        <Tr key={index}>
                          <Td>{item.title}</Td>
                          <Td>
                            <a href={item.link}>Learn more</a>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Stack>
          )}
        </VStack>
      ) : (
        <Center mt={5}>
          <Spinner />
        </Center>
      )}
    </Center>
  );
}

export default FacultyDetails;
