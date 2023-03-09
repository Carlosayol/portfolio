import { Box, IconButton, Tooltip } from "@chakra-ui/react";
import { SiReact } from "react-icons/si";

// use icons from react icons
const Skill = () => {
  return (
    <Box>
      <Tooltip label="ReactJS" fontSize="md">
        <IconButton
          variant="ghost"
          fontSize="48px"
          isRound
          aria-label="ReactJS"
          icon={<SiReact />}
          colorScheme="teal"
        />
      </Tooltip>
    </Box>
  );
};

export default Skill;
