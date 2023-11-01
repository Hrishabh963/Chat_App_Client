import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import ChatRoomContainer from './ChatRoomsContainer'
const Sidebar = () => {
  return (
<Flex minH="100vh">
<Box
    w="380px"
    bg="rgba(18, 15, 19, 1)"
    color="white"
    px={5}
    py={'3'}
  >
    <ChatRoomContainer />
  </Box>
  <Outlet />
</Flex>
  )
}

export default Sidebar
