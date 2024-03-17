import React from 'react';
import { Flex, Box, Heading, Spacer, Link, Button } from '@chakra-ui/react';
import { NavLink as DomLink } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Nav = () => {
    const navigate = useNavigate();
    const Logout = async () => {
        try {
            const logoutResponse = await axios.post("/api/logout/", {
                withCredentials: true,
            });
            if (logoutResponse.status === 200) {
                localStorage.removeItem("TokenA");
                localStorage.removeItem("TokenR");
                document.cookie = "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                navigate("/");
            } else {
                console.error("Unexpected response status:", logoutResponse.status);
            }
        } catch (error) {
            console.error("Error during logout:", error);
            alert("An error occurred during logout");
        }
    }
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
                {/* <Link as={DomLink} to='addnews' activeClassName="active" color="darkblue" mr="4" fontWeight="bold" textDecoration="none">
                    News +
                </Link> */}
            </Box>
            <Spacer />
            <Box>
                <Button colorScheme="facebook" fontWeight={'light'} rounded={'full'} variant="solid" onClick={Logout}>
                    Logout
                </Button>
            </Box>
        </Flex>
    );
};

export default Nav;
