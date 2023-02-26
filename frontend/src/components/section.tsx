import { Box } from "@chakra-ui/react";

interface MyProps {
  children: React.ReactNode;
}

const Section = ({ children }: MyProps) => {
  return <Box mb={6}>{children}</Box>;
};

export default Section;
