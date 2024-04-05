import { Box, Button, DarkMode, Flex, HStack, Heading, IconButton, Image, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';
import mainlogo from './../../Assets/Logos/logo.svg';
import { logout } from '../../Api/api';


const DashboardLayout = () => {
    const navigate = useNavigate();
    const { isOpen, onToggle } = useDisclosure();
    const [isMediumDevice, setIsMediumDevice] = useState(window.innerWidth <= 768);
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)

    window.addEventListener('resize', () => {
        setIsMediumDevice(window.innerWidth <= 768);
    });

    const logoutUser = async ()=>{
        try {
            const response = await logout();
            console.log(response)
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Box w={'full'} minH={'100vh'} maxH={'100vh'} bg={'gray.200'}>
            <Flex w={'full'} bg={'white'} height={'64px'} position={'sticky'} top={0} alignItems={'center'} justifyContent={'space-between'} px={4}>
                <HStack>
                    <IconButton aria-label="Open Sidebar" variant={'ghost'} size={'lg'} color={'primary'} rounded={'full'} icon={<HamburgerIcon opacity={0.6} fontSize={'22px'} />} onClick={onToggle} />
                    <Image src={mainlogo} boxSize={'40px'} />
                    <Heading size={'lg'} fontFamily={'dancing'} color={'primary'}>Dashboard</Heading>
                </HStack>
                <HStack>
                    <DarkMode>
                        <Button colorScheme='orange' rounded={4} size={'sm'} onClick={()=>navigate('/')}>Home</Button>
                        <Button colorScheme='red' rounded={4} size={'sm'} onClick={logoutUser}>Logout</Button>
                    </DarkMode>
                </HStack>
            </Flex>
            <Flex color='white' height={'calc(100vh - 64px)'}>
                <motion.div
                    initial={false}
                    animate={{ width: isOpen ? 0 : 284 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        background: 'white',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        height: '100%',
                        maxWidth: '284px',
                        top: '0',
                        zIndex: '999',
                        position: isMediumDevice && isOpen ? 'absolute' : 'static',
                    }}
                >
                    <Sidebar user={user}/>
                </motion.div>
                <Box flex={1} overflowY={'auto'} p={4} color={'black'}>
                    <Outlet />
                </Box>
            </Flex>

        </Box>
    );
}

export default DashboardLayout;
