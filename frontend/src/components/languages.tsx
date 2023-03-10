import { Badge, Box, Text } from "@chakra-ui/react";

const Languages = () => {
  return (
    <Box>
      <Text mt={2} fontSize={18}>
        Spanish
        <Badge colorScheme="teal" mx={6}>
          Native
        </Badge>
      </Text>
      <Text mt={2} fontSize={18}>
        English
        <Badge colorScheme="teal" mx={6}>
          Advanced
        </Badge>
      </Text>
    </Box>
  );
};

export default Languages;
