import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../components/Footer';

describe('Footer', () => {
  it('renders and matches our snapshot', () => {
    const component = renderer.create(<Footer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
