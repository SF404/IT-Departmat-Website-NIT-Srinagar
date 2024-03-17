import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Center, Flex, FormControl, FormLabel, Image, Input, SimpleGrid, Text, Textarea, VStack, useToast } from '@chakra-ui/react';

const UpdateNews = () => {
  const toast = useToast()
  const [news, setNews] = useState(null)
  const [formData, setFormData] = useState({
    headline: '',
    date: '',
    content: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataForUpload = new FormData();

      for (const key in formData) {
        formDataForUpload.append(key, formData[key]);
      }

      await axios.post('/api/postpublicdata/?type=news');

      setFormData({
        headline: '',
        author: '',
        date: '',
        content: '',
        image: null,
      });
    } catch (error) {
      toast({
        varient: 'left-accent',
        title: 'Something went Wrong',
        description: error.response.data.error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/public/teacherdataview/?type=news')
        setNews(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
        toast({
          title: 'Contact Administrator',
          description: "Failed to fetch News, " + error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    }

    return () => {
      fetchNews()
    }
  }, [])

  const NewsTile = ({ headline, date, image, content, author }) => (
    <Box
      key={headline} // Assuming each news item has a unique headline
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
      overflow="hidden"
      display={'flex'}
      alignItems={'flex-start'}
      p={4}
      gap={4}
    >
      {image && <Image aspectRatio={1} height={'150px'} src={image} alt={headline} mb={4} rounded={6} />}
      <Box fontSize={'0.8em'}>
        <Text fontWeight="bold" fontSize="xl" mb={2}>
          {headline}
        </Text>
        <Text fontSize="sm" color="gray.500" mb={2}>
          {date}
        </Text>
        <Text>{content}</Text>
        <Text mt={4} fontStyle="italic" textAlign="right" color="gray.600">
          {author}
        </Text>
      </Box>
    </Box>
  );


  return (
    <Center p="4" h={'calc(100vh-64px)'} w={'full'}>
      <Flex w={'full'} gap={4}>

        <Box bg={'white'} borderRadius={8} w={'full'} h={'full'} boxShadow={'0 0 6px rgba(0,0,0,0.05)'}>
          <Box h={'40px'} w={'full'} bg={'#d8dcf0'} borderTopRadius={8}></Box>
          <VStack spacing="4" p={8}>
            <FormControl>
              <FormLabel display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'rgba(0,0,0,0.1)'} fontWeight={'bold'} color={'rgba(0,0,0,0.6)'} border={'3px dashed rgba(0,0,0,0.3)'} padding={4} height={'100px'} width={'100%'} borderRadius={'12px'}>Image</FormLabel>
              <Input type="file" name="image" onChange={handleImageChange} display={'none'} />
            </FormControl>
            <FormControl>
              <FormLabel  >Headline</FormLabel>
              <Input type="text" name="headline" value={formData.headline} onChange={handleChange} maxLength={'200'} isRequired />
            </FormControl>
            <FormControl>
              <FormLabel>Content</FormLabel>
              <Textarea name="content" rows={8} value={formData.content} onChange={handleChange} maxLength={'1000'} />
            </FormControl>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input type="date" name="date" value={formData.date} onChange={handleChange} isRequired />
            </FormControl>
            <Box textAlign={'right'} w={'full'}>

              <Button colorScheme="teal" type="submit" onClick={handleSubmit}>
                Publish
              </Button>
            </Box>
          </VStack>
        </Box>
        <Box bg={'white'} borderRadius={8} w={'full'} h={'full'} boxShadow={'0 0 6px rgba(0,0,0,0.05)'}>
          <Box h={'40px'} w={'full'} bg={'#d8dcf0'} borderTopRadius={8}></Box>
          <VStack bg={'white'} spacing={4} p={8} overflowY={'scroll'} w={'full'}>
            {
              news && news.map((item, index) => (
                <NewsTile
                  key={index}
                  headline={item.headline}
                  date={item.date}
                  image={item.image}
                  content={item.content}
                  author={item.author}
                />
              ))
            }
          </VStack>
        </Box>
      </Flex>
    </Center>
  );
};

export default UpdateNews;
