import { PropTypes } from "prop-types";

const Sidebar = ({ isSidebarOpen, children }) => {
  return (
    <aside
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed left-0 top-0 w-full sm:w-60 lg:w-72 lg:translate-x-0 h-screen z-20 bg-primary-600 transition-all duration-1000`}
    >
      <div
        className={`${
          isSidebarOpen ? "scale-x-100" : "scale-x-0"
        } absolute inset-0 lg:scale-x-100 grid place-content-center text-center animate-bounceRight transition-all duration-1000`}
      >
        {children}
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Sidebar;
