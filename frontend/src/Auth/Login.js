import React, { useEffect, useState } from "react";
import { Center, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  ChakraProvider,
  extendTheme,
  Text,
} from "@chakra-ui/react";
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
});

function Login() {
  const toast = useToast();
  function callToast(msj, status) {
    return toast({
      position: "top",
      title: msj,
      status: status,
      duration: 2000,
      isClosable: true,
    });
  }
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  async function payload_check() {
    if (localStorage.getItem("TokenA") && localStorage.getItem("TokenR")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
          Accept: "application/json",
        },
      };
      try {
        const new_token = await axios.post(
          "/api/auth/jwt/refresh/",
          { refresh: localStorage.getItem("TokenR") },
          config
        );
        const accessToken = new_token.data.access;
        localStorage.setItem("TokenA", accessToken);
        console.log("token refreshed");
      } catch (err) {
        localStorage.removeItem("TokenA");
        localStorage.removeItem("TokenR");
        callToast("Refresh Token unvalid", "error");
        console.error(err);
      }
      try {
        const response = await axios.get("api/auth/users/me/", config);
        console.log(response.data);
        navigate("/dashboard");
        return;
      } catch (err) {
        localStorage.removeItem("TokenA");
        localStorage.removeItem("TokenR");
        callToast("Token expired try to login in again", "error");
        console.error(err);
      }
    }
    return;
  }

  useEffect(() => {
    payload_check();
  }, []);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/auth/jwt/create/", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
        },
      });
      console.log("Response Status Code:", response);
      switch (response.status) {
        case 200:
          const accessToken = response.data.access;
          const refreshToken = response.data.refresh;
          localStorage.setItem("TokenA", accessToken);
          localStorage.setItem("TokenR", refreshToken);

          callToast("Login successfull", "success");
          break;
        default:
          callToast(
            "Somthing went Wrong in Frontend! Please contact TechTeam",
            "error"
          );
          break;
      }
    } catch (error) {
      callToast("email and Password is Unauthorized", "error");
      console.log("post failed");
    }
    payload_check();
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        p={4}
        maxW="400px"
        mx="auto"
        bg="white"
        borderRadius="lg"
        boxShadow="md"
        mt="4rem"
      >
        <Heading as="h3" size="lg" mb={4} textAlign={"Center"}>
          Log In
        </Heading>
        <FormControl isRequired>
          <FormLabel htmlFor="name">Username</FormLabel>
          <Input
            type="text"
            name="username"
            value={formData.username}
            required
            minLength="2"
            onChange={handleInputChange}
          />
        </FormControl>

        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                required
                minLength="2"
                onChange={handleInputChange}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              fontSize="md"
              borderRadius="md"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </ChakraProvider>
  );
}

export default Login;
