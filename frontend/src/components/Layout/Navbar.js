import { Image, Stack } from '@chakra-ui/react'
import { Box, Flex, Text, Button, VStack, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react'
import mainLogo from '../../assets/images/download.jpeg'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <Box h={'64px'} display={'flex'} alignItems={'center'} px={'10px'}>
                <Image src={mainLogo} h={50} />
                <Text mx={'10px'} fontWeight={'bold'}>DEPARTMENT OF INFORMATION TECHNOLOGY <br /> <small>National Institute Of Technology, Srinagar</small></Text>
            </Box>
            <Flex align="center" h={'46px'} zIndex={9999} justify="space-between" p="0" bg="#192e59" color="#192e59">
                {/* <Text fontSize="2xl" fontWeight="bold">
                    Your Logo
                </Text> */}

                <Stack direction={'row'} spacing="2" align="stretch" display={{ base: 'none', md: 'flex' }}>
                    <Button variant="ghost" colorScheme="whiteAlpha" color={'whiteAlpha.800'} as={Link} to="/">
                        Home
                    </Button>

                    <Menu>
                        <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'whiteAlpha.800'}>
                            Academics
                        </MenuButton>
                        <MenuList>
                            <MenuItem as={Link} to="/degree_program">Degree Program</MenuItem>
                            <MenuItem as={Link} to="/vision">Vision and Mission</MenuItem>
                            <MenuItem as={Link} to="/outcomes">Outcomes</MenuItem>
                            <MenuItem as={Link} to="/cources">Courses</MenuItem>
                            <MenuItem as={Link} to="/coordinates">Coordinators</MenuItem>
                            <MenuItem as={Link} to="/committee">Committee</MenuItem>
                            <MenuItem as={Link} to="/newsletter">Department Newsletter</MenuItem>
                        </MenuList>
                    </Menu>

                    <Menu>
                        <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'whiteAlpha.800'}>
                            People
                        </MenuButton>
                        <MenuList>
                            <MenuItem as={Link} to="/faculty">Faculty</MenuItem>
                            <MenuItem as={Link} to="/phd_students">PhD Student</MenuItem>
                            <MenuItem as={Link} to="/btech_students">B-Tech Student</MenuItem>
                            <MenuItem as={Link} to="/staff">Staff</MenuItem>
                        </MenuList>
                    </Menu>

                    <Menu>
                        <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'whiteAlpha.800'}>
                            Research
                        </MenuButton>
                        <MenuList>
                            <MenuItem as={Link} to="/areas">Areas</MenuItem>
                            <MenuItem as={Link} to="/papers">Papers</MenuItem>
                            <MenuItem as={Link} to="/labs">LABs</MenuItem>
                        </MenuList>
                    </Menu>

                    <Menu>
                        <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'whiteAlpha.800'}>
                            Student Activities
                        </MenuButton>
                        <MenuList>
                            <MenuItem as={Link} to="/awards">Awards</MenuItem>
                            <MenuItem as={Link} to="/">Facilities</MenuItem>
                            <MenuItem as={Link} to="/">Placement Brochure</MenuItem>
                            <MenuItem as={Link} to="/">Graduate Batch Photos</MenuItem>
                        </MenuList>
                    </Menu>

                    <Menu>
                        <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'whiteAlpha.800'}>
                            For Faculty
                        </MenuButton>
                        <MenuList>
                            <MenuItem as={Link} to="/dashboard">Dashboard</MenuItem>
                        </MenuList>
                    </Menu>

                    <Button variant="ghost" colorScheme="whiteAlpha" color={'whiteAlpha.800'} as={Link} to="/about">
                        About
                    </Button>
                </Stack>

                {/* Mobile Navigation Icon */}
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    icon={<Box as="span" fontSize="xl">&#9776;</Box>}
                    variant="ghost"
                    colorScheme="whiteAlpha" color={'whiteAlpha.800'}
                    onClick={() => {/* Handle mobile menu toggle */ }}
                />
            </Flex>
        </>
    )
}

export default Navbar
