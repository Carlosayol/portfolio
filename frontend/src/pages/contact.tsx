import { Container } from "@chakra-ui/react";

import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <Container>
      <Section title={"Contact Form"}>
        <ContactForm />
      </Section>
    </Container>
  );
};

export default Contact;
