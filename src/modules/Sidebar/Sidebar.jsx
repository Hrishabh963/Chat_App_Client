import React, { useEffect, useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import ChatroomDisplayer from './ChatroomDisplayer'
import User from '../User/User'
import MembersDisplayer from '../Members/MembersDisplayer'
import { useSelector } from 'react-redux'
const Sidebar = () => {
  const {currentChatroom} = useSelector((state)=> state.chatroom);
  const [showChat,setShowChat] = useState(true);
  const handleShowChat= ()=>{
    setShowChat(!showChat);
  }
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
    { showChat ? <ChatroomDisplayer showChat={handleShowChat} /> : <MembersDisplayer showChat={handleShowChat} chatroom={currentChatroom} /> }
    <User />
  </Box>
  <Outlet />
</Flex>
  )
}

export default Sidebar
