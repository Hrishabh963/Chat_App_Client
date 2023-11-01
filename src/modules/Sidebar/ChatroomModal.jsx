import { AddIcon } from '@chakra-ui/icons'
import { Button, FormControl, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postChatRoom } from '../../store/features/chatroom/chatRoomAction'

const ChatroomModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const {token} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const handleNameChange = (event)=>{
     const value = event.target.value;
      setName(value);
    }
    const handleDescriptionChange = (event)=>{
      const value = event.target.value;
        setDescription(value);
      }

    const makeChatRoom = ()=>{
      const data = {name,description};
      dispatch(postChatRoom({data,token}));
      setName('');
      setDescription('')
      onClose();
    }  
    const initialRef = useRef(null)
  return (
    <>
     <IconButton onClick={onOpen} variant={'ghost'} pb={'4'} _hover={{bgColor:'none'}} colorScheme='whiteAlpha' icon={<AddIcon color={'white'} />} />
     <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg={'rgba(18, 15, 19, 1)'}>
          <ModalHeader textColor="rgba(242, 242, 242, 1)">New Channel</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} >
            <FormControl>
              <Input value={name} ref={initialRef} bg={'rgba(60, 57, 63, 1)'} color={'rgba(224, 224, 224, 1)'} _focus={{borderColor :'rgba(60, 57, 63, 1)'}} _placeholder={{color:'rgba(130, 130, 130, 1)'}} onChange={handleNameChange} placeholder='Channel name' />
            </FormControl>

            <FormControl mt={4}>
              <Textarea value={description} resize={'none'} bg={'rgba(60, 57, 63, 1)'} color={'rgba(224, 224, 224, 1)'} _focus={{borderColor :'rgba(60, 57, 63, 1)'}} _placeholder={{color:'rgba(130, 130, 130, 1)'}} size={'lg'} onChange={handleDescriptionChange} placeholder='Channel Description' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={makeChatRoom} colorScheme='blue' mr={3}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> 
    </>
  )
}

export default ChatroomModal
