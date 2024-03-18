import { Avatar, Box, Button, Divider, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, Tooltip, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { PiCalendarDuotone, PiChatsDuotone, PiGearSixDuotone, PiMegaphoneDuotone, PiNotePencilDuotone, PiStudentDuotone, PiTextIndentDuotone, PiTextOutdentDuotone, PiVideoDuotone } from "react-icons/pi";
import { useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const SideBar = ({ user, courses, selectedCourse, setSelectedCourse, currentView, setCurrentView }) => {
    // setCurrentView("calendar")
    const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure()
    const [hidden, setHidden] = useState(!isOpen)
    const isMediumDevice = window.innerWidth <= 768;

    function handleSelect(component_name) {
        (component_name !== currentView) ? setCurrentView(component_name) : setCurrentView(null);
    }
    const textOutdentButtonRef = useRef();

    useEffect(() => {
        const onSideBar = () => {
            setTimeout(() => {
                if (textOutdentButtonRef.current) {
                    textOutdentButtonRef.current.click();
                }
            }, 500);

        }
        return () => onSideBar();
    }, []);

    return (
        <>
            <Box display={'flex'} width={'fit-content'} height={'full'} bg={'white'} position={'relative'}>
                <Box width={'64px'} bg={'white'} py={2} display={'flex'} justifyContent={'space-between'} flexDirection={'column'} color={'white'} gap={2}>
                    <VStack>
                        <Tooltip label="Side Bar"><IconButton bg={'transparent'} color={'#3848a2'}  {...getButtonProps()} icon={hidden ? <PiTextIndentDuotone size={'1.5em'} /> : <PiTextOutdentDuotone size={'1.5em'} />} ref={textOutdentButtonRef}></IconButton></Tooltip>
                        <Tooltip label="Calendar"><IconButton bg={'transparent'} color={'#3848a2'} icon={<PiCalendarDuotone size={'1.5em'} />} onClick={() => handleSelect('calendar')}></IconButton></Tooltip>
                        <Tooltip label="Chat"><IconButton bg={'transparent'} color={'#3848a2'} icon={<PiChatsDuotone size={'1.5em'} />} onClick={() => handleSelect('chat')}></IconButton></Tooltip>
                        {/* <IconButton bg={'transparent'} color={'#3848a2'} icon={<PiStudentDuotone size={'1.5em'} />} onClick={() => handleSelect('student')}></IconButton> */}
                        <Tooltip label="Announcement"><IconButton bg={'transparent'} color={'#3848a2'} icon={<PiMegaphoneDuotone size={'1.5em'} />} onClick={() => handleSelect('announcement')}></IconButton></Tooltip>
                        <Tooltip label="Event"><IconButton bg={'transparent'} color={'#3848a2'} icon={<PiNotePencilDuotone size={'1.5em'} />} onClick={() => handleSelect('event')}></IconButton></Tooltip>
                        <Tooltip label="Tutorial"><IconButton bg={'transparent'} color={'#3848a2'} icon={<PiVideoDuotone size={'1.5em'} />} onClick={() => handleSelect('tutorial')}></IconButton></Tooltip>
                    </VStack>
                    {/* <VStack >
                        <IconButton bg={'transparent'} color={'#3848a2'} icon={<PiGearSixDuotone size={'1.5em'} />} onClick={() => handleSelect('settings')}></IconButton>
                    </VStack> */}
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
                        <HStack bg={'#ebedf7'} width={'full'} px={2} height={'70px'} borderRadius={16}>
                            <Menu>
                                <MenuButton
                                    as={Avatar}
                                />
                                <MenuList p={4} >
                                    <MenuItem borderRadius={4} as={Link} to={'myprofile'}>My Profile</MenuItem>
                                    {/* <MenuItem borderRadius={4}>Logout</MenuItem> */}
                                </MenuList>
                            </Menu>
                            <Text color={'#192e59'} fontWeight={'semibold'}>{user.name}</Text>

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
                                        color: "#192e59",
                                        _hover: { backgroundColor: "#d8dcf0" },
                                    }
                                    : {})}
                                {...(selectedCourse !== item.course_id
                                    ? { _hover: { backgroundColor: "#e5e5e5" } }
                                    : {})}
                                _active={{ color: "#192e59" }}
                            >
                                {item.name}
                            </Button>
                        ))}
                        <Divider borderColor={"blackAlpha.300"} my={1} />
                    </VStack>

                </motion.div>
            </Box >
        </>
    )
}

export default SideBar