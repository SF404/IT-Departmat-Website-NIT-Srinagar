import React, { useEffect, useState } from 'react'
import SmallBanner from '../../Components/SmallBanner'
import { Box, Button, DarkMode, LightMode, SimpleGrid, Text } from '@chakra-ui/react'
import { getBtechBatches } from '../../Api/public_api'
import { NavLink } from 'react-router-dom'

const BtechBatches = () => {
    const [batches, setBatches] = useState([])
    const fetchBatches = async () => {
        try {
            const data = await getBtechBatches();
            console.log(data)
            setBatches(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBatches();
    }, [])

    return (
        <Box w={'full'} h={'100vh'} bg={'white'}>
            <SmallBanner heading={'B-TECH STUDENTS'} />
            <Box w={'full'} p={4}>
                <SimpleGrid w={{ base: 'full', md: '80%' }} columns={[1, 2, 3, 4]} mx={'auto'} gap={4} my={4}>
                    
                        {
                            batches.sort((a, b) => b - a).map((batch) => (
                                <NavLink to={`${batch}`}>
                                    <Button key={batch} variant={'outline'} colorScheme='facebook' minH={'80px'} w={'full'} rounded={16}>
                                        <Text fontFamily={'exo'} fontSize={'lg'}>
                                            {batch} Batch
                                        </Text>
                                    </Button>
                                </NavLink>
                            ))
                        }

                </SimpleGrid>

            </Box>
        </Box>
    )
}

export default BtechBatches