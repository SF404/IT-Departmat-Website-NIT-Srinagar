import React, { useEffect, useState } from 'react'
import { Popover, PopoverTrigger, IconButton, PopoverContent, PopoverArrow, Button } from '@chakra-ui/react'
import { PiKeyDuotone } from 'react-icons/pi'
import { FaUser } from 'react-icons/fa'

const PopOver = () => {
    const [loginState, setLoginState] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('token')
        const isLogedin = token ? true : false;
        setLoginState(isLogedin)
    }, [])
    return (

        <Popover placement='bottom-end'>
            <PopoverTrigger>
                <IconButton icon={<FaUser fontSize={'18px'} />} size={'sm'} variant={'ghost'} color={'gray.200'} colorScheme='blackAlpha' ></IconButton>
            </PopoverTrigger>
            <PopoverContent maxW={'200px'} py={4}>
                <PopoverArrow />
                {!loginState ?
                    <a href="/login">
                        <Button rightIcon={<PiKeyDuotone />} letterSpacing={'0.5px'} w={'full'}>Login</Button>
                    </a> :
                    <a href="/dashboard">
                        <Button letterSpacing={'0.5px'} w={'full'}>Dashboard</Button>
                    </a>
                }
            </PopoverContent>
        </Popover>
    )
}

export default PopOver