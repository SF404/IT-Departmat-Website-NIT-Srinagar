import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Center,
  VStack,
  Grid,
  GridItem,
  Image,
  List,
  ListItem,
  ListIcon,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import img1 from "./../../assets/CompaniesImages/logo1.jpeg";
import img2 from "./../../assets/CompaniesImages/logo2.jpeg";
import img3 from "./../../assets/CompaniesImages/logo3.jpeg";
import img4 from "./../../assets/CompaniesImages/logo4.jpeg";
import img5 from "./../../assets/CompaniesImages/logo5.jpeg";
import img6 from "./../../assets/CompaniesImages/logo6.jpeg";
import img7 from "./../../assets/CompaniesImages/logo7.jpeg";
import img8 from "./../../assets/CompaniesImages/logo8.jpeg";
import SmallBanner from "../../Layout/SmallBanner";

const PlacementBrochure = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,

    // Add more image sources as needed
  ];
return (
  <>
    <SmallBanner heading={"TRAINING AND PLACEMENT"} />
    <Box p={4}>
      <Center>
        <VStack
          w={"full"}
          width={{ md: "100%", xl: "80%" }}
          bg={"white"}
          spacing={8}
          p={4}
          boxShadow={'0 0 6px rgba(0,0,0,0.05)'}
          borderRadius={'0.5em'}
        >
          <Button bg={'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'} class="splash-button" role="button">Placement Brochure</Button>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>SNO.</Th>
                  <Th>Company</Th>
                  {/* {
                    years?years.sort().map((item, index)=>(
                      <Th>{years.year}</Th>
                    ))
                  } */}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          
        </VStack>
      </Center>
    </Box>
  </>
);
};

export default PlacementBrochure;
