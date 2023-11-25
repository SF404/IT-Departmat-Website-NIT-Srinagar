import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import { Box, calc } from '@chakra-ui/react'

function IndexDashboard() {
    return (
        <>
            <Box position={'sticky'} top={0}>
                <Nav />
            </Box>
            <Box width={'full'} height={`calc(100vh - 64px)`} overflowY={'scroll'}>
                <Outlet />

            </Box>
        </>
    )
}

export default IndexDashboard