import React, { useState } from "react";
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
function isPasswordSecure(password) {
  if (password.length < 8) {
    return false;
  }

  const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  return regex.test(password);
}

function Signup() {
  const [message, setMessage] = useState({
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
    description: "",
  });

  const [mailverify, setMailVerify] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const mail_verify = async () => {
    console.log();
    try {
      const email = mailverify.email;
      const response = await axios.get(
        "http://127.0.0.1:8000/api/public/getteacherbymail/",
        {
          params: {
            email: email,
          },
        }
      );
      const data = response.data;
      console.log(data[0]);
      if (data[0] == undefined) {
        setFormData({
          name: "",
          email: "",
          password: "",
          username: "",
          re_password: "",
          description: "",
        });
        setMessage({
          message: "Cannot find the data related to this email",
        });
      } else {
        if (data.length > 0) {
          const { name, email, description } = data[0];
          setFormData({
            ...formData,
            name,
            email,
            description,
          });
        }
        setMessage({
          message: "Data fetch successfully",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isPasswordSecure(formData.password)) {
      setMessage({
        message:
          "Password must contains at least one alphabet, one number, one symbol and minimum 8 characters",
      });
      return;
    }
    if (formData.password == formData.re_password) {
      setMessage({
        message: "Submitting...",
      });
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/auth/users/",
          formData
        );
        setMessage({
          message: "Successful!!! mail has been send to this email",
        });
      } catch (error) {
        setMessage({
          message: "Signup Failed",
        });
        console.error("Error:", error);
      }
    } else {
      setMessage({
        message: "Password not match re_enter the password",
      });
    }
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
        <Heading as="h2" size="xl" mb={4}>
          Sign Up
        </Heading>
        <Box display="flex" alignItems="center">
          <Input
            flex="1"
            value={mailverify.email}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            borderRadius="md"
            onChange={(e) => setMailVerify({ email: e.target.value })}
          />
          <Button
            type="button"
            colorScheme="teal"
            size="lg"
            fontSize="md"
            borderRadius="md"
            onClick={mail_verify}
            height={10}
            marginStart={3}
          >
            Verify
          </Button>
        </Box>
        {formData.name && formData.email && (
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  borderRadius="md"
                  readOnly
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  borderRadius="md"
                  readOnly
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="name">Description</FormLabel>
                <Input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  borderRadius="md"
                  readOnly
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="name">Username</FormLabel>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  borderRadius="md"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  borderRadius="md"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="re_password"> Re_Password</FormLabel>
                <Input
                  type="password"
                  id="re_password"
                  name="re_password"
                  value={formData.re_password}
                  onChange={handleChange}
                  placeholder="Retype your password"
                  borderRadius="md"
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                fontSize="md"
                borderRadius="md"
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        )}
        <Text m={2}>*{message.message}</Text>
      </Box>
    </ChakraProvider>
  );
}

export default Signup;
