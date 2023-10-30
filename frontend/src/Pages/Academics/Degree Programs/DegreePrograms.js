import React, { useState } from "react";
import {
  WrapItem,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  UnorderedList,
  ListItem,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import bannerImage from "./../../../assets/images/image.webp";

import "./DegreePrograms.css"; // Import the CSS file

function MyComponent() {
  const [showText, setShowText] = useState(false);
  const [isBtechProgram, setIsBtechProgram] = useState(false);
  const [isPhdProgram, setIsPhdProgram] = useState(false);

  const handleMouseEnter = (text) => {
    setShowText(true);
    setIsBtechProgram(text === "B.Tech Program");
    setIsPhdProgram(text === "Ph.D. Program");
  };

  const handleMouseLeave = () => {
    setShowText(false);
    setIsBtechProgram(false);
    setIsPhdProgram(false);
  };

  const btechProgramText = `The Department of Information Technology in NIT Srinagar was established in 2007, offering a four-year undergraduate program (B.Tech) in Information Technology. This undergraduate program is of 4 years duration with the first year spread over two semesters which is common to all the branches. The intake capacity of the department was 40 in 2007 and then subsequently increased to 90 in 2020. The Department offers a broad curriculum including: Database Management Software Engineering, Management of Information Systems, Data mining, Computer Graphics, Advanced Internet Technology, Computer Networks, Operating System, Data Structures and Algorithm as the main courses and other courses in collaboration with the other departments of the institute at the undergraduate level.`;

  const phdProgramText = `The Department of Information Technology at NIT Srinagar also offers a PhD program in Information Technology. The PhD program provides students with the opportunity to conduct in-depth research in various IT fields and contribute to cutting-edge developments in the industry. Students pursuing a PhD in Information Technology can explore a wide range of research areas and collaborate with faculty members on innovative projects.`;

  const item = {
    name: isBtechProgram
      ? "B.Tech Program"
      : isPhdProgram
      ? "Ph.D. Program"
      : "",
    speciality: isBtechProgram
      ? btechProgramText
      : isPhdProgram
      ? phdProgramText
      : "",
  };

  return (
    <div>
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
          Degree Program
        </Heading>
      </VStack>
      <WrapItem ml={2}>
        <UnorderedList>
          <ListItem>
            <Popover placement="auto">
              <PopoverTrigger>
                <Button
                  className="button-container"
                  variant="solid"
                  onMouseEnter={() => handleMouseEnter("B.Tech Program")}
                  onMouseLeave={handleMouseLeave}
                >
                  B.Tech Program
                </Button>
              </PopoverTrigger>
              <PopoverContent
                boxShadow="0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
                _focus={{ outline: "none", boxShadow: "none" }}
                borderColor={"black"}
                bg={"#c5cae8"}
                fontFamily={"sans-serif"}
                borderRadius={10}
                color="darkblue"
              >
                <PopoverArrow bg={"white"} />
                <PopoverBody _focus={{ outline: "none" }}>
                  {showText && (
                    <Typewriter
                      options={{
                        strings: [item.speciality, "Thank You"],
                        autoStart: true,
                        loop: true,
                        delay: 20,
                        deleteSpeed: 10,
                      }}
                    />
                  )}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </ListItem>
          <ListItem>
            <Popover placement="auto">
              <PopoverTrigger>
                <Button
                  className="button-container"
                  variant="solid"
                  onMouseEnter={() => handleMouseEnter("Ph.D. Program")}
                  onMouseLeave={handleMouseLeave}
                >
                  PhD. Program
                </Button>
              </PopoverTrigger>
              <PopoverContent
                boxShadow="0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
                _focus={{ outline: "none", boxShadow: "none" }}
                borderColor={"black"}
                bg={"#c5cae8"}
                fontFamily={"sans-serif"}
                borderRadius={10}
                color="darkblue"
              >
                <PopoverArrow bg={"white"} />
                <PopoverBody _focus={{ outline: "none" }}>
                  {showText && (
                    <Typewriter
                      options={{
                        strings: [item.speciality, "Thank You"],
                        autoStart: true,
                        loop: true,
                        delay: 20,
                        deleteSpeed: 10,
                      }}
                    />
                  )}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </ListItem>
        </UnorderedList>
      </WrapItem>
    </div>
  );
}

export default MyComponent;
