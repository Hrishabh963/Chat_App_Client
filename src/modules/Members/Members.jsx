import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMembersInChatRoom } from '../../store/features/chatroom/chatRoomAction';

const Members = () => {
 const {currentChatroom,currentChatroomMembers} = useSelector((state)=>state.chatroom);
 const {token} = useSelector((state)=> state.auth);
 const dispatch = useDispatch();
 useEffect(()=>{
    if(currentChatroom){
        dispatch(getAllMembersInChatRoom({chatroomId : currentChatroom._id,token}));
    }
 },[currentChatroom])

  return (
    <Flex direction={'column'} gap={'2'} flex={'1'} pl={'6'} pt={'1'}>
        {currentChatroomMembers.map((member)=>{
            return(
                <Box 
                borderRadius="md"
                _hover={{ bgColor: 'gray.700', cursor: 'pointer' }}
                mb={2}
                display={'flex'}
              >
                <Avatar borderRadius={'md'} backgroundColor={'rgba(37, 35, 41, 1)'} fontWeight={'bold'} color={'rgba(255, 255, 255, 1)'}  size={'sm'} name={member.username} /> 
                <Text textTransform={'uppercase'} pt={'1'} fontWeight={'bold'} color={'rgba(189, 189, 189, 1)'} pl={'3'}>{member.username}</Text>
              </Box>
            )
        })}
   </Flex>
  )
}

export default Members
