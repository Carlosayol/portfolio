import NextLink from "next/link";
import { Box, Button, Center, Container, Divider, Flex, Heading, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Flex height={"50vh"} alignContent={"center"} justifyContent={"center"}>
      <Center>
        <Container>
          <Heading as="h1">Not Found</Heading>
          <Text>The page you&apos;re looking for was not found</Text>
          <Divider my={6} />
          <Box my={6} align="center">
            <NextLink href="/">
              <Button colorScheme="teal">Home</Button>
            </NextLink>
          </Box>
        </Container>
      </Center>
    </Flex>
  );
};

export default NotFound;
