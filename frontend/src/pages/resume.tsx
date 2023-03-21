import { Container } from "@chakra-ui/react";

import ResumeInfo from "@/components/ResumeInfo";
import Skills from "@/components/Skills";
import Section from "@/components/Section";
import Languages from "@/components/Languages";
import { Education, Experience, Language, Skill } from "types";
import { useFetch } from "@/utils/useFetch";
import { GetStaticProps } from "next";

interface Props {
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
}

const Resume = ({ experiences, education, skills, languages }: Props) => {
  return (
    <Container>
      <Section title={"Resume"}>
        <ResumeInfo experiences={experiences} education={education} />
      </Section>
      <Section title={"Skills"}>
        <Skills skills={skills} />
      </Section>
      <Section title={"Languages"}>
        <Languages languages={languages} />
      </Section>
    </Container>
  );
};

export default Resume;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const experiences = await useFetch<Experience[]>("getExperience");
  const education = await useFetch<Education[]>("getEducation");
  const skills = await useFetch<Skill[]>("getSkills");
  const languages = await useFetch<Language[]>("getLanguages");

  return {
    props: {
      experiences,
      education,
      skills,
      languages,
    },
    revalidate: 1000,
  };
};
