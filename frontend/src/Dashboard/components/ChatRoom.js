import { Box, HStack, Icon, IconButton, Input } from '@chakra-ui/react'
import React from 'react'
import { PiTelegramLogoDuotone } from 'react-icons/pi'

function ChatRoom() {
    return (
        <Box w={'full'} height={'full'} bg={'white'} textAlign={'center'}  borderRadius={'0.5em'} position={'relative'} boxShadow={'0 2px 8px rgba(0,0,0,0.05)'}>
            <Box bg={'#d8dcf0'} p={4} borderTopRadius={8} fontWeight={'semibold'} color={'#192e59'} borderr>Chats</Box>
            <Box>
                Chat Room under development...
            </Box>
            <HStack position={'absolute'} bottom={0} w={'full'} borderTop={'1px solid #c5cae8'} px={2}>
                <Input type='text' outline={'none'} border={'0.5px solid gray'} my={2} placeholder='Message' borderRadius={'full'} ></Input>
                <IconButton colorScheme='blue' icon={<PiTelegramLogoDuotone />} borderRadius={'full'}></IconButton>
            </HStack>
        </Box>
    )
}

export default ChatRoom