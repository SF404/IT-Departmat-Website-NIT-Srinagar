import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, DarkMode, Divider, Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Stack, Tag, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AddEvent from './AddEvent';
import { deleteEvent, getEvents } from '../../../Api/api';
import { FaLocationDot, FaLink, FaFeatherPointed, FaClock, FaCalendar } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcCalendar, FcClock } from "react-icons/fc";
import EditEvent from './EditEvent';
import { MdDelete } from 'react-icons/md';
import DeleteConfirmationModal from '../../../Components/DeleteConfirmation';
import OptionsPopover from '../../../Components/OptionsPopover';


const Events = () => {
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()
    const [targetDelete, settargetDelete] = useState('')


    const [events, setEvents] = useState([])
    const fetchEvents = async () => {
        try {
            const fetchedEvents = await getEvents();
            setEvents(fetchedEvents);
            console.log(fetchedEvents)
        } catch (error) {
            console.error('Error fetching educations:', error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, [])


    const formatDate = (dateString) => {
        const dateTime = new Date(dateString);
        return dateTime;
    }

    const handleDeleteClick = (id, title, itemType) => {
        settargetDelete({
            id, title, itemType
        })
        onOpenDelete();
    }

    const handleDelete = async () => {
        try {
            await deleteEvent(targetDelete.id);
            fetchEvents()
            onCloseDelete()
        } catch (error) {
            console.error('Error deleting item:', error.message);
        }
    }



    return (
        <Box w={'full'} bg={'white'} rounded={16}>
            <Accordion allowMultiple>
                <AccordionItem bg={'white'} rounded={16}>
                    <AccordionButton p={4} rounded={16}>
                        <Flex alignItems={'center'} fontFamily={'exo'} fontWeight={'bold'} gap={4} justifyContent={'space-between'} w={'full'} mr={3}>
                            <Text>College Events</Text>
                            <AddEvent fetchEvents={fetchEvents} />
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>
                    <Divider />
                    <AccordionPanel p={0} my={2}>
                        <SimpleGrid columns={[1, 2]} gap={[4, 6, 8, 10]} w={'full'} p={4}>
                            {
                                events.map((item) => (
                                    <Flex gap={4}>
                                        <Flex flex={1} gap={4}>
                                            <Center boxSize={'80px'} minW={'80px'} bg={'blackAlpha.200'} rounded={4} color={'primary'} borderBottom={'4px solid darkblue'}>
                                                <Box textAlign={'center'}>
                                                    <Text fontSize={'32px'} fontWeight={'bold'}>{formatDate(item.start_date).getDate()}</Text>
                                                    <Text>{formatDate(item.start_date).toLocaleString('default', { month: 'short' })}</Text>
                                                </Box>
                                            </Center>
                                            <Box>
                                                <Flex justifyContent={'space-between'}>
                                                    <Text fontWeight={'semibold'}>{item.title}</Text>
                                                    <Flex gap={2} opacity={1} justifyContent={'right'}>
                                                        <OptionsPopover>
                                                            <EditEvent id={item.event_id} data={item} fetchEvents={fetchEvents}></EditEvent>
                                                            <Button
                                                                leftIcon={<MdDelete />}
                                                                variant={'ghost'}
                                                                size={'sm'}
                                                                justifyContent={'left'}
                                                                rounded={0}
                                                                onClick={() => handleDeleteClick(item.event_id, item.title)}
                                                            >Delete</Button>
                                                        </OptionsPopover>
                                                    </Flex>
                                                </Flex>
                                                <Box fontSize={'14px'}>
                                                    <Flex alignItems={'center'} gap={1} >
                                                        <FcCalendar fontSize={'18px'} />
                                                        <Text>{formatDate(item.start_date).toLocaleString('default', { day: 'numeric', month: 'short' })} {item.end_date ? (" - " + formatDate(item.end_date).toLocaleString('default', { day: 'numeric', month: 'short' })) : ''}</Text>
                                                    </Flex>

                                                    <Flex alignItems={'center'} gap={1} >
                                                        <FcClock fontSize={'18px'} />
                                                        {formatDate(item.start_date).toLocaleTimeString('en-US', { timeStyle: 'short' })} at {item.location}
                                                    </Flex>
                                                </Box>
                                                <Text mt={1} fontSize={'14px'} textAlign={'justify'}>{item.description}</Text>
                                                <Flex gap={2} mt={3}>
                                                    <DarkMode>
                                                        {
                                                            item.attachment && <Button leftIcon={<FaFeatherPointed />} size={'sm'} colorScheme='blackAlpha' fontWeight={'normal'} rounded={'full'}>Download</Button>
                                                        }
                                                        {
                                                            item.registration_link && <Link href={item.registration_link} target='_blank'><Button leftIcon={<FaLink />} size={'sm'} colorScheme='blackAlpha' fontWeight={'normal'} rounded={'full'}>Register</Button></Link>
                                                        }
                                                    </DarkMode>
                                                </Flex>
                                            </Box>
                                        </Flex>

                                    </Flex>
                                ))
                            }
                        </SimpleGrid>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion >


            <DeleteConfirmationModal isOpen={isOpenDelete} onClose={onCloseDelete} itemName={targetDelete.title} onDelete={handleDelete} />
        </Box >
    )
}

export default Events