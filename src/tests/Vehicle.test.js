import React from 'react';
import renderer from 'react-test-renderer';

import testData from './testData';
import Vehicle from '../components/Vehicle';

describe('Vehicle', () => {
  const component = <Vehicle value={testData[0]} />;
  it('renders and matches our snapshot', () => {
    const rComponent = renderer.create(component);
    const tree = rComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
