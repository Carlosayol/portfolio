import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

import { Education, Experience } from "types";
import EducationCard from "@/components/EducationCard";
import ExperienceCard from "@/components/ExperienceCard";

interface Props {
  experiences: Experience[];
  education: Education[];
}

const ResumeInfo = ({ experiences, education }: Props) => {
  return (
    <Box>
      <SimpleGrid columns={2} gap={2}>
        <Box>
          <Heading as="h3" fontSize={20} my={2}>
            Experience
          </Heading>
          <VStack spacing={6} align="stretch">
            {experiences
              .sort((a, b) => +new Date(b.dateStarted) - +new Date(a.dateStarted))
              .map((experience) => (
                <ExperienceCard key={experience._id} experience={experience} />
              ))}
          </VStack>
        </Box>
        <Box>
          <Heading as="h3" fontSize={20} my={2}>
            Education
          </Heading>
          <VStack spacing={4} align="stretch">
            {education.map((edu) => (
              <EducationCard key={edu._id} education={edu} />
            ))}
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ResumeInfo;
