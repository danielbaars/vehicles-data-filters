import React from 'react';
import renderer from 'react-test-renderer';

import testData from './testData';
import Results from '../components/Results';

describe('Results', () => {
  const component = <Results results={testData} />;
  it('renders and matches our snapshot', () => {
    const rComponent = renderer.create(component);
    const tree = rComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('contains the same number of vehicles components as the incoming data', () => {
    const data = testData.length;
    const vehicles = mount(component).find('.vehicle').length;
    expect(data).toEqual(vehicles);
  });
});
