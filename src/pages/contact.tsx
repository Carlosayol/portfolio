import { Container } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Location from "@/components/Location";
import { About } from "types";
import { axiosRequest } from "@/utils/requests";
interface Props {
  about: About;
}

const Contact = ({ about }: Props) => {
  return (
    <Container>
      <Section title={"Get In Touch"}>
        <Location phone={about.phone} email={about.email} />
      </Section>
      <Section title={"Contact Form"}>
        <ContactForm />
      </Section>
    </Container>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const about = await axiosRequest<About>("about");

  return {
    props: {
      about,
    },
    revalidate: 1000,
  };
};
