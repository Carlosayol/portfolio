import { Badge, Box, Flex } from "@chakra-ui/react";

interface Props {
  title: string;
  data: string;
}

const Info = ({ title, data }: Props) => {
  return (
    <Flex alignItems="center">
      <Badge colorScheme="teal" mr={2}>
        {title}
      </Badge>
      <span>{data}</span>
    </Flex>
  );
};

export default Info;
