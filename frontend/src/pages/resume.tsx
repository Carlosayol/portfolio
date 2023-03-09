import { Badge, Box, Container, Text } from "@chakra-ui/react";

import Entry from "@/components/entry";
import ResumeInfo from "@/components/resumeInfo";
import Skills from "@/components/skills";
import Section from "@/components/section";
import Languages from "@/components/languages";

const Resume = () => {
  return (
    <Container>
      <Section title={"Resume"}>
        <ResumeInfo />
      </Section>
      <Section title={"Skills"}>
        <Skills />
      </Section>
      <Section title={"Languages"}>
        <Languages />
      </Section>
    </Container>
  );
};

export default Resume;
