import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'
import { Box, Divider } from '@chakra-ui/react'

const Layout = () => {
    return (
        <Box bg={'gray.100'} minH={'100vh'} w={'full'}>
            <Navbar />
            <Outlet />
            <Footer />
        </Box>
    )
}

export default Layout