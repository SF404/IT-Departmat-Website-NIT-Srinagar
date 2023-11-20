import { Box, Flex, Text, Button, VStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Image, Stack, HStack, useDisclosure, Tooltip, } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import mainLogo from "./../assets/images/download.webp";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { motion } from "framer-motion";
import { PiDotsNineBold } from "react-icons/pi";

function NavLinks({ color = "white", isOpen = null, onClose = null }) {
  const handleNavigation = () => {
    if (isOpen) onClose();
  };

  const [login, setLogin] = useState(false);
  useEffect(() => {
    function func() {
      localStorage.getItem('TokenA') ? setLogin(true) : setLogin(false);
    }
    return () => func();
  }, [])

  return (
    <>
      <Button
        onClick={handleNavigation}
        variant="ghost"
        colorScheme="whiteAlpha"
        color={color}
        fontWeight={"normal"}
        as={Link}
        to="/"
      >
        Home
      </Button>

      <Menu>
        <MenuButton
          as={Button}
          variant="ghost"
          colorScheme="whiteAlpha"
          color={color}
          fontWeight={"normal"}
          fontSize={'14px'} 
        >
          Academics
        </MenuButton>
        <MenuList boxShadow={"lg"}>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/degree-program"
          >
            Degree Program
          </MenuItem>

          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/outcomes"
          >
            Outcomes
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/courses"
          >
            Courses
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/coordinators"
          >
            Coordinators
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/committee"
          >
            Committee
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/vision-mission"
          >
            Vision and Mission
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/newsletter"
          >
            Department Newsletter
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          variant="ghost"
          colorScheme="whiteAlpha"
          color={color}
          fontWeight={"normal"}
        >
          People
        </MenuButton>
        <MenuList boxShadow={"lg"}>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/faculty"
          >
            Faculty
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/phd-students"
          >
            PhD Student
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/btech-students"
          >
            B-Tech Student
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/alumni"
          >
            Alumni
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/staff"
          >
            Staff
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          variant="ghost"
          colorScheme="whiteAlpha"
          color={color}
          fontWeight={"normal"}
        >
          Research
        </MenuButton>
        <MenuList boxShadow={"lg"}>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/areas"
          >
            Areas
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/papers"
          >
            Papers
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/labs"
          >
            LABs
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          variant="ghost"
          colorScheme="whiteAlpha"
          color={color}
          fontWeight={"normal"}
        >
          Student Activities
        </MenuButton>
        <MenuList boxShadow={"lg"}>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/awards"
          >
            Awards
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/facilities"
          >
            Facilities
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/placement-brochure"
          >
            Placement Brochure
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/gallery"
          >
            Gallery
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu colorScheme="blackAlpha">
        <MenuButton
          as={Button}
          variant="ghost"
          colorScheme="whiteAlpha"
          color={color}
          fontWeight={"normal"}
        >
          For Students
        </MenuButton>
        <MenuList boxShadow={"lg"}>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/semester/all"
          >
            Semester All
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "#192e59" }}
            onClick={handleNavigation}
            to="/tutorials"
          >
            Tutorials
          </MenuItem>
        </MenuList>
      </Menu>

      {/* <Button
        onClick={handleNavigation}
        variant="ghost"
        colorScheme="whiteAlpha"
        color={color}
        fontWeight={"normal"}
        as={Link}
        to="/contact-us"
      >
        Contact Us
      </Button> */}
      <HStack position={"absolute"} right={'20px'}>
        {!login ?
          (<Button variant={"ghost"} onClick={handleNavigation} as={Link} to={'/login'} px={4} bg={'whiteAlpha.200'} color={"whiteAlpha.900"} borderRadius={"full"} colorScheme="whiteAlpha" fontWeight={"normal"} size={'sm'} >Login</Button>) :
          (
            <Tooltip label={'Dashboard'} hasArrow>
              <IconButton as={Link} to={'/dashboard'} variant={"ghost"} colorScheme="whiteAlpha" color={"white"} fontSize={'1.5em'} icon={<PiDotsNineBold />} />
            </Tooltip>
          )
        }
      </HStack>
    </>
  );
}

function Navbar() {
  const { getButtonProps, getDisclosureProps, isOpen, onClose } =
    useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);
  return (
    <>
      <Box
        h={"64px"}
        display={"flex"}
        zIndex={99}
        alignItems={"center"}
        px={"10px"}
        bg={"white"} 
      >
        <Image src={mainLogo} h={"50px"} w={"50px"} alt="logo" />
        <Text
          mx={"10px"}
          fontSize={{ base: "sm", md: "md" }}
          fontWeight={"bold"}
        >
          DEPARTMENT OF INFORMATION TECHNOLOGY <br />{" "}
          <small>National Institute Of Technology, Srinagar</small>
        </Text>
      </Box>
      <Flex
        align="center"
        h={"46px"}
        zIndex={99}
        justify="space-between"
        p="0"
        px={2}
        bg="#192e59"
        color="#192e59"
        position={"sticky"}
        top={0}
        boxShadow={"0 4px 12px rgba(0,0,0,0.2)"}
      >
        <Stack
          as={"nav"}
          direction={{ base: "column", md: "row" }}
          spacing="2"
          align="stretch"
          display={{ base: "none", lg: "flex" }}
          alignItems={"center"}
          className="family-5"
          fontSize={"14px"}
        >
          <NavLinks color={"white"} />
        </Stack>

        {/* Mobile Navigation Icon */}

        <IconButton
          isActive={isOpen}
          variant={"ghost"}
          textAlign={"center"}
          justifyContent={"center"}
          color={"white"}
          colorScheme="whiteAlpha"
          display={{ base: "flex", lg: "none" }}
          alignItems={"center"}
          icon={isOpen ? <FaX /> : <FaBarsStaggered />}
          {...getButtonProps()}
        />
        <motion.div
          {...getDisclosureProps()}
          hidden={hidden}
          initial={false}
          onAnimationStart={() => setHidden(false)}
          onAnimationComplete={() => setHidden(!isOpen)}
          animate={{ width: isOpen ? 250 : 0 }}
          style={{
            background: "white",
            whiteSpace: "nowrap",
            height: "100vh",
            maxWidth: "300px",
            boxShadow: "2px 0px 8px rgba(0, 0, 0, 0.05)",
            position: "absolute",
            left: "0",
            top: "46px",
          }}
        >
          {isOpen && (
            <VStack alignItems={"flex-start"} padding={"1em"}>
              <NavLinks
                color={"black"}
                colorScheme={"blackAlpha"}
                isOpen={isOpen}
                onClose={onClose}
              />
            </VStack>
          )}
        </motion.div>
      </Flex>
    </>
  );
}

export default Navbar;