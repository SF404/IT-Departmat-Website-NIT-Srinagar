import { Box, Button, IconButton, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SmallBanner from '../../Components/SmallBanner'
import { getSiteFiles } from '../../Api/public_api'
import { PiConfettiBold, PiGraduationCap } from "react-icons/pi";


const Placement = () => {
  const [placementBrochures, setPlacementBrochures] = useState([])
  const fetchPlacementBrochure = async () => {
    try {
      const data = await getSiteFiles('placement_brochure')
      console.log(data)
      setPlacementBrochures(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPlacementBrochure();
  }, [])

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Box w={'full'} minH={'100vh'} bg={'white'}>
      <SmallBanner heading={'PLACEMENTS'} />
      <SimpleGrid columns={[1, 2, 3]} p={4} w={{ base: 'full', md: '50%' }} mx={'auto'} mt={4} gap={4}>
        {
          placementBrochures.map((item, index) => (
            <Box w={'full'} p={4} rounded={24}>
              <IconButton icon={<PiGraduationCap fontSize={'20px'} />} rounded={'full'}>
                <PiGraduationCap fontSize={'20px'} color='black' />
              </IconButton>
              <Text mt={4} fontSize={'xl'} fontWeight={'bold'}>{item.metadata.year}</Text>
              <Text fontSize={'14px'} fontWeight={'bold'}>{item.title}</Text>

              <Button size={'sm'} mt={4} rounded={'full'} fontWeight={'normal'} colorScheme={'facebook'}
                onClick={() => handleDownload(item.file)}
              >Download</Button>
            </Box>
          ))
        }
      </SimpleGrid>
    </Box>
  )
}

export default Placement