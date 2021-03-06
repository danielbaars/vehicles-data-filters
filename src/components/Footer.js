import React from 'react';

import Outer from '../grid/Outer';
import Column from '../grid/Column';
import FramedBox from './FramedBox';
import Credits from './Credits';

const Footer = () => {
  const sytacLogo = 'http://www.sytac.nl/wp-content/themes/sytac/images/sytac_new.png';
  const danielLogo = 'https://rawgit.com/danielbaars/5171605b94645c9e87e154c3486e4ef3/raw/c49b826993d925625ee819d51797ac29d05eba89/daniel-name-logo.svg';
  const sytacUrl = 'http://www.sytac.nl/';
  const danielUrl = 'https://github.com/danielbaars';
  return (
    <Outer className='footer'>
      <Column>
        <FramedBox className='credits'>
          <div className='grid-x grid-margin-x'>
            <Credits className='inspired' text='Inspired by' url={sytacUrl} logo={sytacLogo} />
            <Credits className='built' text='Built by' url={danielUrl} logo={danielLogo} />
          </div>
        </FramedBox>
      </Column>
    </Outer>
  );
};

export default Footer;
