import Section from "../../shared/Section";
import SectionTitle from "../../shared/SectionTitle";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Section id="contact" className="py-14 lg:pt-24 lg:pb-28">
      <SectionTitle className="!mb-6 lg:!mb-14 !text-5xl sm:!text-6xl !tracking-normal sm:!tracking-wide">
        Get in touch
      </SectionTitle>
      <ContactForm />
    </Section>
  );
};

export default Contact;
