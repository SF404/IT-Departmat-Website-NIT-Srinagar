import { Avatar, Box, Button, Divider, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Announcements from './Announcements';

const SideBar = ({ user, courses, selectedCourse, calenderShow, setCalenderShow, setSelectedCourse, handleMyProfile, currentComponent, setCurrentComponent }) => {
    const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure()
    const [hidden, setHidden] = useState(!isOpen)
    const isMediumDevice = window.innerWidth <= 768;

    return (
        <>
            <Box display={'flex'} width={'fit-content'} height={'full'} bg={'white'} position={'relative'}>
                <VStack width={'64px'} bg={'#c5cae8'} py={2}
                >
                    <IconButton bg={'transparent'}  {...getButtonProps()} icon={hidden ? <RiMenuUnfoldFill /> : <RiMenuFoldFill />}></IconButton>
                    <IconButton bg={'transparent'} icon={<SlCalender />} onClick={() => setCalenderShow(!calenderShow)}></IconButton>

                </VStack>
                <motion.div
                    {...getDisclosureProps()}
                    hidden={hidden}
                    initial={false}
                    onAnimationStart={() => setHidden(false)}
                    onAnimationComplete={() => setHidden(!isOpen)}
                    animate={{ width: isOpen ? 250 : 0 }}
                    style={{
                        background: 'white', overflow: 'hidden', whiteSpace: 'nowrap', left: '64px', height: '100%', maxWidth: '250px', top: '0', boxShadow: '2px 0px 8px rgba(0, 0, 0, 0.05)',
                        ...(isMediumDevice && { position: 'absolute' }),
                    }}

                >

                    <VStack w={'full'} h={'full'} p={4} >
                        <HStack bg={'#c5cae8'} width={'full'} px={2} height={'70px'} borderRadius={16}>
                            <Menu>
                                <MenuButton
                                    as={Avatar}
                                />
                                <MenuList p={4} >
                                    <MenuItem borderRadius={4} onClick={() => handleMyProfile()}>My Profile</MenuItem>
                                    <MenuItem borderRadius={4}>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                            <Text color={'darkblue'} fontWeight={'semibold'}>{user.name}</Text>

                        </HStack>
                        <Divider borderColor={"blackAlpha.300"} my={1} />
                        {courses.map((item) => (

                            <Button w={"full"} justifyContent={"flex-start"} flexWrap={"wrap"} h={30} overflow={"hidden"} bg={"transparent"} borderRadius={"full"} fontSize={13} key={item.id}
                                onClick={() => {
                                    setSelectedCourse(item.course_id);
                                    setCurrentComponent('coursePanel')
                                }}
                                {...(selectedCourse === item.course_id
                                    ? {
                                        backgroundColor: "#d8dcf0",
                                        color: "darkblue",
                                        _hover: { backgroundColor: "#d8dcf0" },
                                    }
                                    : {})}
                                {...(selectedCourse !== item.course_id
                                    ? { _hover: { backgroundColor: "#e5e5e5" } }
                                    : {})}
                                _active={{ color: "darkblue" }}
                            >
                                {item.name}
                            </Button>
                        ))}
                        <Divider borderColor={"blackAlpha.300"} my={1} />
                        <VStack w={"full"}>
                            <Button w={"full"} justifyContent={"flex-start"} borderRadius={"full"} fontSize={13} h={30} overflow={"hidden"} bg={"transparent"}
                                onClick={() => {
                                    setCurrentComponent('AnnouncementsPanel');
                                    setSelectedCourse(null)
                                }}
                                {...(currentComponent === 'AnnouncementsPanel'
                                    ? {
                                        backgroundColor: "#d8dcf0",
                                        color: "darkblue",
                                        _hover: { backgroundColor: "#d8dcf0" },
                                    }
                                    : {})}
                                {...(currentComponent !== 'AnnouncementsPanel'
                                    ? { _hover: { backgroundColor: "#e5e5e5" } }
                                    : {})}
                                _active={{ color: "darkblue" }}
                            >
                                Announcements
                            </Button>
                            <Button w={"full"} justifyContent={"flex-start"} borderRadius={"full"} fontSize={13} h={30} overflow={"hidden"} bg={"transparent"}>Manage Events</Button>
                            <Button w={"full"} justifyContent={"flex-start"} borderRadius={"full"} fontSize={13} h={30} overflow={"hidden"} bg={"transparent"}>List Students</Button>
                            <Button w={"full"} justifyContent={"flex-start"} borderRadius={"full"} fontSize={13} h={30} overflow={"hidden"} bg={"transparent"}>Manage Tutorials</Button>
                        </VStack>
                    </VStack>

                </motion.div>
            </Box>
        </>
    )
}

export default SideBar