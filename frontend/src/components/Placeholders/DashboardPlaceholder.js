import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import illustration_A from './../../assets/images/illustration_A.png'
import illustration_B from './../../assets/images/illustration_B.png'
import illustration_C from './../../assets/images/illustration_C.png'

function DashboardPlaceholder() {
    return (
        <>
            <Center userSelect={'none'}>
                <Flex gap={10} w={'60%'} mt={-20}>
                    <Box>
                        <Image src={illustration_A} opacity={1} />
                        <Text textAlign={'justify'}  bg={'#ebedf7'} mt={-6} fontSize={12} p={3} borderRadius={10}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Text>

                    </Box>

                    <Box>
                        <Image src={illustration_B} opacity={1} />
                        <Text textAlign={'justify'}  bg={'#ebedf7'} mt={-6} fontSize={14} p={3} borderRadius={10}>
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                        </Text>

                    </Box>
                    <Box>
                        <Image src={illustration_C} opacity={1} />
                        <Text textAlign={'justify'}  bg={'#ebedf7'} mt={-6} fontSize={14} p={3} borderRadius={10}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </Text>

                    </Box>
                </Flex>
            </Center>
        </>
    )
}

export default DashboardPlaceholder
