import { Box, Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import calendarbg from './../../../Assets/images/calendarbg.png'
// import MyCalendar from '../../../Components/Calendar/MyCalendar'

function Holidays() {
    const holidays = [
        { date: new Date(2024, 0, 1), name: 'New Year' },
        { date: new Date(2024, 4, 1), name: 'Labor Day' },
        { date: new Date(2024, 6, 4), name: 'Independence Day' },
    ];
    return (
        <Box w={'full'}>
            {/* <Flex fontWeight={'semibold'} gap={2} fontSize={'24px'} justifyContent={'left'} my={2}>
                <Text color={'darkblue'}>OFFICIAL</Text>
                <Text color={'blackAlpha'}>HOLIDAYS</Text>
            </Flex> */}
        </Box>
    )
}

export default Holidays