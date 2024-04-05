import React, { useEffect, useState } from 'react'
import { getBtechStudents, getPhdStudents } from '../../Api/public_api'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider, Flex, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import SmallBanner from '../../Components/SmallBanner'
import { useParams } from 'react-router-dom'

const BtechStudents = () => {
  const { batch } = useParams();
  const [btechStudents, setBtechStudents] = useState([])
  const fetchBtechStudents = async () => {
    try {
      const data = await getBtechStudents(batch);
      console.log(data)
      setBtechStudents(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBtechStudents()
  }, [])
  return (
    <Box w={'full'} bg={'gray.200'} minH={'100vh'}>
      <SmallBanner heading={'B-Tech Students ('+batch+')'} />
      <Box p={4} w={'full'}>
        <Box w={'full'} border={'none'} width={{ base: 'full', md: '90%' }} mx={'auto'}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem bg={'white'} rounded={16}>
              <AccordionButton p={4} rounded={16}>
                <Flex alignItems={'center'} fontFamily={'exo'} fontWeight={'bold'} gap={4} justifyContent={'space-between'} w={'full'}>
                  <Text fontSize={'large'}>B-Tech Students</Text>
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
                      <Th>Email</Th>
                    </Tr>
                  </Thead>
                  <Tbody fontSize={'14px'}>
                    {btechStudents.map((item, index) => (
                      <Tr key={item.enrollment_no}>
                        <Td>{index + 1}</Td>
                        <Td>{item.name}</Td>
                        <Td>{item.enrollment_no}</Td>
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

export default BtechStudents