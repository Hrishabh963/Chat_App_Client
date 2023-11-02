import { Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ChatroomModal from './ChatroomModal'
import ChatRoomContainer from './ChatRoomsContainer'

const ChatroomDisplayer = ({showChat}) => {
  return (
   <>
    <Flex justify={'space-between'} px={'5'}>
    <Text fontWeight="bold" mb={4}>
      Channels
    </Text>
    <ChatroomModal />
    </Flex>
    <Divider />
    <ChatRoomContainer showChat={showChat} />
   </>
  )
}

export default ChatroomDisplayer
