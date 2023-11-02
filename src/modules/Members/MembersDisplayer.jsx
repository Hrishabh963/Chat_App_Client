import { Box, Divider, Flex, IconButton, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Members from './Members'
import { ChevronLeftIcon } from '@chakra-ui/icons';

const MembersDisplayer = ({chatroom,showChat}) => {
  return (
    <>
    <Flex justify={'space-between'} px={'2'}>
    <Box display={'flex'} alignItems={'center'}>
        <IconButton onClick={showChat} variant={'ghost'} color={'rgba(224, 224, 224, 1)'} _hover={{bgColor:'rgba(11, 9, 12, 1)'}} icon={<ChevronLeftIcon boxSize={'8'} />}/>
        <Text fontWeight={'bold'} px={'2'} fontSize={'lg'}>All Channels</Text>
    </Box>
    </Flex>
    <Divider />
    <Flex direction={'column'} py={'2'} px={'3'}>
    <Text pl={'6'} textTransform={'uppercase'} fontSize={'lg'} fontWeight={'extrabold'}>{chatroom.name}</Text>
    <Text pl={'6'} py={'4'} >{chatroom.description}</Text>
    <Text pl={'6'} pt={'4'} mb={4} fontSize={'lg'} fontWeight={'extrabold'}>
      Members
    </Text>
    <Members />
    </Flex>
    <Spacer />
   </>
  )
}

export default MembersDisplayer
