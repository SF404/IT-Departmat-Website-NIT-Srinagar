import React, { useEffect, useState } from 'react';
import { Box, Divider, Flex, Heading, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Text, VStack, useDisclosure, } from '@chakra-ui/react';
import axios from 'axios';
import default_event_image from './../../../assets/images/default_event_image.jpg'

function UpcomingEvents({ events, }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [activeEvent, setActiveEvent] = useState([])
    const expandEvent = (event) => {
        setActiveEvent(event)
        onOpen()
    }

    const [myevents, setMyevents] = useState(null)
    const fetchEvents = async () => {
        try {
            const response = await axios.get(`/api/public/eventsget/`);
            setMyevents(response.data)
        } catch (error) {
            setMyevents(null)
            console.log(error)
        }
    }

    useEffect(() => {
        fetchEvents();
    }, [])

    const getDate = (date) => {
        let d = new Date(date);
        d = d.toLocaleDateString('en-US', { month: 'short', day: '2-digit' })
        const [month, day] = d.split(' ');
        return { date: day, month };

    }


    return (
        <Box w={'full'}>
            <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'left'} color={'darkblue'}>EVENTS</Heading>
            <VStack borderRadius={'1em'} spacing={'1em'} bg={'white'} p={'1em'} boxShadow={'0 0 12px rgba(0,0,0,0.05)'} w={'full'}>
                {myevents ? (myevents.map((event, index) => (
                    <VStack w={'full'} key={index}>
                        <Flex w={'full'} gap={4}>
                            <Box aspectRatio={1 / 1} transition={'all 0.1s ease-in'} _hover={{ transform: 'translateY(-3px)', boxShadow:'lg' }} cursor={'pointer'} maxH={'80px'} minW={'80px'} textAlign={'center'} p={1} bg={'#d8dcf0'} borderRadius={'0.2em'} color={'darkblue'} borderBottom={'5px solid darkblue'}
                                onClick={() => expandEvent(event)}
                            >
                                <Heading>{getDate(event.date).date}</Heading>
                                <Text>{getDate(event.date).month}</Text>
                            </Box>
                            <Flex flexDirection={'column'} justifyContent={'space-between'}>
                                <Text as={Link} href={"https://nitsri.ac.in/" + event.url} fontWeight={'semibold'} fontSize={'lg'} className='family-1'>{event.title}</Text>
                                <Text color={'darkblue'} > Location: &nbsp;  {event.location}</Text>
                            </Flex>
                        </Flex>
                        <Divider />
                    </VStack>
                ))) : (<Spinner />)
                }
                {events ? (events.map((event, index) => (
                    <VStack w={'full'} key={index}>
                        <Flex w={'full'} gap={4}>
                            <Box aspectRatio={1 / 1} transition={'all 0.1s ease-in'} _hover={{ transform: 'translateY(-3px)', boxShadow:'lg' }} cursor={'pointer'} maxH={'80px'} minW={'80px'} textAlign={'center'} p={1} bg={'#d8dcf0'} borderRadius={'0.2em'} color={'darkblue'} borderBottom={'5px solid darkblue'}
                                onClick={() => expandEvent(event)}
                            >
                                <Heading>{event.date}</Heading>
                                <Text>{event.month}</Text>
                            </Box>
                            <Flex flexDirection={'column'} justifyContent={'space-between'}>
                                <Text as={Link} href={"https://nitsri.ac.in/" + event.url} fontWeight={'semibold'} fontSize={'lg'} className='family-1'>{event.title}</Text>
                                <Text color={'darkblue'} >{event.time}  &nbsp; | &nbsp;  {event.location}</Text>
                            </Flex>
                        </Flex>
                        <Divider />
                    </VStack>
                ))) : (<Spinner />)
                }
            </VStack>

            <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent bg={'transparent'}>
                    <ModalCloseButton color={'white'} zIndex={999} />
                    <ModalBody w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'rgba(0,0,0,)'} backdropFilter={'blur(4px)'}>
                        <VStack w={{ base: '100%', md: '80%', lg: '60%' }} bg={'white'} p={4} borderRadius={8} boxShadow={'0 0 12px rgba(0,0,0,0.5)'}>
                            <Box aspectRatio={16 / 9} bg={`url(${activeEvent.image ? activeEvent.image : default_event_image}) no-repeat center center/cover`} w={'full'} borderRadius={4}></Box>
                            <Flex w={'full'} gap={4}>
                                <Box aspectRatio={1 / 1} maxH={'80px'} minW={'80px'} textAlign={'center'} p={1} bg={'#d8dcf0'} borderRadius={'0.2em'} color={'darkblue'} borderBottom={'5px solid darkblue'}>
                                    <Heading>{getDate(activeEvent.date).date}</Heading>
                                    <Text>{getDate(activeEvent.date).month}</Text>
                                </Box>
                                <Flex flexDirection={'column'} justifyContent={'space-between'}>
                                    <Text as={Link} href={activeEvent.link} fontWeight={'semibold'} fontSize={'lg'} className='family-1'>{activeEvent.title}</Text>
                                    <Text>{activeEvent.description}</Text>
                                    <Text color={'darkblue'}>Location: &nbsp;  {activeEvent.location}</Text>
                                </Flex>
                            </Flex>
                        </VStack>
                    </ModalBody>

                </ModalContent>
            </Modal>

        </Box>
    );
}

export default UpcomingEvents;
