import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

const Outer = ({ className, children }) => {
  return (
    <div className={`${className}__outer outer`}>
      <Row container>
        {children}
      </Row>
    </div>
  );
};

export default Outer;

Outer.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
