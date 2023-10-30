import React from "react";
import bannerImage from "./../../../assets/images/image.webp";
import {
  Container,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import "./Outcomes.css"; // Import the CSS file

function Outcomes() {
  return (
    <VStack
      w="full"
      // h="200px"
      //backgroundImage={`url(${bannerImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      className="container-style" // Apply the container styles using the class name
    >
      <VStack
        w={"full"}
        h={"200px"}
        bg={"brown"}
        color={"white"}
        p={6}
        backgroundImage={bannerImage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        textShadow={"0 0 24px black"}
      >
        <Heading as="h2" size="xl" mb={2}>
          Outcomes
        </Heading>
      </VStack>
      <Box className="container-style">
        <Box>
          <Heading as="h3" className="section-heading-style">
            Programme Educational Objectives (PEOs)
          </Heading>
          <UnorderedList className="list-item-style">
            <ListItem>
              To prepare students to get employed and/or to pursue higher
              education and research in IT discipline in particular and allied
              engineering fields in general.
            </ListItem>
            <ListItem>
              To prepare students to develop effective IT solutions for
              real-world problems.
            </ListItem>
            <ListItem>
              To motivate students for creating startups generating employment
              for the society.
            </ListItem>
            <ListItem>
              To develop high moral, ethical and societal responsibilities among
              the students for their life-long learning.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" className="section-heading-style">
            Programme Specific Objectives (PSOs)
          </Heading>
          <UnorderedList className="list-item-style">
            <ListItem>
              Graduates should be creative, imaginative and proficient IT
              engineers employable to serve in the industry, academia, and
              allied services.
            </ListItem>
            <ListItem>
              Graduates should be able to advance in academic and research
              pursuits in IT and allied disciplines.
            </ListItem>
            <ListItem>
              Graduates should take a lead in innovation and entrepreneurship
              activities with high standards of professional and moral ethics
              and prove themselves beneficial to society at large.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" className="section-heading-style">
            Programme Outcomes (POs)
          </Heading>
          <UnorderedList className="list-item-style">
            <ListItem>
              Apply the knowledge of mathematics, science, engineering
              fundamentals, and an engineering specialization to the solution of
              complex engineering problems.
            </ListItem>
            <ListItem>
              Design solutions for complex engineering problems and design
              system components or processes that meet the specified needs with
              appropriate consideration for the public health and safety, and
              the cultural, societal, and environmental considerations.
            </ListItem>
            <ListItem>
              Create, select, and apply appropriate techniques, resources, and
              modern engineering and IT tools including prediction and modeling
              to complex engineering activities with an understanding of the
              limitations.
            </ListItem>
            <ListItem>
              Understand the impact of the professional engineering solutions in
              societal and environmental contexts and demonstrate the knowledge
              of, and need for sustainable development.
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </VStack>
  );
}

export default Outcomes;
