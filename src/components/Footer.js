import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';
import FramedBox from './FramedBox';

const Credits = ({ className, text, url, logo }) => {
  return (
    <div className='small-12 medium-6 cell credits'>
      <div className={`credits__${className}-container`}>
        <div className={`credits__${className}`}>
          <div className='credits__text'>{text}</div>
          <a className={`credits__logo credits__logo--${className} imgc`} href={url} target='_blank'>
            <img src={logo} alt={`logo--${className}`} />
          </a>
        </div>
      </div>
    </div>
  );
};

Credits.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

const Footer = () => {
  const sytacLogo = 'http://www.sytac.nl/wp-content/themes/sytac/images/sytac_new.png';
  const danielLogo = 'https://rawgit.com/danielbaars/5171605b94645c9e87e154c3486e4ef3/raw/c49b826993d925625ee819d51797ac29d05eba89/daniel-name-logo.svg';
  const sytacUrl = 'http://www.sytac.nl/';
  const danielUrl = 'https://github.com/danielbaars';
  return (
    <div className='footer__outer'>
      <Row>
        <div className='small-12 cell'>
          <FramedBox className='credits'>
            <div className='grid-x grid-margin-x'>
              <Credits className='inspired' text='Inspired by' url={sytacUrl} logo={sytacLogo} />
              <Credits className='built' text='Built by' url={danielUrl} logo={danielLogo} />
            </div>
          </FramedBox>
        </div>
      </Row>
    </div>
  );
};

export default Footer;
