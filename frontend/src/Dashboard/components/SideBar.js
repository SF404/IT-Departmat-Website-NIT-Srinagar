import { Avatar, Box, Button, Divider, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { PiCalendarDuotone, PiChatsDuotone, PiGearSixDuotone, PiMegaphoneDuotone, PiNotePencilDuotone, PiStudentDuotone, PiTextIndentDuotone, PiTextOutdentDuotone, PiVideoDuotone } from "react-icons/pi";
import { useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const SideBar = ({ user, courses, selectedCourse, setSelectedCourse, handleMyProfile, currentView, setCurrentView }) => {
    const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure()
    const [hidden, setHidden] = useState(!isOpen)
    const isMediumDevice = window.innerWidth <= 768;

    function handleSelect(component_name) {
        (component_name !== currentView) ? setCurrentView(component_name) : setCurrentView(null);
    }

    return (
        <>
            <Box display={'flex'} width={'fit-content'} height={'full'} bg={'white'} position={'relative'}>
                <Box width={'64px'} bg={'#c5cae8'} py={2} display={'flex'} justifyContent={'space-between'} flexDirection={'column'} color={'white'} gap={2}>
                    <VStack>
                        <IconButton bg={'transparent'} color={'#3848a2'}  {...getButtonProps()} icon={hidden ? <PiTextIndentDuotone size={'1.5em'} /> : <PiTextOutdentDuotone size={'1.5em'} />}></IconButton>
                        <IconButton bg={'transparent'} color={'#3848a2'} icon={<PiCalendarDuotone size={'1.5em'} />} onClick={() => handleSelect('calendar')}></IconButton>
                        <IconButton bg={'transparent'} color={'#3848a2'} icon={<PiChatsDuotone size={'1.5em'} />} onClick={() => handleSelect('chat')}></IconButton>
                        <IconButton bg={'transparent'} color={'#3848a2'} icon={<PiStudentDuotone size={'1.5em'} />} onClick={() => handleSelect('student')}></IconButton>
                        <IconButton bg={'transparent'} color={'#3848a2'} icon={<PiMegaphoneDuotone size={'1.5em'} />} onClick={() => handleSelect('announcement')}></IconButton>
                        <IconButton bg={'transparent'} color={'#3848a2'} icon={<PiNotePencilDuotone size={'1.5em'} />} onClick={() => handleSelect('event')}></IconButton>
                        <IconButton bg={'transparent'} color={'#3848a2'} icon={<PiVideoDuotone size={'1.5em'} />} onClick={() => handleSelect('tutorial')}></IconButton>
                    </VStack>
                    <VStack >
                        <IconButton bg={'transparent'} color={'#3848a2'} icon={<PiGearSixDuotone size={'1.5em'} />} onClick={() => handleSelect('settings')}></IconButton>
                    </VStack>
                </Box>
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
                    </VStack>

                </motion.div>
            </Box>
        </>
    )
}

export default SideBar