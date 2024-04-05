import React from 'react'
import { Button, Flex, Menu, MenuButton, MenuList, MenuItem, DarkMode, Image, Popover, PopoverTrigger, IconButton, PopoverContent, PopoverArrow, Box, } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { PiKeyDuotone } from "react-icons/pi";
import whitelogo from './../../Assets/Logos/whitelogo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import PopOver from './PopOver';


const Navbar = () => {

  const links = [
    {
      "type": "button",
      "label": "Home",
      "to": "/"
    },
    {
      "type": "menu",
      "menuLabel": "Academics",
      "menuButtons": [
        { "label": "Degree Program", "to": "/degree-program" },
        { "label": "Outcomes", "to": "/outcomes" },
        { "label": "Courses", "to": "/courses" },
        { "label": "Semesters", "to": "/semesters" },
        // { "label": "Committee", "to": "/committee" },
        { "label": "Vision and Mission", "to": "/vision-mission" },
        { "label": "Department Newsletter", "to": "/newsletter" }
      ]
    },
    {
      "type": "menu",
      "menuLabel": "People",
      "menuButtons": [
        { "label": "Faculty", "to": "/faculty" },
        { "label": "PhD Scholars", "to": "/phd-scholars" },
        { "label": "B-Tech Student", "to": "/btech-students" },
        { "label": "Alumni", "to": "/alumni" },
        // { "label": "Staff", "to": "/staff" }
      ]
    },
    {
      "type": "menu",
      "menuLabel": "Research",
      "menuButtons": [
        { "label": "Areas", "to": "/areas" },
        { "label": "Papers", "to": "/research-papers" },
        { "label": "Projects", "to": "/projects" },
        { "label": "LABs", "to": "/labs" }
      ]
    },
    {
      "type": "menu",
      "menuLabel": "Student Activities",
      "menuButtons": [
        // { "label": "Awards", "to": "/awards" },
        // { "label": "Facilities", "to": "/facilities" },
        { "label": "Placements", "to": "/placements" },
        { "label": "Gallery", "to": "/gallery" }
      ]
    },
    {
      "type": "button",
      "label": "Downloads",
      "to": "/downloads"
    },
    {
      "type": "button",
      "label": "Contact us",
      "to": "/contact-us"
    },
    // {
    //   "type": "button",
    //   "label": "Dashboard",
    //   "to": "/dashboard"
    // }
  ]


  const navigate = useNavigate();

  return (
    <>
      {/* <Box height={'10px'} bg={'orange'}></Box> */}
      <Box position={'sticky'} top={0} zIndex={999} border={'none'} bg={'linear-gradient(32deg, rgba(74,40,110,1) 0%, rgba(9,9,121,1) 35%, rgba(48,82,89,1) 100%)'} >
        <Flex w={'full'} h={'64px'} background={'rgba(0,0,0,0.3)'} boxShadow={"0 4px 12px rgba(0,0,0,0.2)"} justifyContent={'space-between'} alignItems={'center'} fontFamily={'exo'} px={4}
        >
          <Flex alignItems={'center'} >
            <Image src={whitelogo} alt={'logo'} width={'45px'} mr={4} opacity={0.9}></Image>

            <Box
              display={{ base: "none", md: "flex" }}
              width={{ base: "full", md: "auto" }}
              alignItems="center"
              flexGrow={1}
            >
              {links.map((link, index) =>
                link.type === "button" ? (
                  <Button
                    variant={'navbar'}
                    key={index}
                    as={Link}
                    to={link.to}
                  >
                    {link.label}
                  </Button>
                ) : (
                  <Menu key={index}>
                    <MenuButton
                      as={Button}
                      variant={'navbar'}
                      rightIcon={<ChevronDownIcon />}
                    >
                      {link.menuLabel}
                    </MenuButton>
                    <MenuList boxShadow={"lg"}>
                      {link.menuButtons.map((menuLink, menuIndex) => (
                        <MenuItem
                          key={menuIndex}
                          as={Link}
                          to={menuLink.to}
                        >
                          {menuLink.label}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                )
              )}
            </Box>

          </Flex>

          <PopOver />
        </Flex>


      </Box>
    </>
  )
}

export default Navbar