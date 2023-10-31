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
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { postFormData } from './loginApi'; // You may need to create an API function for sign-in

function Login() {
  return (
    <Box pt={'6'} display={'flex'} flexDirection={'column'} alignItems={'center'} h="100vh" bg="rgba(18, 15, 19, 1)" gap={'100'}>
      <Image alt='Slack' src='/Slack-logo-inverted-RGB.png' />
      <Formik
        initialValues={{ username: '', password: '' }} // Removed other fields
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Username is required';
          }
          if (!values.password) {
            errors.password = 'Password is required';
          }
          return errors;
        }}
        onSubmit={(values) => {
          postFormData(values)
            .then(() => console.log(`Signed in successfully`));
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

              <HStack>
                <Button type="submit">Sign In</Button>
                <Text fontSize={'lg'} to={'/signup'} color={'rgba(224, 224, 224, 1)'} as={Link}>Don't have an account? Sign up</Text>
              </HStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Login;
