import { Box, Button, Center, Divider, FormControl, FormLabel, HStack, IconButton, Input, Select, Textarea } from '@chakra-ui/react'
import React from 'react'
import { PiTelegramLogoDuotone } from 'react-icons/pi'

function Tutorial() {
    return (
        <Box w={'full'} height={'full'} bg={'white'} textAlign={'center'} borderRadius={'0.5em'} position={'relative'} boxShadow={'0 2px 8px rgba(0,0,0,0.05)'}>
            <Box bg={'#d8dcf0'} p={4} borderTopRadius={8} fontWeight={'semibold'} color={'darkblue'}>My Tutorials</Box>
            <Box p={4} >
                <form method='POST'>
                    <FormControl mt={4}>
                        <FormLabel bg={"#e5e5e5"} borderRadius={"10px"} padding={'30px'} border={'2px dashed gray'} textAlign={'center'} w={'full'} >Image</FormLabel>
                        <Input type="file" name="file" display={"none"} />
                    </FormControl>
                    <FormControl mt={4}>
                        <Input type="text" placeholder='Title...' name="title" />
                    </FormControl>
                    <FormControl mt={4}>
                        <Textarea type="text" placeholder='Description...' name="description" />
                    </FormControl>
                    <FormControl mt={4}>
                        <Select type="text" placeholder='Tutorial type...' name="tutorial" >
                            <option value='option1' selected>Video</option>
                            <option value='option2'>Blog</option>
                            <option value='option3'>Other</option>
                        </Select>
                    </FormControl>
                    <FormControl mt={4}>
                        <Input type="text" placeholder='URL...' name="url" />
                    </FormControl>
                    <FormControl mt={4}>
                        <Input type="text" placeholder='Tags...' name="tags" />
                    </FormControl>

                    <Divider my={4} />
                    <Button type="submit" colorScheme="facebook" w={"full"}>Upload</Button>
                </form>

            </Box>
        </Box>
    )
}

export default Tutorial