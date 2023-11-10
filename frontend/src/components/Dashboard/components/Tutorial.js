import { Box, Button, Center, Divider, FormControl, FormLabel, HStack, IconButton, Image, Input, Link, Select, Text, Textarea, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PiTelegramLogoDuotone } from 'react-icons/pi'

function Tutorial({ email }) {
    const [tutorials, setTutorials] = useState(null)
    const fetchTutorials = async () => {
        try {
            const response = await axios.get(`/api/public/tutorialsget/?email=${email}`);
            setTutorials(response.data)
            console.log("Tutorials", response.data);
        } catch (error) {
            console.log(error)
        }
    }
    const [formData, setFormData] = useState({
        file: '',
        title: '',
        description: '',
        tutorial: 'video',
        url: '',
        tags: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            file,
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
            const response = await axios.post(`/api/postpublicdata/?email=${email}&type=tutorial`, formData, get_token())
            if(response) fetchTutorials();
            console.log(response);
            console.log('Form data submitted:', formData);

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchTutorials();
    }, [])



    return (
        <Box w={'full'} height={'full'} bg={'white'} textAlign={'center'} borderRadius={'0.5em'} position={'relative'} boxShadow={'0 2px 8px rgba(0,0,0,0.05)'} overflow={'hidden'}>
            <Box bg={'#d8dcf0'} p={4} borderTopRadius={8} fontWeight={'semibold'} color={'darkblue'}>My Tutorials</Box>
            <Box w={'full'} h={'full'}  overflowY={'scroll'}>

                <Box p={4} >
                    <form method='POST' onSubmit={handleSubmit}>
                        <FormControl mt={4}>
                            <FormLabel bg={"#e5e5e5"} borderRadius={"10px"} padding={'30px'} border={'2px dashed gray'} textAlign={'center'} w={'full'} >Image <br />  <Text fontSize={'12px'} fontWeight={'normal'}>{formData.file ? formData.file.name : ''}</Text></FormLabel>
                            <Input type="file" name="name" display={"none"} onChange={handleFileChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <Input type="text" placeholder='Title...' name="title" onChange={handleInputChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <Textarea type="text" placeholder='Description...' name="description" onChange={handleInputChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <Select type="text" placeholder='Tutorial type...' name="tutorial" onChange={handleInputChange} >
                                <option value='video' selected>YouTube Video</option>
                                <option value='blog'>Blog</option>
                                <option value='other'>Other</option>
                            </Select>
                        </FormControl>
                        <FormControl mt={4}>
                            <Input type="text" placeholder='URL...' name="url" onChange={handleInputChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <Input type="text" placeholder='Tags...' name="tags" onChange={handleInputChange} />
                        </FormControl>

                        <Divider my={4} />
                        <Button type="submit" colorScheme="facebook" w={"full"}>Upload</Button>
                    </form>

                </Box>

                <Box p={4} pb={'100px'}>
                    <Text textAlign={'left'} fontWeight={'semibold'} my={2} color={'darkblue'}>My Tutorials</Text>
                    <VStack w={'full'} spacing={'1em'}>
                        {
                            tutorials && tutorials.length > 0 ? tutorials.map((item, index) => (
                                <Box key={index} w={'full'} height={'full'}>
                                    <Box w={'full'} aspectRatio={16 / 9} border={'1px'} borderColor={'lightsteelblue'} borderRadius={'0.25em'} style={{background:`url(${item.image}) no-repeat center center/cover`}}></Box>
                                    <Box w={'full'} h={'full'} textAlign={'left'} py={2} fontSize={'12px'}>
                                        <Text as={Link} to={item.link} fontWeight={'semibold'}>{item.title}</Text>
                                        <Text>{item.description}</Text>
                                    </Box>
                                </Box>
                            )) : (<Text>Empty...</Text>)
                        }
                    </VStack>
                </Box>
            </Box>
        </Box>
    )
}

export default Tutorial