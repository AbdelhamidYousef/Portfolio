import PropTypes from 'prop-types';

const Git = ({ className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="20 20 465 465"
      width="100%"
      height="100%"
      className={className}
    >
      <path fill="#f14e32" d="m256 31 225 225-225 225L31 256z"></path>
      <path
        fill="#fff"
        d="m177.5 109.5 14.9-14.9 51.1 51.1c3.8-1.8 8.1-2.9 12.6-2.9 15.9 0 28.8 12.9 28.8 28.8 0 4.5-1 8.8-2.9 12.6l45.9 45.9c3.5-1.5 7.4-2.4 11.5-2.4 15.9 0 28.8 12.9 28.8 28.8s-12.9 28.8-28.8 28.8-28.8-12.9-28.8-28.8c0-4.1.9-8 2.4-11.6l-46.5-46.5v136.2c10.7 4.2 18.3 14.6 18.3 26.8 0 15.9-12.9 28.8-28.8 28.8s-28.8-12.9-28.8-28.8c0-12.2 7.6-22.6 18.3-26.8V198.5c-10.7-4.2-18.3-14.6-18.3-26.8 0-3.7.7-7.2 2-10.5z"
      ></path>
    </svg>
  );
};

Git.propTypes = {
  className: PropTypes.string,
};

export default Git;
