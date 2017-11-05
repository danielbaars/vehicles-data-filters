import React from 'react';

import logo from '../img/traffic-meister-logo.svg';
import visual from '../img/vehicles.png';

import Outer from '../grid/Outer';
import Column from '../grid/Column';
import FramedBox from './FramedBox';

const Masthead = () => {
  return (
    <Outer className='masthead'>
      <Column>
        <FramedBox className='masthead'>
          <div className='masthead__logo imgc'>
            <img src={logo} alt="logo" />
          </div>
          <div className='masthead__visual imgch'>
            <img src={visual} alt="vehicles" />
          </div>
        </FramedBox>
      </Column>
    </Outer>
  );
};

export default Masthead;
