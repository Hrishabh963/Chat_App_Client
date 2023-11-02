import { TriangleUpIcon } from '@chakra-ui/icons';
import { Avatar, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {
  const user = useSelector((state)=>state.auth.user);
  return (
    <>
    {user ? <Flex w={'72'} boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)" bg={'rgba(11, 9, 12, 1)'} py={'5'} px={'4'} >
        <Avatar name={user.username} borderRadius={'md'} size={'md'} backgroundColor={'rgba(37, 35, 41, 1)'} fontWeight={'bold'} color={'rgba(255, 255, 255, 1)'} />
        <Flex justifyContent={'space-between'} w={'100%'}>
        <Text pl={'4'} pt={'3'} fontWeight={'bold'} fontSize={'lg'}>{user.username}</Text>
        <IconButton icon={<TriangleUpIcon />} color={'rgba(224, 224, 224, 1)'} _hover={{bgColor:'rgba(11, 9, 12, 1)'}} variant={'ghost'} />
        </Flex>
    </Flex>
    : null}
    </>
  )
}

export default User
