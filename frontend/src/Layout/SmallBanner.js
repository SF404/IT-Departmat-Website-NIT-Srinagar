import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

function SmallBanner({ image = null, heading = null }) {
    return (
        <Box w={'full'} h={['200px', '250px']} position={'relative'} background={image ? `url(${image}) no-repeat center center/cover` : `linear-gradient(32deg, rgba(74,40,110,1) 0%, rgba(9,9,121,1) 35%, rgba(48,82,89,1) 100%)`} >
            <Box w={'full'} h={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'} color={'white'} background={'blackAlpha.200'} >
                <Heading size={{ base: "lg", sm: "xl", md: "xl", lg: "xl" }} textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)" >{heading}</Heading>
            </Box>
        </Box>
    )
}

export default SmallBanner