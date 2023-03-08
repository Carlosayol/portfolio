import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Box>
      {/* MAKE THIS A COMPONENT */}
      <Heading as="h3" fontSize={20} my={2}>
        Expert
      </Heading>
      <SimpleGrid columns={4} gap={2}>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
      </SimpleGrid>
      {/* MAKE THIS A COMPONENT */}
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
  );
};

export default Skills;
