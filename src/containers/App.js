import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../style/foundation.css';
import '../style/app.css';

import Masthead from '../components/Masthead.js';
import Footer from '../components/Footer.js';
import Content from './Content.js';
import NoContent from '../components/NoContent.js';

export const AppComponent = ({ error, data, fetchData }) => {
  return (
    <div className="app">
      <Masthead />
      {
        error &&
          <NoContent fetchData={fetchData} />
      }
      {
        data &&
          <Content data={data} />
      }
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
    data: state.data,
  };
};

export default connect(mapStateToProps)(AppComponent);

AppComponent.propTypes = {
  error: PropTypes.bool.isRequired,
  data: PropTypes.array,
  fetchData: PropTypes.func.isRequired,
};

AppComponent.defaultProps = {
  data: [],
};
