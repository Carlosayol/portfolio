import ResumeCard from "@/components/resumeCard";
import Section from "@/components/section";
import { Badge, Box, Container, Grid, Heading, SimpleGrid, StackDivider, Text, VStack } from "@chakra-ui/react";

const Resume = () => {
  return (
    <Container>
      <Heading as="h3" variant="section-title">
        Resume
      </Heading>
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
      <Heading as="h3" variant="section-title">
        Skills
      </Heading>
      <Box>
        <Heading as="h3" fontSize={20} my={2}>
          Expert
        </Heading>
        <Text>Test</Text>
        <Heading as="h3" fontSize={20} my={2}>
          Proficient
        </Heading>
        <Text>Test</Text>
        <Heading as="h3" fontSize={20} my={2}>
          Beginner
        </Heading>
        <Text>Test</Text>
        <Heading as="h3" fontSize={20} my={2}>
          Want to learn
        </Heading>
        <Text>Test</Text>
      </Box>
      <Heading as="h3" variant="section-title">
        Languages
      </Heading>
      <Box>
        <Text>
          Spanish <Badge>Native</Badge>
        </Text>

        <Text>
          English <Badge>Advanced</Badge>
        </Text>
      </Box>
    </Container>
  );
};

export default Resume;
