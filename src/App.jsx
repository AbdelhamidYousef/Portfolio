import Sidebar from "./ui/layouts/sidebar/Sidebar";
import Main from "./ui/shared/Main";
import About from "./ui/layouts/about/About";
import Skills from "./ui/layouts/skills/Skills";
import Projects from "./ui/layouts/projects/Projects";
import Contact from "./ui/layouts/contact/Contact";
import ToTopBtn from "./ui/shared/ToTopBtn";

import { ActiveSectionProvider } from "./context/ActiveSection";
import Footer from "./ui/layouts/footer/Footer";

const App = () => {
  return (
    <ActiveSectionProvider>
      <Sidebar />

      <Main>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ToTopBtn />
      </Main>

      <Footer />
    </ActiveSectionProvider>
  );
};

export default App;
