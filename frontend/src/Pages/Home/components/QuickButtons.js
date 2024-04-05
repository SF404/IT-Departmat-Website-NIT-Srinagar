import React from 'react'
import { DarkMode, Flex, IconButton, Text, } from '@chakra-ui/react';
import { HiBuildingOffice, HiComputerDesktop, HiMiniUserGroup, HiNewspaper } from "react-icons/hi2";
import { IoBookSharp } from "react-icons/io5";




function QuickButtons() {
    return (
        <>
            <Flex gap={4} my={10} flexWrap={'wrap'} justifyContent={'center'}>
                <a href="labs">
                    <Flex alignItems={'center'} gap={2} maxW={'200px'} rounded={'full'} px={4} py={3} transition={'all 0.15s ease-in'}
                        border="2px solid"
                        borderColor="gray.200"
                        _hover={{ borderColor: "transparent", bg: 'gray.200' }}
                    >
                        <DarkMode>
                            <IconButton
                                aria-label="Labs"
                                icon={<HiComputerDesktop />}
                                rounded="full"
                                border="none"
                                colorScheme='purple'
                            />
                        </DarkMode>
                        <Text> Department Laboratories</Text>
                    </Flex>
                </a>
                <a href="semesters">

                    <Flex alignItems={'center'} gap={2} maxW={'200px'} rounded={'full'} px={4} py={3} transition={'all 0.15s ease-in'}
                        border="2px solid"
                        borderColor="gray.200"
                        _hover={{ borderColor: "transparent", bg: 'gray.200' }}
                    >
                        <DarkMode>
                            <IconButton
                                aria-label="Course Work"
                                icon={<IoBookSharp />}
                                rounded="full"
                                border="none"
                                colorScheme='telegram'
                            />
                        </DarkMode>

                        <Text>Semester & Course Work</Text>
                    </Flex>
                </a>
                <a href="placements">
                    <Flex alignItems={'center'} gap={2} maxW={'200px'} rounded={'full'} px={4} py={3} transition={'all 0.15s ease-in'}
                        border="2px solid"
                        borderColor="gray.200"
                        _hover={{ borderColor: "transparent", bg: 'gray.200' }}
                    >
                        <DarkMode>
                            <IconButton
                                aria-label="Trainings & Placements"
                                icon={<HiBuildingOffice />}
                                rounded="full"
                                border="none"
                                colorScheme='pink'
                            />
                        </DarkMode>
                        <Text>Trainings & Placements</Text>
                    </Flex>
                </a>

                <a href="research-papers">
                    <Flex alignItems={'center'} gap={2} maxW={'200px'} rounded={'full'} px={4} py={3} transition={'all 0.15s ease-in'}
                        border="2px solid"
                        borderColor="gray.200"
                        _hover={{ borderColor: "transparent", bg: 'gray.200' }}
                    >
                        <DarkMode>
                            <IconButton
                                aria-label="Labs"
                                icon={<HiNewspaper />}
                                rounded="full"
                                border="none"
                                colorScheme='teal'
                            />
                        </DarkMode>
                        <Text>Recent Researches</Text>
                    </Flex>
                </a>

                <a href="alumni">
                    <Flex alignItems={'center'} gap={2} maxW={'200px'} rounded={'full'} px={4} py={3} transition={'all 0.15s ease-in'}
                        border="2px solid"
                        borderColor="gray.200"
                        _hover={{ borderColor: "transparent", bg: 'gray.200' }}
                    >
                        <DarkMode>
                            <IconButton
                                aria-label="Course Work"
                                icon={<HiMiniUserGroup />}
                                rounded="full"
                                border="none"
                                colorScheme='orange'
                            />
                        </DarkMode>

                        <Text>Alumni Network</Text>
                    </Flex>
                </a>
            </Flex>
        </>
    )
}

export default QuickButtons