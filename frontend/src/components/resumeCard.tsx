import { Badge, Box, Text } from "@chakra-ui/react";

interface MyProps {
  title: string;
  duration: string;
  description: string;
  location: string;
}

const ResumeCard = ({ title, duration, description, location }: MyProps) => {
  return (
    <Box w="100%">
      <Badge>{duration}</Badge>
      <Text mt={2} fontSize={20} fontWeight="bold">
        {title}
      </Text>
      <Text fontSize={14}>{location}</Text>
      <Text mt={2} pr={2} fontSize={16}>
        {description}
      </Text>
    </Box>
  );
};

export default ResumeCard;
