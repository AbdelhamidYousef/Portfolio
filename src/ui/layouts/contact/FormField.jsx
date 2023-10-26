import { PropTypes } from "prop-types";

const FormField = ({ className, children }) => {
  return <div className={`${className} grid gap-y-3`}>{children}</div>;
};

export const Label = ({ htmlFor, className, children }) => {
  return (
    <label htmlFor={htmlFor} className={`${className} font-medium text-lg`}>
      {children}
    </label>
  );
};

export const Input = ({ type, name, id = name, placeholder, className }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={`${className} py-3.5 px-6 rounded-lg outline-none font-medium text-xl placeholder:font-main placeholder:text-base focus:ring-1 focus:ring-primary-400`}
    />
  );
};

export const Textarea = ({ name, id = name, placeholder, rows, className }) => {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      placeholder={placeholder}
      className={`${className} py-3.5 px-6 rounded-lg outline-none font-medium text-lg placeholder:font-main placeholder:text-base focus:ring-1 focus:ring-primary-400`}
    ></textarea>
  );
};

FormField.Label = Label;
FormField.Input = Input;
FormField.Textarea = Textarea;

FormField.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Label.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
Textarea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  className: PropTypes.string,
};

export default FormField;
