import React from 'react';
import PropTypes from 'prop-types';

import Column from '../grid/Column';

const Credits = ({ className, text, url, logo }) => {
  return (
    <Column medium='6' extraClasses='credits'>
      <div className={`credits__${className}-container`}>
        <div className={`credits__${className}`}>
          <div className='credits__text'>{text}</div>
          <a className={`credits__logo credits__logo--${className} imgc`} href={url} target='_blank'>
            <img src={logo} alt={`logo--${className}`} />
          </a>
        </div>
      </div>
    </Column>
  );
};

export default Credits;

Credits.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};
