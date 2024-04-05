import React, { useEffect, useState } from 'react'
import GridCarousel from '../../../Components/Carousel/GridCarousel'
import { Avatar, Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import { getResearches } from '../../../Api/public_api'

const ResearchTile = ({ item }) => {
    const handleDownload = (url) => {
        window.open(url, '_blank');
    };
    return (
        <Box aspectRatio={3 / 2} w={'full'} h={'full'} bg={'gray.200'} rounded={16} shadow={'md'} boxShadow={'md'} p={4}>
            <Flex alignItems={'center'} gap={2}>
                <Avatar src={item.faculty?.profile_image} size={'sm'} />
                <Box>
                    <Text fontSize={'14px'} fontWeight={'bold'}>{item.faculty.first_name} {item.faculty.last_name}</Text>
                    <Text fontSize={'xs'}>{item.research_date}</Text>
                </Box>
            </Flex>
            <Box mt={1} fontSize={'14px'}>
                <Text fontWeight={'semibold'} color={'blackAlpha'}>{item.title}</Text>
                <Text >{item.description}</Text>
                <HStack mt={1}>
                    {
                        item.url &&
                        <Button variant={'outline'} size={'xs'} colorScheme='facebook' rounded={'full'} onClick={() => handleDownload(item.url)}>Link</Button>
                    }
                    {
                        item.attachment &&
                        <Button variant={'outline'} size={'xs'} colorScheme='facebook' rounded={'full'} onClick={() => handleDownload(item.attachment)}>Download</Button>
                    }
                </HStack>
            </Box>
        </Box>
    )
}


const RecentResearches = () => {
    const [researches, setResearches] = useState([])

    const fetchResearches = async () => {
        try {
            const researchs = await getResearches();
            setResearches(researchs)
            console.log(researchs)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchResearches()
    }, [])
    return (
        <GridCarousel title1={"RECENT"} title2={"RESEARCHES"} GridTile={ResearchTile} items={researches} showDots={true}/>
    )
}

export default RecentResearches