import { Box, Button, Center, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const {token,user} = useSelector((state)=>state.auth);

  const navigate = useNavigate();
  useEffect(()=>{
    if(!token || !user){
      navigate('/login')
    }
  },[])

  return (
    <Flex direction={'column'} w={'100%'} bg={'rgba(37, 35, 41, 1)'}>
      <Box w={'100%'} pl={'20'} py={'10px'} boxShadow =" 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"><Text fontWeight={'bold'} fontSize={'xl'} color={'rgba(224, 224, 224, 1)'}>Welcome To Slack</Text></Box>
      <Flex w={'100%'} pl={'20'} pb={'10'} pr={'16'} direction="column" height="100%">
      <Box flex="1" overflowY="auto">
        <Center display={'flex'} flexDir={'column'} pt={'10'}>
        <Text fontSize="xl" fontWeight="bold" color={'rgba(224, 224, 224, 1)'} textAlign="center">
        Welcome to the Slack Chat App!
      </Text>
      <Text fontSize="lg" textAlign="center" color={'rgba(224, 224, 224, 1)'} mt={4}>
        Start your conversations and stay connected with your team.
      </Text>
        </Center>
      </Box>
      <Box>
      <InputGroup>
      <Input isDisabled={true} placeholder="Join a channel to get chatting..." pr={'8'} bgColor={'rgba(60, 57, 63, 1)'} _placeholder={{textColor:'rgba(130, 130, 130, 1)'}} />
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

export default HomePage
