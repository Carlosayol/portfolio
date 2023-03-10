import { Box, Container, Heading, ListItem, SimpleGrid, UnorderedList } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Layout from "@/components/layouts/Article";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";

const Work = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout title="ReviewsFS">
      <Container mt={{ base: 4, md: 0 }}>
        <Title id={pid ?? ""} />
        <Paragraph>Write reviews about anything</Paragraph>
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
