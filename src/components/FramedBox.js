import React from 'react';
import PropTypes from 'prop-types';

const FramedBox = ({ className, children }) => {
  return (
    <div className={`${className} inner`}>
      <div className={`${className}__box box`}>
        {children}
      </div>
    </div>
  );
};

export default FramedBox;

FramedBox.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
