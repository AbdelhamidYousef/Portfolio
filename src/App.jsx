import Sidebar from "./ui/layouts/sidebar/Sidebar";
import Main from "./ui/shared/Main";
import About from "./ui/layouts/about/About";
import Skills from "./ui/layouts/skills/Skills";
import Projects from "./ui/layouts/projects/Projects";
import Contact from "./ui/layouts/contact/Contact";
import ToTopBtn from "./ui/shared/ToTopBtn";

import { ActiveSectionProvider } from "./context/ActiveSection";
import Footer from "./ui/layouts/footer/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
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

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "0.5rem" }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "30rem",
            padding: "1rem 1.5rem",
            backgroundColor: "#333",
            color: "#fff",
          },
        }}
      />
    </>
  );
};

export default App;
