import { Box, IconButton, Tooltip } from "@chakra-ui/react";
import IconRetrieve from "@/components/IconRetrieve";

interface Props {
  title: string;
  slug: string;
}

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
          _hover={{ bg: "transparent" }}
          _focus={{ bg: "transparent" }}
        />
      </Tooltip>
    </Box>
  );
};

export default SkillIcon;
