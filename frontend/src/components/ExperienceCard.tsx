import { Badge, Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { Experience } from "types";

interface MyProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: MyProps) => {
  return (
    <Box w="100%">
      <Badge colorScheme="teal">
        {new Date(experience.dateStarted).toISOString().slice(0, 7).replaceAll("-", "/")} -{" "}
        {experience.isPresent
          ? "PRESENT"
          : new Date(experience.dateEnded).toISOString().slice(0, 7).replaceAll("-", "/")}
      </Badge>
      <Text mt={2} fontSize={18} fontWeight="bold">
        {experience.title}
      </Text>
      <Text fontSize={14}>{experience.location}</Text>
      <UnorderedList mt={2} pr={2}>
        {experience.points.map((point, i) => (
          <ListItem key={i} fontSize={16}>
            {point}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default ExperienceCard;
