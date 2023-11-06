import bannerImage from "./../../../assets/images/image.webp";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Heading,
} from "@chakra-ui/react";

const data = [
  {
    name: "Dr. Shabir Ahmad Sofi",
    responsibility: "Spoken Tutorials Coordinator",
    email: "shabir@nitsri.ac.in",
  },
  {
    name: "Dr. Iqra Altaf",
    responsibility: "Time Table Coordinator",
    email: "iqraaltaf@nitsri.ac.in",
  },
  {
    name: "Dr. Prabal Verma",
    responsibility: "4th Year Coordinator",
    email: "prabal.verma@nitsri.net",
  },
  {
    name: "Dr. Janibul Bashir",
    responsibility: "1st Year Coordinator, Examination Coordinator",
    email: "Janibbashir@nitsri.ac.in",
  },
];

const coheadStyle = {
  marginTop: "5px",
  display: "flex",
  fontWeight: "bold",
  fontSize: "large",
  textDecoration: "underline",
  color: "darkblue",
  justifyContent: "center",
  alignItems: "center",
};

const Page = () => {
  return (
    <div>
      <VStack
        w="full"
        h="200px"
        color="white"
        backgroundImage={`url(${bannerImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        textShadow="0 0 24px black"
      >
        <Heading as="h2" size="xl" mb={2}>
          
        </Heading>
      </VStack>
      <h1 style={coheadStyle}>Faculty Coordinator</h1>
      <Box
        boxShadow="md"
        rounded="lg"
        p={4}
        bg="white"
        overflowX="auto"
        maxW="80%"
        mx="auto"
        marginTop="2"
      >
        <Table variant="normal">
          <Thead bg="#d8dcf0">
            <Tr >
              <Th>Name</Th>
              <Th>Responsibility</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody >
            {data.map((item, index) => (
              <Tr  key={index} bg={index % 2 === 1 ? "gray.100" : "white"} _hover={{ bg: 'blue.100' }}>
                <Td>{item.name}</Td>
                <Td>{item.responsibility}</Td>
                <Td>{item.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </div>
  );
}

export default Page;
