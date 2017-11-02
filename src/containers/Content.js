import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { uniqueArrayFromObjectValues } from '../utility';

import Row from '../components/Row';
import FramedBox from '../components/FramedBox';
import Results from '../components/Results';
import NoResults from '../components/NoResults';

import Filter from './Filter.js';

export class ContentComponent extends Component {
  getOptions(key) {
    const { data } = this.props;
    return uniqueArrayFromObjectValues(this.props[key] ? data : this.filterData(), key);
  }
  filterData() {
    const { data, colors, type, brand } = this.props;
    return data.filter(vehicle => [undefined, null, ...vehicle.colors].includes(colors) && [undefined, null, vehicle.type].includes(type) && [undefined, null, vehicle.brand].includes(brand));
  }
  render() {
    const { colors, type, brand } = this.props;
    const noFilters = [colors, type, brand].every(state => state === undefined);
    return (
      <div className="content__outer">
        <Row>
          <div className="small-12 medium-6 cell">
            <FramedBox className='filters'>
              <Filter keyValue='colors' placeholder='Select a color' options={this.getOptions('colors')} />
              <Filter keyValue='type' placeholder='Select a type' options={this.getOptions('type')} />
              <Filter keyValue='brand' placeholder='Select a brand' options={this.getOptions('brand')} />
            </FramedBox>
          </div>
          <div className="small-12 medium-6 cell">
            <FramedBox className='results'>
              {
                !noFilters
                  ? <Results results={this.filterData()} />
                  : <NoResults />
              }
            </FramedBox>
          </div>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => state.filtersReducer;

export default connect(mapStateToProps)(ContentComponent);

ContentComponent.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.string,
  type: PropTypes.string,
  brand: PropTypes.string,
};

ContentComponent.defaultProps = {
  colors: undefined,
  type: undefined,
  brand: undefined,
};
