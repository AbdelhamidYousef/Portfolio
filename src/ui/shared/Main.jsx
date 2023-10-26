import { PropTypes } from "prop-types";

const Main = ({ children }) => {
  return (
    <main className="px-5 lg:px-10 overflow-x-hidden lg:ml-72">{children}</main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
