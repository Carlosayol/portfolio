import { Box, Button, Flex, HStack, IconButton, Link } from "@chakra-ui/react";
import { IoLogoDiscord, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { DownloadIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import IconRetrieve from "@/components/IconRetrieve";

const Socials = () => {
  return (
    <Box>
      <HStack px={10} justifyContent="space-between">
        <Link href="https://github.com/Carlosayol" target="_blank">
          <IconButton
            variant="ghost"
            fontSize="25px"
            aria-label="Github"
            icon={<IconRetrieve icon={"github"} />}
            colorScheme="teal"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/carlosayol/" target="_blank">
          <IconButton
            variant="ghost"
            fontSize="25px"
            aria-label="Linkedin"
            icon={<IoLogoLinkedin />}
            colorScheme="teal"
          />
        </Link>
        <Link href="https://www.instagram.com/carlosayalaolarte/" target="_blank">
          <IconButton
            variant="ghost"
            fontSize="25px"
            aria-label="Instagram"
            icon={<IoLogoInstagram />}
            colorScheme="teal"
          />
        </Link>
        <Link href="https://www.discord.com" target="_blank">
          <IconButton
            variant="ghost"
            fontSize="25px"
            aria-label="Discord"
            icon={<IoLogoDiscord />}
            colorScheme="teal"
          />
        </Link>
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
