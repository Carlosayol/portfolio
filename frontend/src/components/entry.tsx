import { Box, Heading } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  title: String;
}

const Entry = ({ children, title }: Props) => {
  return (
    <Box>
      <Heading as="h3" variant="section-title">
        {title}
      </Heading>
      <Box>{children}</Box>
    </Box>
  );
};

export default Entry;
