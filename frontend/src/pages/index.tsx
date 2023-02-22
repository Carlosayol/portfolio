import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Container } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <Container>
      <div>Test</div>
    </Container>
  );
};

export default Home;

