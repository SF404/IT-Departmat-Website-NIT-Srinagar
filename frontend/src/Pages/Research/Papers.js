import { Box, Button, DarkMode, Link, List, ListIcon, ListItem, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SmallBanner from '../../Layout/SmallBanner';
import { PiCubeDuotone } from "react-icons/pi";
import axios from 'axios'
import image from './../../assets/banners/research_paper.jpeg';


function Papers() {
    const [papers, setPapers] = useState(null);

    useEffect(() => {
        const fetchResearch = async () => {
            try {
                const response = await axios.get('/api/public/teacherdataview?type=research');
                setPapers(response.data);
            } catch (error) {
                console.error('Error fetching research papers:', error);
                setPapers(null)
            }
        };
        return () => fetchResearch();
    }, []);

    const scrollToSection = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            var headerOffset = 54;
            var elementPosition = targetSection.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const groupPapersByYear = () => {
        if (!papers) return {};
        return papers.reduce((acc, paper) => {
            const year = paper.date;
            if (!acc[year]) {
                acc[year] = [];
            }
            acc[year].push(paper);
            return acc;
        }, {});
    };

    const groupedPapers = groupPapersByYear();

    return (
        <>
            <SmallBanner image={image} heading={"RESEARCH PAPERS"} />
            <Box display={'flex'} justifyContent={'flex-start'} position={'relative'}>
                <Box display={{ base: 'none', md: 'block' }}>
                    <VStack maxW={'250px'} id='selector' minW={'250px'} position={'sticky'} top={'54px'} padding={'1em'} ml={2} mt={4} borderRadius={4} boxShadow={'0 0 4px rgba(0, 0, 0, 0.1)'} minH={'fit-content'} bg={'white'}>
                        <DarkMode>
                            {Object.keys(groupedPapers).reverse().map((year, index) => (
                                <Button key={index} width={'full'} onClick={() => scrollToSection(year)} size={'sm'} colorScheme='blackAlpha' >{year}</Button>
                            ))}
                        </DarkMode>
                    </VStack>
                </Box>
                <Box flexGrow={1} className='family-5'>
                    {Object.keys(groupedPapers).reverse().map((year, index) => (
                        <Box key={index} id={year} py={'1em'} px={'0.5em'} bg={'white'} m={4} borderRadius={12} boxShadow={'0 0 4px rgba(0,0,0,0.1)'}>
                            <Text maxW={'fit-content'} px={4} py={1} color={'#192e59'} fontWeight={'bold'}>Year: {year}</Text>
                            <List p={4}>
                                {groupedPapers[year].map((paper, paperIndex) => (
                                    <ListItem key={paperIndex} display={'flex'} mb={2}>
                                        <ListIcon as={PiCubeDuotone} fontSize={'1.3em'} mt={'4px'} color={'#192e59'} />
                                        <Box>

                                            <Text as={paper.url ? Link : 'p'} href={paper.url} fontWeight={'semibold'}>{paper.title}</Text>
                                            <Text fontSize={'0.9em'}>Authors: {paper.authors}</Text>
                                        </Box>
                                        {/* Add other relevant information */}
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default Papers;
