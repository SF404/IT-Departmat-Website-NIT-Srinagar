import { Box,  Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Holidays({ holidays }) {
    return (
        <Box w={'full'}>
            <Heading fontSize={'1.5em'} mb={'0.25em'} textAlign={'left'} color={'#192e59'}>Holidays</Heading>
            <VStack spacing={2} bg={'white'} p={4} borderRadius={4} boxShadow={'0 0 12px rgba(0,0,0,0.05)'} w={'full'}>
                {holidays && holidays.length > 0 ? (holidays.map((item, index) => (
                    <VStack w={'full'} key={index}>
                        <Flex  w={'full'} gap={4}>
                            <Box aspectRatio={1 / 1} maxH={'80px'} minW={'80px'} textAlign={'center'} p={1} bg={'#d8dcf0'} borderRadius={'0.2em'} color={'darkblue'} borderBottom={'5px solid darkblue'} >
                                <Heading>{
                                    new Date(item.date)
                                        .getDate()
                                        .toString()
                                        .padStart(2, "0")
                                }</Heading>
                                <Text>{
                                    new Date(item.date)
                                        .toLocaleString('en-US', { month: 'short' })
                                }</Text>
                            </Box>
                            <Flex flexDirection={'column'} justifyContent={'space-between'}>
                                <Text fontWeight={'semibold'} fontSize={'lg'} className='family-1'>{item.description}</Text>
                                <Text color={'darkblue'} >{item.time}  &nbsp;  &nbsp;  {item.location}</Text>
                            </Flex>
                        </Flex>
                        <Divider />
                    </VStack>
                ))) : (<Text>No Holidays this month</Text>)
                }
            </VStack>
        </Box>
    )
}

export default Holidays