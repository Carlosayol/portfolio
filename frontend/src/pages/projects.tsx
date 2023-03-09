import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";

import Section from "@/components/section";
import { ProjectGridItem } from "@/components/gridItem";
import githubThumb from "public/images/githubThumb.png";

const Projects = () => {
  return (
    <Container>
      <Section title={"Projects"}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Box>
            <ProjectGridItem id="reviewsFS" title="ReviewsFS" thumbnail={githubThumb}>
              Write reviews about anything. Built with MERN Stack
            </ProjectGridItem>
          </Box>
          <Box>
            <ProjectGridItem id="polls" title="Polls" thumbnail={githubThumb}>
              Create and vote in polls created by anyone. Built with Django
            </ProjectGridItem>
          </Box>
          <Box>
            <ProjectGridItem id="polls" title="Polls" thumbnail={githubThumb}>
              Create and vote in polls created by anyone. Built with Django
            </ProjectGridItem>
          </Box>
        </SimpleGrid>
      </Section>
    </Container>
  );
};

export default Projects;
