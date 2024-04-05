import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import video_from_hod from "./../../../Assets/videos/from-hod.mp4";

function FromHod() {
  return (
    <Box w={"full"}>
      <Flex fontWeight={'semibold'} gap={2} fontSize={'24px'} justifyContent={'center'} my={2}>
        <Text color={'darkblue'}>FROM</Text>
        <Text color={'blackAlpha'}>HOD</Text>
      </Flex>
      <SimpleGrid
        columns={[1, 1, 1, 2]}
        w={"full"}
        p={[4, 6, 8]}
        gap={"1.5em"}
        bg={"#d8dcf0"}
        borderRadius={"1em"}
      >
        <Box w={"full"}>
          <Heading size={"sm"} mb={2}>
            ABOUT IT DEPARTMENT
          </Heading>
          <Text textAlign={"justify"}>
            The Department of Information Technology, established in 2007,
            offers a 4-year undergraduate program (B.Tech) in Information
            Technology. The program includes core courses like Database
            Management, Software Engineering, Computer Networks, and more. The
            department initially had an intake capacity of 40, which later
            increased to 55 in 2009. The Department of Information Technology is
            known for its excellence in IT education and research. It
            continually updates its curriculum to keep pace with the
            fast-changing tech industry. Faculty members engage in cutting-edge
            research, and the department is involved in IT research programs
            supported by both the government and industry.
          </Text>
        </Box>
        <video className="hod-video" src={video_from_hod} controls style={{ borderRadius: '0.5em', width: '100%' }}></video>
      </SimpleGrid>
    </Box>
  );
}

export default FromHod;
