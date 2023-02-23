import { Inter } from "@next/font/google";
import { Box, Container, Heading } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="teal" p={3} mb={6} alignContent="center">
        Hi, I&apos;m a full-stack developer
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page title">
            Carlos Ayala
          </Heading>
          <p>Developer</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;

