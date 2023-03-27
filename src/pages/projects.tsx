import { Container } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectsGrid";
import { Project } from "types";
import { axiosRequest } from "@/utils/requests";

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return (
    <Container>
      <Section title={"Projects"}>
        <ProjectsGrid projects={projects} />
      </Section>
    </Container>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await axiosRequest<Project[]>("projects");
  return {
    props: {
      projects,
    },
    revalidate: 1000,
  };
};
