import React, { useState } from "react";
import { Link,} from "react-router-dom";
import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Divider,
  Center,
  Badge,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import SmallBanner from "../../Layout/SmallBanner";
import project from "./../../assets/images/computer.webp";

function VideoBox({ title, description, image, tags, link, teacher_name }) {
  return (
    <Link href={link} isExternal>
      <Box
        borderRadius="lg"
        bg={"transparent"}
        _hover={{ cursor: "pointer" }}
      >
        <Image src={image} alt={title} borderRadius="lg" />
        <Text fontSize="xl" fontWeight="bold" mt="2" mx={"xl"}>
          {title}
        </Text>
        <Badge mx={"xl"}>{teacher_name}</Badge>
      </Box>
    </Link>
  );
}

const Tutorials = () => {
  const [data, setData] = useState([
    {
      title: "Learn React Basics",
      description: "An introduction to React.js",
      image: project,
      tags: ["React", "Frontend", "JavaScript"],
      link: "https://youtube.com",
      teacher_name: "dr.janib",
    },
    {
      title: "Getting Started with Chakra UI",
      description: "Learn how to use Chakra UI",
      image: project,
      tags: ["Chakra UI", "React", "Styling"],
      link: "https://example.com/chakra-ui-tutorial",
      teacher_name: "dr.janib",
    },
    {
      title: "Learn React Basics",
      description: "An introduction to React.js",
      image: project,
      tags: ["React", "Frontend", "JavaScript"],
      link: "https://example.com/react-tutorial",
      teacher_name: "dr.janib",
    },
    {
      title: "Getting Started with Chakra UI",
      description: "Learn how to use Chakra UI",
      image: project,
      tags: ["Chakra UI", "React", "Styling"],
      link: "https://example.com/chakra-ui-tutorial",
      teacher_name: "dr.janib",
    },
    {
      title: "Learn React Basics",
      description: "An introduction to React.js",
      image: project,
      tags: ["React", "Frontend", "JavaScript"],
      link: "https://example.com/react-tutorial",
      teacher_name: "dr.janib",
    },
    {
      title: "Getting Started with Chakra UI",
      description: "Learn how to use Chakra UI",
      image: project,
      tags: ["Chakra UI", "React", "Styling"],
      link: "https://example.com/chakra-ui-tutorial",
      teacher_name: "dr.janib",
    },
  ]);
  return (
    <>
      <SmallBanner heading={"TUTORIALS"} />
      <Center>
        <Tabs align="center" variant="soft-rounded" colorScheme="facebook" w={{base:"full", md:'90%'}} p={4}>
          <TabList
            textAlign={"left"}
            justifyContent={"flex-start"}
            my={"0.5em"}
          >
            <Tab>Video</Tab>
            <Tab>Blog</Tab>
            <Tab>Other</Tab>
          </TabList>
          <Divider />
          <TabPanels p={0}>
            <TabPanel p={0}>
              <Grid
                templateColumns={{
                  base: "1fr",
                  md: "1fr 1fr",
                  lg: "1fr 1fr 1fr",
                }}
                gap={8}
              >
                {data.map((video, index) => (
                  <GridItem key={index}>
                    <VideoBox {...video} />
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </>
  );
};

export default Tutorials;
