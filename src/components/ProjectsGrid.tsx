import { SimpleGrid } from "@chakra-ui/react";

import { ProjectGridItem } from "@/components/GridItem";
import { Project } from "types";
import { urlFor } from "@/utils/sanity";

interface Props {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: Props) => {
  return (
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      {projects.map((project) => (
        <ProjectGridItem
          key={project._id}
          id={project.slug}
          title={project.title}
          thumbnail={urlFor(project.image).url()}
        >
          {project.briefDescription}
        </ProjectGridItem>
      ))}
    </SimpleGrid>
  );
};

export default ProjectsGrid;
