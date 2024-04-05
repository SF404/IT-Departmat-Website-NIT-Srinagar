import React, { useEffect, useState } from 'react'
import { Box, Flex, IconButton, Text, Table, Thead, Tbody, Tr, Th, Td, DarkMode, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Divider, Button } from '@chakra-ui/react';
import { getAlumniList } from '../../Api/public_api'
import SmallBanner from '../../Components/SmallBanner';

const Alumni = () => {
  const [alumni, setAlumni] = useState([])
  const fetchAlumni = async () => {
    try {
      const data = await getAlumniList();
      console.log(data)
      setAlumni(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAlumni();
  }, [])

  return (
    <Box minH={'100vh'} bg={'gray.200'}>
      <SmallBanner heading={"Alumni"} />
      <Box p={4}>
        <Box w={'full'} width={{ base: 'full', md: '90%' }} mx={'auto'}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem bg={'white'} rounded={16}>
              <AccordionButton p={4} rounded={16}>
                <Flex alignItems={'center'} fontFamily={'exo'} fontWeight={'bold'} gap={4} justifyContent={'space-between'} w={'full'}>
                  <Text fontSize={'large'}>Alumni</Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <Divider />
              <AccordionPanel p={0} pb={4} overflowX={'auto'}>
                <Table variant="striped" colorScheme='blackAlpha'>
                  <Thead>
                    <Tr>
                      <Th>S/NO</Th>
                      <Th>Name</Th>
                      <Th>Graduation Year</Th>
                      <Th>Present Job</Th>
                      <Th>Previous Job(s)</Th>
                      <Th>Achievements</Th>
                      <Th>Email</Th>
                    </Tr>
                  </Thead>
                  <Tbody fontSize={'14px'}>
                    {alumni.map((item, index) => (
                      <Tr key={item.alumni_id} fontWeight={'semibold'}>
                        <Td>{index + 1}</Td>
                        <Td>{item.name}</Td>
                        <Td>{item.graduation_year}</Td>
                        <Td>{item.present_job}</Td>
                        <Td>{item.previous_jobs}</Td>
                        <Td>{item.achievements}</Td>
                        <Td>{item.email}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </Box>
  )
}

export default Alumni