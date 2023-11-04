import { Box, Button, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { motion, transform } from 'framer-motion'
import Calender from './Calender'
import Announcements from './Announcements'
import ChatRoom from './ChatRoom'
import Tutorial from './Tutorial'
import Events from './Events'

function Viewer({ currentView }) {
    const { getButtonProps, getDisclosureProps, isOpen, onOpen, onClose } = useDisclosure()
    const [hidden, setHidden] = useState(!isOpen)
    const triggerCurrentView = useRef()
    const renderComponent = () => {
        switch (currentView) {
            case 'calendar':
                return <Calender />
            case 'announcement':
                return <Announcements />
            case 'chat':
                return <ChatRoom />
            case 'tutorial':
                return <Tutorial/>
            case 'event':
                return <Events/>
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
                    padding:'14px',
                    paddingLeft:'0',
                }}
            >
                {renderComponent()}
            </motion.div>


        </Box>
    )
}

export default Viewer