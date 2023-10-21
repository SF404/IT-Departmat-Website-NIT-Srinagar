import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'

import { Image, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import mainLogo from '../../assets/images/download.jpeg'
import { Link } from 'react-router-dom';



const Links = ['Dashboard', 'Projects', 'Team']




export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box h={'64px'} display={'flex'} alignItems={'center'} px={'10px'}>
                <Image src={mainLogo} h={50} />
                <Text mx={'10px'} fontWeight={'bold'}>DEPARTMENT OF INFORMATION TECHNOLOGY <br /> <small>National Institute Of Technology, Srinagar</small></Text>
            </Box>
            <Flex h={'46PX'} alignItems={'center'} justifyContent={'space-between'}  h={'46px'}
                    zIndex={99}
                    justify="space-between"
                    p="0"
                    bg="#192e59"
                    color="#192e59"
                    position={'sticky'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'} align="center"
                   >
                    <Box>Logo</Box>
                    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                        <Button variant="ghost" colorScheme="whiteAlpha" color={'white'} as={Link} to="/">
                            Home
                        </Button>

                        <Menu>
                            <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
                                Academics
                            </MenuButton>
                            <MenuList bg='whitesmoke'>
                                <MenuItem as={Link} to="/degree-program">Degree Program</MenuItem>
                                <MenuItem as={Link} to="/vision-mission">Vision and Mission</MenuItem>
                                <MenuItem as={Link} to="/outcomes">Outcomes</MenuItem>
                                <MenuItem as={Link} to="/courses">Courses</MenuItem>
                                <MenuItem as={Link} to="/coordinators">Coordinators</MenuItem>
                                <MenuItem as={Link} to="/committee">Committee</MenuItem>
                                <MenuItem as={Link} to="/newsletter">Department Newsletter</MenuItem>
                            </MenuList>
                        </Menu>

                        <Menu>
                            <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
                                People
                            </MenuButton>
                            <MenuList bg='whitesmoke'>
                                <MenuItem as={Link} to="/faculty">Faculty</MenuItem>
                                <MenuItem as={Link} to="/phd-students">PhD Student</MenuItem>
                                <MenuItem as={Link} to="/btech-students">B-Tech Student</MenuItem>
                                <MenuItem as={Link} to="/staff">Staff</MenuItem>
                            </MenuList>
                        </Menu>

                        <Menu>
                            <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
                                For Faculty
                            </MenuButton>
                            <MenuList bg='whitesmoke'>
                                <MenuItem as={Link} to="/dashboard">Dashboard</MenuItem>
                            </MenuList>
                        </Menu>

                        <Menu>
                            <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
                                Research
                            </MenuButton>
                            <MenuList bg='whitesmoke'>
                                <MenuItem as={Link} to="/areas">Areas</MenuItem>
                                <MenuItem as={Link} to="/papers">Papers</MenuItem>
                                <MenuItem as={Link} to="/labs">LABs</MenuItem>
                            </MenuList>
                        </Menu>

                        <Menu>
                            <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
                                Student Activities
                            </MenuButton>
                            <MenuList bg='whitesmoke'>
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
                            <MenuList bg='whitesmoke'>
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
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}>
                            <Avatar
                                size={'sm'}
                                src={
                                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                }
                            />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Link 1</MenuItem>
                            <MenuItem>Link 2</MenuItem>
                            <MenuDivider />
                            <MenuItem>Link 3</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }} bg={'green'}>
                    <Stack as={'nav'} spacing={4}>
                    <Button variant="ghost" colorScheme="whiteAlpha" color={'white'} as={Link} to="/">
                            Home
                        </Button>

                        <Menu>
                            <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
                                Academics
                            </MenuButton>
                            <MenuList bg='whitesmoke'>
                                <MenuItem as={Link} to="/degree-program">Degree Program</MenuItem>
                                <MenuItem as={Link} to="/vision-mission">Vision and Mission</MenuItem>
                                <MenuItem as={Link} to="/outcomes">Outcomes</MenuItem>
                                <MenuItem as={Link} to="/courses">Courses</MenuItem>
                                <MenuItem as={Link} to="/coordinators">Coordinators</MenuItem>
                                <MenuItem as={Link} to="/committee">Committee</MenuItem>
                                <MenuItem as={Link} to="/newsletter">Department Newsletter</MenuItem>
                            </MenuList>
                        </Menu>

                        <Menu>
                            <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
                                People
                            </MenuButton>
                            <MenuList bg='whitesmoke'>
                                <MenuItem as={Link} to="/faculty">Faculty</MenuItem>
                                <MenuItem as={Link} to="/phd-students">PhD Student</MenuItem>
                                <MenuItem as={Link} to="/btech-students">B-Tech Student</MenuItem>
                                <MenuItem as={Link} to="/staff">Staff</MenuItem>
                            </MenuList>
                        </Menu>

                        <Menu>
                            <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
                                For Faculty
                            </MenuButton>
                            <MenuList bg='whitesmoke'>
                                <MenuItem as={Link} to="/dashboard">Dashboard</MenuItem>
                            </MenuList>
                        </Menu>

                        <Menu>
                            <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
                                Research
                            </MenuButton>
                            <MenuList bg='whitesmoke'>
                                <MenuItem as={Link} to="/areas">Areas</MenuItem>
                                <MenuItem as={Link} to="/papers">Papers</MenuItem>
                                <MenuItem as={Link} to="/labs">LABs</MenuItem>
                            </MenuList>
                        </Menu>

                        <Menu>
                            <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha" color={'white'}>
                                Student Activities
                            </MenuButton>
                            <MenuList bg='whitesmoke'>
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
                            <MenuList bg='whitesmoke'>
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
                </Box>
            ) : null}

            <Box p={4}>Main Content Here</Box>
        </>
    )
}