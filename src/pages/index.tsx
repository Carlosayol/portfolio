import { Inter } from "@next/font/google";
import { Container } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import Section from "@/components/Section";
import Paragraph from "@/components/Paragraph";
import AboutInfo from "@/components/AboutInfo";
import Socials from "@/components/Socials";
import { About, Social } from "types";
import { sanityClient } from "@/utils/sanity";
import { aboutQuery } from "@/utils/groqOperations/about";
import { socialsQuery } from "@/utils/groqOperations/socials";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  about: About;
  socials: Social[];
}

const Home = ({ about, socials }: Props) => {
  return (
    <Container>
      <AboutInfo about={about} />
      <Section title={"About Me"}>
        <Paragraph>{about.profile}</Paragraph>
      </Section>
      <Section title={"Likes"}>
        <Paragraph>{about.likes.join(", ")}</Paragraph>
      </Section>
      <Section title={"Social Media"}>
        <Socials socials={socials} cvUrl={about.cvURL} />
      </Section>
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const about: About = await sanityClient.fetch(aboutQuery);
  const socials: Social[] = await sanityClient.fetch(socialsQuery);

  return {
    props: {
      about,
      socials,
    },
    revalidate: 1000,
  };
};

