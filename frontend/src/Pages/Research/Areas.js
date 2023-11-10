import { Box, Center, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import ai from './../../assets/icons/artifical-intelligence.png'
import ar from './../../assets/icons/cpu.png'
import cn from './../../assets/icons/networking.png'
import da from './../../assets/icons/data-science.png'
import ds from './../../assets/icons/data-center.png'
import gv from './../../assets/icons/chart.png'
import sn from './../../assets/icons/motion-sensor.png'
import cc from './../../assets/icons/big-data.png'
import SmallBanner from '../../Layout/SmallBanner'

function Areas() {
    const [areas, setAreas] = useState([
        {
            "area": "Artificial Intelligence and Machine learning",
            "faculty": "Dr. Shabir Ahmad Sofi",
            "image": ai,
        },
        {
            "area": "Architecture and embedded systems",
            "faculty": "Dr. Janibul Bashir",
            "image": ar,
        },
        {
            "area": "Computer Networks",
            "faculty": "Dr. Iqra Altaf Gillani",
            "image": cn,
        },
        {
            "area": "Data Analysis",
            "faculty": [
                "Dr. Shabir Ahmad Sofi",
                "Dr. Iqra Altaf",
                "Dr. Janibul Bashir",
                "Dr. Shrabanti Mandal",
                
            ],
            "image": da
        },
        {
            "area": "Distributed Systems and Parallel Programming",
            "faculty": [
                "Dr. Janibul Bashir",
                "Dr. Iqra Altaf Gillani"
            ],
            "image": ds
        },
        {
            "area": "Graphic and Vision",
            "faculty": "Ms. Arooj Nissar",
            "image": gv
        },
        {
            "area": "Wireless sensor networks",
            "faculty": "Dr. Shabir Ahmad Sofi",
            "image": sn
        },
        {
            "area": "Cloud Computing and BigData",
            "faculty": "Dr. Prabal Verma",
            "image": cc
        }
    ])
    return (
        <>
            <SmallBanner heading={'RESEARCH AREAS'}/>

            <Center m={4}>
                <Box width={{ base: '100%', md: '80%'}}>
                    {
                        areas.map((area, index) => (
                            <Box key={index} my={4}>
                                <HStack pl={4} mb={'-20px'}>
                                    <Box bg={'white'} mb={'-10px'} padding={4} borderRadius={'full'} border={'6px solid #f1f2f6'}><Image width={'2.5em'} height={'2.5em'} minW={'2.5em'} src={area.image} p={1}></Image></Box>
                                    <Box fontWeight={'bold'} color={'darkblue'} fontSize={'1em'} lineHeight={1.2} className='family-1'>{area.area}</Box>
                                </HStack>
                                <VStack w={'full'} alignItems={'flex-start'} bg={'white'}  boxShadow={'0 0px 6px rgba(0,0,0,0.05)'} pt={10} pb={4} pl={8} spacing={2} borderRadius={'0.5em'} className='family-1'>
                                    {Array.isArray(area.faculty) ? (
                                        <Text ml={4}>
                                            {area.faculty.map((faculty, facultyIndex) => (
                                                <Text key={facultyIndex} my={1}>{faculty}</Text>
                                            ))}
                                        </Text>
                                    ) : (
                                        <Text ml={4} mt={2}>{area.faculty}</Text>
                                    )}
                                </VStack>
                            </Box>
                        ))
                    }
                </Box>
            </Center>

        </>
    )
}

export default Areas