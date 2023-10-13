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
            <Flex align="center" h={'46px'} zIndex={99} justify="space-between" p="0" bg="#192e59" color="#192e59" position={'sticky'} top={0}>
                <Stack direction={'row'} spacing="2" align="stretch" display={{ base: 'none', md: 'flex' }}>
                    <Button variant="ghost" colorScheme="whiteAlpha" color={'white'} as={Link} to="/">
                        Home
                    </Button>

                    <Menu>
                        <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
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
                        <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
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
                        <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
                            For Faculty
                        </MenuButton>
                        <MenuList>
                            <MenuItem as={Link} to="/dashboard">Dashboard</MenuItem>
                        </MenuList>
                    </Menu>

                    <Menu>
                        <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
                            Research
                        </MenuButton>
                        <MenuList>
                            <MenuItem as={Link} to="/areas">Areas</MenuItem>
                            <MenuItem as={Link} to="/papers">Papers</MenuItem>
                            <MenuItem as={Link} to="/labs">LABs</MenuItem>
                        </MenuList>
                    </Menu>

                    <Menu>
                        <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
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
                        <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
                            For Students
                        </MenuButton>
                        <MenuList>
                            <MenuItem as={Link} to="/semester/1">Semester 1</MenuItem>
                            <MenuItem as={Link} to="/semester/2">Semester 2</MenuItem>
                            <MenuItem as={Link} to="/semester/3">Semester 3</MenuItem>
                            <MenuItem as={Link} to="/semester/4">Semester 4</MenuItem>
                            <MenuItem as={Link} to="/semester/5">Semester 5</MenuItem>
                            <MenuItem as={Link} to="/semester/6">Semester 6</MenuItem>
                            <MenuItem as={Link} to="/semester/7">Semester 7</MenuItem>
                            <MenuItem as={Link} to="/semester/8">Semester 8</MenuItem>
                            <MenuItem as={Link} to="/semester/all">Semester All</MenuItem>
                            <MenuItem as={Link} to="/phd">Phd</MenuItem>
                            <MenuItem as={Link} to="/others">Others</MenuItem>
                        </MenuList>
                    </Menu>

                    <Button variant="ghost" colorScheme="whiteAlpha" color={'white'} as={Link} to="/about">
                        About
                    </Button>
                </Stack>

                {/* Mobile Navigation Icon */}
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    icon={<Box as="span" fontSize="xl">&#9776;</Box>}
                    variant="ghost"
                    colorScheme="whiteAlpha" color={'white'}
                    onClick={() => {/* Handle mobile menu toggle */ }}
                />
            </Flex>
        </>
    )
}

export default Navbar
