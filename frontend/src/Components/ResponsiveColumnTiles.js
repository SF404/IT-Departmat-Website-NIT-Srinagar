import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { FcGallery } from 'react-icons/fc';
import Masonry from 'react-layout-masonry';
import { NavLink } from 'react-router-dom';

const ResponsiveColumnsTiles = ({ items = [1, 2, 3] }) => {
  const galleryTheme = [
    'gray.100',
    'red.50',
    'orange.50',
    'yellow.50',
    'green.50',
    'teal.50',
    'blue.50',
    'cyan.50',
    'purple.50',
    'pink.50',
  ];
  return (
    <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }} gap={16}>
      {items.map((item, index) => {
        return (
          <Box rounded={16} overflow="hidden" bg={galleryTheme[index % 10]} px={2} boxShadow={'md'} cursor={'pointer'} border={'1px solid transparent'}
            _hover={{ border: '1px solid gray' }} transition={'all 0.1s ease-in'}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              <HStack p={2}>
                <FcGallery fontSize={'20px'} />
                <Text color={'blackAlpha.600'} fontWeight={'bold'} fontSize={'14px'}>{item.title}</Text>
              </HStack>
            </Flex>
            <NavLink to={`${item.id}/`} key={item.id} >

              <Image src={item.cover_image} rounded={8} />
              <Box p={2} py={4}>
                <Text color="gray.600" fontSize={'12px'}>
                  {item.description}
                </Text>
              </Box>
            </NavLink>
          </Box>
        );
      })}
    </Masonry>
  );
};

export default ResponsiveColumnsTiles;