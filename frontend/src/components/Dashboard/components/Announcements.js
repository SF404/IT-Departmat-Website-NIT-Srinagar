import { Box, Button, Divider, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaDownload, FaTrash } from 'react-icons/fa6'

function Announcements() {
    const [Announcements, setAnnouncements] = useState(
        [
            {
                "id": 1,
                "title": "Welcome Back to College!",
                "content": "We are excited to welcome all students back to campus for the new academic year. Classes will begin on September 1st. Make sure to check your schedules and prepare for a great semester!",
                "date": "2023-08-15"
            },
            {
                "id": 2,
                "title": "Orientation Day for New Students",
                "content": "Orientation for new students will be held on August 30th. It's a great opportunity to get to know the campus, meet your professors, and make new friends. Don't miss it!",
                "date": "2023-08-25"
            },
            {
                "id": 3,
                "title": "Fall Semester Registration Deadline",
                "content": "The deadline for registering for the fall semester is August 20th. Make sure to complete your course registration to avoid any late fees or issues with your schedule.",
                "date": "2023-08-18"
            }
        ]

    )
    return (

        <>
            <Box width={'full'} bg={'white'} height={'fit-content'} borderRadius={8} boxShadow={'0 2px 8px rgba(0,0,0,0.05)'} m={3}>
                <Box bg={'#d8dcf0'} p={4} borderTopRadius={8} fontWeight={'semibold'} color={'darkblue'}>Announcements</Box>
                <VStack p={4}>
                    {
                        (Announcements && Announcements.length !== 0) ? (
                            Announcements.map((item, index) => (
                                <>
                                    <HStack justifyContent={'space-between'} w={'full'} overflow={'hidden'} key={index}>
                                        <Text color={'blue'}>{item.title}</Text>
                                        
                                        <Box display={'flex'} gap={2} >
                                            <IconButton isRound={true} variant="outline" aria-label="Done" icon={<FaTrash />} size={"xs"} color={"blackAlpha.800"}/>
                                        </Box>
                                    </HStack>
                                    <Text textAlign={'left'} w={'full'} >{item.content}</Text>
                                    <Divider borderColor={"blackAlpha.300"} />
                                </>
                            ))
                        ) : (
                            <>
                                <Text>Empty...</Text>
                                <Divider borderColor={"blackAlpha.300"} />
                            </>
                        )
                    }
                </VStack>
                <Box w={'full'} textAlign={'right'}>
                    <Button m={4} colorScheme='teal' onClick={''}> Add </Button>
                </Box>
            </Box></>
    )
}

export default Announcements