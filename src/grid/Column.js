import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ small, medium, large, extraClasses, children }) => {
  const smallColumns = small ? `small-${small} ` : 'small-12 ';
  const mediumColumns = medium ? `medium-${medium} ` : '';
  const largeColumns = large ? `large-${large} ` : '';
  const extraColumnClasses = extraClasses ? `${extraClasses} ` : '';
  const classes = `${smallColumns}${mediumColumns}${largeColumns}${extraColumnClasses}cell`;
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Column;

Column.propTypes = {
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string,
  extraClasses: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Column.defaultProps = {
  small: '',
  medium: '',
  large: '',
  extraClasses: '',
};
