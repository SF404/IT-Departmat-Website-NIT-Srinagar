import { Avatar, Box, Button, DarkMode, Flex, HStack, Heading, IconButton, Stack, Tag, Text, Tooltip, useClipboard, useToast } from '@chakra-ui/react'
import React from 'react'
import banner from './../../../Assets/banners/myprofilebanner.svg'
import EditInfo from './EditInfo'
import { FaMailBulk } from 'react-icons/fa'
import { FcGlobe, FcPackage, FcPhone } from "react-icons/fc";
import { FaEarthAsia, FaEnvelope, FaPhone } from 'react-icons/fa6'
import { PiEnvelopeDuotone, PiGlobeHemisphereEastDuotone, PiPhoneDuotone } from 'react-icons/pi'

const MyInfo = ({ profileData, fetchProfile }) => {
    const toast = useToast();

    const handleCopy = (data, label) => {
        navigator.clipboard.writeText(data).then(() => {
            toast({
                title: `${label} copied to clipboard`,
                status: "info",
                duration: 2000,
                isClosable: true,
                position: 'top',
                variant: 'left-accent',
                description: data
            });
        }).catch((error) => {
            console.error('Unable to copy:', error);
            toast({
                title: "Error",
                description: "Failed to copy to clipboard",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: 'top',
                variant: 'left-accent',
                description: data
            });
        });
    };

    return (
        <Box w={'full'} bg={'white'} rounded={16}>

            <Box w={'full'} bg={`url(${banner}) no-repeat center center/cover`} height={'200px'} roundedTop={16}></Box>

            <Box flex={1} bg={'white'} rounded={15} p={6} gap={6}>
                <Flex justifyContent={'space-between'}>
                    <Avatar src={profileData.profile_image} size={'2xl'} mt={'-130px'} width={'150px'} height={'150px'} border={'4px solid white'} name={profileData.first_name} />
                    <EditInfo profileData={profileData} fetchProfile={fetchProfile} />
                </Flex>
                <Stack flex={1} spacing={1}>
                    <Text fontSize={'2xl'} fontWeight={'bolder'} lineHeight={'1em'}>{profileData.first_name + " " + profileData.last_name}</Text>
                    <Text fontSize={'sm'} fontWeight={'bold'}>{profileData.designation} | {profileData.highest_degree}</Text>
                    <Text fontSize={'sm'} fontWeight={'bold'}>Department: {profileData.department}</Text>
                    <Text fontSize={'14px'}>{profileData.bio}</Text>
                </Stack>
                <Flex w={'full'} py={4} fontSize={'14px'} alignItems={'center'} gap={8}>
                    <Box>
                        <Text fontWeight={'semibold'} fontSize={'12px'}>Phone</Text>
                        <Text>{profileData.phone_number}</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={'semibold'} fontSize={'12px'}>Email</Text>
                        <Text>{profileData.email}</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={'semibold'} fontSize={'12px'}>Website</Text>
                        <Text>{profileData.website_url}</Text>
                    </Box>

                </Flex>
            </Box>
        </Box>
    )
}

export default MyInfo