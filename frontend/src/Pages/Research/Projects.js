import { Avatar, Box, Button, Flex, FormControl, FormLabel, HStack, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SmallBanner from '../../Components/SmallBanner'
import { getProjects} from '../../Api/public_api'

const Projects = () => {
  const [researches, setResearches] = useState([])

  const [formData, setFormData] = useState({
    start_date: '',
    end_date: ''
  });

  const fetchResearches = async () => {
    try {
      const researchs = await getProjects();
      setResearches(researchs)
      console.log(researchs)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchResearchesByDate = async (e) => {
    e.preventDefault()
    try {
      const researchs = await getProjects(formData.start_date, formData.end_date);
      setResearches(researchs)
      console.log(researchs)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchResearches()
  }, [])

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Box w={'full'} minH={'100vh'} bg={'white'}>
      <SmallBanner heading={"Projects"} />
      <Flex p={4} width={{ base: 'full', md: '90%' }} mx={'auto'} gap={10}>
        <Box position={'sticky'} top={'70px'} minW={'200px'} py={4}>
          <form onSubmit={fetchResearchesByDate} method='POST'>
            <FormControl>
              <FormLabel fontSize={'sm'}> From Date</FormLabel>
              <Input type='date' name='start_date' variant={'flushed'} onChange={handleInputChange}></Input>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={'sm'} mt={4}> To Date</FormLabel>
              <Input type='date' name='end_date' variant={'flushed'} onChange={handleInputChange}></Input>
            </FormControl>
            <Button type='submit' w={'full'} colorScheme='facebook' mt={4} rounded={0} isDisabled={!formData.start_date || !formData.end_date}>Search</Button>
          </form>
        </Box>
        <Box w={'full'} color={'black'}>
          {
            researches.map((item) => (
              <Box key={item.project_id} p={4} w={'full'}>
                <Flex alignItems={'center'} gap={4}>
                  <Avatar src={item.faculty?.profile_image} size={'sm'} />
                  <Box>
                    <Text fontSize={'14px'} fontWeight={'bold'}>{item.faculty.first_name} {item.faculty.last_name}</Text>
                    <Text fontSize={'xs'}>{item.start_date} | {item.end_date}</Text>
                  </Box>
                </Flex>
                <Box pl={12} mt={1}>
                  <Text fontSize={'lg'}>{item.title}</Text>
                  <Text fontSize={'14px'}>{item.description}</Text>
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
            ))
          }
        </Box>

      </Flex>

    </Box>
  )
}

export default Projects