import { Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Members from './Members'

const MembersDisplayer = () => {
  return (
    <>
    <Flex justify={'space-between'} px={'5'}>
    <Text fontWeight="bold" mb={4}>
      Members
    </Text>
    </Flex>
    <Divider />
    <Members />
   </>
  )
}

export default MembersDisplayer
