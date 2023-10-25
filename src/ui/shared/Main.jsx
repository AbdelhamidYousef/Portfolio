import { PropTypes } from "prop-types";

const Main = ({ children }) => {
  return (
    <main className="bg-gray-50 px-5 lg:px-10 overflow-x-hidden">
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
