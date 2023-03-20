import { Box, Button, Flex, HStack, IconButton, Link } from "@chakra-ui/react";
import { IoLogoDiscord, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { DownloadIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import { Social } from "types";
import IconRetrieve from "@/components/IconRetrieve";

interface Props {
  socials: Social[];
}

const Socials = ({ socials }: Props) => {
  return (
    <Box>
      <HStack px={10} justifyContent="space-between">
        {socials.reverse().map((social) => (
          <Link href={social.url} target="_blank" key={social._id}>
            <IconButton
              variant="ghost"
              fontSize="25px"
              aria-label={social.title}
              icon={<IconRetrieve icon={social.slug} />}
              colorScheme="teal"
            />
          </Link>
        ))}
      </HStack>
      <Flex my={4} justifyContent="center">
        <Button as={NextLink} href="/works" scroll={false} rightIcon={<DownloadIcon />} colorScheme="teal">
          Download CV
        </Button>
      </Flex>
    </Box>
  );
};

export default Socials;
