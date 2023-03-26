import { Badge, Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Language } from "types";

interface Props {
  languages: Language[];
}

const Languages = ({ languages }: Props) => {
  return (
    <SimpleGrid columns={1} spacingY={2}>
      {languages.map((language) => (
        <Flex alignItems="center" key={language._id}>
          <Text fontSize={18}>{language.title}</Text>
          <Badge colorScheme="teal" mx={6}>
            {language.level}
          </Badge>
        </Flex>
      ))}
    </SimpleGrid>
  );
};

export default Languages;
