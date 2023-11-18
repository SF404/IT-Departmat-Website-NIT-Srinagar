import React from 'react';
import { Heading,VStack } from '@chakra-ui/react';
import SmallBanner from '../../Layout/SmallBanner';

const Programming = () => {
  return (
    <>
     <SmallBanner heading="Programming" Width={"full"}/>
    <VStack
      align="center"
      spacing={4}
      p={4}
      mx={{ base: 2, md: 8, lg: 'auto' }} // Responsive margin
      maxW={{ base: '100%', md: '800px', lg: '1200px' }} // Maximum width for responsiveness
      // Center content horizontally
    >
      <Heading as="h3" size="small">
        (Under Development)
      </Heading>
    </VStack>
    </>
  );
};

export default Programming;
