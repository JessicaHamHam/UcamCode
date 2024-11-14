import { Box, Flex, Text, Input, Center, Stack, Button, ChakraProvider } from "@chakra-ui/react";
import { InputGroup } from "./components/ui/input-group";
import { IoMdMail } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import  customTheme  from "./theme/theme" 


function App() {
  return (
    <ChakraProvider value={customTheme}>
      <Flex height="100vh" width="100vw" color="primary2" justifyContent="center" alignItems="center">
        <Box
          color="primary1"
          width="920px"
          height="600px"
          rounded="3xl"
          boxShadow="lg"
          borderRadius="lg"
          padding="40px"
          >
          <Center/>
            <Text fontSize="2xl" fontWeight="bold" color="pink.600" textAlign="center" mt={4} mb={10}>
              UCamCode
            </Text>
            
          <Stack gap={5}>
            <InputGroup endElement={<Box as="span" color="gray.950"><IoMdMail/></Box>}>
              <Input type="email" placeholder="Email Id" variant="flushed" />
            </InputGroup>

            <InputGroup endElement={<Box as="span" color="gray.950"><IoEyeOff /></Box>}>
              <Input type="password" placeholder="Password" variant="flushed" />
            </InputGroup>

            <Text textAlign="right" fontSize="sm" cursor="pointer" textDecoration="underline">
              Forgot Password?
            </Text>
            <Center>
              <Button colorPalette="pink" variant="solid" width="30%" height="45px" mt={4} rounded="10px">
                Sign In
              </Button>
            </Center>
          </Stack>

          <Flex align="center" my={6}>
            <Box flex="1" height="1px" bg="gray.300" />
            <Text mx={2} color="gray.500" fontSize="sm">
              or
            </Text>
            <Box flex="1" height="1px" bg="gray.300" />
          </Flex>

          <Stack gap={5}>
            <Button variant="outline" width="100%" height="50px" display="flex" alignItems="center" justifyContent="center" gap={2}>
              <FcGoogle />
              Sign In with Google
            </Button>
            <Button variant="outline" width="100%" height="50px" display="flex" alignItems="center" justifyContent="center" gap={2}>
              <FcGoogle />
              Sign In with Microsoft
            </Button>

          </Stack>
        </Box>
      </Flex>
   </ChakraProvider>
  )
}

export default App;
