import { Box, Center, HStack, Heading, List, ListIcon, ListItem, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { PiCubeDuotone } from 'react-icons/pi';

function Announcements() {
    return (
        <>
            <Box w={'full'}>
                <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'center'} color={'darkblue'}>IMPORTANT ANNOUNCEMENTS</Heading>
                    <List spacing={2} bg={'white'} p={4} borderRadius={'1em'} boxShadow={'0 0 12px rgba(0,0,0,0.05)'}>
                        <ListItem>
                            <ListIcon as={PiCubeDuotone} color={'darkblue'} />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </ListItem>
                        <ListItem>
                            <ListIcon as={PiCubeDuotone} color={'darkblue'} />
                            Assumenda, quia temporibus eveniet a libero incidunt suscipit
                        </ListItem>
                        <ListItem>
                            <ListIcon as={PiCubeDuotone} color={'darkblue'} />
                            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                            <ListIcon as={PiCubeDuotone} color={'darkblue'} />
                            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                        </ListItem>
                    </List>
            </Box>
        </>
    )
}

export default Announcements