import { Badge, Box, Text } from "@chakra-ui/react";

import { Education } from "types";

interface MyProps {
  education: Education;
}

const EducationCard = ({ education }: MyProps) => {
  return (
    <Box w="100%">
      <Badge colorScheme="teal">{education.timeline}</Badge>
      <Text mt={2} fontSize={18} fontWeight="bold">
        {education.title}
      </Text>
      <Text fontSize={14}>{education.location}</Text>
    </Box>
  );
};

export default EducationCard;
