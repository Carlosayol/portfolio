import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Skill from "./skill";

const Skills = () => {
  return (
    <Box>
      <Heading as="h3" fontSize={20} my={2}>
        Expert
      </Heading>
      <SimpleGrid columns={4} gap={2} spacingY={5}>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </SimpleGrid>
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
