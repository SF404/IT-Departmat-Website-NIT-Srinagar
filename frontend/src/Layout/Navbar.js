import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import mainLogo from "./../assets/images/download.webp";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { motion } from "framer-motion";
import { PiDotsNineBold } from "react-icons/pi";

function NavLinks({ color = "white", isOpen = null, onClose = null }) {
  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (isOpen) onClose();
  };
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
        >
          Academics
        </MenuButton>
        <MenuList boxShadow={"lg"}>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/degree-program"
          >
            Degree Program
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/vision-mission"
          >
            Vision and Mission
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/outcomes"
          >
            Outcomes
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/courses"
          >
            Courses
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/coordinators"
          >
            Coordinators
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/committee"
          >
            Committee
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
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
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/faculty"
          >
            Faculty
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/phd-students"
          >
            PhD Student
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/btech-students"
          >
            B-Tech Student
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/alumni"
          >
            Alumni
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
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
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/areas"
          >
            Areas
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/papers"
          >
            Papers
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
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
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/awards"
          >
            Awards
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/facilities"
          >
            Facilities
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/placement-brochure"
          >
            Placement Brochure
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
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
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/semester/all"
          >
            Semester All
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/semester/1"
          >
            Semester 1
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/semester/2"
          >
            Semester 2
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/semester/3"
          >
            Semester 3
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/semester/4"
          >
            Semester 4
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/semester/5"
          >
            Semester 5
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/semester/6"
          >
            Semester 6
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/semester/7"
          >
            Semester 7
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/semester/8"
          >
            Semester 8
          </MenuItem>
          <MenuItem
            as={Link}
            _hover={{ color: "darkblue" }}
            onClick={handleNavigation}
            to="/tutorials"
          >
            Tutorials
          </MenuItem>
          {/* <MenuItem as={Link} _hover={{ color: 'darkblue' }} onClick={handleNavigation} to="/phd">
            Phd
          </MenuItem>
          <MenuItem as={Link} _hover={{ color: 'darkblue' }} onClick={handleNavigation} to="/others">
            Others
          </MenuItem> */}
        </MenuList>
      </Menu>

      <Button
        onClick={handleNavigation}
        variant="ghost"
        colorScheme="whiteAlpha"
        color={color}
        fontWeight={"normal"}
        as={Link}
        to="/contact-us"
      >
        Contact Us
      </Button>
      <Button
        onClick={handleNavigation}
        variant="ghost"
        colorScheme="whiteAlpha"
        color={color}
        as={Link}
        to={localStorage.getItem("TokenA") ? "/dashboard" : "/login"}
        borderRadius={"full"}
        position={"absolute"}
        right={"10px"}
        size={"sm"}
        fontWeight={"normal"}
        bg={"whiteAlpha.200"}
        lineHeight={0}
        px={"1.5em"}
        my={"auto"}
      >
        {localStorage.getItem("TokenA") ? (
          <Box fontSize={"1.5em"}>
            <PiDotsNineBold />
          </Box>
        ) : (
          "Login"
        )}
      </Button>
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
          fontSize={{ base: "sm", md: "lg" }}
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
