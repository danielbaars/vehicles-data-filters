import React from 'react';

import Row from './Row';
import FramedBox from './FramedBox';

const Masthead = () => {
  return (
    <div className='masthead__outer'>
      <Row>
        <div className='small-12 cell'>
          <FramedBox className='masthead'>
            <div className='masthead__logo imgc'>
              <img src={require('../img/traffic-meister-logo.svg')} alt="logo" />
            </div>
            <div className='masthead__visual imgch'>
              <img src={require('../img/vehicles.png')} alt="vehicles" />
            </div>
          </FramedBox>
        </div>
      </Row>
    </div>
  );
};

export default Masthead;
