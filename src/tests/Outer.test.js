import React from 'react';
import renderer from 'react-test-renderer';

import Outer from '../grid/Outer';

describe('Outer', () => {
  const component = <Outer className='class-name'><div>Some Child</div></Outer>;
  it('renders and matches our snapshot', () => {
    const sComponent = renderer.create(component);
    const tree = sComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
