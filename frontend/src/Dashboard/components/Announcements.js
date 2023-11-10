import { Box, Button, Divider, FormControl, FormLabel, HStack, IconButton, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Text, VStack, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import { wrap } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaDownload, FaTrash } from 'react-icons/fa6'

function Announcements({ email }) {
    const [announcements, setannouncements] = useState(null)
    const { isOpen: openAnnouncementModel, onOpen: addAnnouncement, onClose: closeAnnouncementModel, } = useDisclosure();
    const fetchAnnouncements = async () => {
        try {
            const response = await axios.get(`/api/public/announcementget/?email=${email}`);
            setannouncements(response.data)
            console.log("announcements", response.data);
        } catch (error) {
            console.log(error)
        }
    }
    const [formData, setFormData] = useState({
        description: '',
        link: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function get_token() {
        return {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
                Accept: "application/json",
            },
        };
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(`/api/postpublicdata/?email=${email}&type=announcement`, formData, get_token())
            if(response) fetchAnnouncements();
            console.log(response);
            console.log('Form data submitted:', formData);

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchAnnouncements();
    }, [])


    return (

        <>
            <Box width={'full'} bg={'white'} h={'full'} borderRadius={8} boxShadow={'0 2px 8px rgba(0,0,0,0.05)'} position={'relative'}  >
                <Box bg={'#d8dcf0'} p={4} borderTopRadius={8} fontWeight={'semibold'} color={'darkblue'} textAlign={'center'}>announcements</Box>
                {announcements ? (<VStack p={4} fontSize={'14px'} className='family-1'>
                    {
                        (announcements && announcements.length !== 0) ? (
                            announcements.map((item, index) => (
                                <>
                                    <HStack justifyContent={'space-between'} w={'full'} overflow={'hidden'} key={index}>
                                        <Text as={Link} top={item.link} color={'blue'}>{item.description}</Text>

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
                </VStack>) : (
                    <Box textAlign={'center'}>
                        <Spinner mt={4} />
                        <Text>Loading...</Text>
                    </Box>
                )
                }
                <Box w={'full'} textAlign={'right'} position={'absolute'} bottom={0}>
                    <Button m={4} colorScheme='teal' onClick={addAnnouncement}> Add </Button>
                </Box>
            </Box>

            <Modal closeOnOverlayClick={false} isCentered isOpen={openAnnouncementModel} size={'4xl'} onClose={closeAnnouncementModel}>
                <ModalOverlay />
                <ModalContent m={4}>
                    <ModalHeader>Add Announcement</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} fontSize={'12px'}>
                        <form onSubmit={handleSubmit} encType="multipart/form-data" method='POST' >
                            <FormControl>
                                <FormLabel>Announcement</FormLabel>
                                <Input type="text" name="description" onChange={handleInputChange} placeholder="Enter title" />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel> URL {"(if Any)"}</FormLabel>
                                <Input type="url" name="link" color={'blue'} onChange={handleInputChange} />
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