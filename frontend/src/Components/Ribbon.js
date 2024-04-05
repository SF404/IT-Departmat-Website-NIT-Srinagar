import React from 'react';
import { Alert, Flex } from '@chakra-ui/react';

const Ribbon = () => {
  return (
    <Alert variant='solid' status='success' bg={'#304269'} py={1} gap={2} fontSize={'14px'}>
      <marquee behavior="scroll" direction="left" scrollamount="4" loop="0">
        <Flex gap={3} color={'gary.200'} opacity={0.8}>
          <p>🎉 Exciting news! Our annual sale starts tomorrow. Don't miss out on amazing deals!</p>
          <p>📢 Attention all students: The deadline for submitting your project proposals is next Friday.</p>
          <p>🚨 Important announcement: The office will be closed on Monday for maintenance. We apologize for any inconvenience.</p>
          <p>🌟 Save the date! Our company picnic will be held on July 15th. Get ready for a day of fun and games!</p>
          <p>📚 Reminder: The library will have extended hours during finals week. Take advantage of the extra study time!</p>
        </Flex>
      </marquee>

    </Alert>
  );
}

export default Ribbon;
