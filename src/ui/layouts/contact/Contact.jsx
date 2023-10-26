import Section from "../../shared/Section";
import SectionTitle from "../../shared/SectionTitle";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Section
      id="contact"
      className="py-14 lg:pt-24 lg:pb-28 border-b-2 animate-slideLeft"
    >
      <SectionTitle classes="!mb-6 lg:!mb-14">Get in touch</SectionTitle>
      <ContactForm />
    </Section>
  );
};

export default Contact;
