import { Box, Center, HStack, Heading, List, ListIcon, ListItem, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { PiCubeDuotone } from 'react-icons/pi';

function Announcements({announcements}) {
    return (
        <>
            <Box w={'full'}>
                <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'center'} color={'darkblue'}>IMPORTANT ANNOUNCEMENTS</Heading>
                <List spacing={2} bg={'white'} p={4} borderRadius={'1em'} boxShadow={'0 0 12px rgba(0,0,0,0.05)'}>
                    {(announcements && announcements.length > 0) ? announcements.map((item, index) => {

                        <ListItem>
                            <ListIcon as={PiCubeDuotone} color={'darkblue'} />
                            {item.decription}
                        </ListItem>

                    }) : (<Text>No Announcements</Text>)}

                </List>
            </Box>
        </>
    )
}

export default Announcements