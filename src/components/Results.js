import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => {
  return _.map(results, (value) => {
    const { brand, type, id, colors, img } = value;
    return (
      <div className={`vehicle vehicle--${type} vehicle--id${id}`} key={`brands_${brand}`}>
        <div className='vehicle__brand vehicle__brand--top'>{brand}</div>
        <div className='grid-x'>
          <div className='vehicle__pic imgc'><img src={img} alt={brand} /></div>
          <div className='vehicle__colors'>
            <div className='vehicle__brand vehicle__brand--side'>{brand}</div>
            {
              colors.sort().map((color) => {
                return (
                  <div className={`swatch swatch--${color}`} key={`swatch--${color}`} />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  });
};

export default Results;

Results.propTypes = {
  results: PropTypes.array.isRequired,
};
