import { Container } from "@chakra-ui/react";

import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectsGrid";

const Projects = () => {
  return (
    <Container>
      <Section title={"Projects"}>
        <ProjectsGrid />
      </Section>
    </Container>
  );
};

export default Projects;
