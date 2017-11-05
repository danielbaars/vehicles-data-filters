import React from 'react';
import renderer from 'react-test-renderer';

import Column from '../grid/Column';

describe('Column', () => {
  const component = <Column><div>Some Child</div></Column>;
  it('renders and matches our snapshot', () => {
    const sComponent = renderer.create(component);
    const tree = sComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
