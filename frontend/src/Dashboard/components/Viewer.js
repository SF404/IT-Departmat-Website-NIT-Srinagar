import { Box, Button, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { motion, transform } from 'framer-motion'
import Calender from './Calender'
import Announcements from './Announcements'
import ChatRoom from './ChatRoom'
import Tutorial from './Tutorial'
import Events from './Events'

function Viewer({ currentView, user }) {
    const { getButtonProps, getDisclosureProps, isOpen, onOpen, onClose } = useDisclosure()
    const [hidden, setHidden] = useState(!isOpen)
    const triggerCurrentView = useRef()
    const renderComponent = () => {
        switch (currentView) {
            case 'calendar':
                return <Calender />
            case 'announcement':
                return <Announcements email={user.email} />
            case 'chat':
                return <ChatRoom email={user.email} />
            case 'tutorial':
                return <Tutorial email={user.email} />
            case 'event':
                return <Events email={user.email} />
            default:
                return null;
        }
    };

    useEffect(() => {
        currentView ? onOpen() : onClose();
    }, [currentView])

    return (
        <Box maxW={'360px'} minW={'0px'} flexBasis="auto">
            <Button display={'none'} ref={triggerCurrentView} {...getButtonProps()}></Button>
            <motion.div
                {...getDisclosureProps()}
                hidden={hidden}
                initial={false}
                onAnimationStart={() => setHidden(false)}
                onAnimationComplete={() => setHidden(!isOpen)}
                animate={{ width: isOpen ? 360 : 0, x: isOpen ? 0 : 360 }}
                style={{
                    left: '0',
                    height: '100%',
                    maxWidth: '360px',
                    top: '0',
                }}
            >
                <Box padding={'14px'} w={'full'} h={'full'} pl={0}>
                    {renderComponent()}

                </Box>
            </motion.div>


        </Box>
    )
}

export default Viewer