import { Box, Button, DarkMode, Flex, Heading, Link, List, ListIcon, ListItem, Stack, Text, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { PiCubeDuotone, PiCubeFill } from 'react-icons/pi';
import { BsExclude, BsFillPinFill } from "react-icons/bs";

import { getAnnouncements } from '../../../Api/public_api';

function Announcements() {
    const [announcements, setAnnouncements] = useState([])

    const fetchAnnouncements = async () => {
        try {
            const data = await getAnnouncements();
            setAnnouncements(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAnnouncements();

    }, [])

    return (
        <>
            <Box w={'full'}>
                <Flex fontWeight={'semibold'} gap={2} fontSize={'24px'} justifyContent={'center'} my={2}>
                    <Text color={'darkblue'}>IMPORTANT</Text>
                    <Text color={'blackAlpha'}>ANNOUNCEMENTS</Text>
                </Flex>
                <Stack gap={4}>
                    {announcements && announcements.length > 0 ? announcements.map((item, index) => (

                        <Flex fontWeight={'bold'} gap={2}>
                            <Box flex="none">
                                <PiCubeFill color={'darkblue'} fontSize={'20px'} />
                            </Box>                            <Flex gap={2} flexWrap={'wrap'}>
                                {item.title}
                                <DarkMode>
                                    {
                                        item.url &&
                                        <Button size={'xs'} colorScheme='blackAlpha' fontWeight={'normal'} rounded={'full'}>click here</Button>
                                    }
                                    {
                                        item.attachment &&
                                        <Button size={'xs'} colorScheme='blackAlpha' fontWeight={'normal'} rounded={'full'}>Download</Button>
                                    }
                                </DarkMode>

                            </Flex>
                        </Flex>
                    )) : (<Text textAlign={'center'}>No Announcements</Text>)}

                </Stack>
            </Box>
        </>
    )
}

export default Announcements