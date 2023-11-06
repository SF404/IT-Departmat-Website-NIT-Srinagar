import React, { useState } from 'react'
import { Box, Image, Text, Link, Flex, IconButton, Icon, Center, Heading, VStack, Avatar, HStack, SimpleGrid, GridItem, Stack, Badge, useToast, Tooltip } from '@chakra-ui/react';
import { AiFillHeart, AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Item } from 'react-grid-carousel';
import arman from "./../../assets/images/arman.png";
import rajes from "./../../assets/images/rajes.jpeg";
import suhaib from "./../../assets/images/suhaib.png";
import janib from "./../../assets/images/janibsir.jpeg";
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa6';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { PiEnvelopeDuotone, PiGithubLogoDuotone, PiGlobeHemisphereEastDuotone, PiLinkedinLogoDuotone, PiPhoneDuotone } from 'react-icons/pi';

function Credits1() {
    const [mentors, setMentors] = useState(
        [
            {
                name: "Janib Ul Bashir",
                image: janib,
                details: "Head of the Department and Assistant Professor",
                email: "janibbashir@nitsri.ac.in",
                phone: "+91 8825099229",
                github: '',
                linkedin: '',
                website: "https://www.janibbashir.com",

            },
        ]
    )
    const [contributors, setContributors] = useState(
        [
            {
                name: "Rajes Manna",
                image: rajes,
                details: "",
                email: "rmrajesofficial.0@gmail.com",
                phone: "+91 9149780559",
                github: "https://www.github.com/rmrajesofficial",
                linkedin: "https://www.github.com/rmrajesofficial",
                website: "",
                enroll: '2021BITE063'
            },
            {
                name: "Suhaib Ahmad",
                image: suhaib,
                details: "",
                email: "enigma00800@gmail.com",
                phone: "+91 8492002286",
                github: "https://www.github.com/sf404",
                linkedin: "https://www.linkedin.com/in/suhaib-ahmad",
                website: "https://www.linkedin.com/in/suhaib-ahmad",
                enroll: '2021BITE060'
            },
            {
                name: "Arman Ansari",
                image: arman,
                details: "",
                email: "armsce856@gmail.com",
                phone: "+91 6006280709",
                github: "",
                linkedin: "https://www.linkedin.com/in/armsri/",
                website: "https://www.linkedin.com/in/armsri/",
                enroll: '2021BITE053'
            },

        ]
    )


    const toast = useToast();
    const handleClick = async (data) => {
        try {
            await navigator.clipboard.writeText(data);
            toast({
                variant:'left-accent',
                position:'top',
                title:data+ " copied!",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        } catch (err) {
            console.error("Unable to copy to clipboard", err);
            toast({
                position:'top',
                title:data+ " Failed to copy",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return (
        <VStack w={'full'}>
            {/* <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'center'} color={'darkblue'}>CREDITS</Heading> */}
            <VStack width={{ base: '100%', md: '80%' }} gap={6} className='family-1' p={4}>
                {/* <Heading fontSize={'1em'} my={'-1em'} textAlign={'left'} color={'darkblue'} w={'full'}>Mentor</Heading> */}
                <Heading fontSize={'1em'} mb={-2} mt={2} fontWeight={'semibold'} textAlign={'center'} color={'darkblue'} w={'full'} className='family-1'>MENTOR</Heading>


                {
                    mentors.map((item, index) => (
                        <Flex colSpan={{ base: 1, sm: 2, md: 3 }} flexDirection={{ base: 'column', md: 'row' }} alignItems={{ base: 'center', md: 'left' }} width={'fit-content'} textAlign={'center'} bg={'white'} key={index} borderRadius={'1em'} overflow="hidden" py={4} pr={4} boxShadow={'0 0 12px rgba(0,0,0,0.05)'} w={'full'}>
                            <Box>
                                <Image borderRadius={'0.5em'} mx={4} name={item.name} src={item.image} minW={'150px'} minH={'150px'} maxW={'150px'}></Image>
                                <Text mt={2} >MENTOR</Text>
                            </Box>

                            <VStack textAlign={'left'} justifyContent={'space-between'} px={4}>
                                <Box>
                                    <Text fontSize="xl" fontWeight="semibold" mb={2} fontFamily={'body'} >
                                        {item.name}
                                    </Text>
                                    <Text color="gray.600" fontSize="sm" mb={2}>
                                        {item.details}
                                    </Text>
                                    <Badge>{'PHD'}</Badge>
                                </Box>

                                <HStack textAlign={'left'} w={'full'}>
                                    <Tooltip hasArrow label={item.phone} bg='#d8dcf0' color='black' >
                                        <IconButton
                                            color={'darkblue'}
                                            bg={'#ebedf7'}
                                            fontSize={'1.5em'}
                                            icon={<Icon as={PiPhoneDuotone} />}
                                            aria-label="Like"
                                            variant="ghost"
                                            size={'lg'}
                                            borderRadius={'full'}
                                            as={Link}
                                            onClick={() => handleClick(`${item.phone}`)}
                                        />
                                    </Tooltip>
                                    <Tooltip hasArrow label={item.email} bg='#d8dcf0' color='black' >
                                        <IconButton
                                            color={'darkblue'}
                                            bg={'#ebedf7'}
                                            fontSize={'1.5em'}
                                            icon={<Icon as={PiEnvelopeDuotone} />}
                                            aria-label="Like"
                                            variant="ghost"
                                            size={'lg'}
                                            borderRadius={'full'}
                                            as={Link}
                                            onClick={() => handleClick(`${item.email}`)}
                                        />
                                    </Tooltip>
                                    <Tooltip hasArrow label={'GitHub'} bg='#d8dcf0' color='black' >
                                        <IconButton
                                            color={'darkblue'}
                                            bg={'#ebedf7'}
                                            fontSize={'1.5em'}
                                            icon={<Icon as={PiGithubLogoDuotone} />}
                                            aria-label="Like"
                                            variant="ghost"
                                            size={'lg'}
                                            borderRadius={'full'}
                                            as={Link}
                                            href={item.github}

                                        />
                                    </Tooltip>
                                    <Tooltip hasArrow label={'LinkedIn'} bg='#d8dcf0' color='black' >
                                        <IconButton
                                            color={'darkblue'}
                                            bg={'#ebedf7'}
                                            fontSize={'1.5em'}
                                            icon={<Icon as={PiLinkedinLogoDuotone} />}
                                            aria-label="Like"
                                            variant="ghost"
                                            size={'lg'}
                                            borderRadius={'full'}
                                            as={Link}
                                            href={item.linkedin}
                                        />
                                    </Tooltip>
                                    <Tooltip hasArrow label={item.website} bg='#d8dcf0' color='black' >
                                        <IconButton
                                            color={'darkblue'}
                                            bg={'#ebedf7'}
                                            fontSize={'1.5em'}
                                            icon={<Icon as={PiGlobeHemisphereEastDuotone} />}
                                            aria-label="Like"
                                            variant="ghost"
                                            size={'lg'}
                                            borderRadius={'full'}
                                            as={Link}
                                            href={item.website}

                                        />
                                    </Tooltip>

                                </HStack>
                            </VStack>
                        </Flex>
                    ))

                }
                <Heading fontSize={'1em'} mt={2} fontWeight={'semibold'} textAlign={'center'} color={'darkblue'} w={'full'} className='family-1'>DEVELOPED BY</Heading>

                <SimpleGrid gap={4} columns={[1, 1, 2, 3]} w={'full'}>
                    {
                        contributors.map((item, index) => (
                            <GridItem textAlign={'center'} bg={'white'} key={index} borderRadius="1em" overflow="hidden" p={8} px={8} boxShadow={'0 0 12px rgba(0,0,0,0.05)'} w={'full'} minW={'250px'}>
                                <Avatar size={'2xl'} src={item.image} alt={item.name} mb={4} />
                                <Text fontSize="xl" fontWeight="semibold" mb={2} fontFamily={'body'} >
                                    {item.name}
                                </Text>
                                <Text color="gray.600" fontSize="sm">
                                    {item.details}
                                </Text>
                                <Text color="gray.600" fontSize="sm" mb={2}>
                                    {item.enroll}
                                </Text>
                                <HStack justifyContent={'center'} textAlign={'center'} w={'full'}>
                                    <Tooltip hasArrow label={item.phone} bg='#d8dcf0' color='black' >
                                        <IconButton
                                            color={'darkblue'}
                                            bg={'#ebedf7'}
                                            fontSize={'1.5em'}
                                            icon={<Icon as={PiPhoneDuotone} />}
                                            aria-label="Like"
                                            variant="ghost"
                                            size={'lg'}
                                            borderRadius={'full'}
                                            as={Link}
                                            onClick={() => handleClick(`${item.phone}`)}
                                        />
                                    </Tooltip>
                                    <Tooltip hasArrow label={item.email} bg='#d8dcf0' color='black' >
                                        <IconButton
                                            color={'darkblue'}
                                            bg={'#ebedf7'}
                                            fontSize={'1.5em'}
                                            icon={<Icon as={PiEnvelopeDuotone} />}
                                            aria-label="Like"
                                            variant="ghost"
                                            size={'lg'}
                                            borderRadius={'full'}
                                            as={Link}
                                            onClick={() => handleClick(`${item.email}`)}
                                        />
                                    </Tooltip>
                                    <Tooltip hasArrow label={'GitHub'} bg='#d8dcf0' color='black' >
                                        <IconButton
                                            color={'darkblue'}
                                            bg={'#ebedf7'}
                                            fontSize={'1.5em'}
                                            icon={<Icon as={PiGithubLogoDuotone} />}
                                            aria-label="Like"
                                            variant="ghost"
                                            size={'lg'}
                                            borderRadius={'full'}
                                            as={Link}
                                            href={item.github}

                                        />
                                    </Tooltip>
                                    <Tooltip hasArrow label={'LinkedIn'} bg='#d8dcf0' color='black' >
                                        <IconButton
                                            color={'darkblue'}
                                            bg={'#ebedf7'}
                                            fontSize={'1.5em'}
                                            icon={<Icon as={PiLinkedinLogoDuotone} />}
                                            aria-label="Like"
                                            variant="ghost"
                                            size={'lg'}
                                            borderRadius={'full'}
                                            as={Link}
                                            href={item.linkedin}
                                        />
                                    </Tooltip>
                                    <Tooltip hasArrow label={item.website} bg='#d8dcf0' color='black' >
                                        <IconButton
                                            color={'darkblue'}
                                            bg={'#ebedf7'}
                                            fontSize={'1.5em'}
                                            icon={<Icon as={PiGlobeHemisphereEastDuotone} />}
                                            aria-label="Like"
                                            variant="ghost"
                                            size={'lg'}
                                            borderRadius={'full'}
                                            as={Link}
                                            href={item.website}

                                        />
                                    </Tooltip>

                                </HStack>


                            </GridItem>
                        ))
                    }
                </SimpleGrid>
            </VStack>
        </VStack>
    )
}

export default Credits1