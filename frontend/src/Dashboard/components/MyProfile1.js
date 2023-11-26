import React, { useEffect, useState } from 'react'
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { PiNotePencilDuotone } from "react-icons/pi";
import Resources from './Resources';
import { useToast } from '@chakra-ui/react'

// must change the url line No. 125
function MyProfile1() {
    const [user, setUser] = useState(null);
    const [myInfo, setMyInfo] = useState({
        name: '',
        profile_photo: '',
        email: '',
        phone: '',
        description: '',
        research_field: '',
        about: '',
    });
    const toast = useToast()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await axios.get("/api/auth/users/me/", get_token());
                const teacher = await axios.get("/api/public/getteacherstudent/", {
                    params: {
                        type: 'teacher',
                        email: user.data.email,
                    },
                });
                const profilePhotoUrl = teacher.data[0].profile_photo || '';
                const match = profilePhotoUrl.match(/teacher_profile\/(.+)$/);
                teacher.data[0].profile_photo = 'teacher_profile/' + match[1]
                setUser(teacher.data[0]);
                setMyInfo(teacher.data[0])


            } catch (error) {
                console.error("Error fetching data:", error);
                toast({
                    varient: 'left-accent',
                    title: 'Access Denied',
                    description: error.message,
                    status: '',
                    duration: 5000,
                    isClosable: true,
                })
            }
        };
        return () => {
            fetchUser();
        }
    }, [])




    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMyInfo({
            ...myInfo,
            [name]: value,
        });
    };
    const handleFileChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...myInfo };
        const file = e.target.files[0];
        updatedFormData[name] = file;
        console.log(name, file);
        setMyInfo(updatedFormData);
        console.log(myInfo);
    };
    function get_token() {
        return {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
                Accept: "application/json",
            },
        };
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(myInfo);
            if (myInfo.phone === user.phone && myInfo.profile_photo === user.profile_photo && myInfo.about === user.about && myInfo.research_field === user.research_field) { console.log('not change'); return; }
            const response = await axios.put(`/api/profileupdate/${user.id}/?email=${user.email}`,
                myInfo,
                get_token()
            );
            if (response)
                toast({
                    variant: 'left-accent',
                    title: 'Updated Successfully',
                    status: 'info',
                    duration: 5000,
                    isClosable: true,
                })
        } catch (error) {
            console.log(error);
            toast({
                variant: 'left-accent',
                title: 'Failed',
                description: error.message,
                status: 'info',
                duration: 5000,
                isClosable: true,
            })
        }
    };
    return (
        <>
            <VStack>
                <Box width={{ base: 'full', md: '80%' }} >
                    <Flex w={'full'} gap={'1em'} p={4}>
                        <Box width={'250px'} height={'250px'} aspectRatio={1} boxShadow={' 0 0 6px rgba(0,0,0,0.05)'} rounded={'full'} background={`url(http://localhost:8000/assets/${myInfo.profile_photo}) no-repeat center center/cover`} position={'relative'}>
                            <FormControl position={'absolute'} width={'fit-content'} right={0} bottom={0}>
                                <FormLabel width="fit-content"><PiNotePencilDuotone /></FormLabel>
                                <Input name='profile_photo' type='file' display={'none'} onChange={handleFileChange}></Input>
                            </FormControl>

                        </Box>
                        <Box flexGrow={1} bg={'white'} boxShadow={' 0 0 6px rgba(0,0,0,0.05)'} rounded={8} p={8}>
                            <form onSubmit={handleSubmit}>
                                <FormControl>
                                    <FormLabel>Name</FormLabel>
                                    <Input type="text" name="name" value={myInfo.name} />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" name="email" value={myInfo.email} />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Phone</FormLabel>
                                    <Input type="tel" name="phone" value={myInfo.phone} onChange={handleInputChange} />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Description</FormLabel>
                                    <Textarea name="description" value={myInfo.description} size="sm" resize="vertical" rows={4} />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Research Field</FormLabel>
                                    <Input type="text" name="research_field" value={myInfo.research_field} onChange={handleInputChange} />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>About</FormLabel>
                                    <Textarea name="about" value={myInfo.about} size="sm" resize="vertical" rows={4} onChange={handleInputChange} />
                                </FormControl>
                                <Box mt={4} textAlign={'right'}>
                                    <Button type="submit" colorScheme='teal' borderRadius={'full'} >   Save  </Button>
                                </Box>

                            </form>

                        </Box>
                    </Flex>
                    {user && <Resources user={user} />}
                </Box>
            </VStack>

        </>
    )
}

export default MyProfile1