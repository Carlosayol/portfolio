import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import type { AppProps } from "next/app";
import theme from "@/libs/theme";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;

