import { Box, Heading, Link, List, ListIcon, ListItem, Text,  } from '@chakra-ui/react'
import React from 'react'
import { PiCubeDuotone } from 'react-icons/pi';

function Announcements({ announcements }) {
    return (
        <>
            <Box w={'full'}>
                <Heading fontSize={'1.5em'} my={'0.25em'} textAlign={'left'} color={'#192e59'}>Announcements</Heading>
                <List spacing={2} bg={'white'} p={4} borderRadius={4} boxShadow={'0 0 12px rgba(0,0,0,0.05)'}>
                    {announcements && announcements.length > 0 ? announcements.map((item, index) => (

                        <ListItem key={index} fontWeight={'semibold'} fontSize={'lg'} className='family-1'>
                            <ListIcon as={PiCubeDuotone} mt={'-5px'} color={'#192e59'} />
                            <Link href={item.url}>{item.description}</Link>
                            
                        </ListItem>

                    )) : (<Text textAlign={'center'}>No Announcements</Text>)}

                </List>
            </Box>
        </>
    )
}

export default Announcements