import React from 'react';
import renderer from 'react-test-renderer';

import Row from '../grid/Row';

describe('Row', () => {
  const component = <Row extraClasses='class-name'><div>Some Child</div></Row>;
  it('renders and matches our snapshot', () => {
    const rComponent = renderer.create(component);
    const tree = rComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
