import React from "react";
import {
  Box,
  Text,
  Divider,
  Center,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import project from "./../../Assets/images/computer.webp";
import computing from "./../../Assets/images/computing.webp";
import library from "./../../Assets/images/library2.webp";
import network from "./../../Assets/images/networking.webp";
import research from "./../../Assets/images/research.webp";
import seminar from "./../../Assets/images/seminar2.webp";
import SmallBanner from "../../Components/SmallBanner";
 
const facilities = [
  {
    img: seminar,
    title: "Meeting Room and Seminar Hall",
    description: "Our department has a spacious meeting room equipped with an LCD Projector and teleconferencing facilities. Additionally, we have a Seminar Hall with a seating capacity of 100. This hall is frequently used for conducting classes, seminars, workshops, and various events."
  },
  {
    img: library,
    title: "Department Library",
    description: "In addition to the central library with an e-library facility, our CSE department boasts its library with approximately 2500 books, covering a wide range of subjects to support your academic needs."
  },
  {
    img: computing,
    title: "Computing Facility",
    description: "Our department is proud to offer a state-of-the-art data center equipped with high-end server systems, ensuring you have access to the latest computing resources for your research and coursework."
  },
  {
    img: network,
    title: "Networking",
    description: "We provide robust networking facilities, including a 24 Port Brocade backbone connectivity, to ensure seamless communication and connectivity across our department, allowing students and faculty to collaborate effectively."
  },
  {
    img: research,
    title: "Research Labs",
    description: "Our department features cutting-edge research labs equipped with advanced tools and equipment, providing a conducive environment for innovative research projects."
  },
  {
    img: project,
    title: "Project Presentation Rooms",
    description: "We have specialized rooms for project presentations and discussions, equipped with audio-visual aids to enhance the quality of your project demonstrations."
  }
]




const FacilitiesPage = () => {
  return (
    <>
      <SmallBanner heading={'FACILITIES'} />


      <Center>
        <VStack
          w={"full"}
          width={{ md: "100%", xl: "80%" }}
          bg={"white"}
          spacing={4}
          my={4}
          p={4}
        >
          {facilities.map((facilities, index) => (
            <>
              <SimpleGrid
                columns={[1, 1, 2]}
                key={index}
                gap={4}
                width={"full"}
              >
                <Box
                  aspectRatio={16 / 9}
                  order={{ md: index % 2 === 0 ? 1 : 2 }}
                  style={{
                    background: `url(${facilities.img}) no-repeat center center/cover`,
                  }}
                  id={"image"}
                ></Box>
                <Box
                  px={{ base: 6, md: 12 }}
                  my={"auto"}
                  order={index % 2 === 0 ? 2 : 1}
                >
                  <Text fontWeight={"semibold"} fontSize={"1.5em"}>
                    {facilities.title}
                  </Text>
                  <Text textAlign={"justify"}>
                    {facilities.description}
                  </Text>
                </Box>
              </SimpleGrid>
              <Divider />
            </>
          ))}
        </VStack>
      </Center>
    </>
  );
};

export default FacilitiesPage;
