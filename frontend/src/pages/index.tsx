import { Inter } from "@next/font/google";
import { Container } from "@chakra-ui/react";

import Section from "@/components/Section";
import Paragraph from "@/components/Paragraph";
import AboutInfo from "@/components/AboutInfo";
import Socials from "@/components/Socials";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <Container>
      <AboutInfo />
      <Section title={"About Me"}>
        <Paragraph>
          Software Engineer with 2+ years of experience as a FullStack Developer designing, developing and maintaining
          Shopify applications, web applications, databases, APIs and other backend solutions with NodeJS, Python and Go
          with technologies and frameworks such as Express, NestJS, Django and AWS, with an interest in increasing his
          knowledge and skills in developing innovative solutions using new technologies and the best practices.
        </Paragraph>
      </Section>
      <Section title={"Likes"}>
        <Paragraph>
          Music, Playing Violin &amp; Piano, Biking, Reading, Video Games, Coding, Artificial Intelligence, Good Vibes.
        </Paragraph>
      </Section>
      <Section title={"Social Media"}>
        <Socials />
      </Section>
    </Container>
  );
};

export default Home;

