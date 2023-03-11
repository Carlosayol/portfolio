import { Container } from "@chakra-ui/react";

import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Location from "@/components/Location";

const Contact = () => {
  return (
    <Container>
      <Section title={"Get In Touch"}>
        <Location />
      </Section>
      <Section title={"Contact Form"}>
        <ContactForm />
      </Section>
    </Container>
  );
};

export default Contact;
