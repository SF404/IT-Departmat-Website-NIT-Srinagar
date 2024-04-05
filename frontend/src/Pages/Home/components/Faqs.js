import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Heading, IconButton } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, } from '@chakra-ui/react'
import React from 'react'

function Faqs() {
    const Faqs = [
        {
            title: "How Exams are conducted at the Institute?",
            description: "NIT Srinagar follows a Credit based continuous Assessment System with one Midterm & one Major Examination in each Semester."
        },
        {
            title: "When does an Academic Session Begin at NIT Srinagar?",
            description: "The Academic session is divided into two Semesters, an Autumn semester(August–December) &  a Spring semester(March–July)."
        },
        {
            title: "How many days in a Week are Classes Conducted?",
            description: "NIT Srinagar follows 5 days week period with at least 90 Working days in each Semester."
        },

    ]
    return (
        <Box w={'full'}>
            <Heading fontSize={'1.5em'} my={'0.5em'} textAlign={'left'} p={4} color={'#192e59'}>FAQS</Heading>
            <Box w={'full'}>
                <Accordion allowToggle>

                    {
                        Faqs.map((item, index) => (

                            <AccordionItem key={index} border={'none'}>
                                {({ isExpanded }) => (
                                    <>
                                        <AccordionButton _hover={{ backgroundColor: 'transparent' }}>
                                            <IconButton fontSize={'1.5em'}
                                                color={'#192e59'}
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