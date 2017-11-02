import React from 'react';
import renderer from 'react-test-renderer';

import NoResults from '../components/NoResults';

describe('NoResults', () => {
  const component = <NoResults />;
  it('renders and matches our snapshot', () => {
    const rComponent = renderer.create(component);
    const tree = rComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
