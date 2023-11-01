import React from 'react'
import { Box, Text, IconButton, Divider, Flex } from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
import { Outlet } from 'react-router-dom'
const Sidebar = () => {
  return (
<Flex minH="100vh">
<Box
    w="300px" // Set the width as per your design
    bg="rgba(18, 15, 19, 1)"
    color="white"
    px={5}
    py={'3'}
  >
    <Flex justify={'space-between'}>
    <Text fontWeight="bold" mb={4}>
      Channels
    </Text>
    <IconButton variant={'ghost'} pb={'4'} _hover={{bgColor:'none'}} colorScheme='whiteAlpha' icon={<AddIcon color={'white'} />} />
    </Flex>
    <Divider />
    <Box
      p={2}
      borderRadius="md"
      _hover={{ bgColor: 'gray.700', cursor: 'pointer' }}
      mb={2}
    >
      Channel 1
    </Box>
    <Box
      p={2}
      borderRadius="md"
      _hover={{ bgColor: 'gray.700', cursor: 'pointer' }}
      mb={2}
    >
      Channel 2
    </Box>
    <Box
      p={2}
      borderRadius="md"
      _hover={{ bgColor: 'gray.700', cursor: 'pointer' }}
    >
      Channel 3
    </Box>
  </Box>
  <Outlet />
</Flex>
  )
}

export default Sidebar
