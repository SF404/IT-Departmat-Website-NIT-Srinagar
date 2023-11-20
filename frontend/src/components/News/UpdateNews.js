import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Center, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react';

const UpdateNews = () => {
  const [formData, setFormData] = useState({
    headline: '',
    author: '',
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

      // Add additional logic for success, such as displaying a success message
    } catch (error) {
      console.error('Error adding news:', error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <Center  p="4">
      <VStack spacing="4" p={4} width={{base:'100%', md:'50%'}} bg={'white'}>
        <FormControl>
          <FormLabel display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'rgba(0,0,0,0.1)'} fontWeight={'bold'} color={'rgba(0,0,0,0.6)'} border={'3px dashed rgba(0,0,0,0.3)'} padding={4} height={'100px'} width={'100%'} borderRadius={'12px'}>Image</FormLabel>
          <Input type="file" name="image" onChange={handleImageChange} display={'none'} />
        </FormControl>
        <FormControl>
          <FormLabel>Headline</FormLabel>
          <Input type="text" name="headline" value={formData.headline} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Content</FormLabel>
          <Textarea name="content" value={formData.content} onChange={handleChange} />
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
    </Center>
  );
};

export default UpdateNews;
