import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Messages from "./Messages";
import { getMessages, postMessage } from "../../store/features/message/messageActions";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { addMessageFromSocket } from "../../store/features/message/messageSlice";

const Chatroom = () => {
  const { currentChatroom } = useSelector((state) => state.chatroom);
  const {messages} = useSelector((state)=> state.message);
  const { token, user } = useSelector((state) => state.auth);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const val = event.target.value;
    setText(val);
  };

  // Create the socket connection when the component mounts
  const socket = io(import.meta.env.VITE_BACKEND_URL);

  const handlePostMessage = async () => {
    try {
      const response = await dispatch(postMessage({ chatroomId: currentChatroom._id, token, text }));
    const data = response.payload;
    socket.emit("send_message", { chatroomId: currentChatroom._id, message : data});
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    //Get current chatroom messages
    dispatch(getMessages({chatroomId : currentChatroom._id, token}))

    // Emit the 'join_chatroom' event when currentChatroom changes
    console.log("calling join room function");
    socket.emit('join_chatroom', currentChatroom._id);
  
    // Return a cleanup function to disconnect from the 'join_chatroom' event
    return () => {
      console.log(`cleaning up join room`);
      socket.off('join_chatroom');
    };
  }, [currentChatroom]);
  
  useEffect(() => {
    console.log('called recieve message');
    socket.on("receive_message", (data)=>{
      if(data.user._id !== user._id){
        console.log("Called inside recieve event",data);
        dispatch(addMessageFromSocket(data))
      }
    });
  
    // Return a cleanup function to remove the 'receive_message' event listener
    return () => {
      console.log(`cleaning up recieve event`);
      socket.off('receive_message');
    };
  }, [currentChatroom]);


  return (
    <>
      {currentChatroom ? (
        <Flex direction={"column"} w={"100%"} bg={"rgba(37, 35, 41, 1)"}>
        <Box
          w={"100%"}
          pl={"20"}
          py={"10px"}
          boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        >
          <Text
            textTransform={"uppercase"}
            fontWeight={"bold"}
            fontSize={"xl"}
            color={"rgba(224, 224, 224, 1)"}
          >
            {currentChatroom.name}
          </Text>
        </Box>
        <Flex
          w={"100%"}
          pl={"20"}
          pb={"10"}
          pr={"16"}
          direction="column"
          height="100%"
        >
          <Flex flex="1" direction={"column"}>
            <Box
              display={"flex"}
              gap={"10"}
              flexDir={"column"}
              overflowY="auto" 
              maxHeight="85vh"
            >
              <Messages chatroomId={currentChatroom._id} messages={messages} />
            </Box>
          </Flex>
          <Box>
            <InputGroup>
              <Input
                value={text}
                onChange={handleChange}
                placeholder="Type Something..."
                pr={"8"}
                bgColor={"rgba(60, 57, 63, 1)"}
                color={"rgba(224, 224, 224, 1)"}
                _placeholder={{ textColor: "rgba(130, 130, 130, 1)" }}
              />
              <InputRightElement width="4.5rem">
                <Button
                  onClick={handlePostMessage}
                  colorScheme="blue"
                  size="sm"
                >
                  Send
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
      </Flex>
      
      ) : null}
    </>
  );
};

export default Chatroom;
