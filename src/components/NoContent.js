import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';
import FramedBox from './FramedBox';

const NoContent = ({ fetchData }) => {
  return (
    <div className='no-content__outer'>
      <Row>
        <div className='small-12 cell'>
          <FramedBox className='no-content'>
            <h4 className='no-content__text'>Sorry! Our request for the data timed out...</h4>
            <button onClick={() => fetchData()} className='button no-content__button'>Try again</button>
          </FramedBox>
        </div>
      </Row>
    </div>
  );
};

export default NoContent;


NoContent.propTypes = {
  fetchData: PropTypes.func.isRequired,
};
