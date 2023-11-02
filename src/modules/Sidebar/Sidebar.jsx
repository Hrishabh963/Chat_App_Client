import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import ChatroomDisplayer from './ChatroomDisplayer'
import User from '../User/User'
import Members from '../Members/Members'
import MembersDisplayer from '../Members/MembersDisplayer'
const Sidebar = () => {
  return (
<Flex minH="100vh" justifyContent={'space-between'}>
<Box
    
    bg="rgba(18, 15, 19, 1)"
    color="white"
    pt={'3'}
    flex={'1'}
    display={'flex'}
    flexDirection={'column'}

  >
    <ChatroomDisplayer />
    <MembersDisplayer />
    <User />
  </Box>
  <Outlet />
</Flex>
  )
}

export default Sidebar
