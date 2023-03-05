import NextLink from "next/link";
import { Inter } from "@next/font/google";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Section from "@/components/section";
import Paragraph from "@/components/paragraph";
import { AboutSection } from "@/components/about";
import { DownloadIcon } from "@chakra-ui/icons";
import { IoLogoDiscord, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <Container>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page title">
            Carlos Ayala
          </Heading>
          <p>Software Engineer | Full Stack Developer</p>
        </Box>
        <Flex flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} justifyContent="center">
          <Image
            borderColor={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="images/carlos.jpg"
            alt="Profile Image"
          />
        </Flex>
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
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
          Likes
        </Heading>
        <Paragraph>
          Music, Playing Violin &amp; Piano, Biking, Reading, Video Games, Coding, Artificial Intelligence, Good Vibes.
        </Paragraph>
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
          Social Media
        </Heading>
        <HStack px={10} justifyContent="space-between">
          <Link href="https://github.com/Carlosayol" target="_blank">
            <IconButton
              variant="ghost"
              fontSize="25px"
              aria-label="Github"
              icon={<IoLogoGithub />}
              colorScheme="teal"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/carlosayol/" target="_blank">
            <IconButton
              variant="ghost"
              fontSize="25px"
              aria-label="Linkedin"
              icon={<IoLogoLinkedin />}
              colorScheme="teal"
            />
          </Link>
          <Link href="https://www.instagram.com/carlosayalaolarte/" target="_blank">
            <IconButton
              variant="ghost"
              fontSize="25px"
              aria-label="Instagram"
              icon={<IoLogoInstagram />}
              colorScheme="teal"
            />
          </Link>
          <Link href="https://www.discord.com" target="_blank">
            <IconButton
              variant="ghost"
              fontSize="25px"
              aria-label="Discord"
              icon={<IoLogoDiscord />}
              colorScheme="teal"
            />
          </Link>
        </HStack>
        <Flex my={4} justifyContent="center">
          <Button as={NextLink} href="/works" scroll={false} rightIcon={<DownloadIcon />} colorScheme="teal">
            Download CV
          </Button>
        </Flex>
      </Section>
    </Container>
  );
};

export default Home;

