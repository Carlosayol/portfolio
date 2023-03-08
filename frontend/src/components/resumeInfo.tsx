import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

import ResumeCard from "./resumeCard";
import Section from "./section";

const ResumeInfo = () => {
  return (
    <Box>
      <SimpleGrid columns={2} gap={2}>
        <Section>
          <Heading as="h3" fontSize={20} my={2}>
            Experience
          </Heading>
          <VStack spacing={4} align="stretch">
            <ResumeCard
              duration="2016 - present"
              title="Test"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              location="Colombia"
            />
            <ResumeCard
              duration="2016 - 2022"
              title="Test 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              location="Canada"
            />
          </VStack>
        </Section>
        <Section>
          <Heading as="h3" fontSize={20} my={2}>
            Education
          </Heading>
          <VStack spacing={4} align="stretch">
            <ResumeCard
              duration="2016 - 2022"
              title="Test"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              location="Colombia"
            />
          </VStack>
        </Section>
      </SimpleGrid>
    </Box>
  );
};

export default ResumeInfo;
