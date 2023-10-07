import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { AiOutlineMail } from "react-icons/ai";
import { Avatar, Badge, Button, Card, CardBody, CardFooter, CardHeader, Center, Divider, Flex, Heading, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Tag, Text, Tooltip, VStack, WrapItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import Typewriter from "typewriter-effect";
import Footer from '../Layout/Footer';

function Faculty() {
    const [faculty, setFaculty] = useState([
        {
            id: 0,
            name: "Dr. Shabir Ahmad Sofi",
            role: "HOD and Assistant Professsor",
            degree: "Phd",
            speciality: "Wireless Sensor Networks, Internet of Things, Artificial Intelligence, Machine Learning, and Big Data",
            email: "shabir@nitsri.ac.in",
            phone: "0000000000",

        },
        {
            id: 1,
            name: "Dr. Janib Ul Bashir",
            role: "Assistant Professsor",
            degree: "Phd (IIT Delhi)",
            speciality: "Wireless Sensor Networks, Internet of Things, Artificial Intelligence, Machine Learning, and Big Data",
            email: "janib@nitsri.ac.in",
            phone: "0000000000",

        },
        {
            id: 3,
            name: "Dr. Prabhal Verma",
            role: "Assistant Professsor",
            degree: "Phd",
            speciality: "Wireless Sensor Networks, Internet of Things, Artificial Intelligence, Machine Learning, and Big Data",
            email: "prabhal@nitsri.ac.in",
            phone: "0000000000",

        },
        {
            id: 0,
            name: "Dr. Shabir Ahmad Sofi",
            role: "HOD and Assistant Professsor",
            degree: "Phd",
            speciality: "Wireless Sensor Networks, Internet of Things, Artificial Intelligence, Machine Learning, and Big Data",
            email: "shabir@nitsri.ac.in",
            phone: "0000000000",

        },
        {
            id: 1,
            name: "Dr. Janib Ul Bashir",
            role: "Assistant Professsor",
            degree: "Phd (IIT Delhi)",
            speciality: "Wireless Sensor Networks, Internet of Things, Artificial Intelligence, Machine Learning, and Big Data",
            email: "janib@nitsri.ac.in",
            phone: "0000000000",

        },
        {
            id: 3,
            name: "Dr. Prabhal Verma",
            role: "Assistant Professsor",
            degree: "Phd",
            speciality: "Wireless Sensor Networks, Internet of Things, Artificial Intelligence, Machine Learning, and Big Data",
            email: "prabhal@nitsri.ac.in",
            phone: "0000000000",

        },
    ])

    const toast = useToast()
    const handleClick = async (data) => {
        try {
            await navigator.clipboard.writeText(data);
            toast({
                title: 'copied!',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        } catch (err) {
            console.error('Unable to copy to clipboard', err);
            toast({
                title: 'Failed to copy',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }
    };


    const [showText, setShowText] = useState(false)




    return (
        <>
            <VStack p={4} bg={'whitesmoke'}>
                <Text fontWeight={'bold'} color={'blue.900'} fontSize={'xl'}>Faculty Members, Department of Information Technology</Text>
                <VStack w={'80%'} spacing={6}>
                    <Divider borderColor={'gray.400'}></Divider>
                    {
                        faculty.map((item) => (

                            <Flex w={'full'} p={2} boxShadow='0px 4px 16px rgba(149, 157, 165, 0.2)' borderRadius={4} key={item.id} bg={'white'} userSelect={'none'}>

                                <WrapItem ml={2} >
                                    <Popover placement='top-end'>
                                        <PopoverTrigger>
                                            <Avatar
                                                size='2xl'
                                                name={item.name}
                                                src='https://bit.ly/sage-adebayo'
                                                onMouseEnter={(e) => { setShowText(true); e.target.click() }}
                                                onMouseLeave={(e) => { setShowText(false); e.target.click() }}
                                            // Add any other props you need for the Avatar
                                            />
                                        </PopoverTrigger>
                                        <PopoverContent
                                            boxShadow="0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
                                            _focus={{ outline: 'none', boxShadow: 'none' }}
                                            borderColor={'#9fa8da'}
                                            bg={'#c5cae8'}
                                            fontFamily={'monospace'}
                                            borderRadius={10}
                                            color='darkblue'
                                        >
                                            <PopoverArrow  bg={'#c5cae8'}/>
                                            <PopoverBody _focus={{ outline: 'none' }}>
                                                {showText && (
                                                    <Typewriter
                                                        options={{
                                                            strings: [`Hi, I'm ${item.name}`, item.speciality, 'Thank You'],
                                                            autoStart: true,
                                                            loop: true,
                                                            delay: 50,
                                                            deleteSpeed: 10,
                                                        }}
                                                    />
                                                )}
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </WrapItem>

                                <Card shadow={'none'} >
                                    <CardHeader py={2}>
                                        <Heading size='md'>{item.name}</Heading>
                                        <Badge colorScheme='purple'>{item.role}</Badge>
                                    </CardHeader>
                                    <CardBody py={0}>
                                        <Badge>{item.degree}</Badge>
                                        <Text px={1}>{item.speciality}</Text>
                                    </CardBody>
                                    <CardFooter>
                                        <Tooltip hasArrow label={item.phone} bg='gray.300' color='black'>
                                            <IconButton
                                                colorScheme='green'
                                                aria-label='Call Segun'
                                                size='sm'
                                                mr={2}
                                                onClick={() => handleClick(`${item.phone}`)}
                                                icon={<PhoneIcon />}
                                            />
                                        </Tooltip>
                                        <Tooltip hasArrow label={item.email} bg='gray.300' color='black'>
                                            <IconButton
                                                colorScheme='linkedin'
                                                aria-label='Call Segun'
                                                size='sm'
                                                onClick={() => handleClick(`${item.email}`)}
                                                icon={<EmailIcon />}
                                            />
                                        </Tooltip>

                                    </CardFooter>
                                </Card>
                            </Flex>


                        ))
                    }





                </VStack>

            </VStack>

            <Footer/>

        </>
    )
}

export default Faculty
