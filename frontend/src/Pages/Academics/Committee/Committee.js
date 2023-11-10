import SmallBanner from "./../../../Layout/SmallBanner";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
  TableContainer,
} from '@chakra-ui/react';
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

function Page() {
  return (
    <div className="committeehead">
      <SmallBanner heading={'DEPARTMENTAL PURCHASING COMMITTEE'} />
      <Center>
        <TableContainer width={{ base: '100%', md: '80%' }} m={4} bg={"white"} boxShadow={'0 0 6px rgba(0,0,0,0.05)'}>
          <Table variant="striped">
            <Thead bg={"#d8dcf0"}>
              <Tr >
                <Th>Name</Th>
                <Th>Role</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody fontSize={'14px'} className="family-3">
              {data.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.name}</Td>
                  <Td>{item.Role}</Td>
                  <Td>{item.email}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </div>
  );
}
export default Page;
