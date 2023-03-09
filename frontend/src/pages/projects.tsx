import { Container } from "@chakra-ui/react";

import Section from "@/components/section";
import ProjectsGrid from "@/components/projectsGrid";

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
