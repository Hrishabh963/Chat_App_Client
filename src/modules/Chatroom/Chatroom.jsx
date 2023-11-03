import { Box, Button, Flex, Input, InputGroup, InputRightElement, Spacer, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import Messages from './Messages';
import { postMessage } from '../../store/features/message/messageActions';
import { useState } from 'react';

const Chatroom = () => {
  const {currentChatroom} = useSelector((state)=>state.chatroom);
  const {token} = useSelector(state => state.auth);
  const [text,setText] = useState('');
  const dispatch = useDispatch();
  const handleChange = (event)=>{
    const val = event.target.value;
    setText(val);
  }
  const handlePostMessage = ()=>{
    dispatch(postMessage({chatroomId : currentChatroom._id, token, text}));
  }
  return (
    <>
    {currentChatroom ? 
    <Flex direction={'column'} w={'100%'} bg={'rgba(37, 35, 41, 1)'}>
    <Box w={'100%'} pl={'20'} py={'10px'} boxShadow =" 0px 4px 4px 0px rgba(0, 0, 0, 0.25)">
      <Text textTransform={'uppercase'} fontWeight={'bold'} fontSize={'xl'} color={'rgba(224, 224, 224, 1)'}>{currentChatroom.name}</Text>
      </Box>
    <Flex w={'100%'} pl={'20'} pb={'10'} pr={'16'} direction="column" height="100%">
    <Flex flex="1" direction={'column'}>
    <Spacer />
    <Box  display={'flex'} gap={'10'} flexDir={'column'} overflowY="auto">
      <Messages chatroomId = {currentChatroom._id} />
    </Box>
    </Flex>
    <Box>
    <InputGroup>
    <Input value={text} onChange={handleChange} placeholder="Type Something..." pr={'8'} bgColor={'rgba(60, 57, 63, 1)'} color={'rgba(224, 224, 224, 1)'}  _placeholder={{textColor:'rgba(130, 130, 130, 1)'}} />
    <InputRightElement width="4.5rem">
      <Button onClick={handlePostMessage} colorScheme="blue" size="sm">
        Send
      </Button>
    </InputRightElement>
  </InputGroup>      
    </Box>
  </Flex>
  </Flex> : null  }
    </>
  )
}

export default Chatroom
