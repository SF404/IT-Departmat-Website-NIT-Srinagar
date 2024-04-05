import React, { useEffect, useState } from 'react'
import { getPhdStudents } from '../../Api/public_api'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider, Flex, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import SmallBanner from '../../Components/SmallBanner'

const PhdScholar = () => {
  const [phdScholars, setPhdScholars] = useState({results:[]})
  const fetchPhdScholars = async () => {
    try {
      const data = await getPhdStudents();
      console.log(data)
      setPhdScholars(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPhdScholars()
  }, [])
  return (
    <Box w={'full'} bg={'gray.200'} minH={'100vh'}>
    <SmallBanner heading={'PHD SCHOLARS'}/>
    <Box p={4} w={'full'}>
      <Box w={'full'} border={'none'} width={{base:'full', md:'90%'}} mx={'auto'}>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem bg={'white'} rounded={16}>
                    <AccordionButton p={4} rounded={16}>
                        <Flex alignItems={'center'} fontFamily={'exo'} fontWeight={'bold'} gap={4} justifyContent={'space-between'} w={'full'}>
                            <Text fontSize={'large'}>PhD Scholars</Text>
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>
                    <Divider />
                    <AccordionPanel p={0}>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>S/NO</Th>
                                    <Th>Name</Th>
                                    <Th>Enrollment</Th>
                                    <Th>Supervisor</Th>
                                    <Th>Research Area</Th>
                                    <Th>Email</Th>
                                </Tr>
                            </Thead>
                            <Tbody fontSize={'14px'}>
                                {phdScholars.results.map((item, index) => (
                                    <Tr key={item.enrollmentNumber}>
                                        <Td>{index + 1}</Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.enrollmentNumber.toUpperCase()}</Td>
                                        <Td>{item.supervisor}</Td>
                                        <Td>{item.researchArea}</Td>
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

export default PhdScholar