import PropTypes from 'prop-types';

const StyledComponents = ({ className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -165 276 260"
      width="100%"
      height="100%"
      className={className}
    >
      <text fill="#504b4b" fontSize="100">
        <tspan>{`< 💅>`}</tspan>
      </text>
    </svg>
  );
};

StyledComponents.propTypes = {
  className: PropTypes.string,
};

export default StyledComponents;
