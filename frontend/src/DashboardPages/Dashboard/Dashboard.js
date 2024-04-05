import { Center, Image } from '@chakra-ui/react'
import React from 'react'
import mainlogo from './../../Assets/Logos/logo.svg'

const Dashboard = () => {
  return (
    <Center height={'calc(100% - 64px)'} width={'full'}>
      <Image src={mainlogo} boxSize={'300px'} opacity={0.6}/>

    </Center>
  )
}

export default Dashboard