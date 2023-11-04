import { Box, Button, Divider, FormControl, FormLabel, HStack, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { wrap } from 'framer-motion'
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
                "content": "or issues with your schedule.The deadline for registering for the fall semester is August 20th. Make sure to complete your course registration to avoid any late fees or issues with your schedule.",
                "date": "2023-08-18"
            }
        ]

    )
    const { isOpen: openAnnouncementModel, onOpen: addAnnouncement, onClose: closeAnnouncementModel, } = useDisclosure();
    const [announcementFormData, setAnnouncementFormData] = useState({
        title: "", url: "",
    });
    const handleAnnouncementFormChange = (e) => {
        const { name, value, type } = e.target;
        const updatedFormData = { ...announcementFormData };
        updatedFormData[name] = value;
        setAnnouncementFormData(updatedFormData);
    };

    const handleAnnouncementSubmit=(e)=>{ 
        e.preventDefault();
        setAnnouncements([announcementFormData])
        console.log(announcementFormData)
        closeAnnouncementModel();
    }


    return (

        <>
            <Box width={'full'}  bg={'white'} h={'full'} borderRadius={8} boxShadow={'0 2px 8px rgba(0,0,0,0.05)'} position={'relative'}  >
                <Box bg={'#d8dcf0'} p={4} borderTopRadius={8} fontWeight={'semibold'} color={'darkblue'} textAlign={'center'}>Announcements</Box>
                <VStack p={4} fontSize={'14px'} className='family-1'>
                    {
                        (Announcements && Announcements.length !== 0) ? (
                            Announcements.map((item, index) => (
                                <>
                                    <HStack justifyContent={'space-between'} w={'full'} overflow={'hidden'} key={index}>
                                        <Text color={'blue'}>{item.title}</Text>

                                        <Box display={'flex'} gap={2} >
                                            <IconButton isRound={true} variant="outline" aria-label="Done" icon={<FaTrash />} size={"xs"} color={"blackAlpha.800"} />
                                        </Box>
                                    </HStack>
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
                <Box w={'full'} textAlign={'right'} position={'absolute'} bottom={0}>
                    <Button m={4} colorScheme='teal' onClick={addAnnouncement}> Add </Button>
                </Box>
            </Box>



            <Modal closeOnOverlayClick={false} isCentered isOpen={openAnnouncementModel} size={'4xl'} onClose={closeAnnouncementModel}>
                <ModalOverlay />
                <ModalContent m={4}>
                    <ModalHeader>Add Announcement</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}  fontSize={'12px'}>
                        <form onSubmit={handleAnnouncementSubmit} encType="multipart/form-data"  method='POST' >
                            <FormControl>
                                <FormLabel>Announcement</FormLabel>
                                <Input type="text" name="title" value={announcementFormData.title} onChange={handleAnnouncementFormChange} placeholder="Enter title" />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel> URL {"(if Any)"}</FormLabel>
                                <Input type="url" name="url" color={'blue'} onChange={handleAnnouncementFormChange} />
                            </FormControl>
                            <Divider my={4} />
                            <Button type="submit" colorScheme="facebook" w={"full"}>Done</Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Announcements