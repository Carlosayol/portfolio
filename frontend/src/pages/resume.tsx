import ResumeCard from "@/components/resumeCard";
import Section from "@/components/section";
import { Box, Container, Grid, Heading, SimpleGrid, StackDivider, VStack } from "@chakra-ui/react";

const Resume = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Resume
      </Heading>
      <SimpleGrid columns={2} gap={2}>
        <Section>
          <Heading as="h3" variant="section-title">
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
          <Heading as="h3" variant="section-title">
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
    </Container>
  );
};

export default Resume;
