// Error404.js

import React from 'react';
import { Box, Button, Center, Heading, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box p={4}>
      <Center h="100vh" flexDirection="column" textAlign="center">
        <Heading as="h1" mb={4} fontSize="6xl" color="red.500">
          404
        </Heading>
        <Text fontSize="2xl" mb={8}>
          Oops! The page you're looking for doesn't exist.
        </Text>
        <Button
          as={RouterLink}
          to="/"
          colorScheme="teal"
          size="lg"
          borderRadius="md"
          _hover={{ bg: 'teal.500' }}
        >
          Go to Home
        </Button>
      </Center>
    </Box>
  );
};

export default NotFound;
