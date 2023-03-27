import { Box, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";

import { urlFor } from "@/utils/sanity";
import { About } from "types";

interface Props {
  about: About;
}

const AboutInfo = ({ about }: Props) => {
  return (
    <Box display={{ md: "flex" }} mb={12}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page title">
          {about.name}
        </Heading>
        <p>{about.role}</p>
      </Box>
      <Flex flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} justifyContent="center">
        <Image
          borderColor={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src={urlFor(about.heroImage).url()}
          alt="Profile Image"
        />
      </Flex>
    </Box>
  );
};

export default AboutInfo;
