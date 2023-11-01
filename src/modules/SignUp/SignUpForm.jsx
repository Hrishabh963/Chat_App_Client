import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  VStack,
  HStack,
  Image,
  useToast,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignUp } from '../../store/features/auth/authUserSlice'; 
function ControlledForm() {
  const {loading , success, errorMessage} = useSelector((state)=>state.auth);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  if(loading === false){
    if(success){
      toast({
        title : "Account created",
        description:"We have successfully created your account" ,
        status : "success",
        duration: 3000,
        isClosable: true,
      })
      navigate('/');
    }
    else{
      toast({
        title : errorMessage,
        status : "error",
        duration: 3000,
        isClosable: true,
      })
    }
  }
  

  return (
    <Box pt={'6'} display={'flex'} flexDirection={'column'} alignItems={'center'} h="100vh" bg="rgba(18, 15, 19, 1)" gap={'100'}>
      <Image alt='Slack' src='/Slack-logo-inverted-RGB.png' />
      <Formik
        initialValues={{ username: '', firstName: '', lastName: '', email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Username is required';
          }
          if (!values.firstName) {
            errors.firstName = 'First name is required';
          }
          if (!values.email) {
            errors.email = 'Email is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Password is required';
          } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
          }
          return errors;
        }}
        onSubmit={(values) => {
          dispatch(userSignUp(values))
        }}
      >
        {() => (
          <Form>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="username" textColor={'whiteAlpha.900'}>Username</FormLabel>
                <Field
                  as={Input}
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  color='rgba(224, 224, 224, 1)'
                  _placeholder={{ color: 'rgba(130, 130, 130, 1)' }}
                  bgColor='rgba(60, 57, 63, 1)'
                />
                <ErrorMessage name="username" component={Text} color="red.500" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel textColor={'whiteAlpha.900'} htmlFor="password">Password</FormLabel>
                <Field
                  as={Input}
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  color='rgba(224, 224, 224, 1)'
                  _placeholder={{ color: 'rgba(130, 130, 130, 1)' }}
                  bgColor='rgba(60, 57, 63, 1)'
                />
                <ErrorMessage name="password" component={Text} color="red.500" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel textColor={'whiteAlpha.900'} htmlFor="firstName">First Name</FormLabel>
                <Field
                  as={Input}
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name"
                  color='rgba(224, 224, 224, 1)'
                  _placeholder={{color : 'rgba(130, 130, 130, 1)'}}
                  bgColor = 'rgba(60, 57, 63, 1)'
                />
                <ErrorMessage name="firstName" component={Text} color="red.500" />
              </FormControl>

              <FormControl>
                <FormLabel textColor={'whiteAlpha.900'} htmlFor="lastName">Last Name</FormLabel>
                <Field
                  as={Input}
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last name"
                  color='rgba(224, 224, 224, 1)'
                  _placeholder={{color : 'rgba(130, 130, 130, 1)'}}
                  bgColor = 'rgba(60, 57, 63, 1)'
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel textColor={'whiteAlpha.900'} htmlFor="email">Email</FormLabel>
                <Field
                  as={Input}
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  color='rgba(224, 224, 224, 1)'
                  _placeholder={{color : 'rgba(130, 130, 130, 1)'}}
                  bgColor = 'rgba(60, 57, 63, 1)'
                />
                <ErrorMessage name="email" component={Text} color="red.500" />
              </FormControl>

              <HStack>
                <Button type="submit">Sign-up</Button> <Text fontSize={'lg'} to={'/login'} color={'rgba(224, 224, 224, 1)'} as={Link}>Already a user?</Text>
              </HStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default ControlledForm;
