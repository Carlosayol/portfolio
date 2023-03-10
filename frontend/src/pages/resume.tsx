import { Container } from "@chakra-ui/react";

import ResumeInfo from "@/components/ResumeInfo";
import Skills from "@/components/Skills";
import Section from "@/components/Section";
import Languages from "@/components/Languages";

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
