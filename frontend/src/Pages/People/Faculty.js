import React, { useEffect, useState } from 'react';
import SmallBanner from '../../Components/SmallBanner';
import { Avatar, Badge, Box, Button, Flex, HStack, Input, Link, Stack, Text } from '@chakra-ui/react';
import { getFacultyList } from '../../Api/public_api';
import { PiEnvelopeDuotone, PiGlobeHemisphereEastDuotone, PiPhoneDuotone } from "react-icons/pi";

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);

  const fetchFaculty = async () => {
    try {
      const data = await getFacultyList();
      setFaculty(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFaculty();
  }, []);


  return (
    <Box w={'full'} bg={'gray.200'}>
      <SmallBanner heading={"FACULTY MEMBERS"} />
      <Flex minH={'100vh'} width={{ base: '100%', md: '80%' }} mx={'auto'} my={6} p={4} gap={2}>
        <Box as={Stack} w={'full'}>
          {faculty.map((item) => (
            <Flex key={item.faculty_id} bg={'white'} p={4} rounded={16} gap={6}>
              <Avatar src={item.profile_image} size={'2xl'} />
              <Box flex={1}>
                <Stack flex={1} spacing={1} mt={2}>
                  <Text fontSize={'2xl'} fontWeight={'bolder'} lineHeight={'1em'}>{item.first_name + " " + item.last_name}</Text>
                  <Text fontSize={'sm'} fontWeight={'bold'}>{item.designation} | {item.highest_degree}</Text>
                  <Text fontSize={'sm'} fontWeight={'bold'}>Department: {item.department}</Text>
                  <Text fontSize={'14px'}>{item.bio}</Text>
                </Stack>
                <Flex w={'full'} py={4} fontSize={'14px'} alignItems={'center'} gap={8} flexWrap={'wrap'}>
                  <Box>
                    <Text fontWeight={'semibold'} fontSize={'12px'}>Phone</Text>
                    <Text>{item.phone_number}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight={'semibold'} fontSize={'12px'}>Email</Text>
                    <Text>{item.email}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight={'semibold'} fontSize={'12px'}>Website</Text>
                    <Text>{item.website_url}</Text>
                  </Box>

                </Flex>
                <Link href={`faculty/details/${item.faculty_id}`}>
                  <Button colorScheme='facebook' size={'sm'} variant={'outline'} rounded={0} mt={2}>Visit Profile</Button>
                </Link>
              </Box>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Faculty;
