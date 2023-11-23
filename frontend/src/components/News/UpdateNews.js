import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Center, FormControl, FormLabel, Input, SimpleGrid, Textarea, VStack } from '@chakra-ui/react';

const UpdateNews = () => {
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

      await axios.post('https://your-backend-api/news', formDataForUpload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setFormData({
        headline: '',
        author: '',
        date: '',
        content: '',
        image: null,
      });
    } catch (error) {
      console.error('Error adding news:', error);
    }
  };

  return (
    <Center p="4" h={'100vh'} w={'full'}>
      <SimpleGrid columns={[1, 1, 2, 2]} w={{ base: '100%', md: '80%' }} gap={4}>

        <Box bg={'white'} borderRadius={8} w={'full'} h={'full'} boxShadow={'0 0 6px rgba(0,0,0,0.05)'}>
          <Box h={'40px'} w={'full'} bg={'#99d5cf'} borderTopRadius={8}></Box>
          <VStack spacing="4" p={8}>
            <FormControl>
              <FormLabel display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'rgba(0,0,0,0.1)'} fontWeight={'bold'} color={'rgba(0,0,0,0.6)'} border={'3px dashed rgba(0,0,0,0.3)'} padding={4} height={'100px'} width={'100%'} borderRadius={'12px'}>Image</FormLabel>
              <Input type="file" name="image" onChange={handleImageChange} display={'none'} />
            </FormControl>
            <FormControl>
              <FormLabel>Headline</FormLabel>
              <Input type="text" name="headline" value={formData.headline} onChange={handleChange} maxLength={'200'} />
            </FormControl>
            <FormControl>
              <FormLabel>Content</FormLabel>
              <Textarea name="content" rows={8} value={formData.content} onChange={handleChange} maxLength={'1000'} />
            </FormControl>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input type="date" name="date" value={formData.date} onChange={handleChange} />
            </FormControl>
            <Box textAlign={'right'} w={'full'}>

              <Button colorScheme="teal" type="submit" onClick={handleSubmit}>
                Publish
              </Button>
            </Box>
          </VStack>
        </Box>
        <VStack bg={'white'} borderRadius={8}>

        </VStack>
      </SimpleGrid>
    </Center>
  );
};

export default UpdateNews;
