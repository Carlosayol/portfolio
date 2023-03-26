import { Box, Heading } from "@chakra-ui/react";

interface MyProps {
  title: String;
  children: React.ReactNode;
}

const Section = ({ title, children }: MyProps) => {
  return (
    <Box mb={6}>
      <Heading as="h3" variant="section-title">
        {title}
      </Heading>
      <Box>{children}</Box>
    </Box>
  );
};

export default Section;
