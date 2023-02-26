import { Inter } from "@next/font/google";
import { Box, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        alignContent="center"
      >
        Hi, I&apos;m a full-stack developer
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page title">
            Carlos Ayala
          </Heading>
          <p>Developer</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="images/carlos.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;

