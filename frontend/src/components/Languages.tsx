import { Badge, Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

const Languages = () => {
  return (
    <SimpleGrid columns={1} spacingY={2}>
      <Flex alignItems="center">
        <Text fontSize={18}>Spanish</Text>
        <Badge colorScheme="teal" mx={6}>
          Native
        </Badge>
      </Flex>
      <Flex alignItems="center">
        <Text fontSize={18}>English</Text>
        <Badge colorScheme="teal" mx={6}>
          Advanced
        </Badge>
      </Flex>
    </SimpleGrid>
  );
};

export default Languages;
