import { Badge, Box, Container, Text } from "@chakra-ui/react";

import Entry from "@/components/entry";
import ResumeInfo from "@/components/resumeInfo";
import Skills from "@/components/skills";

const Resume = () => {
  return (
    <Container>
      <Entry title={"Resume"}>
        <ResumeInfo />
      </Entry>
      <Entry title={"Skills"}>
        <Skills />
      </Entry>
      <Entry title={"Languages"}>
        <Box>
          <Text>
            Spanish <Badge>Native</Badge>
          </Text>
          <Text>
            English <Badge>Advanced</Badge>
          </Text>
        </Box>
      </Entry>
    </Container>
  );
};

export default Resume;
