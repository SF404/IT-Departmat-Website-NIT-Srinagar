import { Box, Button,  DarkMode,  ListItem, OrderedList,  Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import SmallBanner from '../../Layout/SmallBanner';

function Papers() {
    const [papers, setPapers] = useState(
        [
            {
                "Year": "2022",
                "Papers": [
                    {
                        "Title": "Crowd Sourcing and Blockchain-Based Incentive Mechanism to Combat Fake News",
                        "Authors": "Munaza Farooq, Aqsa Ashraf Makhdomi, and Iqra Altaf Gillani.",
                        "Journal": "Combating Fake News with Computational Intelligence Techniques"
                    }
                ]
            },
            {
                "Year": "2021",
                "Papers": [
                    {
                        "Title": "Inventive Investment Using Bigdata: Tools, Applicability and Challenges Associated",
                        "Authors": "Janib ul Bashir, Tahir Ahmad Wani",
                        "Journal": "Computational Management"
                    },
                    {
                        "Title": "Taxonomy, state-of-the-art, challenges and applications of visual understanding: a review",
                        "Authors": "Khanday, N.Y. and Sofi, S.A.",
                        "Journal": "Computer Science Review"
                    },
                    {
                        "Title": "Deep Insight: Convolutional Neural Network and its Applications for COVID-19 Prognosis",
                        "Authors": "Khanday, N.Y. and Sofi, S.A.",
                        "Journal": "Biomedical Signal Processing and Control"
                    },
                    {
                        "Title": "Blockchain-based Incentive Mechanism to Combat Fake News",
                        "Authors": "Munaza Farooq, Aqsa Ashraf Makhdomi, Iqra Altaf Gillani",
                        "Journal": "Proc. of 2021 Intl. Conf. on Advances in Cyber Security (ACeS 2021)"
                    }
                ]
            },
            {
                "Year": "2020",
                "Papers": [
                    {
                        "Title": "SecONet: A Security Framework for a Photonic Network On-Chip",
                        "Authors": "Janib ul Bashir, Chandran Goodchild, Smruti R. Sarangi",
                        "Journal": "Design Automation Conference (DAC), [virtual], accepted as a poster. Accepted as a full paper at International Symposium on Network on Chips (NOCS), Germany"
                    },
                    {
                        "Title": "A Queueing Network-Based Distributed Laplacian Solver",
                        "Authors": "Iqra Altaf Gillani, Amitabha Bagchi",
                        "Journal": "32nd ACM Symposium on Parallelism in Algorithms and Architectures (SPAA '20)"
                    },
                    {
                        "Title": "GPUOPT: Power Efficient Photonic Network-on-Chip for a Scalable GPU",
                        "Authors": "Janib ul Bashir, Smruti R. Sarangi",
                        "Journal": "ACM Journal on Emerging Technologies in Computing Systems (ACM JETC)"
                    },
                    {
                        "Title": "Blockchain as an Alternative Mechanism for Securing IoT Ecosystems",
                        "Authors": "Jehangir Ali, Shabir A. Sofi",
                        "Journal": "Annual Convention of Computer Society of India 2020"
                    },
                    {
                        "Title": "Ensuring Security and Transparency in Distributed Communication in IoT ecosystems using Blockchain Technology: Protocols, Applications, and Challenges",
                        "Authors": "Jehangir Ali, Shabir A. Sofi",
                        "Journal": "International Journal of Computing and Digital Systems"
                    },
                    {
                        "Title": "SecSched: Flexible Scheduling in Secure Processors",
                        "Authors": "Omais Shafi, Janib ul Bashir",
                        "Journal": "International Conference on Parallel Architecture and Compilation Techniques (PACT 2020)"
                    }
                ]
            },
            {
                "Year": "2019",
                "Papers": [
                    {
                        "Title": "Predict, Share, and Recycle your Way to Low Power Nanophotonic Networks",
                        "Authors": "Janib ul Bashir, Smruti R. Sarangi",
                        "Journal": "ACM Journal on Emerging Technologies in Computing Systems (ACM JETC)"
                    },
                    {
                        "Title": "A Distributed Laplacian Solver and its Applications to Electrical Flow and Random Spanning Tree Computation",
                        "Authors": "Iqra Altaf Gillani, Amitabha Bagchi"
                    },
                    {
                        "Title": "Power efficient Photonic Network-on-Chip for a Scalable GPU",
                        "Authors": "Janib ul Bashir, Khushal Sethi and Smruti R. Sarangi",
                        "Journal": "International Symposium on Networks-on-Chip (NOCS), New York"
                    },
                    {
                        "Title": "SpliESR: Tunable Power Splitter based on an Electro-Optic Slotted Ring Resonator",
                        "Authors": "Rajib R. Ghosh, Janib ul Bashir, Smruti R. Sarangi, Anuj Dhawan",
                        "Journal": "Optics Communications"
                    },
                    {
                        "Title": "BigBus: A Scalable Optical Interconnect",
                        "Authors": "Janib ul Bashir, Eldhose Peter, and Smruti R. Sarangi",
                        "Journal": "ACM Journal of Emerging Technologies in Computing Systems (ACM JETC)"
                    },
                    {
                        "Title": "Slotted Electro-optic Ring Resonator as a Tunable Optical Power Splitter",
                        "Authors": "Rajib R. Ghosh, Janib ul Bashir, Smruti R. Sarangi, Anuj Dhawan",
                        "Journal": "SPIE Photonics West, OPTO, Silicon Photonics XIV, San Francisco, USA"
                    },
                    {
                        "Title": "A Survey of On-chip Optical Interconnects",
                        "Authors": "Janib ul Bashir, Eldhose Peter, and Smruti R. Sarangi",
                        "Journal": "ACM Computing Surveys"
                    },
                    {
                        "Title": "Light-weight, Real-time Internet Traffic Classification",
                        "Authors": "Z. Iqbal, R. Rahim, I.A. Gillani",
                        "Journal": "IEEE international conference on Advanced Networks and Telecommunications Systems (ANTS), 2019"
                    }
                ]
            },
            {
                "Year": "2017",
                "Papers": [
                    {
                        "Title": "Random walk-based in-network computation of arbitrary functions",
                        "Authors": "Iqra Altaf Gillani, Pooja Vyavahare, and Amitabha Bagchi",
                        "Title": "arXiv:1702.03741"
                    },
                    {
                        "Title": "A Stochastic Process on a Network with Connections to Laplacian Systems of Equations",
                        "Authors": "Iqra Altaf Gillani, Amitabha Bagchi, and Pooja Vyavahare",
                        "Title": "arXiv:1701.05296"
                    },
                    {
                        "Title": "Natural algorithm based adaptive architecture for underwater wireless sensor networks",
                        "Authors": "Shabir Sofi and RN Mir",
                        "Journal": "International Conference on Wireless Communications, Signal Processing, and Networking (WiSPNET), 2017"
                    },
                    {
                        "Title": "NUPLet: A Photonics Based Multi-Chip NUCA Architecture",
                        "Authors": "Janib ul Bashir, Smruti R. Sarangi",
                        "Journal": "ICCD (International Conference on Computer Design), Boston, USA"
                    },
                    {
                        "Title": "Poster: BigBus: A Scalable Optical Interconnect",
                        "Authors": "Eldhose Peter, Janib-ul Bashir, and Smruti R. Sarangi",
                        "Journal": "PACT (Parallel Architectures and Compilation Techniques), Portland, USA"
                    },
                    {
                        "Title": "Optical Overlay NUCA: A High Speed Substrate for Shared L2 Caches",
                        "Authors": "Eldhose Peter, Anuj Arora, Janibul Bashir, Akriti Bagaria, and Smruti R. Sarangi",
                        "Journal": "ACM Journal on Emerging Technologies in Computing Systems (JETC)",
                    }
                ]
            }
        ]

    )

    const scrollToSection = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        var headerOffset = 54;
        var elementPosition = targetSection.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };


    return (
        <>
        <SmallBanner heading={"RESEARCH PAPERS"}/>
            <Box display={'flex'} justifyContent={'flex-start'} position={'relative'}>
                <Box display={{ base: 'none', md: 'block' }}>
                    <VStack maxW={'250px'} id='selector' minW={'250px'} position={'sticky'} top={'54px'} padding={'1em'} ml={2} mt={4} borderRadius={4} boxShadow={'0 0 4px rgba(0, 0, 0, 0.1)'} minH={'fit-content'} bg={'white'}>
                        <DarkMode>
                            {papers.map((yearData, index) => (
                                <Button key={index} width={'full'} onClick={() => scrollToSection(yearData.Year)} size={'sm'} colorScheme='blue' bg={'#d3e3fd'} _hover={{ bg: '#d7e6ff' }}>{yearData.Year}</Button>
                            ))}
                        </DarkMode>
                    </VStack>

                </Box>
                <Box flexGrow={1}>
                    {papers.map((yearData, index) => (
                        <Box key={index} id={yearData.Year} py={'1em'} px={'0.5em'} bg={'white'} m={4} borderRadius={12} boxShadow={'0 0 4px rgba(0,0,0,0.1)'}>
                            <Text maxW={'fit-content'} px={4} py={1} color={'darkblue'} fontWeight={'bold'}>Year: {yearData.Year}</Text>
                            <OrderedList p={4} fontSize={'0.9em'}>
                                {yearData.Papers.map((paper, paperIndex) => (
                                    <ListItem key={paperIndex}>
                                        <strong>{paper.Title}</strong>
                                        <p>Authors: {paper.Authors}</p>
                                        <p>Journal: {paper.Journal}</p>
                                    </ListItem>
                                ))}
                            </OrderedList>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    )
}

export default Papers