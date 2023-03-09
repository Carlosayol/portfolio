import { Box, SimpleGrid } from "@chakra-ui/react";

import { ProjectGridItem } from "@/components/gridItem";
import githubThumb from "public/images/githubThumb.png";

const ProjectsGrid = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <ProjectGridItem id="reviewsFS" title="ReviewsFS" thumbnail={githubThumb}>
        Write reviews about anything. Built with MERN Stack
      </ProjectGridItem>
      <ProjectGridItem id="polls" title="Polls" thumbnail={githubThumb}>
        Create and vote in polls created by anyone. Built with Django
      </ProjectGridItem>
      <ProjectGridItem id="polls" title="Polls" thumbnail={githubThumb}>
        Create and vote in polls created by anyone. Built with Django
      </ProjectGridItem>
    </SimpleGrid>
  );
};

export default ProjectsGrid;
