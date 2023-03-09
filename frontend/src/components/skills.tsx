import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Skill from "./skill";

const Skills = () => {
  return (
    <Box>
      <Heading as="h3" fontSize={20} my={4}>
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
      <Heading as="h3" fontSize={20} my={4}>
        Proficient
      </Heading>
      <SimpleGrid columns={4} gap={2} spacingY={5}>
        <Skill />
      </SimpleGrid>
      <Heading as="h3" fontSize={20} my={4}>
        Beginner
      </Heading>
      <SimpleGrid columns={4} gap={2} spacingY={5}>
        <Skill />
        <Skill />
      </SimpleGrid>
      <Heading as="h3" fontSize={20} my={4}>
        Want to learn
      </Heading>
      <SimpleGrid columns={4} gap={2} spacingY={5}>
        <Skill />
        <Skill />
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
