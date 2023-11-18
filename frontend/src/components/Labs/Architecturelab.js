import React from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import SmallBanner from '../../Layout/SmallBanner';

const Architecture = () => {
  return (
    <>
      <SmallBanner heading="Architecture and Distributed Systems Lab" Width={"full"} />
      <VStack
        align="center"
        spacing={4}
        p={4}
        mx={{ base: 2, md: 8, lg: 'auto' }}
        maxW={{ base: '100%', md: '800px', lg: '1200px' }}
      >
        <Heading as="h3" size="small">
          (Under Development)
        </Heading>
      </VStack>
    </>
  );
};

export default Architecture;
