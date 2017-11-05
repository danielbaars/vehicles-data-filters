import React from 'react';
import PropTypes from 'prop-types';

import Outer from '../grid/Outer';
import Column from '../grid/Column';
import FramedBox from './FramedBox';

const NoContent = ({ fetchData }) => {
  return (
    <Outer className='no-content'>
      <Column>
        <FramedBox className='no-content'>
          <h4 className='no-content__text'>Sorry! Our request for the data timed out...</h4>
          <button onClick={() => fetchData()} className='button no-content__button'>Try again</button>
        </FramedBox>
      </Column>
    </Outer>
  );
};

export default NoContent;


NoContent.propTypes = {
  fetchData: PropTypes.func.isRequired,
};
