import { Box, Button, Divider, FormControl, FormLabel, Input, Select, Textarea } from '@chakra-ui/react'
import React from 'react'

function Events() {
    return (
        <Box w={'full'} height={'full'} bg={'white'} textAlign={'center'} borderRadius={'0.5em'} position={'relative'} boxShadow={'0 2px 8px rgba(0,0,0,0.05)'}>
            <Box bg={'#d8dcf0'} p={4} borderTopRadius={8} fontWeight={'semibold'} color={'darkblue'}>Manage Events</Box>
            <Box p={4} >
                <form method='POST'>
                    <FormControl mt={4}>
                        <FormLabel bg={"#e5e5e5"} borderRadius={"10px"} padding={'30px'} w={'full'} border={'2px dashed gray'} textAlign={'center'} >Image</FormLabel>
                        <Input type="file" name="file" display={"none"} />
                    </FormControl>
                    <FormControl mt={4}>
                        <Input type="text" placeholder='Event title...' name="title" />
                    </FormControl>
                    <FormControl mt={4}>
                        <Textarea type="text" placeholder='Event description...' name="description" />
                    </FormControl>
                    <FormControl mt={4}>
                        <Input type="date" placeholder='Date...' name="date" />
                    </FormControl>
                    <FormControl mt={4}>
                        <Input type="text" placeholder='Event location...' name="location" />
                    </FormControl>
                    <FormControl mt={4}>
                        <Input type="url" placeholder='Event URL... (if Any)' name="url" />
                    </FormControl>
                   

                    <Divider my={4} />
                    <Button type="submit" colorScheme="facebook" w={"full"}>Upload</Button>
                </form>

            </Box>
        </Box>
    )
}

export default Events