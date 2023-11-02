import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllChatRooms, joinChatroom } from '../../store/features/chatroom/chatRoomAction';
import { Avatar, Box, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { authAction } from '../../store/features/auth/authUserSlice';
import { setCurrentRoom } from '../../store/features/chatroom/chatRoomSlice';

const ChatRoomContainer = ({showChat}) => {
  const [input,setInput] = useState('');
  const {chatrooms} = useSelector((state)=>state.chatroom);
  const {token,user} = useSelector((state)=> state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleInput = (event)=>{
    const value = event.target.value;
    setInput(value);
  }

  const addUserAndNavigate = (chatroom)=>{
    showChat()
    const chatroomId = user.chatrooms.find((id)=>id === chatroom._id);
    if(chatroomId){
      dispatch(setCurrentRoom(chatroom));
      navigate(`/chatroom/${chatroom._id}`)
    }
    else{
      dispatch(authAction.addChatroom(chatroom._id));
      dispatch(joinChatroom({chatroomId : chatroom._id,token :token}))
      navigate(`/chatroom/${chatroom._id}`)
    }
  }

  useEffect(()=>{
    dispatch(getAllChatRooms(token));
  },[])

  const filteredRooms = chatrooms.filter((chatroom)=>{
    return chatroom.name.toLowerCase().includes(input.toLowerCase());
  })
  return (
    <Flex direction={'column'} gap={'2'} flex={'1'} px={'2'} pt={'2'}>
     <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <SearchIcon color='gray.300' />
    </InputLeftElement>
    <Input value={input} onChange={handleInput} type='text' placeholder='Search' bg={'rgba(60, 57, 63, 1)' } color={'rgba(224, 224, 224, 1)'} _focus={{borderColor :'rgba(60, 57, 63, 1)'}} _placeholder={{color:'rgba(130, 130, 130, 1)'}} />
  </InputGroup>

    {filteredRooms.map((chatroom)=>{
        return (
          <div key={chatroom._id} onClick={()=> addUserAndNavigate(chatroom)}>
            <Box 
            p={2}
            borderRadius="md"
            _hover={{ bgColor: 'gray.700', cursor: 'pointer' }}
            mb={2}
            display={'flex'}
          >
            <Avatar borderRadius={'md'} backgroundColor={'rgba(37, 35, 41, 1)'} fontWeight={'bold'} color={'rgba(255, 255, 255, 1)'}  size={'sm'} name={chatroom.name} /> <Text textTransform={'uppercase'} pt={'1'} fontWeight={'bold'} color={'rgba(189, 189, 189, 1)'} pl={'3'}>{chatroom.name}</Text>
          </Box>
          </div>
        )
    })}
    </Flex>
  )
}

export default ChatRoomContainer
