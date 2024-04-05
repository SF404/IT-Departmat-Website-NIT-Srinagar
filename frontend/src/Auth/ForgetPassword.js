import React, { useState } from 'react';
import { Box, Button, Center, FormControl, FormLabel, Image, Input, InputGroup, InputLeftElement, Text, VStack, useToast } from '@chakra-ui/react';
import logo from './../Assets/Logos/logo.svg';
import { EmailIcon } from '@chakra-ui/icons';

const PasswordResetForm = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('/api/auth/request-password-reset/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                setSubmitted(true);
                toast({
                    title: 'Password Reset Link Sent',
                    description: 'Password reset link sent successfully!',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
            } else {
                // Handle error response
                const data = await response.json();
                toast({
                    title: 'Error',
                    description: data.error || 'An error occurred',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error('Error:', error);
            toast({
                title: 'Error',
                description: 'An error occurred',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box mx="auto" mt="6" w={['300px', '400px', '500px']}>
            <Image src={logo} width={'200px'} mx={'auto'} />
            {submitted ? (
                <Text color="green.500" textAlign={'center'}>Password reset link sent successfully!</Text>
            ) : (
                <form onSubmit={handleSubmit}>
                    <FormControl id="email" isRequired>
                        <FormLabel fontWeight={'bold'} fontSize={'sm'}>Email Address</FormLabel>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<EmailIcon color={'primary'} />}
                            />
                            <Input
                                type="email"
                                focusBorderColor='primary'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </InputGroup>
                    </FormControl>
                    <Button
                        type="submit"
                        bg={'primary'}
                        rounded={'full'}
                        colorScheme='facebook'
                        mt={4}
                        isLoading={loading}
                    >
                        {loading ? 'Loading...' : 'Request Password Reset'}
                    </Button>
                </form>
            )}
        </Box>
    );
};

export default PasswordResetForm;
