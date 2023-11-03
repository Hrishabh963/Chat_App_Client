import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../../store/features/message/messageActions';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

const Messages = ({chatroomId}) => {
  const {messages} = useSelector((state)=> state.message);
  const {token} = useSelector((state)=> state.auth);
  const dispatch = useDispatch();
  console.log(messages);
  useEffect(()=>{
    dispatch(getMessages({chatroomId, token}))
  },[])
  return (
    <>
      {messages.map((message)=>{
        const date = formatDate(message.message.createdAt);
        return(
            <Flex>
                <Box>
                    <Avatar name={message.user.username} backgroundColor={'rgba(11, 9, 12, 1)'} borderRadius={'md'} fontWeight={'bold'} color={'rgba(255, 255, 255, 1)'}  size={'sm'}  />
                </Box>
                <Box pl={'6'} display={'flex'} flexDir={'column'} >
                    <Box display={'flex'} gap={'4'} alignItems={'center'}>
                    <Text fontSize={'lg'} color={'rgba(130, 130, 130, 1)'}>{message.user.username}</Text>
                    <Text fontSize={'sm'} color={'rgba(130, 130, 130, 1)'}>{date}</Text>
                    </Box>
                    <Text textColor={'rgba(224, 224, 224, 1)'}>{message.message.text}</Text>
                </Box>
            </Flex>
        )
      })}
    </>
  )
}

export default Messages


const formatDate = (dateString) => {
    const date = new Date(dateString);
  const now = new Date();

  // Calculate yesterday's date
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  // Check if the date is today
  if (date.toDateString() === now.toDateString()) {
    const options = { hour: '2-digit', minute: '2-digit' };
    return `today, ${date.toLocaleTimeString(undefined, options)}`;
  }

  // Check if the date is yesterday
  if (date.toDateString() === yesterday.toDateString()) {
    const options = { hour: '2-digit', minute: '2-digit' };
    return `yesterday, ${date.toLocaleTimeString(undefined, options)}`;
  }

  // For any other date, format it as a full date and time
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  return date.toLocaleString(undefined, options);
  }