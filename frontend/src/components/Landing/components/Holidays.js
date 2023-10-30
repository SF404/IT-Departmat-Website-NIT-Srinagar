import { Box, CircularProgress, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsCalendar2Event } from 'react-icons/bs'

function Holidays({ holidays }) {
    return (
        <Box>
            <div className="h-title" style={{ marginBottom: "0.5em" }}>
                <h1  className='h-title-icon'>HOLIDAYS</h1>
            </div>
            <VStack margin={"1em"} >
                {holidays ? (holidays.map((item, index) => (

                    <Flex key={index} fontSize={'0.8em'} gap={4} borderRadius={'0.5em'} p={2} w={'full'} bg={'white'} color={'black'} boxShadow={'0 0 5px rgba(0,0,0,0.1)'}>
                        <Flex flexDir={'column'} alignItems={'center'} minW={'60px'} minH='60px' maxH='60px' borderBottom={'4px solid #5cc181'} >
                            <Text fontWeight={'extrabold'} fontSize={'2xl'} color={'#5cc181'}>
                                {
                                    new Date(item.date)
                                        .getDate()
                                        .toString()
                                        .padStart(2, "0")
                                }
                            </Text>
                            <Text fontWeight={'bold'} color={'#232c64'}>
                                {
                                    new Date(item.date)
                                        .toLocaleString('en-US', { month: 'short' })
                                }
                            </Text>
                        </Flex>
                        <Text fontWeight={'bold'} fontSize={'lg'} color={'#232c64'}>{item.description}</Text>
                    </Flex>
                ))) : (<CircularProgress isIndeterminate color='#5cc181' />)
                }
            </VStack>
        </Box>
    )
}

export default Holidays