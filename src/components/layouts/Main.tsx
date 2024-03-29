import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { Router } from "next/router";
import Navbar from "@/components/Navbar";

interface Props {
  children: React.ReactNode;
  router: Router;
}

const Main = ({ children, router }: Props) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Carlos Ayala - Home</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={100}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
