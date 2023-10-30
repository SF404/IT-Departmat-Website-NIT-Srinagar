import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Portal,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
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
} from "@chakra-ui/react";
import React from "react";
import mainLogo from "../../assets/images/download.webp";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

function NavLinks({ color }) {
  return (
    <>
      <Button
        variant="ghost"
        colorScheme="whiteAlpha"
        color={color}
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
        >
          Academics
        </MenuButton>
        <MenuList bg="whitesmoke">
          <MenuItem as={Link} to="/degree-program">
            Degree Program
          </MenuItem>
          <MenuItem as={Link} to="/vision-mission">
            Vision and Mission
          </MenuItem>
          <MenuItem as={Link} to="/outcomes">
            Outcomes
          </MenuItem>
          <MenuItem as={Link} to="/courses">
            Courses
          </MenuItem>
          <MenuItem as={Link} to="/coordinators">
            Coordinators
          </MenuItem>
          <MenuItem as={Link} to="/committee">
            Committee
          </MenuItem>
          <MenuItem as={Link} to="/newsletter">
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
        >
          People
        </MenuButton>
        <MenuList bg="whitesmoke">
          <MenuItem as={Link} to="/faculty">
            Faculty
          </MenuItem>
          <MenuItem as={Link} to="/phd-students">
            PhD Student
          </MenuItem>
          <MenuItem as={Link} to="/btech-students">
            B-Tech Student
          </MenuItem>
          <MenuItem as={Link} to="/staff">
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
        >
          For Faculty
        </MenuButton>
        <MenuList bg="whitesmoke">
          <MenuItem as={Link} to="/dashboard">
            Dashboard
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          variant="ghost"
          colorScheme="whiteAlpha"
          color={color}
        >
          Research
        </MenuButton>
        <MenuList bg="whitesmoke">
          <MenuItem as={Link} to="/areas">
            Areas
          </MenuItem>
          <MenuItem as={Link} to="/papers">
            Papers
          </MenuItem>
          <MenuItem as={Link} to="/labs">
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
        >
          Student Activities
        </MenuButton>
        <MenuList bg="whitesmoke">
          <MenuItem as={Link} to="/awards">
            Awards
          </MenuItem>
          <MenuItem as={Link} to="/">
            Facilities
          </MenuItem>
          <MenuItem as={Link} to="/">
            Placement Brochure
          </MenuItem>
          <MenuItem as={Link} to="/">
            Graduate Batch Photos
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          variant="ghost"
          colorScheme="whiteAlpha"
          color={color}
        >
          For Students
        </MenuButton>
        <MenuList bg="whitesmoke">
          <MenuItem as={Link} to="/semester/1">
            Semester 1
          </MenuItem>
          <MenuItem as={Link} to="/semester/2">
            Semester 2
          </MenuItem>
          <MenuItem as={Link} to="/semester/3">
            Semester 3
          </MenuItem>
          <MenuItem as={Link} to="/semester/4">
            Semester 4
          </MenuItem>
          <MenuItem as={Link} to="/semester/5">
            Semester 5
          </MenuItem>
          <MenuItem as={Link} to="/semester/6">
            Semester 6
          </MenuItem>
          <MenuItem as={Link} to="/semester/7">
            Semester 7
          </MenuItem>
          <MenuItem as={Link} to="/semester/8">
            Semester 8
          </MenuItem>
          <MenuItem as={Link} to="/semester/all">
            Semester All
          </MenuItem>
          <MenuItem as={Link} to="/phd">
            Phd
          </MenuItem>
          <MenuItem as={Link} to="/others">
            Others
          </MenuItem>
        </MenuList>
      </Menu>

      <Button
        variant="ghost"
        colorScheme="whiteAlpha"
        color={color}
        as={Link}
        to="/about"
      >
        About
      </Button>
    </>
  );
}

function Navbar() {
  const {
    isOpen: isNavOpen,
    onOpen: openNav,
    onClose: closeNav,
  } = useDisclosure();
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
        boxShadow={"0 2px 12px rgba(0,0,0,0.5)"}
      >
        <Stack
          as={"nav"}
          direction={{ base: "column", md: "row" }}
          spacing="2"
          align="stretch"
          display={{ base: "none", md: "flex" }}
        >
          <NavLinks color={"white"} />
        </Stack>

        {/* Mobile Navigation Icon */}

        <IconButton
          isActive={isNavOpen}
          aria-label="Open Menue"
          size={"lg"}
          icon={<FaBarsStaggered />}
          variant="ghost"
          color={"white"}
          colorScheme="whiteAlpha"
          display={{ md: "none" }}
          onClick={isNavOpen ? closeNav : openNav}
        />

        {/* <Modal m={4} onClose={closeNav} isOpen={isNavOpen} motionPreset='slideInRight' >
                    <ModalOverlay />
                    <ModalContent w={'100%'} minH={'96%'} m={3} bg={'white'} color={'black'}
                        initial={{ transform: 'translateX(100%)' }}
                        animate={{ transform: 'translateX(40%)' }}
                        transition={{ duration: 0.1, ease: 'ease-in' }}
                    >
                        <ModalHeader></ModalHeader>
                        <ModalBody>
                            <ModalCloseButton position="absolute" top="10px" left="10px" border={'1px solid gray'} borderRadius={'full'} />
                        </ModalBody>
                    </ModalContent>
                </Modal> */}
      </Flex>
      <Drawer placement={"right"} onClose={closeNav} isOpen={isNavOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <NavLinks color={"black"} colorScheme={"blackAlpha"} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
