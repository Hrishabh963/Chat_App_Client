import { Flex } from '@chakra-ui/react'
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
    <Flex direction={'column'} gap={'2'} flex={'1'} px={'2'} pt={'2'}>
        {currentChatroomMembers.map((member)=>{
            return <h1>{member.username}</h1>
        })}
   </Flex>
  )
}

export default Members
