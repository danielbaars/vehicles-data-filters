import React from 'react';
import renderer from 'react-test-renderer';

import Masthead from '../components/Masthead';

describe('Masthead', () => {
  const component = <Masthead />;
  it('renders and matches our snapshot', () => {
    const rComponent = renderer.create(component);
    const tree = rComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
