import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

function FromHod({ video_from_hod }) {
  return (
    <Box w={"full"}>
      <Heading
        fontSize={"1.5em"}
        my={"0.5em"}
        textAlign={"center"}
        color={"#192e59"}
      >
        FROM HOD
      </Heading>
      <SimpleGrid
        columns={[1, 1, 2]}
        w={"full"}
        p={"2em"}
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
          {/* <Box textAlign={"right"}>
            <Button
              colorScheme={"facebook"}
              borderRadius={"0.5em"}
              fontWeight={"normal"}
              mt={3}
            >
              Read More
            </Button>
          </Box> */}
        </Box>
        <video className="hod-video" src={video_from_hod} controls></video>
      </SimpleGrid>
    </Box>
  );
}

export default FromHod;
