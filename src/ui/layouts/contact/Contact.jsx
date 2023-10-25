import { useEffect, useRef } from "react";
import SectionTitle from "../../shared/SectionTitle";
import Socials from "../../shared/Socials";
import Download from "./Download";
import { useActiveSection } from "../../../context/ActiveSection";

const Contact = () => {
  const ref = useRef(null);
  const { sectionsRef } = useActiveSection();

  useEffect(() => {
    sectionsRef.current.push(ref.current);
  }, [sectionsRef]);

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 lg:py-28 border-b-2 animate-slideLeft"
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
    </section>
  );
};

export default Contact;
