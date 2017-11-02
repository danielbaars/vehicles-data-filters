import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ extraClasses, children }) => {
  return (
    <div className='grid-container'>
      <div className={`grid-x grid-margin-x ${extraClasses}`}>
        {children}
      </div>
    </div>
  );
};

export default Row;

Row.propTypes = {
  extraClasses: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Row.defaultProps = {
  extraClasses: '',
};
