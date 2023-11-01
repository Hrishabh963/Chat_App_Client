import { Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ChatroomModal from './ChatroomModal'
import ChatRoomContainer from './ChatRoomContainer'

const ChatroomDisplayer = () => {
  return (
   <>
    <Flex justify={'space-between'}>
    <Text fontWeight="bold" mb={4}>
      Channels
    </Text>
    <ChatroomModal />
    </Flex>
    <Divider />
    <ChatRoomContainer />
   </>
  )
}

export default ChatroomDisplayer