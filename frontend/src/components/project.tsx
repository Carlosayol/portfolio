import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  children: React.ReactNode;
}

export const Title = ({ children }: Props) => {
  return (
    <Box>
      <NextLink href="/projects">
        <Link>Works</Link>
      </NextLink>
      <span>
        {" "}
        <ChevronRightIcon />{" "}
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  );
};
