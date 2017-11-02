import React, { Component } from 'react';
import { alphabetizeArrayOfObjects } from '../utility';

import '../style/foundation.css';
import '../style/app.css';

import trafficMeister from '../data.js';
import Masthead from './Masthead.js';
import Footer from './Footer.js';
import Content from '../containers/Content.js';
import NoContent from './NoContent.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      data: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    return trafficMeister.fetchData((err, data) => {
      if (err) {
        this.setState({
          error: true,
        });
      } else {
        this.setState({
          error: false,
          data: alphabetizeArrayOfObjects(data, 'brand'),
        });
      }
    });
  }
  render() {
    const { error, data } = this.state;
    return (
      <div className="app">
        <Masthead />
        {
          error &&
            <NoContent fetchData={this.fetchData} />
        }
        {
          data.length > 0 &&
            <Content data={this.state.data} />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
