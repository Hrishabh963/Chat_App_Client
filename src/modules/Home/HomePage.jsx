import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const {token} = useSelector((state)=>state.auth);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
  },[])
  return (
    <Flex direction={'column'}>
      <Box>Slack</Box>
    </Flex>

  )
}

export default HomePage
