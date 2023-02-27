import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

import Section from "@/components/section";
import { ProjectGridItem } from "@/components/gridItem";
import githubThumb from "public/images/githubThumb.png";

const Projects = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem id="reviewsFS" title="ReviewsFS" thumbnail={githubThumb}>
            Write reviews about anything. Built with MERN Stack
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="polls" title="Polls" thumbnail={githubThumb}>
            Create and vote in polls created by anyone. Built with Django
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
