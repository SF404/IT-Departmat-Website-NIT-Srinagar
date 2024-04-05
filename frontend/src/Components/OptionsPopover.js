import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const OptionsPopover = ({children}) => {
  return (
    <Popover placement='left-start'>
      <PopoverTrigger>
        <IconButton onClick={(event)=>event.stopPropagation()}
          size={'sm'}
          aria-label='Options'
          icon={<BsThreeDotsVertical />}
          variant='ghost'
        />
      </PopoverTrigger>
      <PopoverContent fontSize={'14px'} maxW={'150px'} boxShadow={'md'}>
        <PopoverArrow/>
        <PopoverBody px={0} gap={0} as={Stack}>
          {children}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default OptionsPopover;
