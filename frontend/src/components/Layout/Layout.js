import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import img from '../../assets/images/image.png'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout
