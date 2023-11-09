import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import image from './../../../assets/images/autumn1.jpg';

function Stats() {
    const facultyCount = 10; // Replace with the actual faculty count
    const phdCount = 23; // Replace with the actual PhD count
    const btechCount = 650; // Replace with the actual BTech count
    const mtechCount = 30; // Replace with the actual MTech count

    return (
        <Box
            w={'full'}
            h={[200, 300, 350]}
            style={{
                position: 'relative',
                background: `url(${image}) no-repeat center center/cover`,
                backgroundAttachment: 'fixed',
                
            }}

            className='family-1'
        >
            <Box
                style={{
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    padding: '1em',
                    backgroundColor: 'rgba(0,0,0, 0.2)',
                    color: 'white',
                    backdropFilter:'blur(4px)'
                }}

            >
                <Box  textAlign='center' >
                    <Heading size={{ base: "lg", sm: "xl", md: "xl", lg: "2xl" }} textShadow="2px 2px 4px rgba(0, 0, 0, 0.75)" >{facultyCount}+</Heading>
                    <Text  mt={2} ml={-4} fontSize={{ base: "x-small", sm: "sm", lg: "md" }} textShadow="2px 2px 4px rgba(0, 0, 0, 0.75)" fontWeight={"semibold"}>FACULTY</Text>

                </Box>
                <Box  textAlign='center' >
                    <Heading size={{ base: "lg", sm: "xl", md: "xl", lg: "2xl" }} textShadow="2px 2px 4px rgba(0, 0, 0, 0.75)" >{phdCount}+</Heading>
                    <Text  mt={2} ml={-4} fontSize={{ base: "x-small", sm: "sm", lg: "md" }} textShadow="2px 2px 4px rgba(0, 0, 0, 0.75)" fontWeight={"semibold"}>PHD</Text>

                </Box>
                <Box  textAlign='center' >
                    <Heading size={{ base: "lg", sm: "xl", md: "xl", lg: "2xl" }} textShadow="2px 2px 4px rgba(0, 0, 0, 0.75)" >{mtechCount}+</Heading>
                    <Text  mt={2} ml={-4} fontSize={{ base: "x-small", sm: "sm", lg: "md" }} textShadow="2px 2px 4px rgba(0, 0, 0, 0.75)" fontWeight={"semibold"}>M-TECH</Text>

                </Box>
                <Box  textAlign='center' >
                    <Heading size={{ base: "lg", sm: "xl", md: "xl", lg: "2xl" }} textShadow="2px 2px 4px rgba(0, 0, 0, 0.75)" >{btechCount}+</Heading>
                    <Text  mt={2} ml={-4} fontSize={{ base: "x-small", sm: "sm", lg: "md" }} textShadow="2px 2px 4px rgba(0, 0, 0, 0.75)" fontWeight={"semibold"}>B-TECH</Text>

                </Box>
            </Box>
        </Box>
    );
}

export default Stats;
