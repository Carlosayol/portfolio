import { Box, IconButton, Tooltip } from "@chakra-ui/react";
import IconRetrieve from "@/components/IconRetrieve";

interface Props {
  title: string;
  slug: string;
}

// use icons from react icons
const SkillIcon = ({ title, slug }: Props) => {
  return (
    <Box>
      <Tooltip label={title} fontSize="md">
        <IconButton
          variant="ghost"
          fontSize="48px"
          isRound
          aria-label={title}
          icon={<IconRetrieve icon={slug} />}
          colorScheme="teal"
        />
      </Tooltip>
    </Box>
  );
};

export default SkillIcon;
