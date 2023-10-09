import { PropTypes } from "prop-types";
const Main = ({ isSidebarOpen, children }) => {
  return (
    <main
      className={`${
        isSidebarOpen
          ? "sm:ml-60 lg:ml-72 translate-x-full sm:translate-x-0"
          : "ml-0"
      } lg:ml-72 w-full bg-gray-100/80 px-5 lg:px-10 transition-all duration-1000 overflow-x-hidden`}
    >
      {children}
    </main>
  );
};

Main.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Main;
