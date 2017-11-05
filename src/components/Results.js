import React from 'react';
import PropTypes from 'prop-types';

import Vehicle from './Vehicle';

const Results = ({ results }) => {
  return results.map((value) => {
    return <Vehicle value={value} key={`brands__${value.id}`} />;
  });
};

export default Results;

Results.propTypes = {
  results: PropTypes.array.isRequired,
};
