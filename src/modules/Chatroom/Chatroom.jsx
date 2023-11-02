import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Chatroom = () => {
  const {currentChatroom} = useSelector((state)=>state.chatroom);
  console.log(currentChatroom);
  useEffect(()=>{
    
  },[])
  return (
    <Flex direction={'column'} w={'100%'} bg={'rgba(37, 35, 41, 1)'}>
    <Box w={'100%'} pl={'20'} py={'10px'} boxShadow =" 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"><Text fontWeight={'bold'} fontSize={'xl'} color={'rgba(224, 224, 224, 1)'}>Welcome To Slack</Text></Box>
    <Flex w={'100%'} pl={'20'} pb={'10'} pr={'16'} direction="column" height="100%">
    <Box flex="1" overflowY="auto">
    </Box>
    <Box>
    <InputGroup>
    <Input placeholder="Join a channel to get chatting..." pr={'8'} bgColor={'rgba(60, 57, 63, 1)'} _placeholder={{textColor:'rgba(130, 130, 130, 1)'}} />
    <InputRightElement width="4.5rem">
      <Button colorScheme="blue" size="sm">
        Send
      </Button>
    </InputRightElement>
  </InputGroup>      
    </Box>
  </Flex>
  </Flex>
  )
}

export default Chatroom
