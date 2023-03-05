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
            <Box h="40px">1</Box>
            <Box h="40px">2</Box>
            <Box h="40px">3</Box>
          </VStack>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box h="40px">1</Box>
            <Box h="40px">2</Box>
            <Box h="40px">3</Box>
          </VStack>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Resume;
