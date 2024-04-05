import { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Center,
    Image,
    VStack,
    InputGroup,
    InputLeftElement,
    useToast,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import logo from './../Assets/Logos/logo.svg';
import { login } from '../Api/api';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const data = await login(username, password);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            window.location.href = '/dashboard';
        } catch (error) {
            console.log(error);
            toast({
                title: 'An error occurred.',
                description: 'Failed to login. Please try again later.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setLoading(false); // Set loading state to false after login attempt
        }
    };

    return (
        <Center width={'100%'} height={'100vh'}>
            <VStack>
                <Image src={logo} width={'200px'} />
                <Box>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing="4" w={['300px', '400px', '500px']}>
                            <FormControl id="username">
                                <FormLabel fontWeight={'bold'} fontSize={'sm'}>Email</FormLabel>
                                <InputGroup >
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<EmailIcon color={'primary'} />}
                                    />
                                    <Input
                                        type="email"
                                        focusBorderColor='primary'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Enter your email"
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel fontWeight={'bold'} fontSize={'sm'}>Password</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<LockIcon color={'primary'} />}
                                    />
                                    <Input
                                        type="password"
                                        focusBorderColor='primary'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        min={8}
                                        max={16}
                                    />
                                </InputGroup>
                            </FormControl>
                            <Button
                                type="submit"
                                bg={'primary'}
                                rounded={'full'}
                                colorScheme='facebook'
                                mt={2}
                                isLoading={loading}
                                isDisabled={!username || !password || password.length < 4}
                                loadingText="Logging in..."
                            >
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </VStack>
        </Center>
    );
};

export default LoginForm;
