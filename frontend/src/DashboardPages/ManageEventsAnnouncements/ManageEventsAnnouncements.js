import React from 'react'
import Events from './components/Events'
import Announcements from './components/Announcements'
import { Stack } from '@chakra-ui/react'

const ManageEventsAnnouncements = () => {
  return (
    <Stack> 
      <Events />
      <Announcements />
    </Stack>
  )
}

export default ManageEventsAnnouncements