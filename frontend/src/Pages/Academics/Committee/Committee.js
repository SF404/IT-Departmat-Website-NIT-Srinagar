import bannerImage from "./../../../assets/images/image.webp";
import { VStack,Heading, Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,} from '@chakra-ui/react';
const data = [
  {
    name: "Dr. G. R. Baig",
    Role: "Head/Chairperson",
    email: "grbegh@nitsri.net",
  },
  {
    name: "Dr. Shabir Ahmad Sofi",
    Role: "Member",
    email: "shabir@nitsri.ac.in",
  },
  { name: "Dr. Shaima Qureshi", Role: "Member", email: "shaima@nitsri.net" },
];

const cmhead = {
  marginTop: "5px",
  display: "flex",
  fontWeight: "bold",
  fontSize: "large",
  textDecoration: "underline",
  color: "darkblue",
  justifyContent: "center",
  alignItems: "center",
};
function Page() {
  return (
    <div className="committeehead">
    <VStack
        w={"full"}
        h={"200px"}
        color={"white"}
        backgroundImage={bannerImage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        textShadow={"0 0 24px black"}
      > <Heading as="h2" size="xl" mb={2}>
          {" "}
        </Heading>
      </VStack>
      <h1 style={cmhead}>Departmental Purchasing Committee</h1>
      <Box
          boxShadow="md"
          rounded="lg"
          p={4}
          bg="white"
          overflowX="auto"
          maxW="80%"
          mx="auto"
          marginTop={2}
        > <Table variant="simple">
            <Thead bg={"#d8dcf0"}>
              <Tr >
              <Th>Name</Th>
                <Th>Role</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <Tr key={index} bg={index % 2 === 1 ? "gray.100" : "white"} _hover={{ bg: 'blue.100' }}>
                  <Td>{item.name}</Td>
                  <Td>{item.Role}</Td>
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
