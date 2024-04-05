import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, FormControl, FormLabel, Input, Button, Text, useToast, Image, InputGroup, InputLeftElement } from '@chakra-ui/react';
import logo from './../Assets/Logos/logo.svg';
import { LockIcon } from '@chakra-ui/icons';

const ResetPassword = () => {
  const { uid, token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword()) {
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`/api/auth/reset-password/${uid}/${token}/`, { password });
      setResetSuccess(true);
      toast({
        title: 'Password Reset',
        description: 'Password reset successfully!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

    } catch (error) {
      setError('An error occurred while resetting the password or this reset link is expired');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (resetSuccess) {
    return (
      <Box textAlign="center" mt="8">
        <Text>Password reset successfully!</Text>
      </Box>
    );
  }

  return (
    <Box mx="auto" mt="6" w={['300px', '400px', '500px']}>
      <Image src={logo} width={'200px'} mx={'auto'} mb={6} />
      <form onSubmit={handleSubmit}>
        <FormControl id="password" mb="4">
          <FormLabel fontWeight={'bold'} fontSize={'14px'}>New Password</FormLabel>
          <InputGroup >
            <Input type="password" focusBorderColor="primary" value={password} onChange={(e) => setPassword(e.target.value)} isRequired />
          </InputGroup>
        </FormControl>
        <FormControl id="confirmPassword" mb="4">
          <FormLabel fontWeight={'bold'} fontSize={'14px'}>Confirm Password</FormLabel>
          <InputGroup focusBorderColor="primary">
            <Input type="password" focusBorderColor="primary" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} isRequired />
          </InputGroup>
        </FormControl>
        {error && <Text color="red.500">{error}</Text>}
        <Button
          type="submit"
          bg={'primary'}
          rounded={'full'}
          colorScheme='facebook'
          mt={2}
          isLoading={loading}
          isDisabled={!password || !confirmPassword || password.length < 8 || password !=confirmPassword}
          leftIcon={<LockIcon />}
        >
          {loading ? 'Loading...' : 'Reset Password'}
        </Button>
      </form>
    </Box>
  );
};

export default ResetPassword;
