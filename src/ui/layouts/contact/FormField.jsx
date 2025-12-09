import { PropTypes } from 'prop-types';

const FormField = ({ className = '', children }) => {
  return <div className={`${className} grid gap-y-3`}>{children}</div>;
};

export const Label = ({ htmlFor, className = '', children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${className} hidden xs:block font-medium text-base md:text-lg text-center xs:text-left dark:text-gray-50`}
    >
      {children}
    </label>
  );
};

export const Input = ({
  type,
  name,
  id = name,
  value,
  onChange,
  disabled,
  placeholder,
  className = '',
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      className={`${className} w-full px-0.5 xs:px-6 py-3.5 bg-inherit border-b-2 border-gray-300 xs:bg-white xs:rounded-lg font-medium text-base sm:text-lg text-slate-800 placeholder:font-main placeholder:text-base placeholder:text-gray-400 outline-none focus:border-primary-400 xs:focus:border-none xs:focus:ring-1 xs:focus:ring-primary-400 disabled:bg-gray-300 disabled:cursor-not-allowed dark:border-slate-600 dark:xs:bg-slate-700 dark:text-white dark:placeholder:text-gray-300 dark:focus:border-primary-600 dark:xs:focus:ring-primary-600 dark:disabled:bg-slate-900`}
    />
  );
};

export const Textarea = ({
  name,
  id = name,
  value,
  onChange,
  disabled,
  placeholder,
  rows,
  className = '',
}) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      rows={rows}
      className={`${className} w-full px-0.5 xs:px-6 py-3.5 bg-inherit border-b-2 border-gray-300 xs:bg-white xs:rounded-lg font-medium text-base sm:text-lg text-slate-800 placeholder:font-main placeholder:text-base placeholder:text-gray-400 outline-none focus:border-primary-400 xs:focus:border-none xs:focus:ring-1 xs:focus:ring-primary-400 disabled:bg-gray-300 disabled:cursor-not-allowed dark:border-slate-600 dark:xs:bg-slate-700 dark:text-white dark:placeholder:text-gray-300 dark:focus:border-primary-600 dark:xs:focus:ring-primary-600 dark:disabled:bg-slate-900`}
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
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
Textarea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  className: PropTypes.string,
};

export default FormField;
