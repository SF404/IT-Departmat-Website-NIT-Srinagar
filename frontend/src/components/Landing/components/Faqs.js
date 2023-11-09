import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Heading, Icon, IconButton } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IconBase } from 'react-icons/lib'
import { PiPlusBold, PiPlusSquareDuotone } from 'react-icons/pi'

function Faqs() {
    const [Faqs, setFaqs] = useState([
        {
            title: "How can I reset my IT department account password?",
            description: "To reset your password, click on the 'Forgot Password' link on the login page and follow the provided instructions."
        },
        {
            title: "What should I do if I'm experiencing network connectivity issues?",
            description: "If you're facing network connectivity problems, please contact our IT support team at [Contact Email/Phone Number] for assistance."
        },
        {
            title: "How do I request access to specific software or systems?",
            description: "To request access to particular software or systems, please submit a request through our IT Access Request Form."
        },
    ])
    return (
        <Box w={'100%'}>
            <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'left'} p={4} color={'darkblue'}>FAQS</Heading>
            <Box w={'full'}>
                <Accordion allowToggle>

                    {
                        Faqs.map((item, index) => (

                            <AccordionItem border={'none'}>
                                {({ isExpanded }) => (
                                    <>
                                        <AccordionButton _hover={{ backgroundColor: 'transparent' }}>
                                            <IconButton fontSize={'1.5em'}
                                                color={'darkblue'}
                                                bg={'#d8dcf0'}
                                                icon={isExpanded ? (<MinusIcon fontSize='12px' />) : (<AddIcon fontSize='12px' />)}
                                                aria-label="Like"
                                                size={'sm'}
                                            />
                                            <Box as="span" flex='1' ml={4} textAlign='left'>
                                                {item.title}
                                            </Box>
                                        </AccordionButton>
                                        <AccordionPanel pb={4} pl={'65px'}>
                                            {item.description}
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        ))
                    }
                </Accordion>


            </Box>
        </Box>
    )
}

export default Faqs