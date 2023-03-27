import { Box, Container, Heading, ListItem, SimpleGrid, UnorderedList } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";

import Layout from "@/components/layouts/Article";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import { axiosRequest } from "@/utils/requests";
import { Project } from "types";
import { sanityClient } from "@/utils/sanity";
import { projectsQuery, getProject } from "@/utils/groqOperations/projects";

interface Props {
  project: Project;
}

const Work = ({ project }: Props) => {
  return (
    <Layout title="ReviewsFS">
      <Container mt={{ base: 4, md: 0 }}>
        <Title id={project.title} year={project.year} url={project.urlGithub} />
        <Paragraph>{project.description}</Paragraph>
        <SimpleGrid columns={2} gap={2} my={6}>
          <Box>
            <Heading as="h3" fontSize={20} my={2}>
              Tech-Stack
            </Heading>
            <UnorderedList p={2}>
              {project.technologies.map((tech) => (
                <ListItem key={tech._id}>{tech.title}</ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Box>
            <Heading as="h3" fontSize={20} my={2}>
              Features
            </Heading>
            <UnorderedList p={2}>
              {project.features.map((feat, i) => (
                <ListItem key={i}>{feat}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;

export const getStaticPaths: GetStaticPaths = async () => {
  const projects: Project[] = await sanityClient.fetch(projectsQuery);
  const paths = projects.map((project) => ({
    params: { pid: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { pid } = context.params as { pid: string };
  const project: Project = await sanityClient.fetch(getProject(pid));

  return {
    props: {
      project,
    },
    revalidate: 1000,
  };
};
