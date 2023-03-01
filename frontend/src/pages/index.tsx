import NextLink from "next/link";
import { Inter } from "@next/font/google";
import { Box, Button, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import Section from "@/components/section";
import Paragraph from "@/components/paragraph";
import { AboutSection } from "@/components/about";
import { DownloadIcon } from "@chakra-ui/icons";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <Container>
      {/* <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        alignContent="center"
      >
        Hi, I&apos;m a full-stack developer
      </Box> */}
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page title">
            Carlos Ayala
          </Heading>
          <p>Software Engineer | FullStack Developer</p>
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
      <Section>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          Software Engineer with 2+ years of experience as a FullStack Developer designing, developing and maintaining
          Shopify applications, web applications, databases, APIs and other backend solutions with NodeJS, Python and Go
          with technologies and frameworks such as Express, NestJS, Django and AWS, with an interest in increasing his
          knowledge and skills in developing innovative solutions using new technologies and the best practices.
        </Paragraph>
        <Box align="center" my={4}>
          <Button as={NextLink} href="/works" scroll={false} rightIcon={<DownloadIcon />} colorScheme="teal">
            Download CV
          </Button>
        </Box>
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
          Likes
        </Heading>
        <Paragraph>
          Music, Playing Violin & Piano, Biking, Reading, Video Games, Coding, Artificial Intelligence, Good Vibes.
        </Paragraph>
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
          Social Media
        </Heading>
        <Paragraph>
          Music, Playing Violin & Piano, Biking, Reading, Video Games, Coding, Artificial Intelligence, Good Vibes.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Home;

