import { Box, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";

const AboutInfo = () => {
  return (
    <Box display={{ md: "flex" }} mb={12}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page title">
          Carlos Ayala
        </Heading>
        <p>Software Engineer | Full Stack Developer</p>
      </Box>
      <Flex flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} justifyContent="center">
        <Image
          borderColor={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src="images/carlos.jpg"
          alt="Profile Image"
        />
      </Flex>
    </Box>
  );
};

export default AboutInfo;
