import React from 'react';
import PropTypes from 'prop-types';

const RowContent = ({ extraClasses, children }) => {
  return (
    <div className={`grid-x grid-margin-x ${extraClasses}`}>
      {children}
    </div>
  );
};

const Row = ({ extraClasses, container, children }) => {
  if (container) {
    return (
      <div className='grid-container'>
        <RowContent extraClasses={extraClasses}>{children}</RowContent>
      </div>
    );
  }
  return <RowContent extraClasses={extraClasses}>{children}</RowContent>;
};

export default Row;

RowContent.propTypes = {
  extraClasses: PropTypes.string,
  children: PropTypes.node.isRequired,
};

RowContent.defaultProps = {
  extraClasses: '',
};

Row.propTypes = {
  extraClasses: PropTypes.string,
  container: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Row.defaultProps = {
  extraClasses: '',
  container: false,
};
