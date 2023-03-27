import { Container } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import ResumeInfo from "@/components/ResumeInfo";
import Skills from "@/components/Skills";
import Section from "@/components/Section";
import Languages from "@/components/Languages";
import { Education, Experience, Language, Skill } from "types";
import { axiosRequest } from "@/utils/requests";

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
  const experiences = await axiosRequest<Experience[]>("experiences");
  const education = await axiosRequest<Education[]>("education");
  const skills = await axiosRequest<Skill[]>("skills");
  const languages = await axiosRequest<Language[]>("languages");

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
