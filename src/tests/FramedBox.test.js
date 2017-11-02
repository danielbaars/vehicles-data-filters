import React from 'react';
import renderer from 'react-test-renderer';

import FramedBox from '../components/FramedBox';

describe('FramedBox', () => {
  const component = <FramedBox className='class-name'><div>Some Child</div></FramedBox>;
  it('renders and matches our snapshot', () => {
    const sComponent = renderer.create(component);
    const tree = sComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
