import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import ChatRoomContainer from './ChatRoomContainer'
const Sidebar = () => {
  return (
<Flex minH="100vh">
<Box
    w="380px" // Set the width as per your design
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
