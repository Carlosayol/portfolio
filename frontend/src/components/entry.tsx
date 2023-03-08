import { Box, Heading } from "@chakra-ui/react";

interface MyProps {
  children: React.ReactNode;
  title: String;
}

const Entry = ({ children, title }: MyProps) => {
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
