import SectionTitle from "../../shared/SectionTitle";
import Socials from "../../shared/Socials";
import Download from "./Download";
import Section from "../../shared/Section";

const Contact = () => {
  return (
    <Section
      id="contact"
      className="py-10 flex flex-col items-center gap-y-7 xl:flex-row xl:justify-between animate-slideLeft bg-inherit relative z-[11] border-b-2"
    >
      <SectionTitle
        initialStyle={false}
        classes="font-bold text-3xl text-slate-600 hover:text-primary-600 uppercase transition-all duration-300"
      >
        Get In Touch
      </SectionTitle>

      <Socials
        containerClasses="flex gap-5 xl:gap-14"
        elementClasses="w-8 h-8 text-slate-600 hover:text-primary-600 transition-all duration-300 focus-within:border-b-2 focus-within:border-slate-600 focus-within:border-spacing-2"
      />

      <Download />
    </Section>
  );
};

export default Contact;
