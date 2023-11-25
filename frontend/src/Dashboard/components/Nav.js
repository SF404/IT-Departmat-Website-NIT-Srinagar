import React from 'react';
import { Flex, Box, Heading, Spacer, Link, Button } from '@chakra-ui/react';
import { NavLink as DomLink } from 'react-router-dom';


const Nav = () => {
    return (
        <Flex p="4" alignItems="center" bg={'white'} height={'64px'}>
            <Box>
                <Heading color="darkblue" size={'lg'}>Dashboard</Heading>
            </Box>
            <Spacer />
            <Box>
                <Link as={DomLink} to='/dashboard' end activeClassName="active" color="darkblue" mr="4" fontWeight="bold" textDecoration="none">
                    Dashboard
                </Link>
                <Link as={DomLink} to='myprofile' activeClassName="active" color="darkblue" mr="4" fontWeight="bold" textDecoration="none">
                    My Profile
                </Link>
                <Link as={DomLink} to='addnews' activeClassName="active" color="darkblue" mr="4" fontWeight="bold" textDecoration="none">
                    News +
                </Link>
                <Link color="darkblue" mr="4" fontWeight="bold" textDecoration="none">
                    Services
                </Link>
            </Box>
            <Spacer />
            <Box>
                <Button colorScheme="facebook" fontWeight={'light'} rounded={'full'} variant="solid">
                    Logout
                </Button>
            </Box>
        </Flex>
    );
};

export default Nav;
