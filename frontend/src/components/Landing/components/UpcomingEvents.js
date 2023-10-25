import React, { useEffect, useState } from 'react';
import './z_style.css'
import { Box, Center, CircularProgress, Flex, HStack, Link, SimpleGrid, Text, VStack, baseTheme } from '@chakra-ui/react';
import Holidays from './Holidays';

function UpcomingEvents({ events, holidays }) {
    return (
        <Box>
            <div className="h-title" style={{ marginBottom: "0.5em" }}>
                <h1>UPCOMING EVENTS</h1>
            </div>
            <VStack margin={"1em"}>
                {events ? (events.slice().reverse().map((event, index) => (

                    <Flex key={index} fontSize={'0.8em'} gap={4} borderRadius={'0.5em'} p={2} w={'full'} bg={'white'} color={'black'} boxShadow={'0 0 5px rgba(0,0,0,0.1)'}>
                        <Flex flexDir={'column'} alignItems={'center'} minW={'60px'} minH='60px' maxH='60px' borderBottom={'4px solid #5cc181'} >
                            <Text fontWeight={'extrabold'} fontSize={'2xl'} color={'#5cc181'}>{event.date}</Text>
                            <Text fontWeight={'bold'} color={'#232c64'}>{event.month}</Text>
                        </Flex>
                        <Box fontWeight={'semibold'}>
                            <Text as={Link} href={"https://nitsri.ac.in/" + event.url} color={'#232c64'} fontSize={'lg'} fontWeight={'bold'}>{event.title}</Text>
                            <Text color={'#5cc181'} >{event.time}  &nbsp; | &nbsp;  {event.location}</Text>
                        </Box>
                    </Flex>
                ))) : (<CircularProgress isIndeterminate color='#5cc181' />)
                }
            </VStack>
            <Holidays holidays={holidays}/>
        </Box>
    );
}

export default UpcomingEvents;
