import { Badge, Box, Button, Container, Flex, Heading, ListItem, SimpleGrid, UnorderedList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { IoLogoGithub } from "react-icons/io5";

import Layout from "@/components/layouts/article";
import Paragraph from "@/components/paragraph";
import { Title } from "@/components/project";

const Work = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout title="ReviewsFS">
      <Container mt={{ base: 4, md: 0 }}>
        <Title>
          {pid} <Badge colorScheme="teal">2016</Badge>
        </Title>
        <Paragraph>Write reviews about anything</Paragraph>
        <Flex my={4} justifyContent="center">
          <Button as={NextLink} href="/works" scroll={false} rightIcon={<IoLogoGithub />} colorScheme="teal">
            Github
          </Button>
        </Flex>
        <SimpleGrid columns={2} gap={2} my={6}>
          <Box>
            <Heading as="h3" fontSize={20} my={2}>
              Tech-Stack
            </Heading>
            <UnorderedList p={2}>
              <ListItem>Javascript</ListItem>
              <ListItem>ReactJS</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Heading as="h3" fontSize={20} my={2}>
              Features
            </Heading>
            <UnorderedList p={2}>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
