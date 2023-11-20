import {
  Box,
  Button,
  Center,
  Divider,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import a from "./../../assets/images/computer.webp";
import hardware from "./../../assets/images/hardware.webp";
import ai from "./../../assets/images/ai.webp";
import analysis from "./../../assets/images/analysis.webp";
import iot from "./../../assets/images/iot.webp";
import security from "./../../assets/images/security.webp";
import programming from "./../../assets/images/programming.webp";
import SmallBanner from "../../Layout/SmallBanner";


function Labs() {
  const labs = [
    {
      name: "Architecture and Distributed Systems",
      link: "/labs/lab1",
      description:
        "The Architecture and Distributed Systems Laboratory provides a computing environment which includes multiple workstations, PCs, and a cluster with multi-core machines. Its mission is to support teaching and research in all areas of parallel and distributed computing: advanced computer architectures, operating systems, parallel programming languages, applications, and high performance computing and networking activities in the Department of Information Technology at National Institute of Technology, Srinagar.",
      image: hardware,
      url: 'architecture'
    },
    {
      name: "Artificial Intelligence and Machine Learning",
      link: "/labs/lab1",
      description:
        "The AI Lab is designed to provide students, researchers, and professionals with the tools and resources necessary to dive deep into the realm of artificial intelligence. It offers a dynamic and collaborative environment for both learning and experimenting with AI technologies",
      image: ai,
      url: 'artificialintelligence'
    },
    {
      name: "Computer Vision and Image Processing",
      link: "/labs/lab1",
      description:
        "The Computer Vision and Image Processing Lab is at the forefront of research and innovation in the field of computer vision and image processing. This facility offers a range of resources and expertise to advance our understanding and utilization of visual data. ",
      image: a,
      url: 'computervision'
    },
    {
      name: "Data Mining and Analytics",
      link: "/labs/lab1",
      description:
        "The Data Mining and Analytics Lab is a dedicated research and development facility designed to unlock the hidden insights within vast datasets and harness the power of data for informed decision-making. This lab serves as a pivotal resource for students, researchers, and professionals eager to explore the transformative potential of data analysis and data-driven insights.",
      image: analysis,
      url: 'datamining'
    },
    {
      name: "Embedded IoT",
      link: "/labs/lab1",
      description:
        "The Embedded IoT Lab is a dedicated facility that explores the convergence of embedded systems and the Internet of Things (IoT). This dynamic and innovative lab serves as a hub for students, researchers, and industry professionals to engage with IoT technologies and harness their potential.",
      image: iot,
      url: 'embedded'
    },
    {
      name: "Programming",
      link: "/labs/lab1",
      description:
        "The Programming Lab is a dedicated space for students and enthusiasts to delve into the world of coding, software development, and problem-solving. It provides an environment that fosters hands-on learning, experimentation, and collaboration to hone programming skills.",
      image: programming,
      url: 'programming'
    },
    {
      name: "Security",
      link: "/labs/lab1",
      description:
        "The Security Lab is a dedicated space focused on all aspects of cybersecurity and information security. It serves as a critical hub for research, education, and practical training in safeguarding digital assets and systems from threats and vulnerabilities.",
      image: security,
      url: 'security'
    },
  ]
  return (
    <>
      <SmallBanner heading={'LABS'} />
      <Box p={4}>
        <Center>
          <VStack
            w={"full"}
            width={{ md: "100%", xl: "80%" }}
            bg={"white"}
            spacing={8}
            mt={4}
            p={4}
          >
            {labs.map((lab, index) => (
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
                      background: `url(${lab.image}) no-repeat center center/cover`,
                    }}
                    id={"image"}
                  ></Box>
                  <Box
                    px={{ base: 6, md: 12 }}
                    my={"auto"}
                    order={index % 2 === 0 ? 2 : 1}
                  >
                    <Text fontWeight={"semibold"} fontSize={"1.5em"}>
                      {lab.name}
                    </Text>
                    <Text fontSize={"0.9em"} textAlign={"justify"}>
                      {lab.description}
                    </Text>
                    <Button
                      fontWeight={"normal"}
                      mt={2}
                      size={"sm"}
                      py={5}
                      px={6}
                      borderRadius={"full"}
                      colorScheme="purple"
                      onClick={() => window.location = lab.url}
                    >
                      Enter Lab
                    </Button>
                  </Box>
                </SimpleGrid>
                <Divider />
              </>
            ))}
          </VStack>
        </Center>
      </Box>
    </>
  );
}

export default Labs;
