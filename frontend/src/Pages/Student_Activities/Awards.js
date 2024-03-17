import React from "react";
import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import SmallBanner from "../../Layout/SmallBanner";
import image from './../../assets/banners/award.avif';
import conf from "../../config.json";


const AwardsPage = () => {
  const awardsData = conf.awards
  return (
    <>
      <SmallBanner image={image} heading={'AWARDS AND ACHIVEMENTS'} />
      <Center>
        <Box p={{ base: 2, md: 4 }} w={{ base: '100%', md: '80%' }}>
          <VStack w={"full"} spacing={3} bg={"white"} borderRadius={'10px'} boxShadow={'0 0 6px rgba(0,0,0,0.05)'}>
            {awardsData.map((award, index) => (
              <Box
                key={index}
                p={4}
                w={"full"}
                textAlign={"justify"}
              >
                <Heading fontWeight={"semibold"} size={"md"} mb={2} color="#192e59">
                  {award.title}
                </Heading>
                <Text fontSize="md" color="gray.600" mb={2}>
                  {award.description}
                </Text>
                <Text fontSize="sm">
                  <strong>Year:</strong> {award.year}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default AwardsPage;
