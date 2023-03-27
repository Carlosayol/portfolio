import { Container } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import ResumeInfo from "@/components/ResumeInfo";
import Skills from "@/components/Skills";
import Section from "@/components/Section";
import Languages from "@/components/Languages";
import { Education, Experience, Language, Skill } from "types";
import { sanityClient } from "@/utils/sanity";
import { experiencesQuery } from "@/utils/groqOperations/experiences";
import { educationQuery } from "@/utils/groqOperations/education";
import { skillsQuery } from "@/utils/groqOperations/skills";
import { languagesQuery } from "@/utils/groqOperations/languages";

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
  const experiences: Experience[] = await sanityClient.fetch(experiencesQuery);
  const education: Education[] = await sanityClient.fetch(educationQuery);
  const skills: Skill[] = await sanityClient.fetch(skillsQuery);
  const languages: Language[] = await sanityClient.fetch(languagesQuery);

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
