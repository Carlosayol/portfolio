import { ChevronRightIcon } from "@chakra-ui/icons";
import { Badge, Flex, Heading, IconButton, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import { IoLogoGithub } from "react-icons/io5";

interface Props {
  id: string | string[];
  year: string;
  url: string;
}

const Title = ({ id, year, url }: Props) => {
  return (
    <Flex alignItems="center" mb={4}>
      <NextLink href="/projects">
        <Link>Projects</Link>
      </NextLink>
      <span>
        {" "}
        <ChevronRightIcon />{" "}
      </span>
      <Heading as="h3" fontSize={20} textTransform="capitalize" mr={2}>
        {id}
      </Heading>
      <Badge colorScheme="teal">{year}</Badge>
      <Spacer />
      <Link href={url} target="_blank">
        <IconButton variant="ghost" fontSize="25px" aria-label="Github" icon={<IoLogoGithub />} colorScheme="teal" />
      </Link>
    </Flex>
  );
};

export default Title;
